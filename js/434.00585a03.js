"use strict";(self["webpackChunkdev_faker"]=self["webpackChunkdev_faker"]||[]).push([[434],{6434:function(a,t,e){e.r(t),e.d(t,{default:function(){return b}});var o=e(3396);const n=a=>((0,o.dD)("data-v-43b5d6b0"),a=a(),(0,o.Cn)(),a),s={class:"btn-group"},c=n((()=>(0,o._)("span",null,"Add Row",-1))),i=n((()=>(0,o._)("span",null,"Save",-1))),l={class:"preview-btn"},r=n((()=>(0,o._)("span",null,"Preview",-1))),d=n((()=>(0,o._)("span",null,"Cancel",-1))),p=n((()=>(0,o._)("div",{class:"data-grid-head"},[(0,o._)("p",null,"Data Type"),(0,o._)("p",null,"Data Key Name"),(0,o._)("p",null,"Data Options")],-1)));function m(a,t,e,n,m,u){const g=(0,o.up)("font-awesome-icon"),w=(0,o.up)("DataEditRow");return(0,o.wg)(),(0,o.iD)("section",null,[(0,o._)("div",s,[(0,o._)("button",{class:"add-row-btn",onClick:t[0]||(t[0]=(...t)=>a.addDataRow&&a.addDataRow(...t))},[(0,o.Wm)(g,{icon:["fa","plus"],class:"font-awesome-icon"}),c]),(0,o._)("button",{class:"save-btn",onClick:t[1]||(t[1]=(...t)=>a.saveData&&a.saveData(...t))},[(0,o.Wm)(g,{icon:["far","floppy-disk"],class:"font-awesome-icon"}),i]),(0,o._)("button",l,[(0,o.Wm)(g,{icon:["fa","align-left"],class:"font-awesome-icon"}),r]),(0,o._)("button",{class:"cancel-btn",onClick:t[2]||(t[2]=(...t)=>a.cancel&&a.cancel(...t))},[(0,o.Wm)(g,{icon:["fa","window-close"],class:"font-awesome-icon"}),d])]),(0,o._)("div",null,[p,(0,o._)("div",null,[(0,o.Wm)(w)])])])}var u=e(65),g=e(6265),w=e.n(g),f=e(1120),D=(0,o.aZ)({components:{DataEditRow:(0,o.RC)((()=>e.e(655).then(e.bind(e,1655))))},props:{projectNamespace:String},setup(a){const t=(0,u.oR)(),e=()=>{t.commit("addDataRow")},o=async()=>{t.commit("startLoading"),await w().put("https://dev-faker-be.herokuapp.com/project/"+a.projectNamespace+"/data",{dataType:t.getters.getDataType,dataRows:t.getters.getDataRows,array:t.getters.getArrayCheck,list:t.getters.getDataRowList,dataName:t.getters.getDataName,dataPath:t.getters.getDataPath},{headers:{accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*",Authorization:"Bearer "+localStorage.getItem("token")}}).then((a=>{if(200===a.status){let e=a.data;console.log(e),t.commit("stopLoading"),t.commit("initDataInfo"),f.Z.push({name:"ProjectList"})}})).catch((a=>{t.commit("stopLoading"),console.log("error ->",a.response),t.commit("initDataInfo")})),t.commit("stopLoading")},n=()=>{t.commit("initDataInfo"),f.Z.push({name:"ProjectList"})};return{addDataRow:e,saveData:o,cancel:n}}}),v=e(89);const _=(0,v.Z)(D,[["render",m],["__scopeId","data-v-43b5d6b0"]]);var b=_}}]);
//# sourceMappingURL=434.00585a03.js.map