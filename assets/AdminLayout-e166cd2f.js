import{Z as p,o as d,$ as _,a0 as n,a1 as r,c as t,a3 as a,a5 as s,a7 as f,a6 as V}from"./index-54e8280a.js";import{V as v}from"./VNavigationDrawer-3d28975e.js";import{V as x}from"./VMain-6deeec45.js";import{b as c,V as i}from"./VList-beea2cba.js";import{V as C}from"./VDivider-50ab0508.js";import"./ssrBoot-15bd7468.js";const A={__name:"AdminLayout",setup(D){const o=p(),l=[{to:"/admin/MailmanPass",text:"幹員管理",icon:"mdi-account"},{to:"/",text:"回首頁",icon:"mdi-home"}],u=d(()=>`https://source.boringavatars.com/beam/120/${o.account}?colors=4EB3DE,8DE0A6,FCF09F,F27C7C,DE528C`);return(E,F)=>{const m=_("RouterView");return n(),r(s,null,[t(v,{permanent:""},{default:a(()=>[t(c,null,{default:a(()=>[t(i,{"prepend-avatar":u.value,title:f(o).account},null,8,["prepend-avatar","title"])]),_:1}),t(C),t(c,null,{default:a(()=>[(n(),r(s,null,V(l,e=>t(i,{key:e.to,to:e.to,title:e.text,"prepend-icon":e.icon},null,8,["to","title","prepend-icon"])),64))]),_:1})]),_:1}),t(x,null,{default:a(()=>[t(m)]),_:1})],64)}}};export{A as default};
