<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class='text-center'>商品管理</h1>
      </v-col>
      <v-divider><!-- 分隔線  --></v-divider>
      <v-col cols="12">
        <v-btn color="green" @click="openDialog()">新增商品</v-btn>
      </v-col>
      <v-col cols="12">
        <!-- 上方排的排序列  -->
        <!-- 將所有東西跟下面綁定  -->
        <!-- 抓取資料並且顯示第幾頁、幾筆資料  -->
        <v-data-table-server
          v-model:items-per-page="tableItemsPerPage"
          v-model:sort-by="tableSortBy"
          v-model:page="tablePage"
          :items="tablemissions"
          :headers="tableHeaders"
          :loading="tableLoading"
          :items-length="tableItemsLength"
          :search="tableSearch"
          @update:items-per-page="tableLoadItems"
          @update:sort-by="tableLoadItems"
          @update:page="tableLoadItems"
          hover>
          <template #top>
            <v-text-field
            label="搜尋"
            append-icon="mdi-magnify"
            v-model="tableSearch"
            @click:append="tableApplySearch"
            @keydown.enter="tableApplySearch"></v-text-field>
          </template>
          <template #[`item.image`]="{item}">
            <v-img
              :src="item.image"
              height="50px"></v-img>
          </template>
          <template #[`item.sell`]="{item}">
            <v-icon
              icon="mdi-check"
              v-if="item.sell"></v-icon>
          </template>
          <template #[`item.edit`]="{item}">
            <v-btn
              icon="mdi-pencil"
              variant="text"
              color="gray"
              @click="openDialog(item)"></v-btn>
          </template>
        </v-data-table-server>
      </v-col>
    </v-row>
  </v-container>
  <v-dialog v-model="dialog" persistent width="500px">
  <v-form :disabled="isSubmitting" @submit.prevent="submit">
    <v-card>
      <v-card-title> {{dialogId === '' ? '新增任務' : '編輯任務'}}</v-card-title>
      <v-card-text>
        <v-text-field
          label="任務標題"
          v-model="title.value.value"
          :error-messages="title.errorMessage.value"></v-text-field>
        <v-text-field
          label="報酬/m"
          type="number" min="1"
          v-model="reward.value.value"
          :error-messages="reward.errorMessage.value"></v-text-field>
        <v-text-field
          label="需求人數"
          type="number" min="1"
          v-model="requiredPeople.value.value"
          :error-messages="requiredPeople.errorMessage.value"></v-text-field>
        <v-checkbox
          label="私人"
          v-model="isPublic.value.value"
          :error-messages="isPublic.errorMessage.value"
          ></v-checkbox>
        <v-textarea
          label="任務內容"
          v-model="description.value.value"
          :error-messages="description.errorMessage.value"
          ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red" :disabled="isSubmitting" @click="closeDialog">取消</v-btn>
        <v-btn color="green" type="submit" :loading="isSubmitting">送出</v-btn>
      </v-card-actions>
    </v-card>
  </v-form>
</v-dialog>
</template>

<script setup>
import { ref } from 'vue'
// 物件的資料格式驗證
import * as yup from 'yup'
// vue 的表單驗證工具
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

// 清除表單內的資料
const fileAgent = ref(null)

// 表單對話框的開啟狀態
const dialog = ref(false)
// 用來判斷要新增還是編輯
// 表單對話框正在編輯的商品 ID，空的話代表新增商品
const dialogId = ref('')

// 打開編輯對話框
const openDialog = (item) => {
  // 如果已經有東西，代表正在編輯
  // 自動將該商品的值代入
  if (item) {
    dialogId.value = item._id
    title.value.value = item.title
    reward.value.value = item.reward
    requiredPeople.value.value = item.requiredPeople
    isPublic.value.value = item.isPublic
    description.value.value = item.description
    // 如果 item 是空的，代表是新增
  } else {
    dialogId.value = ''
  }
  dialog.value = true
}

// 關閉編輯對話框
const closeDialog = () => {
  dialog.value = false
  resetForm()
  fileAgent.value.deleteFileRecord()
}

