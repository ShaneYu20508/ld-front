import{Y as f,x as V,A as k,a0 as l,a2 as y,a3 as e,ab as h,c as s,a8 as b,aa as c,af as d,a1 as i,a6 as w,a5 as x}from"./index-5fdb30a4.js";import{V as A}from"./VContainer-081fdd0a.js";import{V as u}from"./VCol-8836c20f.js";import{V as g}from"./VDataTable-02535af6.js";import{V as B}from"./VRow-75030038.js";import"./VList-02a1dc23.js";import"./ssrBoot-424ff488.js";import"./VDivider-9e522767.js";import"./VCheckboxBtn-ce21a40e.js";const C=d("h1",null,"訂單",-1),O={__name:"OrdersView",setup(v){const{apiAuth:m}=h(),p=f(),n=V([]),_=[{title:"訂單編號",key:"_id"},{title:"帳號",key:"user.account"},{title:"日期",key:"createdAt"},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:a=>a.cart.reduce((r,t)=>r+t.quantity*t.product.price,0)}];return k(async()=>{var a,r;try{const{data:t}=await m.get("/orders/all");n.value.push(...t.result)}catch(t){const o=((r=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";p({text:o,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(a,r)=>(l(),y(A,null,{default:e(()=>[s(B,null,{default:e(()=>[s(u,{cols:"12"},{default:e(()=>[C]),_:1}),s(u,{cols:"12"},{default:e(()=>[s(g,{items:n.value,headers:_},{"item.createdAt":e(({item:t})=>[b(c(new Date(t.createdAt).toLocaleString()),1)]),"item.cart":e(({item:t})=>[d("ul",null,[(l(!0),i(x,null,w(t.cart,o=>(l(),i("li",{key:o._id}," | "+c(o.product.name)+" * "+c(o.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}};export{O as default};
