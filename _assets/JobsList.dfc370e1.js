let a=document.createElement("style");a.innerHTML="",document.head.appendChild(a);import{d as e,r as n,e as l,s as d,L as s,I as t,p as i,a as r,o as u,c,b as o,t as p,w as v}from"./index.f90005c8.js";var f=e({setup(){const a=n(null),e=n(null);return l((async()=>{a.value=await d.dispatch("linkedIn/"+s.GET_JOBS,null),e.value=await d.dispatch("indeed/"+t.GET_JOBS,null)})),{linkedIn:a,indeed:e}}});const h=v("data-v-592ae339");i("data-v-592ae339");const m=o("hr",null,null,-1);r();const I=h(((a,e,n,l,d,s)=>(u(),c("div",null,[o("pre",null,"      "+p(JSON.stringify(a.linkedIn,void 0,2))+"\r\n    ",1),m,o("pre",null,"      "+p(JSON.stringify(a.indeed,void 0,2))+"\r\n    ",1)]))));f.render=I,f.__scopeId="data-v-592ae339";export default f;
