(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"07f0":function(t,e){},"0cf9":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",[e("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[e("q-table",{staticClass:"shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"q-mr-md"},[t._v(t._s(t.$t("download_center.createTime")))]),e("q-input",{attrs:{readonly:"",outlined:"",dense:"",placeholder:t.interval},scopedSlots:t._u([{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:"event"}},[e("q-popup-proxy",{ref:"qDateProxy",attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("q-date",{attrs:{range:""},model:{value:t.createDate1,callback:function(e){t.createDate1=e},expression:"createDate1"}})],1)],1)]},proxy:!0}]),model:{value:t.createDate2,callback:function(e){t.createDate2=e},expression:"createDate2"}}),e("q-btn-group",{staticClass:"q-ml-md",attrs:{push:""}},[e("q-btn",{attrs:{label:t.$t("download_center.reset"),icon:"img:statics/downloadcenter/reset.svg"},on:{click:function(e){return t.reset()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("download_center.reset")))])],1),e("q-btn",{attrs:{label:t.$t("downloadasnlist"),icon:"cloud_download"},on:{click:function(e){return t.downloadlistData()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("downloadasnlisttip")))])],1),e("q-btn",{attrs:{label:t.$t("downloadasndetail"),icon:"cloud_download"},on:{click:function(e){return t.downloaddetailData()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("downloadasndetailtip")))])],1)],1)],1)]},proxy:!0},{key:"body",fn:function(a){return[e("q-tr",{attrs:{props:a}},[e("q-td",{key:"asn_code",attrs:{props:a}},[t._v(t._s(a.row.asn_code))]),e("q-td",{key:"asn_status",attrs:{props:a}},[t._v(t._s(a.row.asn_status))]),e("q-td",{key:"total_weight",attrs:{props:a}},[t._v(t._s(a.row.total_weight.toFixed(4)))]),e("q-td",{key:"total_volume",attrs:{props:a}},[t._v(t._s(a.row.total_volume.toFixed(4)))]),e("q-td",{key:"supplier",attrs:{props:a}},[t._v(t._s(a.row.supplier))]),e("q-td",{key:"creater",attrs:{props:a}},[t._v(t._s(a.row.creater))]),e("q-td",{key:"create_time",attrs:{props:a}},[t._v(t._s(a.row.create_time))]),e("q-td",{key:"update_time",attrs:{props:a}},[t._v(t._s(a.row.update_time))])],1)]}}])})],1),[e("div",{staticClass:"q-pa-lg flex flex-center"},[e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("previous"),icon:"navigate_before"},on:{click:function(e){return t.getListPrevious()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("previous")))])],1),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:t.$t("next"),"icon-right":"navigate_next"},on:{click:function(e){return t.getListNext()}}},[e("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[t._v(t._s(t.$t("next")))])],1),e("q-btn",{directives:[{name:"show",rawName:"v-show",value:!t.pathname_previous&&!t.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:t.$t("no_data")}})],1)]],2)},n=[],o=(a("5319"),a("3004")),i=a("bd4c"),r=a("a357"),l=(a("a639"),a("18d6")),d={name:"Pageasnlist",data(){return{login_name:"",authin:"0",pathname:"asn/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"asn_code",required:!0,label:this.$t("inbound.view_asn.asn_code"),align:"left",field:"asn_code"},{name:"asn_status",label:this.$t("inbound.view_asn.asn_status"),field:"asn_status",align:"center"},{name:"total_weight",label:this.$t("inbound.view_asn.total_weight"),field:"total_weight",align:"center"},{name:"total_volume",label:this.$t("inbound.view_asn.total_volume"),field:"total_volume",align:"center"},{name:"supplier",label:this.$t("baseinfo.view_supplier.supplier_name"),field:"supplier",align:"center"},{name:"creater",label:this.$t("creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("createtime"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("updatetime"),field:"update_time",align:"right"}],pagination:{page:1,rowsPerPage:"30"},createDate1:"",createDate2:"",date_range:"",dateArray:"",searchUrl:"",downloadUrl:"asn/filelist/",downloadDetailUrl:"asn/filedetail/"}},computed:{interval(){return this.$t("download_center.start")+" - "+this.$t("download_center.end")}},watch:{createDate1(t){t&&(t.to?(this.createDate2=`${t.from} - ${t.to}`,this.date_range=`${t.from},${t.to} 23:59:59`,this.searchUrl=this.pathname+"list/?create_time__range="+this.date_range,this.downloadUrl=this.pathname+"filelist/?create_time__range="+this.date_range,this.downloadDetailUrl=this.pathname+"filedetail/?create_time__range="+this.date_range):(this.createDate2=`${t}`,this.dateArray=t.split("/"),this.searchUrl=this.pathname+"list/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2],this.downloadUrl=this.pathname+"filelist/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2],this.downloadDetailUrl=this.pathname+"filedetail/?create_time__year="+this.dateArray[0]+"&create_time__month="+this.dateArray[1]+"&create_time__day="+this.dateArray[2]),this.date_range=this.date_range.replace(/\//g,"-"),this.getSearchList(),this.$refs.qDateProxy.hide())}},methods:{getList(){var t=this;Object(o["e"])(t.pathname+"list/").then((e=>{t.table_list=[],e.results.forEach((e=>{1===e.asn_status?e.asn_status=t.$t("inbound.predeliverystock"):2===e.asn_status?e.asn_status=t.$t("inbound.preloadstock"):3===e.asn_status?e.asn_status=t.$t("inbound.presortstock"):4===e.asn_status?e.asn_status=t.$t("inbound.sortstock"):5===e.asn_status?e.asn_status=t.$t("inbound.asndone"):e.asn_status="N/A",t.table_list.push(e)})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getSearchList(){var t=this;Object(o["e"])(t.searchUrl).then((e=>{t.table_list=[],e.results.forEach((e=>{1===e.asn_status?e.asn_status=t.$t("inbound.predeliverystock"):2===e.asn_status?e.asn_status=t.$t("inbound.preloadstock"):3===e.asn_status?e.asn_status=t.$t("inbound.presortstock"):4===e.asn_status?e.asn_status=t.$t("inbound.sortstock"):5===e.asn_status?e.asn_status=t.$t("inbound.asndone"):e.asn_status="N/A",t.table_list.push(e)})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;Object(o["e"])(t.pathname_previous,{}).then((e=>{t.table_list=[],e.results.forEach((e=>{1===e.asn_status?e.asn_status=t.$t("inbound.predeliverystock"):2===e.asn_status?e.asn_status=t.$t("inbound.preloadstock"):3===e.asn_status?e.asn_status=t.$t("inbound.presortstock"):4===e.asn_status?e.asn_status=t.$t("inbound.sortstock"):5===e.asn_status?e.asn_status=t.$t("inbound.asndone"):e.asn_status="N/A",t.table_list.push(e)})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;Object(o["e"])(t.pathname_next,{}).then((e=>{t.table_list=[],e.results.forEach((e=>{1===e.asn_status?e.asn_status=t.$t("inbound.predeliverystock"):2===e.asn_status?e.asn_status=t.$t("inbound.preloadstock"):3===e.asn_status?e.asn_status=t.$t("inbound.presortstock"):4===e.asn_status?e.asn_status=t.$t("inbound.sortstock"):5===e.asn_status?e.asn_status=t.$t("inbound.asndone"):e.asn_status="N/A",t.table_list.push(e)})),t.pathname_previous=e.previous,t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},downloadlistData(){var t=this;Object(o["f"])(t.downloadUrl).then((e=>{var a=Date.now(),s=i["b"].formatDate(a,"YYYYMMDDHHmmssSSS");const n=Object(r["a"])(t.pathname+"list"+s+".csv","\ufeff"+e.data,"text/csv");!0!==n&&t.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))},downloaddetailData(){var t=this;Object(o["f"])(t.downloadDetailUrl).then((e=>{var a=Date.now(),s=i["b"].formatDate(a,"YYYYMMDDHHmmssSSS");const n=Object(r["a"])(t.pathname+"detail"+s+".csv","\ufeff"+e.data,"text/csv");!0!==n&&t.$q.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})}))},reset(){this.getList(),this.downloadUrl="asn/filelist/",this.downloadDetailUrl="asn/filedetail/",this.createDate2=""}},created(){var t=this;l["a"].has("openid")?t.openid=l["a"].getItem("openid"):(t.openid="",l["a"].set("openid","")),l["a"].has("login_name")?t.login_name=l["a"].getItem("login_name"):(t.login_name="",l["a"].set("login_name","")),l["a"].has("auth")?(t.authin="1",t.getList()):t.authin="0"},mounted(){var t=this;t.$q.platform.is.electron?t.height=String(t.$q.screen.height-290)+"px":t.height=t.$q.screen.height-290+"px"},updated(){},destroyed(){}},c=d,_=a("42e1"),u=a("9d38"),p=a("eaac"),h=a("27f9"),m=a("0016"),b=a("7cbe"),f=a("52ee"),v=a("e7a9"),g=a("9c40"),w=a("05c0"),$=a("bd08"),y=a("db86"),x=a("eebe"),k=a.n(x),q=Object(_["a"])(c,s,n,!1,null,null,null);"function"===typeof u["default"]&&Object(u["default"])(q);e["default"]=q.exports;k()(q,"components",{QTable:p["a"],QInput:h["a"],QIcon:m["a"],QPopupProxy:b["a"],QDate:f["a"],QBtnGroup:v["a"],QBtn:g["a"],QTooltip:w["a"],QTr:$["a"],QTd:y["a"]})},"9d38":function(t,e,a){"use strict";var s=a("07f0"),n=a.n(s);e["default"]=n.a}}]);