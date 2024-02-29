import{Z as R,Y as j,X as J,x as M,$ as _,a0 as z,a2 as D,a3 as o,ab as E,c as s,a7 as e,af as N,ae as P,ah as O,ag as i,T as X,U as Y,ai as Z,a9 as G,J as H,a8 as I}from"./index-54e8280a.js";import{v as K}from"./index-8b68ea82.js";import{c as L,a as n,b as Q,e as W,u as ee,d as u,V as ae}from"./index.esm-33e2fde0.js";import{V as q,a as U}from"./VRow-2450a831.js";import{V as le}from"./VCheckbox-5a5a7d8b.js";import{V as se}from"./VTextarea-ecef9e80.js";import"./VCheckboxBtn-1dbd4ffe.js";const pe={__name:"JoinUs",setup(oe){const B=R(),{apiAuth:k}=E(),C=j(),h=J(),A=M(null),F=L({account:n().required("請輸入帳號").min(4,"帳號長度不符").max(20,"帳號長度不符"),code:n().required("請輸入幹員代號").min(1,"幹員代號長度不符").max(20,"幹員代號長度不符"),email:n().required("信箱為必填欄位").test("isEmail","信箱格式錯誤",r=>K.isEmail(r)),password:n().required("密碼為必填欄位").min(4,"密碼長度不符").max(20,"密碼長度不符"),passwordConfirm:n().required("密碼為必填欄位").min(4,"密碼長度不符").max(20,"密碼長度不符").oneOf([Q("password")],"密碼不一致"),experience:n().required("請輸入工作經驗"),skills:n().required("請輸入幹員專長"),pass:W()}),{handleSubmit:T,isSubmitting:S}=ee({validationSchema:F,initialValues:{account:"",code:"",email:"",password:"",experience:"",skills:"",pass:!1}}),c=u("account"),g=u("code"),v=u("email"),V=u("password"),f=u("passwordConfirm"),x=u("experience"),w=u("skills"),b=u("pass"),m=M([]),y=M([]),$=T(async r=>{var a,d,l;if(!((a=m.value[0])!=null&&a.error)&&m.value.length!==0)try{const t=new FormData;for(const p in r)t.append(p,r[p]);m.value.length>0&&t.append("image",m.value[0].file),await k.post("/mailmans",t),await k.post("/users",{account:r.account,email:r.email,password:r.password,role:2}),C({text:"申請成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),h.push("/login")}catch(t){console.log(t);const p=((l=(d=t==null?void 0:t.response)==null?void 0:d.data)==null?void 0:l.message)||"發生錯誤，請稍後再試";C({text:p,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(r,a)=>{const d=_("vue-file-agent");return z(),D(q,{class:"bg-c1 align-center justify-center h-100"},{default:o(()=>[s(U,{cols:"12"},{default:o(()=>[s(ae,{disabled:e(S),onSubmit:N(e($),["prevent"])},{default:o(()=>[s(P,{class:"pa-3 ma-auto",width:"600",title:"Join Us"},{default:o(()=>[s(O,null,{default:o(()=>[s(q,null,{default:o(()=>[s(U,{cols:"5"},{default:o(()=>[s(d,{class:"ma-2",modelValue:m.value,"onUpdate:modelValue":a[0]||(a[0]=l=>m.value=l),rawModelValue:y.value,"onUpdate:rawModelValue":a[1]||(a[1]=l=>y.value=l),accept:"image/jpeg,image/png",deletable:"","error-text":{type:"檔案格式不支援",size:"檔案超過 1MB 大小限制"},"help-text":"選擇檔案或拖曳到這裡","max-files":1,"max-size":"1MB",ref_key:"fileAgent",ref:A},null,8,["modelValue","rawModelValue"])]),_:1}),s(U,{class:"d-flex justify-center align-center flex-column"},{default:o(()=>[s(i,{class:"w-100",label:"帳號",counter:"",minlength:"4",maxlength:"20",modelValue:e(c).value.value,"onUpdate:modelValue":a[2]||(a[2]=l=>e(c).value.value=l),"error-messages":e(c).errorMessage.value},null,8,["modelValue","error-messages"]),s(i,{class:"w-100",label:"幹員代號",modelValue:e(g).value.value,"onUpdate:modelValue":a[3]||(a[3]=l=>e(g).value.value=l),"error-messages":e(g).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),s(i,{label:"信箱",modelValue:e(v).value.value,"onUpdate:modelValue":a[4]||(a[4]=l=>e(v).value.value=l),"error-messages":e(v).errorMessage.value},null,8,["modelValue","error-messages"]),s(i,{label:"密碼",modelValue:e(V).value.value,"onUpdate:modelValue":a[5]||(a[5]=l=>e(V).value.value=l),counter:"",minlength:"4",maxlength:"20","error-messages":e(V).errorMessage.value},null,8,["modelValue","error-messages"]),s(i,{label:"確認密碼",modelValue:e(f).value.value,"onUpdate:modelValue":a[6]||(a[6]=l=>e(f).value.value=l),counter:"",minlength:"4",maxlength:"20","error-messages":e(f).errorMessage.value},null,8,["modelValue","error-messages"]),s(i,{label:"幹員專長",modelValue:e(w).value.value,"onUpdate:modelValue":a[7]||(a[7]=l=>e(w).value.value=l),"error-messages":e(w).errorMessage.value},null,8,["modelValue","error-messages"]),X(s(le,{label:"是否通過幹員考核",modelValue:e(b).value.value,"onUpdate:modelValue":a[8]||(a[8]=l=>e(b).value.value=l),"error-messages":e(b).errorMessage.value},null,8,["modelValue","error-messages"]),[[Y,e(B).isAdmin]]),s(se,{label:"工作經驗",modelValue:e(x).value.value,"onUpdate:modelValue":a[9]||(a[9]=l=>e(x).value.value=l),"error-messages":e(x).errorMessage.value},null,8,["modelValue","error-messages"])]),_:1}),s(Z,null,{default:o(()=>[s(G),s(H,{color:"green",type:"submit",loading:e(S)},{default:o(()=>[I("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1})]),_:1})}}};export{pe as default};