// 分類
const schema = yup.object({
  title: yup
    .string()
    .required('請輸入任務標題'),
  reward: yup
    .number()
    .typeError('報酬格式錯誤')
    .required('請輸入報酬')
    .min(1, '報酬需大於 0'),
  requiredPeople: yup
    .number()
    .typeError('需求人數格式錯誤')
    .required('請輸入需求人數')
    .min(1, '需求人數需大於 0'),
  isPublic: yup
    .boolean(),
  description: yup
    .string()
    .required('請輸入任務內容')
})

// { 處理表單送出, 檢查是否正在送出, 重設表單 }
const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    title: '',
    reward: 0,
    requiredPeople: '',
    isPublic: '',
    description: false
  }
})
const title = useField('title')
const reward = useField('reward')
const requiredPeople = useField('requiredPeople')
const isPublic = useField('isPublic')
const description = useField('description')

const fileRecords = ref([])

// 把 form 內的資料送出
const submit = handleSubmit(async (values) => {
  // 如果有錯誤就不執行
  if (fileRecords.value[0]?.error) return
  // 如果 idalogId 的 value 是空的，但是並沒有選擇任何檔案，也不執行
  if (dialogId.value === '' && fileRecords.value.length === 0) return
  try {
    // 建立 FormData 物件
    // 使用 fd.append(欄位, 值) 將資料放進去
    const fd = new FormData()
    // 跑迴圈，把 value 的每個值都放進 FormData() 內
    for (const key in values) {
      fd.append(key, values[key])
    }
    // 如果有東西才會 push 進去，沒有就給 undefined
    if (fileRecords.value.length > 0) {
      fd.append('image', fileRecords.value[0].file)
    }

    // 新增和編輯的路徑不同，因此要增加判斷
    if (dialogId.value === '') {
      await apiAuth.post('/missions', fd)
    } else {
      await apiAuth.patch('/missions/' + dialogId.value, fd)
    }

    createSnackbar({
      // 如果 value = 0 代表新增，反之則為編輯
      text: dialogId.value === '' ? '新增成功' : '編輯成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'green',
        location: 'bottom'
      }
    })
    closeDialog()
    tableApplySearch()
  } catch (error) {
    console.log(error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
})

// 表格
// 定義一頁幾個
const tableItemsPerPage = ref(10)
const tableSortBy = ref([
  // 表格順序, desc 倒序
  { key: 'createdAt', order: 'desc' }
])

// 表格頁碼。目前第幾頁
const tablePage = ref(1)

// 表格商品資料陣列
const tablemissions = ref([1])

// 設定表格欄位
// sortable 為是否能依據該項目排序
const tableHeaders = [
  { title: '圖片', align: 'center', sortable: false, key: 'image' },
  { title: '名稱', align: 'center', sortable: true, key: 'name' },
  { title: '價格', align: 'center', sortable: true, key: 'price' },
  // { title: '說明', align: 'center', sortable: true, key: 'description' }
  { title: '分類', align: 'center', sortable: true, key: 'category' },
  { title: '是否上架', align: 'center', sortable: true, key: 'sell' },
  { title: '編輯', align: 'center', sortable: false, key: 'edit' }
]
// 表格載入狀態
const tableLoading = ref(true)

// 表格全部資料數
const tableItemsLength = ref(0)

// 表格搜尋文字
const tableSearch = ref('')

// 表格載入資料，對後端發請求
const tableLoadItems = async () => {
  // 請求之前先設定表格為載入中
  tableLoading.value = true
  try {
    const { data } = await apiAuth.get('/missions/all', {
      params: {
        page: tablePage.value,
        itemsPerPage: tableItemsPerPage.value,
        sortBy: tableSortBy.value[0]?.key || 'createdAt',
        sortOrder: tableSortBy.value[0]?.order === 'asc' ? 1 : -1,
        search: tableSearch.value
      }
    })
    tablemissions.value.splice(0, tablemissions.value.length, ...data.result.data)
    tableItemsLength.value = data.result.total
  } catch (error) {
    console.log(error)
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'red',
        location: 'bottom'
      }
    })
  }
  // 請求完成後把載入中關閉
  tableLoading.value = false
}
tableLoadItems()

// 表格套用搜尋
const tableApplySearch = () => {
  tablePage.value = 1
  tableLoadItems()
}
</script>
