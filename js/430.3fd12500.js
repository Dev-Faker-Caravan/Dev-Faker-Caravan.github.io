"use strict";(self["webpackChunkdev_faker"]=self["webpackChunkdev_faker"]||[]).push([[430],{9430:function(t,e,a){a.r(e),a.d(e,{default:function(){return _}});var n=a(3396),o=a(9242);const d=t=>((0,n.dD)("data-v-5363e3da"),t=t(),(0,n.Cn)(),t),i={class:"data-row-auto"},l={class:"auto-start"},p=d((()=>(0,n._)("p",null,"Start at :",-1))),r={class:"auto-increment"},s=d((()=>(0,n._)("p",null,"Increment :",-1))),u={class:"auto-placeholder"},c=d((()=>(0,n._)("p",null,"placeholder string :",-1)));function m(t,e,a,d,m,w){return(0,n.wg)(),(0,n.iD)("div",i,[(0,n._)("div",l,[p,(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=e=>t.dataRowItemOption.start=e),class:"ds-input"},null,512),[[o.nr,t.dataRowItemOption.start]])]),(0,n._)("div",r,[s,(0,n.wy)((0,n._)("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=e=>t.dataRowItemOption.increment=e),class:"ds-input"},null,512),[[o.nr,t.dataRowItemOption.increment]])]),(0,n._)("div",u,[c,(0,n.wy)((0,n._)("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=e=>t.dataRowItemOption.placeholder=e),class:"ds-input"},null,512),[[o.nr,t.dataRowItemOption.placeholder]])])])}var w=a(4870),R=a(65),I=(0,n.aZ)({props:{index:Number,dataRow:Object},setup(t){const e=(0,R.oR)();let a=t.dataRow?(0,n.Fl)((()=>t.dataRow.item.itemOption)):(0,w.iH)({start:1,increment:1,placeholder:""});e.commit("setDataRowItemOption",{index:t.index,dataRowItemOption:a.value});const o=()=>{e.commit("setDataRowItemOption",{index:t.index,dataRowItemOption:a.value}),console.log("dataRowItemOption --\x3e",e.getters.getDataRowItemOption(t.index))};return{dataRowItemOption:a,setDataRowItemOption:o}}}),O=a(89);const v=(0,O.Z)(I,[["render",m],["__scopeId","data-v-5363e3da"]]);var _=v}}]);
//# sourceMappingURL=430.3fd12500.js.map