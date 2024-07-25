import{Y as y,x as s,a0 as V,a2 as B,a3 as o,c as l,V as _,J as C,ad as P,ab as A}from"./index-7c4136cb.js";import{V as w}from"./VContainer-10172ae1.js";import{a as x,V as S}from"./VRow-8cf118d2.js";import{V as I}from"./VDivider-6ca50d70.js";import{a as L}from"./VDataTable-59b18920.js";import"./VList-9c4057f2.js";import"./ssrBoot-a11e10f2.js";import"./VCheckboxBtn-ebe4b3cd.js";const U=P("h1",null,"任務列表",-1),H={__name:"MissionList",setup(D){const{apiAuth:b}=A(),f=y(),c=s(10),r=s([{key:"createdAt",order:"desc"}]),u=s(1),m=s([]),p=s(!0),g=s(0),v=s(""),h=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"任務標題",align:"center",sortable:!0,key:"title"},{title:"任務報酬/m",align:"center",sortable:!1,key:"reward"},{title:"任務內容",align:"center",sortable:!1,key:"description"},{title:"發布日期",align:"center",sortable:!1,key:"createdAt"},{title:"接受任務",align:"center",sortable:!1,key:"accept"}],n=async()=>{var i,t,e,d;p.value=!0;try{const{data:a}=await b.get("/missions",{headers:{Authorization:"Bearer YOUR_ACCESS_TOKEN"},params:{page:u.value,itemsPerPage:c.value,sortBy:((i=r.value[0])==null?void 0:i.key)||"createdAt",sortOrder:((t=r.value[0])==null?void 0:t.order)==="asc"?1:-1,search:v.value}});m.value.splice(0,m.value.length,...a.result.data),g.value=a.result.total}catch(a){console.log(a);const k=((d=(e=a==null?void 0:a.response)==null?void 0:e.data)==null?void 0:d.message)||"發生錯誤，請稍後再試";f({text:k,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}p.value=!1};return n(),(i,t)=>(V(),B(w,null,{default:o(()=>[l(S,null,{default:o(()=>[l(x,{cols:"12"},{default:o(()=>[U]),_:1}),l(I),l(L,{"items-per-page":c.value,"onUpdate:itemsPerPage":[t[0]||(t[0]=e=>c.value=e),n],"sort-by":r.value,"onUpdate:sortBy":[t[1]||(t[1]=e=>r.value=e),n],page:u.value,"onUpdate:page":[t[2]||(t[2]=e=>u.value=e),n],items:m.value,headers:h,loading:p.value,"items-length":g.value,search:v.value,hover:""},{"item.image":o(({item:e})=>[l(_,{src:e.image,height:"60"},null,8,["src"])]),"item.accept":o(({item:e})=>[l(C,{icon:"mdi-check",variant:"text",color:"blue",onClick:d=>i.openDialog(e)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1}))}};export{H as default};