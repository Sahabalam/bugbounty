

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7830b926"],{"047d":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"intent"},[r("div",{staticClass:"back-route"},[r("el-button",{attrs:{type:"text",icon:"el-icon-arrow-left"},on:{click:t.handleBack}},[t._v("\n      "+t._s(t.title)+"\n    ")])],1),t.isInit?r("div",{staticClass:"intent-main"},[r("section",{staticClass:"section-detail"},[r("div",{staticClass:"section-title ent-font-bold"},[t._v("订单详情")]),r("div",{staticClass:"section-content"},[r("span",[t._v("意向订单号："+t._s(t.productOrder.productOrderSn))]),r("span",[t._v("提单日期："+t._s(t.createTime))])]),2===this.userInfo.role&&3===t.currentStep?r("div",{staticClass:"section-detail-check"},[2!==t.productOrder.status?r("div",{staticClass:"check-detail ent-font-bold check-pass"},[t._v("审核通过")]):r("div",{staticClass:"check-detail ent-font-bold check-reject"},[t._v("审核不通过")]),r("div",[t._v("审核意见："+t._s(t.orderRecords[1].remark||"无"))])]):t._e()]),2!==this.userInfo.role?r("section",{staticClass:"section section-step"},[r("div",{staticClass:"section-title ent-font-bold"},[t._v("审核进度")]),r("div",{staticClass:"section-content section-step-content"},[r("div",{staticClass:"step-container"},[r("steps2",{attrs:{step:t.currentStep,steps:t.steps}})],1),3===t.currentStep?r("div",{staticClass:"step-explain"},[t._v("审核意见："+t._s(t.orderRecords[1].remark||"无"))]):t._e()])]):t._e(),r("section",{staticClass:"section"},[r("div",{staticClass:"section-title ent-font-bold"},[t._v(t._s(2!==this.userInfo.role?"基本信息":"采购信息"))]),r("div",{staticClass:"section-content"},[r("base-info",{attrs:{"order-data":t.orderData}})],1)]),r("section",{staticClass:"section"},[r("div",{staticClass:"section-title ent-font-bold"},[t._v("商品信息")]),r("div",{staticClass:"section-content"},[r("commodity-table",{attrs:{type:"intent","product-order":t.productOrder}})],1)])]):t._e()])},n=[],i=(r("8e6e"),r("456d"),r("96cf"),r("3b8d")),o=(r("ac6a"),r("bd86")),c=r("7699"),a=r("116e"),d=r("bcc0"),u=r("4bab"),l=r("2f62"),p=r("fa7d");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,s)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v={components:{BaseInfo:c["a"],Steps2:a["a"],CommodityTable:d["a"]},data:function(){return{loading:!1,isInit:!1,orderData:{},productOrder:{},shippingAddr:{},invoiceInfo:{},orderRecords:[],price:null,steps:[{title:"提交意向单",description:""},{title:"审核中",description:""},{title:"审核结束",description:""}]}},computed:h({},Object(l["e"])({userInfo:function(t){return t.user.userInfo}}),{currentStep:function(){return this.orderRecords.length+1},createTime:function(){return this.timeFormat(this.productOrder.createTime,"YYYY年MM月DD日 HH:mm:ss")},title:function(){return 2===this.userInfo.role?"返回意向单审核":"返回我的意向单"}}),methods:{timeFormat:p["c"],handleBack:function(){var t=2!==this.userInfo.role?"clientIntentOrder":"intentOrderCheck";this.$router.push({name:t})},formatSetp:function(){var t=this;this.steps[0].description=this.timeFormat(this.orderRecords[0].gmtCreate,"YYYY-MM-DD HH:mm"),this.orderRecords.forEach((function(e,r){t.steps[r+1].description=t.timeFormat(e.gmtCreate,"YYYY-MM-DD HH:mm"),1==r&&(t.steps[r+1].title=1===e.status?"审核通过":"审核不通过")}))}},mounted:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r,s,n,i,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,e=this.$route.query.id,t.next=4,u["a"].getOrderInfo({id:e,productOrderType:0});case 4:r=t.sent,s=r.data,n=s.productOrderVO,i=s.shippingAddr,o=s.invoiceInfo,c=s.orderRecords,this.orderData=r.data,this.productOrder=n,this.shippingAddr=i,this.invoiceInfo=o,this.orderRecords=c,this.isInit=!0,this.formatSetp();case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},m=v,b=(r("cec0"),r("2877")),O=Object(b["a"])(m,s,n,!1,null,"66c56ed0",null);e["default"]=O.exports},cec0:function(t,e,r){"use strict";var s=r("e33b"),n=r.n(s);n.a},e33b:function(t,e,r){}}]);
//# sourceMappingURL=chunk-7830b926.93e6274e.js.map


