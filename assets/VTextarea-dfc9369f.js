import{m as se,V as K}from"./VCheckboxBtn-ce21a40e.js";import{p as q,ay as Q,az as ie,g as W,D as X,aA as Y,aB as re,o as C,u as Z,aC as ee,aD as R,c as n,G as k,aE as ce,aF as de,x as y,s as fe,H as ve,A as me,z as w,B as xe,aG as he,aH as ge,a5 as E,T as L,aI as Ve,aJ as ye,aK as we,aL as Ce,au as $,aM as ke,v as Pe,y as be}from"./index-5fdb30a4.js";const Fe=q({...Q(),...ie(se(),["inline"])},"VCheckbox"),Ae=W()({name:"VCheckbox",inheritAttrs:!1,props:Fe(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,B){let{attrs:h,slots:g}=B;const a=X(e,"modelValue"),{isFocused:o,focus:c,blur:A}=Y(e),S=re(),H=C(()=>e.id||`checkbox-${S}`);return Z(()=>{const[M,z]=ee(h),P=R.filterProps(e),d=K.filterProps(e);return n(R,k({class:["v-checkbox",e.class]},M,P,{modelValue:a.value,"onUpdate:modelValue":f=>a.value=f,id:H.value,focused:o.value,style:e.style}),{...g,default:f=>{let{id:v,messagesId:T,isDisabled:V,isReadonly:D}=f;return n(K,k(d,{id:v.value,"aria-describedby":T.value,disabled:V.value,readonly:D.value},z,{modelValue:a.value,"onUpdate:modelValue":G=>a.value=G,onFocus:c,onBlur:A}),g)}})}),{}}});const Ie=q({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Q(),...ce()},"VTextarea"),Se=W()({name:"VTextarea",directives:{Intersect:de},inheritAttrs:!1,props:Ie(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,B){let{attrs:h,emit:g,slots:a}=B;const o=X(e,"modelValue"),{isFocused:c,focus:A,blur:S}=Y(e),H=C(()=>typeof e.counterValue=="function"?e.counterValue(o.value):(o.value||"").toString().length),M=C(()=>{if(h.maxlength)return h.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function z(t,u){var l,s;!e.autofocus||!t||(s=(l=u[0].target)==null?void 0:l.focus)==null||s.call(l)}const P=y(),d=y(),f=fe(""),v=y(),T=C(()=>e.persistentPlaceholder||c.value||e.active);function V(){var t;v.value!==document.activeElement&&((t=v.value)==null||t.focus()),c.value||A()}function D(t){V(),g("click:control",t)}function G(t){g("mousedown:control",t)}function te(t){t.stopPropagation(),V(),$(()=>{o.value="",ke(e["onClick:clear"],t)})}function ae(t){var l;const u=t.target;if(o.value=u.value,(l=e.modelModifiers)!=null&&l.trim){const s=[u.selectionStart,u.selectionEnd];$(()=>{u.selectionStart=s[0],u.selectionEnd=s[1]})}}const m=y(),b=y(+e.rows),N=C(()=>["plain","underlined"].includes(e.variant));ve(()=>{e.autoGrow||(b.value=+e.rows)});function x(){e.autoGrow&&$(()=>{if(!m.value||!d.value)return;const t=getComputedStyle(m.value),u=getComputedStyle(d.value.$el),l=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),s=m.value.scrollHeight,F=parseFloat(t.lineHeight),U=Math.max(parseFloat(e.rows)*F+l,parseFloat(u.getPropertyValue("--v-input-control-height"))),_=parseFloat(e.maxRows)*F+l||1/0,r=be(s??0,U,_);b.value=Math.floor((r-l)/F),f.value=Pe(r)})}me(x),w(o,x),w(()=>e.rows,x),w(()=>e.maxRows,x),w(()=>e.density,x);let i;return w(m,t=>{t?(i=new ResizeObserver(x),i.observe(m.value)):i==null||i.disconnect()}),xe(()=>{i==null||i.disconnect()}),Z(()=>{const t=!!(a.counter||e.counter||e.counterValue),u=!!(t||a.details),[l,s]=ee(h),{modelValue:F,...U}=R.filterProps(e),_=he(e);return n(R,k({ref:P,modelValue:o.value,"onUpdate:modelValue":r=>o.value=r,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":N.value},e.class],style:e.style},l,U,{centerAffix:b.value===1&&!N.value,focused:c.value}),{...a,default:r=>{let{id:I,isDisabled:O,isDirty:j,isReadonly:le,isValid:ne}=r;return n(ge,k({ref:d,style:{"--v-textarea-control-height":f.value},onClick:D,onMousedown:G,"onClick:clear":te,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},_,{id:I.value,active:T.value||j.value,centerAffix:b.value===1&&!N.value,dirty:j.value||e.dirty,disabled:O.value,focused:c.value,error:ne.value===!1}),{...a,default:oe=>{let{props:{class:p,...J}}=oe;return n(E,null,[e.prefix&&n("span",{class:"v-text-field__prefix"},[e.prefix]),L(n("textarea",k({ref:v,class:p,value:o.value,onInput:ae,autofocus:e.autofocus,readonly:le.value,disabled:O.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:V,onBlur:S},J,s),null),[[Ve("intersect"),{handler:z},null,{once:!0}]]),e.autoGrow&&L(n("textarea",{class:[p,"v-textarea__sizer"],id:`${J.id}-sizer`,"onUpdate:modelValue":ue=>o.value=ue,ref:m,readonly:!0,"aria-hidden":"true"},null),[[ye,o.value]]),e.suffix&&n("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?r=>{var I;return n(E,null,[(I=a.details)==null?void 0:I.call(a,r),t&&n(E,null,[n("span",null,null),n(we,{active:e.persistentCounter||c.value,value:H.value,max:M.value},a.counter)])])}:void 0})}),Ce({},P,d,v)}});export{Ae as V,Se as a};
