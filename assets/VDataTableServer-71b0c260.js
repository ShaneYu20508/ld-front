import{m as X,b as Y,c as Z,d as $,e as ee,f as ae,g as te,u as oe,p as re,h as le,i as se,j as de,k as ue,l as ne,n as ie,o as f,q as x,r as V,s as w}from"./VDataTable-fa46f2c4.js";import{p as ce,g as ge,o as g,t as o,aO as me,q as ve,u as pe,c as r,a5 as be,G as m}from"./index-607a8a67.js";const Pe=ce({itemsLength:{type:[Number,String],required:!0},...X(),...Y(),...Z()},"VDataTableServer"),Se=ge()({name:"VDataTableServer",props:Pe(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:expanded":e=>!0,"update:groupBy":e=>!0},setup(e,B){let{attrs:I,slots:a}=B;const{groupBy:d}=$(e),{sortBy:l,multiSort:G,mustSort:k}=ee(e),{page:u,itemsPerPage:i}=ae(e),R=g(()=>parseInt(e.itemsLength,10)),{columns:v,headers:E}=te(e,{groupBy:d,showSelect:o(e,"showSelect"),showExpand:o(e,"showExpand")}),{items:n}=oe(e,v),{toggleSort:p}=re({sortBy:l,multiSort:G,mustSort:k,page:u}),{opened:F,isGroupOpen:H,toggleGroup:N,extractRows:_}=le({groupBy:d,sortBy:l}),{pageCount:q,setItemsPerPage:C}=se({page:u,itemsPerPage:i,itemsLength:R}),{flatItems:b}=de(n,d,F),{isSelected:L,select:O,selectAll:j,toggleSelect:A,someSelected:W,allSelected:z}=ue(e,{allItems:n,currentPage:n}),{isExpanded:J,toggleExpand:K}=ne(e),P=g(()=>_(n.value));ie({page:u,itemsPerPage:i,sortBy:l,groupBy:d,search:o(e,"search")}),me("v-data-table",{toggleSort:p,sortBy:l}),ve({VDataTableRows:{hideNoData:o(e,"hideNoData"),noDataText:o(e,"noDataText"),loading:o(e,"loading"),loadingText:o(e,"loadingText")}});const t=g(()=>({page:u.value,itemsPerPage:i.value,sortBy:l.value,pageCount:q.value,toggleSort:p,setItemsPerPage:C,someSelected:W.value,allSelected:z.value,isSelected:L,select:O,selectAll:j,toggleSelect:A,isExpanded:J,toggleExpand:K,isGroupOpen:H,toggleGroup:N,items:P.value.map(c=>c.raw),internalItems:P.value,groupedItems:b.value,columns:v.value,headers:E.value}));pe(()=>{const c=f.filterProps(e),M=x.filterProps(e),Q=V.filterProps(e),U=w.filterProps(e);return r(w,m({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},U),{top:()=>{var s;return(s=a.top)==null?void 0:s.call(a,t.value)},default:()=>{var s,y,T,S,h,D;return a.default?a.default(t.value):r(be,null,[(s=a.colgroup)==null?void 0:s.call(a,t.value),r("thead",{class:"v-data-table__thead",role:"rowgroup"},[r(x,m(M,{sticky:e.fixedHeader}),a)]),(y=a.thead)==null?void 0:y.call(a,t.value),r("tbody",{class:"v-data-table__tbody",role:"rowgroup"},[(T=a["body.prepend"])==null?void 0:T.call(a,t.value),a.body?a.body(t.value):r(V,m(I,Q,{items:b.value}),a),(S=a["body.append"])==null?void 0:S.call(a,t.value)]),(h=a.tbody)==null?void 0:h.call(a,t.value),(D=a.tfoot)==null?void 0:D.call(a,t.value)])},bottom:()=>a.bottom?a.bottom(t.value):r(f,c,{prepend:a["footer.prepend"]})})})}});export{Se as V};