import{p as A,I as x,G as Ie,m as de,l as P,v as $,g as K,d,b as xe,ae as Ae,H as ce,t as V,q as t,s as ne,r as J,a9 as ve,D as w,y as me,C as fe,F as ye,i as Pe,a5 as q,af as pe,S as Be,L as be,U as W,ac as X,ag as Y,$ as De,V as D,W as G,X as c,a2 as Z,ah as T,n as Te,Y as Le,Z as Fe,a1 as L,ai as $e,aj as we}from"./index-dac2f3da.js";import{V as F,a as k,m as Re,u as Ue}from"./VRow-747a6016.js";import{m as R,u as p,b as Ne,a as je,c as Ge}from"./VResponsive-3eaa87ff.js";import{b as Q,R as ge,p as ee,E as Ee,j as Ce,u as Oe,q as He,I as Me,G as qe,J as oe,o as ue,V as z,m as Je,c as ze,x as Ke,y as We,d as Xe,e as Ye,f as Ze,h as Qe,i as ea,k as aa,z as ta,A as la,l as na,g as oa,K as ua,L as sa,n as ia}from"./VInput-44379b90.js";import{V as Ve}from"./VContainer-c64d85d9.js";import{c as ae}from"./createSimpleFunctional-77ed35d2.js";const ke=Symbol.for("vuetify:selection-control-group"),he=A({color:String,disabled:{type:Boolean,default:null},defaultsTarget:String,error:Boolean,id:String,inline:Boolean,falseIcon:x,trueIcon:x,ripple:{type:Boolean,default:!0},multiple:{type:Boolean,default:null},name:String,readonly:{type:Boolean,default:null},modelValue:null,type:String,valueComparator:{type:Function,default:Ie},...R(),...Q(),...de()},"SelectionControlGroup"),ra=A({...he({defaultsTarget:"VSelectionControl"})},"VSelectionControlGroup");P()({name:"VSelectionControlGroup",props:ra(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:n}=s;const a=$(e,"modelValue"),o=K(),i=d(()=>e.id||`v-selection-control-group-${o}`),v=d(()=>e.name||i.value),u=new Set;return xe(ke,{modelValue:a,forceUpdate:()=>{u.forEach(l=>l())},onForceUpdate:l=>{u.add(l),Ae(()=>{u.delete(l)})}}),ce({[e.defaultsTarget]:{color:V(e,"color"),disabled:V(e,"disabled"),density:V(e,"density"),error:V(e,"error"),inline:V(e,"inline"),modelValue:a,multiple:d(()=>!!e.multiple||e.multiple==null&&Array.isArray(a.value)),name:v,falseIcon:V(e,"falseIcon"),trueIcon:V(e,"trueIcon"),readonly:V(e,"readonly"),ripple:V(e,"ripple"),type:V(e,"type"),valueComparator:V(e,"valueComparator")}}),p(()=>{var l;return t("div",{class:["v-selection-control-group",{"v-selection-control-group--inline":e.inline},e.class],style:e.style,role:e.type==="radio"?"radiogroup":void 0},[(l=n.default)==null?void 0:l.call(n)])}),{}}});const _e=A({label:String,baseColor:String,trueValue:null,falseValue:null,value:null,...R(),...he()},"VSelectionControl");function da(e){const s=Pe(ke,void 0),{densityClasses:n}=Ce(e),a=$(e,"modelValue"),o=d(()=>e.trueValue!==void 0?e.trueValue:e.value!==void 0?e.value:!0),i=d(()=>e.falseValue!==void 0?e.falseValue:!1),v=d(()=>!!e.multiple||e.multiple==null&&Array.isArray(a.value)),u=d({get(){const f=s?s.modelValue.value:a.value;return v.value?q(f).some(y=>e.valueComparator(y,o.value)):e.valueComparator(f,o.value)},set(f){if(e.readonly)return;const y=f?o.value:i.value;let g=y;v.value&&(g=f?[...q(a.value),y]:q(a.value).filter(C=>!e.valueComparator(C,o.value))),s?s.modelValue.value=g:a.value=g}}),{textColorClasses:l,textColorStyles:m}=Oe(d(()=>{if(!(e.error||e.disabled))return u.value?e.color:e.baseColor})),{backgroundColorClasses:r,backgroundColorStyles:b}=He(d(()=>u.value&&!e.error&&!e.disabled?e.color:void 0)),h=d(()=>u.value?e.trueIcon:e.falseIcon);return{group:s,densityClasses:n,trueValue:o,falseValue:i,model:u,textColorClasses:l,textColorStyles:m,backgroundColorClasses:r,backgroundColorStyles:b,icon:h}}const se=P()({name:"VSelectionControl",directives:{Ripple:ge},inheritAttrs:!1,props:_e(),emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:n,slots:a}=s;const{group:o,densityClasses:i,icon:v,model:u,textColorClasses:l,textColorStyles:m,backgroundColorClasses:r,backgroundColorStyles:b,trueValue:h}=da(e),f=K(),y=d(()=>e.id||`input-${f}`),g=ne(!1),C=ne(!1),S=J();o==null||o.onForceUpdate(()=>{S.value&&(S.value.checked=u.value)});function _(I){g.value=!0,pe(I.target,":focus-visible")!==!1&&(C.value=!0)}function B(){g.value=!1,C.value=!1}function E(I){e.readonly&&o&&Be(()=>o.forceUpdate()),u.value=I.target.checked}return p(()=>{var N,j;const I=a.label?a.label({label:e.label,props:{for:y.value}}):e.label,[O,H]=ve(n),U=t("input",w({ref:S,checked:u.value,disabled:!!(e.readonly||e.disabled),id:y.value,onBlur:B,onFocus:_,onInput:E,"aria-disabled":!!(e.readonly||e.disabled),type:e.type,value:h.value,name:e.name,"aria-checked":e.type==="checkbox"?u.value:void 0},H),null);return t("div",w({class:["v-selection-control",{"v-selection-control--dirty":u.value,"v-selection-control--disabled":e.disabled,"v-selection-control--error":e.error,"v-selection-control--focused":g.value,"v-selection-control--focus-visible":C.value,"v-selection-control--inline":e.inline},i.value,e.class]},O,{style:e.style}),[t("div",{class:["v-selection-control__wrapper",l.value],style:m.value},[(N=a.default)==null?void 0:N.call(a,{backgroundColorClasses:r,backgroundColorStyles:b}),me(t("div",{class:["v-selection-control__input"]},[((j=a.input)==null?void 0:j.call(a,{model:u,textColorClasses:l,textColorStyles:m,backgroundColorClasses:r,backgroundColorStyles:b,inputNode:U,icon:v.value,props:{onFocus:_,onBlur:B,id:y.value}}))??t(ye,null,[v.value&&t(ee,{key:"icon",icon:v.value},null),U])]),[[fe("ripple"),e.ripple&&[!e.disabled&&!e.readonly,null,["center","circle"]]]])]),I&&t(Ee,{for:y.value,clickable:!0,onClick:M=>M.stopPropagation()},{default:()=>[I]})])}),{isFocused:g,input:S}}}),Se=A({indeterminate:Boolean,indeterminateIcon:{type:x,default:"$checkboxIndeterminate"},..._e({falseIcon:"$checkboxOff",trueIcon:"$checkboxOn"})},"VCheckboxBtn"),ie=P()({name:"VCheckboxBtn",props:Se(),emits:{"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,s){let{slots:n}=s;const a=$(e,"indeterminate"),o=$(e,"modelValue");function i(l){a.value&&(a.value=!1)}const v=d(()=>a.value?e.indeterminateIcon:e.falseIcon),u=d(()=>a.value?e.indeterminateIcon:e.trueIcon);return p(()=>{const l=be(se.filterProps(e),["modelValue"]);return t(se,w(l,{modelValue:o.value,"onUpdate:modelValue":[m=>o.value=m,i],class:["v-checkbox-btn",e.class],style:e.style,type:"checkbox",falseIcon:v.value,trueIcon:u.value,"aria-checked":a.value?"mixed":void 0}),n)}),{}}}),ca=A({...Me(),...be(Se(),["inline"])},"VCheckbox"),re=P()({name:"VCheckbox",inheritAttrs:!1,props:ca(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,s){let{attrs:n,slots:a}=s;const o=$(e,"modelValue"),{isFocused:i,focus:v,blur:u}=qe(e),l=K(),m=d(()=>e.id||`checkbox-${l}`);return p(()=>{const[r,b]=ve(n),h=oe.filterProps(e),f=ie.filterProps(e);return t(oe,w({class:["v-checkbox",e.class]},r,h,{modelValue:o.value,"onUpdate:modelValue":y=>o.value=y,id:m.value,focused:i.value,style:e.style}),{...a,default:y=>{let{id:g,messagesId:C,isDisabled:S,isReadonly:_}=y;return t(ie,w(f,{id:g.value,"aria-describedby":C.value,disabled:S.value,readonly:_.value},b,{modelValue:o.value,"onUpdate:modelValue":B=>o.value=B,onFocus:v,onBlur:u}),a)}})}),{}}}),va={class:"text-h4"},ma=W({__name:"RessourceDiff",setup(e){const s=X(),{selectedChange:n}=Y(s),a=d(()=>n.value.change),o=J(!1),i=J(!0),v=d(()=>JSON.stringify(a.value.before,null,2)),u=d(()=>JSON.stringify(a.value.after,null,2)),l=d(()=>i.value?"split":"unified"),m=d(()=>a.value.actions.join(", "));return(r,b)=>{const h=De("Diff");return D(),G(F,null,{default:c(()=>[t(k,{cols:"12"},{default:c(()=>[t(F,{justify:"center"},{default:c(()=>[t(k,{cols:"auto"},{default:c(()=>[t(re,{modelValue:o.value,"onUpdate:modelValue":b[0]||(b[0]=f=>o.value=f),label:"Hide unchanged Lines"},null,8,["modelValue"])]),_:1}),t(k,{cols:"auto"},{default:c(()=>[t(re,{modelValue:i.value,"onUpdate:modelValue":b[1]||(b[1]=f=>i.value=f),label:"Side by side diff"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(k,{cols:"12"},{default:c(()=>[t(F,{justify:"center"},{default:c(()=>[t(k,{cols:"auto"},{default:c(()=>[Z("div",va,T(m.value),1)]),_:1}),t(k,{cols:"12"},{default:c(()=>[t(h,{class:"diff",mode:l.value,folding:o.value,language:"json",prev:v.value,current:u.value},null,8,["mode","folding","prev","current"])]),_:1})]),_:1})]),_:1})]),_:1})}}});const fa=P()({name:"VCardActions",props:R(),setup(e,s){let{slots:n}=s;return ce({VBtn:{slim:!0,variant:"text"}}),p(()=>{var a;return t("div",{class:["v-card-actions",e.class],style:e.style},[(a=n.default)==null?void 0:a.call(n)])}),{}}}),ya=ae("v-card-subtitle"),ba=ae("v-card-title"),ga=A({appendAvatar:String,appendIcon:x,prependAvatar:String,prependIcon:x,subtitle:[String,Number],title:[String,Number],...R(),...Q()},"VCardItem"),Ca=P()({name:"VCardItem",props:ga(),setup(e,s){let{slots:n}=s;return p(()=>{var m;const a=!!(e.prependAvatar||e.prependIcon),o=!!(a||n.prepend),i=!!(e.appendAvatar||e.appendIcon),v=!!(i||n.append),u=!!(e.title!=null||n.title),l=!!(e.subtitle!=null||n.subtitle);return t("div",{class:["v-card-item",e.class],style:e.style},[o&&t("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?t(z,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,icon:e.prependIcon,image:e.prependAvatar}}},n.prepend):a&&t(ue,{key:"prepend-avatar",density:e.density,icon:e.prependIcon,image:e.prependAvatar},null)]),t("div",{class:"v-card-item__content"},[u&&t(ba,{key:"title"},{default:()=>{var r;return[((r=n.title)==null?void 0:r.call(n))??e.title]}}),l&&t(ya,{key:"subtitle"},{default:()=>{var r;return[((r=n.subtitle)==null?void 0:r.call(n))??e.subtitle]}}),(m=n.default)==null?void 0:m.call(n)]),v&&t("div",{key:"append",class:"v-card-item__append"},[n.append?t(z,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,icon:e.appendIcon,image:e.appendAvatar}}},n.append):i&&t(ue,{key:"append-avatar",density:e.density,icon:e.appendIcon,image:e.appendAvatar},null)])])}),{}}}),Va=ae("v-card-text"),ka=A({appendAvatar:String,appendIcon:x,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:x,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...Je(),...R(),...Q(),...Ne(),...ze(),...Ke(),...We(),...Re(),...Xe(),...Ye(),...je(),...de(),...Ze({variant:"elevated"})},"VCard"),ha=P()({name:"VCard",directives:{Ripple:ge},props:ka(),setup(e,s){let{attrs:n,slots:a}=s;const{themeClasses:o}=Te(e),{borderClasses:i}=Qe(e),{colorClasses:v,colorStyles:u,variantClasses:l}=ea(e),{densityClasses:m}=Ce(e),{dimensionStyles:r}=Ge(e),{elevationClasses:b}=aa(e),{loaderClasses:h}=ta(e),{locationStyles:f}=la(e),{positionClasses:y}=Ue(e),{roundedClasses:g}=na(e),C=oa(e,n),S=d(()=>e.link!==!1&&C.isLink.value),_=d(()=>!e.disabled&&e.link!==!1&&(e.link||C.isClickable.value));return p(()=>{const B=S.value?"a":e.tag,E=!!(a.title||e.title!=null),I=!!(a.subtitle||e.subtitle!=null),O=E||I,H=!!(a.append||e.appendAvatar||e.appendIcon),U=!!(a.prepend||e.prependAvatar||e.prependIcon),N=!!(a.image||e.image),j=O||U||H,M=!!(a.text||e.text!=null);return me(t(B,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":_.value},o.value,i.value,v.value,m.value,b.value,h.value,y.value,g.value,l.value,e.class],style:[u.value,r.value,f.value,e.style],href:C.href.value,onClick:_.value&&C.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var te;return[N&&t("div",{key:"image",class:"v-card__image"},[a.image?t(z,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):t(ua,{key:"image-img",cover:!0,src:e.image},null)]),t(sa,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),j&&t(Ca,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),M&&t(Va,{key:"text"},{default:()=>{var le;return[((le=a.text)==null?void 0:le.call(a))??e.text]}}),(te=a.default)==null?void 0:te.call(a),a.actions&&t(fa,null,{default:a.actions}),ia(_.value,"v-card")]}}),[[fe("ripple"),_.value&&e.ripple]])}),{}}}),_a=W({__name:"ChangeCards",setup(e){const s=X(),{selectedChange:n}=Y(s),a=d(()=>s.rootPlan.resource_changes.filter(l=>l.change.actions[0]!=="no-op"));function o(l){s.setSelectedChange(l)}function i(l){return l.address===n.value.address?"outlined":"flat"}function v(l){return l.includes("delete")&&l.includes("create")?"warning":l.includes("delete")?"error":l.includes("create")?"success":"warning"}function u(l){return l.includes("delete")&&l.includes("create")?"mdi mdi-swap-horizontal":l.includes("delete")?"mdi mdi-delete":l.includes("create")?"mdi mdi-plus":l.includes("update")?"mdi mdi-pencil":"mdi mdi-alert"}return(l,m)=>(D(),G(Ve,null,{default:c(()=>[(D(!0),Le(ye,null,Fe(a.value,r=>(D(),G(ha,{key:r.address,onClick:b=>o(r),class:"mx-auto ma-2",variant:i(r)},{prepend:c(()=>[t(ee,{color:v(r.change.actions),icon:u(r.change.actions)},null,8,["color","icon"])]),title:c(()=>[L(T(r.name),1)]),subtitle:c(()=>[L(T(r.address),1)]),text:c(()=>[L(T(r.type),1)]),_:2},1032,["onClick","variant"]))),128))]),_:1}))}}),Sa=Z("div",{class:"text-h2 py-2"},"Change",-1),Ia={class:"py-2 text-medium-emphasis"},Ta=W({__name:"Changes",setup(e){const s=X(),n=$e(),{rootPlan:a,selectedChange:o}=Y(s),i=d(()=>a.value.resource_changes.filter(u=>u.change.actions[0]!=="no-op")),v=d(()=>{let u=new Date(a.value.timestamp);return n.format(u,"keyboardDate")+" "+u.toLocaleTimeString()});return(u,l)=>(D(),G(Ve,{class:"mb-6"},{default:c(()=>[t(F,{justify:"center"},{default:c(()=>[t(k,{cols:"3"},{default:c(()=>[t(F,null,{default:c(()=>[t(k,{cols:"12"},{default:c(()=>[Sa]),_:1}),t(k,{cols:"12"},{default:c(()=>[Z("div",Ia,[t(ee,null,{default:c(()=>[L("mdi mdi-calendar-clock")]),_:1}),L(" Created: "+T(v.value),1)])]),_:1}),t(k,{cols:"12"},{default:c(()=>[t(_a,{"relevant-changes":i.value},null,8,["relevant-changes"])]),_:1})]),_:1})]),_:1}),t(k,{cols:"9"},{default:c(()=>[t(ma,{change:we(o).change},null,8,["change"])]),_:1})]),_:1})]),_:1}))}});export{Ta as default};
