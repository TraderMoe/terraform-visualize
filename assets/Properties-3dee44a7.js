import{U as f,ac as V,ag as h,c as v,V as l,W as d,X as e,q as a,Y as x,Z as y,a1 as n,ah as i,F as k,a2 as p,ai as S}from"./index-9dc1e9e1.js";import{V as g,a as D,b as T}from"./VCard-b7f1291b.js";import{V as _,b as C,a as o}from"./VRow-f31a5c66.js";import{t as w}from"./loader-619d985a.js";import"./createSimpleFunctional-af8d5f35.js";const B=p("div",{class:"text-h4 py-2 mb-5"},"Variables",-1),P=f({__name:"VariableCards",setup(b){const c=V(),{rootPlan:m}=h(c),u=v(()=>Object.entries(m.value.variables??{}).map(([s,t])=>({name:s,value:t.value})).sort((s,t)=>s.name.localeCompare(t.name)));return(s,t)=>(l(),d(C,null,{default:e(()=>[B,a(_,{align:"center",justify:"center"},{default:e(()=>[(l(!0),x(k,null,y(u.value,r=>(l(),d(g,{class:"mx-auto ma-2 pa-2",key:r.name,width:"400"},{default:e(()=>[a(D,null,{default:e(()=>[n(i(r.name),1)]),_:2},1024),a(T,null,{default:e(()=>[n(i(r.value),1)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}))}}),j=p("div",{class:"text-h2 py-2"},"Properties",-1),N={class:"py-2 text-medium-emphasis"},A=f({__name:"Properties",setup(b){const c=V(),m=S(),{rootPlan:u}=h(c),s=v(()=>{let t=new Date(u.value.timestamp);return m.format(t,"keyboardDate")+" "+t.toLocaleTimeString()});return(t,r)=>(l(),d(C,{class:"mb-6"},{default:e(()=>[a(_,{justify:"center"},{default:e(()=>[a(o,{sm:12,md:3},{default:e(()=>[a(_,null,{default:e(()=>[a(o,{cols:"12"},{default:e(()=>[j]),_:1}),a(o,{cols:"12"},{default:e(()=>[p("div",N,[a(w,null,{default:e(()=>[n("mdi mdi-calendar-clock")]),_:1}),n(" Created: "+i(s.value),1)])]),_:1}),a(o,{cols:"12"})]),_:1})]),_:1}),a(o,{sm:12,md:9},{default:e(()=>[a(P)]),_:1})]),_:1})]),_:1}))}});export{A as default};
