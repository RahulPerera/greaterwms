(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"758b":function(t,e,a){"use strict";a.d(e,"c",(function(){return h})),a.d(e,"e",(function(){return p})),a.d(e,"d",(function(){return m})),a.d(e,"b",(function(){return _})),a.d(e,"g",(function(){return g})),a.d(e,"f",(function(){return f})),a.d(e,"a",(function(){return r}));a("551c"),a("06db");var o=a("2b0e"),n=a("bc3a"),i=a.n(n),s=a("18d6"),r="http://127.0.0.1:8000/",c=i.a.create({baseURL:r,timeout:5e3}),l=i.a.create({baseURL:r,timeout:5e3}),u=i.a.create({baseURL:r,timeout:5e3}),d=i.a.create({baseURL:r,timeout:5e3});function h(t,e){return c.get(t,{params:e})}function p(t,e,a){return c.post(t,a,{params:e})}function g(t,e){return l.post(t,e)}function f(t,e){return u.post(t,e)}function m(t,e,a){return c.patch(t,a,{params:e})}function _(t,e,a){return d.delete(t,a,{params:e})}u.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),u.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),l.interceptors.request.use((function(t){var e=s["a"].getItem("authid");return t.params={openid:e},t}),(function(t){return Promise.reject(t)})),l.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),c.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),d.interceptors.request.use((function(t){var e=s["a"].getItem("openid");return t.params={openid:e},t}),(function(t){return Promise.reject(t)})),d.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),o["a"].prototype.$axios=c},"7f50":function(t,e,a){"use strict";var o=a("d46a"),n=a.n(o);e["default"]=n.a},a8a4:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","margin-top":"-20px"}},[a("q-table",{attrs:{title:"Treats",dense:"",data:t.data,columns:t.columns,"row-key":"t_code",separator:t.separator,loading:t.loading,"hide-bottom":"",pagination:t.pagination,"no-data-label":"没有找到任何数据","no-results-label":"没有找到您想要的数据","table-style":{height:t.height}},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:"刷新",icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          刷新页面\n        ")])],1),a("q-btn",{attrs:{label:"下载",icon:"cloud_download"},on:{click:function(e){return t.downloadexample()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          将选中的数据下载下来\n        ")])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:"本页关键字搜索"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getOneList()}},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"},on:{clickr:function(e){return t.getOneList()}}})]},proxy:!0}]),model:{value:t.search_name,callback:function(e){t.search_name=e},expression:"search_name"}})]},proxy:!0},{key:"no-data",fn:function(e){var o=e.icon,n=e.message,i=e.filter;return[a("div",{staticClass:"full-width row flex-center text-accent q-gutter-sm"},[a("q-icon",{attrs:{size:"2em",name:"sentiment_dissatisfied"}}),a("span",[t._v("\n            Well this is sad... "+t._s(n)+"\n          ")]),a("q-icon",{attrs:{size:"2em",name:i?"filter_b_and_w":o}})],1)]}}])}),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-pagination",{staticStyle:{"z-index":"1000"},attrs:{color:"purple",max:t.totlepage,"max-pages":7,"boundary-links":!0,"direction-links":!0,"boundary-numbers":!0},on:{click:function(e){return t.pageChange()}},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)]],2)},n=[],i=a("758b"),s=a("b06b"),r={name:"Pagestocklist",data:function(){return{pathname:"stocklist/",authorization_get:!1,authorization_post:!1,authorization_getfile:!1,authorization_delete:!1,authorization_patch:!1,separator:"cell",loading:!1,search_name:"",totlepage:1,current:1,height:"",columns:[{name:"name",required:!0,label:"商品编码",align:"left",field:"name"},{name:"goods_name",label:"商品名称",field:"goods_name"},{name:"onhand_stock",label:"现有库存",field:"onhand_stock"},{name:"can_order_stock",label:"可用库存",field:"can_order_stock"},{name:"inspect_stock",label:"待检库存",field:"inspect_stock"},{name:"cross_stock",label:"暂存库存",field:"cross_stock"},{name:"hold_stock",label:"不可发库存",field:"hold_stock"},{name:"damage_stock",label:"破损库存",field:"damage_stock"},{name:"pre_delivery_stock",label:"预计到货库存",field:"pre_delivery_stock"},{name:"pre_load_stock",label:"待卸货库存",field:"pre_load_stock"},{name:"pre_sort_stock",label:"待清点库存",field:"pre_sort_stock"},{name:"sort_stock",label:"待上架库存",field:"sort_stock"},{name:"pick_stock",label:"待拣货库存",field:"pick_stock"},{name:"picked_stock",label:"待发货库存",field:"picked_stock"},{name:"back_order_stock",label:"欠货库存",field:"back_order_stock"},{name:"create_time",label:"创建时间",field:"create_time"},{name:"last_update_time",label:"最后修改时间",field:"last_update_time"}],data:[],pagination:{sortBy:"create_time",descending:!0,page:1,rowsPerPage:50}}},methods:{authCheck:function(){var t=this,e=this.$q.localStorage.getItem("openid");this.$axios.get(i["a"]+"userauth/",{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,authorization:"1"},data:{}}).then((function(e){"200"===e.data.results.code?0===e.data.results.data.length?(t.authorization_get=!0,t.authorization_post=!0,t.authorization_getfile=!0,t.authorization_delete=!0,t.authorization_patch=!0,t.getList()):1===e.data.results.data.length?(0===e.data.results.data[0].aut1?(t.authorization_get=!0,t.getList()):t.authorization_get=!1,0===e.data.results.data[0].aut2?t.authorization_getfile=!0:t.authorization_getfile=!1,0===e.data.results.data[0].aut3?t.authorization_post=!0:t.authorization_post=!1,0===e.data.results.data[0].aut4?t.authorization_patch=!0:t.authorization_patch=!1,0===e.data.results.data[0].aut5?t.authorization_delete=!0:t.authorization_delete=!1):(t.authorization=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})):(t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500}))})).catch((function(e){t.authorization_get=!1,t.authorization_post=!1,t.authorization_getfile=!1,t.authorization_delete=!1,t.authorization_patch=!1,console.log(e)}))},getList:function(){var t=this;if(this.authorization_get)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.get(i["a"]+this.pathname,{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,page:this.current,max_page:50},data:{}}).then((function(e){"200"===e.data.results.code?(t.data=e.data.results.data,t.totlepage=e.data.results.totlepage):t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有查询权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},getOneList:function(){var t=this;if(this.authorization_get)if(this.$q.localStorage.has("openid")){var e=this.$q.localStorage.getItem("openid");this.$axios.get(i["a"]+this.pathname,{headers:{"Content-Type":"application/json;charset=utf-8"},params:{openid:e,name:this.search_name},data:{}}).then((function(e){"200"===e.data.results.code?(t.data=e.data.results.data,t.totlepage=e.data.results.totlepage):t.$q.notify({message:e.data.results.msg,icon:"close",color:"negative",position:"right",timeout:2500})})).catch((function(e){console.log(e),t.$q.notify({message:"操作频率过快，请稍后再试",icon:"close",color:"negative",position:"right",timeout:2500})}))}else this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500});else this.$q.notify({message:"您没有查询权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})},getSelectedString:function(){return 0===this.selected.length?"":"".concat(this.selected.length," record").concat(this.selected.length>1?"s":""," selected of ").concat(this.data.length)},pageChange:function(){this.getList()},reFresh:function(){this.current=1,this.getList()},downloadexample:function(){this.authorization_getfile?this.$q.localStorage.has("openid")?Object(s["a"])(i["a"]+this.pathname+"?openid="+this.$q.localStorage.getItem("openid")+"&getfile=1"):this.$q.notify({message:"请先登入后再进行操作",icon:"login",color:"accent",position:"right",timeout:2500}):this.$q.notify({message:"您没有下载权限，请联系管理员提升权限",icon:"close",color:"dark",position:"right",timeout:2500})}},created:function(){},mounted:function(){this.$q.localStorage.has("openid")&&this.authCheck(),this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"},updated:function(){}},c=r,l=a("2877"),u=a("7f50"),d=a("eebe"),h=a.n(d),p=a("eaac"),g=a("e7a9"),f=a("9c40"),m=a("05c0"),_=a("2c91"),b=a("27f9"),k=a("0016"),q=a("3b16"),z=Object(l["a"])(c,o,n,!1,null,null,null);"function"===typeof u["default"]&&Object(u["default"])(z);e["default"]=z.exports;h()(z,"components",{QTable:p["a"],QBtnGroup:g["a"],QBtn:f["a"],QTooltip:m["a"],QSpace:_["a"],QInput:b["a"],QIcon:k["a"],QPagination:q["a"]})},d46a:function(t,e){}}]);