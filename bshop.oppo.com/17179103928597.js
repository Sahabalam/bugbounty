

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["myOrder~resourceOrder"],{1799:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"custom-pagination-wrapper"},[r("div",{staticClass:"total"},[t._v("每页显示"+t._s(t.pageSize)+"个/共"+t._s(t.total)+"个")]),r("el-pagination",{staticClass:"custom-pagination",attrs:{"current-page":t.innerCurrentPage,"page-size":t.innerPageSize,layout:"prev, pager, next",total:t.total,background:""},on:{"update:currentPage":function(e){t.innerCurrentPage=e},"update:current-page":function(e){t.innerCurrentPage=e}}}),r("div",{staticClass:"jumper"},[r("div",[t._v("共"+t._s(t.allPage)+"页"),r("span",{staticClass:"divide-bar"},[t._v("/")]),t._v("跳转")]),r("el-input",{attrs:{size:"mini"},on:{input:t.handleInput},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleJump(e)}},model:{value:t.jumpPage,callback:function(e){t.jumpPage=t._n(e)},expression:"jumpPage"}}),r("div",[t._v("页")])],1)],1)},n=[],s=(r("a481"),r("c5f6"),{name:"Pagination",props:{pageSize:{type:Number,default:0},currentPage:{type:Number,default:0},total:{type:Number,default:0}},data:function(){return{innerPageSize:this.pageSize,innerCurrentPage:this.currentPage,jumpPage:this.currentPage}},computed:{allPage:function(){return Math.ceil(this.total/this.innerPageSize)}},watch:{innerCurrentPage:function(t){this.$emit("update:currentPage",t),this.$emit("current-change",t),this.jumpPage=t},currentPage:function(t){this.innerCurrentPage=t}},methods:{handleJump:function(){this.jumpPage<=0?(this.jumpPage=1,this.innerCurrentPage=this.jumpPage):this.jumpPage>this.allPage?(this.jumpPage=this.allPage,this.innerCurrentPage=this.jumpPage):this.innerCurrentPage=this.jumpPage},handleInput:function(t){t=t.replace(/[^\d]/g,""),this.jumpPage=t?+t:t}}}),a=s,o=(r("8c14"),r("2877")),c=Object(o["a"])(a,i,n,!1,null,"7c2283cc",null);e["a"]=c.exports},"1bf0":function(t,e,r){},"1e89":function(t,e,r){},"39c5":function(t,e,r){"use strict";var i=r("1e89"),n=r.n(i);n.a},"3c99":function(t,e,r){"use strict";var i=r("f781"),n=r.n(i);n.a},4215:function(t,e,r){"use strict";r("6762"),r("7f7f");var i=["indentDetail","commodityDetail","resourceDetail","intentCheckDetail","order","intent","custom"];e["a"]={data:function(){return{to:null,form:null,config:{toRoute:null,leaveRoute:null,scrollTop:0}}},methods:{resetConfig:function(){this.config.scrollTop=0,this.config.toRoute=null,this.config.leaveRoute=null,this.to=null,this.from=null},backLocation:function(){var t=this;this.config.toRoute&&this.config.toRoute.name===this.from.name&&(window.scrollTo(0,this.config.scrollTop),setTimeout((function(){window.scrollTo(0,t.config.scrollTop),t.resetConfig()}),0))}},activated:function(){var t=this;Promise.resolve().then((function(){t.backLocation()}))},beforeRouteEnter:function(t,e,r){r((function(r){r.to=t,r.from=e}))},beforeRouteLeave:function(t,e,r){i.includes(t.name)&&(this.config.toRoute=t,this.config.leaveRoute=e,this.config.scrollTop=document.documentElement.scrollTop),r()}}},4702:function(t,e,r){"use strict";r("96cf");var i=r("3b8d");r("2f62");e["a"]={data:function(){return{filterData:{},pagination:{page:1,pageSize:10,totalCount:1}}},methods:{handleSizeChange:function(t){this.pagination.page=1,this.pagination.pageSize=t,this.getTableData()},handleCurrentChange:function(t){window.scrollTo(0,0),this.pagination.page=t,this.getTableData()},handlePagination:function(t){this.pagination=Object.assign(this.pagination,t),this.getTableData()},refreshTable:function(){this.pagination.page=1,this.getTableData()},getTableData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var r,i,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=this.pagination,i=r.page,n=r.pageSize,t.prev=1,t.next=4,this.tableApi(Object.assign({},{page:i,pageSize:n},this.filterData));case 4:s=t.sent,this.tableData=s.data.content?s.data.content:[],this.pagination.totalCount=s.data.totalCount?s.data.totalCount:0,t.next=11;break;case 9:t.prev=9,t.t0=t["catch"](1);case 11:return t.prev=11,e&&e(),t.finish(11);case 14:case"end":return t.stop()}}),t,this,[[1,9,11,14]])})));function e(e){return t.apply(this,arguments)}return e}()}}},4917:function(t,e,r){"use strict";var i=r("cb7c"),n=r("9def"),s=r("0390"),a=r("5f1b");r("214f")("match",1,(function(t,e,r,o){return[function(r){var i=t(this),n=void 0==r?void 0:r[e];return void 0!==n?n.call(r,i):new RegExp(r)[e](String(i))},function(t){var e=o(r,t,this);if(e.done)return e.value;var c=i(t),u=String(this);if(!c.global)return a(c,u);var l=c.unicode;c.lastIndex=0;var f,d=[],p=0;while(null!==(f=a(c,u))){var m=String(f[0]);d[p]=m,""===m&&(c.lastIndex=s(u,n(c.lastIndex),l)),p++}return 0===p?null:d}]}))},"5a0c":function(t,e,r){!function(e,r){t.exports=r()}(0,(function(){"use strict";var t="millisecond",e="second",r="minute",i="hour",n="day",s="week",a="month",o="quarter",c="year",u=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,l=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(t,e,r){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(r)+t},d={s:f,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),i=Math.floor(r/60),n=r%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(n,2,"0")},m:function(t,e){var r=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(r,a),n=e-i<0,s=t.clone().add(r+(n?-1:1),a);return Number(-(r+(e-i)/(n?i-s:s-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(u){return{M:a,y:c,w:s,d:n,h:i,m:r,s:e,ms:t,Q:o}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},p={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m="en",h={};h[m]=p;var v=function(t){return t instanceof _},g=function(t,e,r){var i;if(!t)return m;if("string"==typeof t)h[t]&&(i=t),e&&(h[t]=e,i=t);else{var n=t.name;h[n]=t,i=n}return r||(m=i),i},b=function(t,e,r){if(v(t))return t.clone();var i=e?"string"==typeof e?{format:e,pl:r}:e:{};return i.date=t,new _(i)},y=d;y.l=g,y.i=v,y.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var _=function(){function f(t){this.$L=this.$L||g(t.locale,null,!0),this.parse(t)}var d=f.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(y.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(u);if(i)return r?new Date(Date.UTC(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)):new Date(i[1],i[2]-1,i[3]||1,i[4]||0,i[5]||0,i[6]||0,i[7]||0)}return new Date(e)}(t),this.init()},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},d.$utils=function(){return y},d.isValid=function(){return!("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var r=b(t);return this.startOf(e)<=r&&r<=this.endOf(e)},d.isAfter=function(t,e){return b(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<b(t)},d.$g=function(t,e,r){return y.u(t)?this[e]:this.set(r,t)},d.year=function(t){return this.$g(t,"$y",c)},d.month=function(t){return this.$g(t,"$M",a)},d.day=function(t){return this.$g(t,"$W",n)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",i)},d.minute=function(t){return this.$g(t,"$m",r)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var u=this,l=!!y.u(o)||o,f=y.p(t),d=function(t,e){var r=y.w(u.$u?Date.UTC(u.$y,e,t):new Date(u.$y,e,t),u);return l?r:r.endOf(n)},p=function(t,e){return y.w(u.toDate()[t].apply(u.toDate(),(l?[0,0,0,0]:[23,59,59,999]).slice(e)),u)},m=this.$W,h=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case c:return l?d(1,0):d(31,11);case a:return l?d(1,h):d(0,h+1);case s:var b=this.$locale().weekStart||0,_=(m<b?m+7:m)-b;return d(l?v-_:v+(6-_),h);case n:case"date":return p(g+"Hours",0);case i:return p(g+"Minutes",1);case r:return p(g+"Seconds",2);case e:return p(g+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var u,l=y.p(s),f="set"+(this.$u?"UTC":""),d=(u={},u[n]=f+"Date",u.date=f+"Date",u[a]=f+"Month",u[c]=f+"FullYear",u[i]=f+"Hours",u[r]=f+"Minutes",u[e]=f+"Seconds",u[t]=f+"Milliseconds",u)[l],p=l===n?this.$D+(o-this.$W):o;if(l===a||l===c){var m=this.clone().set("date",1);m.$d[d](p),m.init(),this.$d=m.set("date",Math.min(this.$D,m.daysInMonth())).toDate()}else d&&this.$d[d](p);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[y.p(t)]()},d.add=function(t,o){var u,l=this;t=Number(t);var f=y.p(o),d=function(e){var r=b(l);return y.w(r.date(r.date()+Math.round(e*t)),l)};if(f===a)return this.set(a,this.$M+t);if(f===c)return this.set(c,this.$y+t);if(f===n)return d(1);if(f===s)return d(7);var p=(u={},u[r]=6e4,u[i]=36e5,u[e]=1e3,u)[f]||1,m=this.$d.getTime()+t*p;return y.w(m,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=y.z(this),n=this.$locale(),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,u=n.months,f=function(t,i,n,s){return t&&(t[i]||t(e,r))||n[i].substr(0,s)},d=function(t){return y.s(s%12||12,t,"0")},p=n.meridiem||function(t,e,r){var i=t<12?"AM":"PM";return r?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:y.s(o+1,2,"0"),MMM:f(n.monthsShort,o,u,3),MMMM:u[o]||u(this,r),D:this.$D,DD:y.s(this.$D,2,"0"),d:String(this.$W),dd:f(n.weekdaysMin,this.$W,c,2),ddd:f(n.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(s),HH:y.s(s,2,"0"),h:d(1),hh:d(2),a:p(s,a,!0),A:p(s,a,!1),m:String(a),mm:y.s(a,2,"0"),s:String(this.$s),ss:y.s(this.$s,2,"0"),SSS:y.s(this.$ms,3,"0"),Z:i};return r.replace(l,(function(t,e){return e||m[t]||i.replace(":","")}))},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,u,l){var f,d=y.p(u),p=b(t),m=6e4*(p.utcOffset()-this.utcOffset()),h=this-p,v=y.m(this,p);return v=(f={},f[c]=v/12,f[a]=v,f[o]=v/3,f[s]=(h-m)/6048e5,f[n]=(h-m)/864e5,f[i]=h/36e5,f[r]=h/6e4,f[e]=h/1e3,f)[d]||h,l?v:y.a(v)},d.daysInMonth=function(){return this.endOf(a).$D},d.$locale=function(){return h[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var r=this.clone();return r.$L=g(t,e,!0),r},d.clone=function(){return y.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},f}();return b.prototype=_.prototype,b.extend=function(t,e){return t(e,_,b),b},b.locale=g,b.isDayjs=v,b.unix=function(t){return b(1e3*t)},b.en=h[m],b.Ls=h,b}))},"5c9e":function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order"},[r("div",{staticClass:"order-header"},[r("div",{staticClass:"order-header__time"},[t._v(t._s(t.createTime))]),r("div",{staticClass:"order-header__code",class:t.isAgent?"":"pl-145"},[t._v(t._s(t.orderCode))]),2===this.userInfo.role?r("div",{staticClass:"order-header__company"},[r("el-popover",{staticClass:"popover",attrs:{trigger:"hover",placement:"bottom-start",width:"400"},on:{show:t.handleCustomerInfo}},[t.customerInfo?r("el-form",{staticClass:"customer-info",attrs:{rules:t.corporateRule,"label-width":"120px","label-position":"right"}},[r("el-form-item",{attrs:{label:"企业名称：",prop:"required"}},[r("span",[t._v(t._s(t.customerInfo.corporateName))])]),r("el-form-item",{attrs:{label:"企业地址：",prop:"required"}},[r("span",[t._v(t._s(t.detailAddress))])]),r("el-form-item",{attrs:{label:"联系人姓名：",prop:"required"}},[r("span",[t._v(t._s(t.customerInfo.contactName))])]),r("el-form-item",{attrs:{label:"联系人手机：",prop:"required"}},[r("span",[t._v(t._s(t.customerInfo.contactPhoneNumber))])]),t.customerInfo.contactEmail?r("el-form-item",{attrs:{label:"联系人邮箱："}},[r("span",[t._v(t._s(t.customerInfo.contactEmail))])]):t._e(),t.customerInfo.contactLandlineNumber?r("el-form-item",{attrs:{label:"联系人座机："}},[r("span",[t._v(t._s(t.customerInfo.contactLandlineNumber))])]):t._e(),t.customerInfo.contactQQNumber?r("el-form-item",{attrs:{label:"联系人QQ："}},[r("span",[t._v(t._s(t.customerInfo.contactQQNumber))])]):t._e()],1):t._e(),r("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[t._v("客户："+t._s(t.corporateName))])],1)],1):t._e(),r("div",{staticClass:"order-header__status"},[t._v("\n      状态："),r("span",{class:t.statusClass},[t._v(t._s(t.statusText))])])]),r("div",{staticClass:"order-main"},[r("div",{staticClass:"order-content"},["intent"===t.type?t._l(t.productList,(function(e){return r("div",{key:e.id,staticClass:"product"},[r("div",{staticClass:"product-logo w-160"},[r("lazy-image",{staticClass:"product-logo__inner",attrs:{src:e.img,size:{w:80,h:80}}})],1),r("div",{staticClass:"w-145"},[r("div",{staticClass:"product-config"},[r("div",{staticClass:"ent-font-bold"},[t._v(t._s(e.productName))]),r("div",[t._v(t._s(e.configuration)+" "+t._s(e.colorName))])])]),r("div",{staticClass:"product-price w-160"},[t.isPass?[r("div",{staticClass:"lh-26"},[t._v("意向单价：￥"+t._s(t._f("priceFormat")(e.purposePrice)))]),r("div",{staticClass:"lh-26"},[t._v("成交单价：￥"+t._s(t._f("priceFormat")(e.bargainPrice)))])]:[r("div",{staticClass:"lh-26"},[t._v("商品单价：￥"+t._s(t._f("priceFormat")(e.priceSell)))]),r("div",{staticClass:"lh-26"},[t._v("意向单价：￥"+t._s(t._f("priceFormat")(e.purposePrice)))])]],2),r("div",{staticClass:"product-num w-80 center"},[t._v("x"+t._s(e.productAmount))]),r("div",{staticClass:"product-amount"},[t._v("\n            "+t._s(t.isPass?"成交":"意向")+"总价:\n            "),r("span",{staticClass:"ent-font-bold product-amount__inner"},[t._v("￥"+t._s(t._f("priceFormat")(t.isPass?e.bargainPrice*e.productAmount:e.purposePrice*e.productAmount)))])])])})):"commodity"===t.type?[r("div",{staticClass:"product-wrapper"},[t._l(t.productList,(function(e){return r("div",{key:e.id,staticClass:"product"},[r("div",{staticClass:"product-logo w-160"},[r("lazy-image",{staticClass:"product-logo__inner",attrs:{src:e.img,size:{w:80,h:80}}})],1),r("div",{staticClass:"w-145"},[r("div",{staticClass:"product-config"},[r("div",{staticClass:"ent-font-bold"},[t._v(t._s(e.productName))]),r("div",[t._v(t._s(e.configuration)+" "+t._s(e.colorName))])])]),"agentSubmitOrder"!==t.pageType?r("div",{staticClass:"product-price w-120"},[t._v("\n              ￥"+t._s(t._f("priceFormat")(e.bargainPrice))+"\n            ")]):r("div",{staticClass:"product-price w-120"},[t._v("￥"+t._s(t._f("priceFormat")(e.priceSell)))]),r("div",{staticClass:"w-80"},[t._v("x"+t._s(e.productAmount))]),r("div",{staticClass:"product-amount w-160 center"},[t._v("\n              总价：\n              "),"agentSubmitOrder"!==t.pageType?r("span",{staticClass:"ent-font-bold product-amount__inner"},[t._v("\n                ￥"+t._s(t._f("priceFormat")(e.bargainPrice*e.productAmount))+"\n              ")]):r("span",{staticClass:"ent-font-bold product-amount__inner"},[t._v("\n                ￥"+t._s(t._f("priceFormat")(e.priceSell*e.productAmount))+"\n              ")])])])})),"intent"!==t.type&&t.resourceOrder?[r("div",{staticClass:"resource-info"},[r("div",[t._v(t._s(t.resourceOrder.resourceName))]),r("div",[t._v("版本号："+t._s(t.resourceOrder.version))])]),r("div",{staticClass:"order-amount"},[r("div",[t._v("\n                总价："),r("span",{staticClass:"ent-font-bold order-amount__inner"},[t._v("\n                  ￥"+t._s(t._f("priceFormat")(t.orderData.productOrderMoney))+"\n                ")])])])]:t._e()],2)]:[r("div",{staticClass:"resource-wrapper"},[r("div",[t._v("资源名称："+t._s(t.orderData.resourceName))]),r("div",[t._v("版本号："+t._s(t.orderData.version))])])]],2),r("div",{staticClass:"order-action-wrapper"},[t._t("action")],2)])])},n=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),a=(r("7f7f"),r("bd86")),o=r("13f8"),c=r("2f62"),u=r("4bab"),l=r("fa7d");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={intent:"意向单号",resource:"资源订单号",commodity:"商品订单号"},m={filters:{priceFormat:function(t){return(t/100).toFixed(2)}},components:{LazyImage:o["a"]},props:{type:{type:String,default:"intent"},statusText:{type:String,default:"待关联资源"},orderData:{type:Object}},data:function(){return{customerInfo:null,corporateRule:{required:{required:!0}},test:!0}},computed:d({},Object(c["e"])({userInfo:function(t){return t.user.userInfo}}),{productList:function(){return this.orderData.productOrderDetails},resourceOrder:function(){return this.orderData.resourceOrderVO},statusClass:function(){var t=["ent-font-bold"];return(2===this.orderData.status||"commodity"===this.type&&this.orderData.resourceOrderVO&&2===this.resourceOrder.status)&&t.push("danger"),t},corporateName:function(){var t=this.$route.name;return"agentSubmitOrder"===t?this.orderData.proxyCorporateName:this.orderData.commonData},isAgent:function(){return 2===this.userInfo.role},isPass:function(){return 0!==this.orderData.status&&2!==this.orderData.status},orderCode:function(){return"resource"===this.type?"".concat(p[this.type],"：").concat(this.orderData.orderId):"".concat(p[this.type],"：").concat(this.orderData.productOrderSn)},createTime:function(){return"resource"===this.type?this.timeFormat(this.orderData.gmtCreate,"YYYY-MM-DD"):this.timeFormat(this.orderData.createTime,"YYYY-MM-DD")},pageType:function(){return this.$route.name},detailAddress:function(){if(this.customerInfo){var t=this.customerInfo,e=t.contactAddrProvince,r=t.contactAddrCity,i=t.contactAddrDetail;return e+r+i}return""}}),methods:{timeFormat:l["c"],handleCustomerInfo:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.customerInfo){t.next=5;break}return t.next=3,u["a"].getCorporateDetail({corporateId:this.orderData.corporateId});case 3:e=t.sent,this.customerInfo=e.data;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},h=m,v=(r("3c99"),r("2877")),g=Object(v["a"])(h,i,n,!1,null,"10716baa",null);e["a"]=g.exports},"5cc8":function(t,e,r){"use strict";var i=r("1bf0"),n=r.n(i);n.a},"65ed":function(t,e,r){"use strict";var i=r("bf31"),n=r.n(i);n.a},"74a8":function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{staticClass:"custom-dialog",attrs:{visible:t.isVisible,width:t.width,"close-on-click-modal":!1},on:{"update:visible":function(e){t.isVisible=e}}},[t.title?r("div",{staticClass:"custom-dialog__title ent-font-bold"},[t._v(t._s(t.title))]):t._e(),t._t("default"),r("template",{slot:"footer"},[t._t("footer")],2)],2)},n=[],s={props:{visible:{type:Boolean,default:!1},width:{type:String,default:"620px"},title:{type:String}},data:function(){return{isVisible:!1}},watch:{visible:{handler:function(t){this.isVisible=t},immediate:!0},isVisible:function(t){this.$emit("update:visible",t)}}},a=s,o=(r("941b"),r("2877")),c=Object(o["a"])(a,i,n,!1,null,"9d15d352",null);e["a"]=c.exports},"8c14":function(t,e,r){"use strict";var i=r("e6e6"),n=r.n(i);n.a},"941b":function(t,e,r){"use strict";var i=r("e5e4"),n=r.n(i);n.a},9560:function(t,e,r){"use strict";var i=r("b775");e["a"]={getResourceInfo:Object(i["a"])("/resource/getOrderDetail"),getResourceList:Object(i["a"])("/resource/getResourceOrderList"),updateResourceStatus:Object(i["b"])("/resource/updateOrderStatus")}},9669:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("custom-dialog",{attrs:{visible:t.visible,width:"620px"},on:{"update:visible":function(e){t.visible=e}}},[r("div",{staticClass:"check-result-form"},[r("div",{staticClass:"form-title ent-font-bold"},[t._v("提交验收结果")]),r("div",{staticClass:"form-content"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"140px","label-position":"left"}},[r("el-form-item",{attrs:{label:"验收结果",prop:"status"}},[r("el-select",{staticStyle:{width:"180px"},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}},[r("el-option",{attrs:{label:"不通过",value:7}}),r("el-option",{attrs:{label:"通过",value:8}})],1)],1),7===t.form.status?[r("el-form-item",{attrs:{label:"不通过原因说明",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入不通过原因"},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1)]:t._e(),r("el-form-item",{attrs:{label:"您的姓名",prop:"operateUser"}},[r("el-input",{attrs:{placeholder:"请输入您的姓名"},model:{value:t.form.operateUser,callback:function(e){t.$set(t.form,"operateUser",e)},expression:"form.operateUser"}})],1),r("el-form-item",{attrs:{label:"您的联系方式",prop:"operateTel"}},[r("el-input",{attrs:{placeholder:"请输入您的联系方式"},model:{value:t.form.operateTel,callback:function(e){t.$set(t.form,"operateTel",e)},expression:"form.operateTel"}})],1),7===t.form.status?r("el-form-item",{attrs:{label:"是否修改定制资源"}},[r("el-button",{attrs:{type:"primary"},on:{click:t.handleEditResource}},[t._v("去修改")])],1):t._e()],2)],1)]),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),r("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSubmit}},[t._v("确认")])],1)])},n=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("96cf"),r("3b8d")),a=r("bd86"),o=r("74a8"),c=r("9560"),u=r("fa7d"),l=r("2f62");function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var p={components:{CustomDialog:o["a"]},props:{showDialog:{type:Boolean,default:!1},editData:{type:Object}},data:function(){return{visible:this.showDialog,loading:!1,form:{status:8,remark:"",operateUser:"",operateTel:""},rules:{status:[{required:!0,message:"请选择验收结果",trigger:"blur"}],operateUser:[{required:!0,message:"请输入您的姓名",trigger:["blur","change"]}],operateTel:[{required:!0,message:"请输入您的联系方式",trigger:["blur","change"]},{validator:u["a"],trigger:"blur"}]}}},watch:{showDialog:function(t){this.visible=t},visible:function(t){var e=this;t?this.$nextTick((function(){e.$refs.form.clearValidate()})):this.$refs.form.resetFields(),this.$emit("update:showDialog",t)},"form.status":function(){this.$refs.form.clearValidate()}},computed:d({},Object(l["e"])({userInfo:function(t){return t.user.userInfo}}),{resourceId:function(){return this.editData.resourceOrderId?this.editData.resourceOrderId:this.editData.id}}),methods:{handleSubmit:function(){var t=this;this.$refs.form.validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=11;break}return e.prev=1,t.loading=!0,e.next=5,c["a"].updateResourceStatus(d({},t.form,{resourceId:t.resourceId}));case 5:t.$message({type:"success",message:"提交成功"}),t.$emit("refresh"),t.visible=!1;case 8:return e.prev=8,t.loading=!1,e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,,8,11]])})));return function(t){return e.apply(this,arguments)}}())},handleEditResource:function(){var t=this;this.$refs.form.validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r&&t.$msgbox({type:"warning",title:"提示",message:"是否确认验收不通过？",confirmButtonText:"确认",showCancelButton:!0,beforeClose:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r,i,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("confirm"!==r){e.next=13;break}return i.confirmButtonLoading=!0,e.prev=2,e.next=5,c["a"].updateResourceStatus(d({},t.form,{resourceId:t.resourceId}));case 5:t.$router.push({name:2===t.userInfo.role?"store-order":"store-custom",query:{id:2===t.userInfo.role?t.editData.id:t.resourceId}}),t.visible=!1,n();case 8:return e.prev=8,i.confirmButtonLoading=!1,e.finish(8);case 11:e.next=14;break;case 13:i.confirmButtonLoading?t.$message({type:"warning",message:"提交验收结果中"}):n();case 14:case"end":return e.stop()}}),e,null,[[2,,8,11]])})));function r(t,r,i){return e.apply(this,arguments)}return r}()});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}},m=p,h=(r("5cc8"),r("2877")),v=Object(h["a"])(m,i,n,!1,null,"604372ce",null);e["a"]=v.exports},a00f:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("custom-dialog",{attrs:{visible:t.visible,width:"506px"},on:{"update:visible":function(e){t.visible=e}}},[r("div",{staticClass:"confirm-delivery-form"},[r("div",{staticClass:"form-title ent-font-bold"},[t._v(t._s(t.title))]),r("div",{staticClass:"form-content"},[t._v(t._s(t.content))])]),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),r("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSubmit}},[t._v("确认")])],1)])},n=[],s=(r("96cf"),r("3b8d")),a=r("74a8"),o={name:"ConfirmForm",components:{CustomDialog:a["a"]},props:{showDialog:{type:Boolean,default:!1},title:{type:String},content:{type:String}},methods:{handleSubmit:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.loading=!0,this.$emit("confirm");case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},data:function(){return{loading:!1,visible:this.showDialog}},watch:{showDialog:{handler:function(t){this.visible=t},immediate:!0},visible:function(t){t||(this.loading=!1),this.$emit("update:showDialog",t)}}},c=o,u=(r("65ed"),r("2877")),l=Object(u["a"])(c,i,n,!1,null,"31590479",null);e["a"]=l.exports},be9e:function(t,e,r){"use strict";var i=r("b775");e["a"]={getProvinceList:Object(i["a"])("/tool/listProvince"),getCityList:Object(i["a"])("/tool/listCity"),getAgentInfo:Object(i["a"])("/common/getAgentInfo"),getImeiTemplate:Object(i["a"])("/openidUpload/getTemplateUrl"),uploadImeiByCustom:Object(i["b"])("/openidUpload/consumerUpload"),uploadImeiByAgent:Object(i["b"])("/openidUpload/agentUpload"),getImeiList:Object(i["a"])("/openidUpload/getImei"),downloadImeiFile:Object(i["a"])("/openidUpload/getImeiFile",{},{responseType:"blob"})}},bf31:function(t,e,r){},e5e4:function(t,e,r){},e6e6:function(t,e,r){},f781:function(t,e,r){},fa7d:function(t,e,r){"use strict";r.d(e,"c",(function(){return s})),r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return o}));r("a481"),r("4917"),r("3b2b");var i=r("5a0c"),n=r.n(i);function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return t?n()(t).format(e):""}function a(t,e,r){var i=/^[1]([3-9])[0-9]{9}$/,n=/^0[1-9][0-9]{1,2}[2-8][0-9]{6,7}$/;i.test(e)||n.test(e)?r():r(new Error("请输入正确的联系方式"))}function o(t,e){var r=document.createElement("a");r.href=t,e&&(r.download=e),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}},fe93:function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("custom-dialog",{attrs:{visible:t.visible,width:"620px"},on:{"update:visible":function(e){t.visible=e}}},[t.showError?r("div",{staticClass:"error-form"},[r("div",{staticClass:"form-header-title ent-font-bold"},[t._v("提示错误")]),r("div",{staticClass:"form-content"},[r("div",[t._v("以下IMEI号不属于企业定制渠道，请重新提交：")]),r("div",{staticClass:"form-content__inner"},[t._l(t.errorList,(function(e){return[r("div",{key:e,staticClass:"error-info"},[t._v(t._s(e))])]}))],2)])]):r("div",{staticClass:"iemi-form"},[r("div",{staticClass:"form-header"},[r("div",{staticClass:"form-header-title ent-font-bold"},[t._v(t._s(t.meta)+"号")]),r("div",[r("el-button",{attrs:{type:"text"},on:{click:t.switchFormType}},[t._v(t._s(this.isImei?"我有openid":"我有IMEI号"))])],1)]),r("div",{staticClass:"form-content"},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"120px","label-position":"left","validate-on-rule-change":!1}},["test"===this.formType||"all"===this.formType?r("el-form-item",{staticClass:"mb-35",attrs:{label:"测试"+t.meta+"号",prop:"testIdList"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:4},placeholder:"请输入机型和测试"+t.meta+"号，每行填写一条，最多填写10条，参考格式：机型-"+t.meta+"号"},model:{value:t.form.testIdList,callback:function(e){t.$set(t.form,"testIdList",e)},expression:"form.testIdList"}})],1):t._e(),"full"===this.formType||"all"===this.formType?r("el-form-item",{staticClass:"mb-35",attrs:{label:"全量"+t.meta+"号",prop:"fullIdList"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:4},placeholder:"请手动填写或批量上传，每行填写一条，参考格式：'机型-"+t.meta+"号'"},model:{value:t.form.fullIdList,callback:function(e){t.$set(t.form,"fullIdList",e)},expression:"form.fullIdList"}}),"test"!==t.formType?[r("div",{staticClass:"action-btn"},[r("oss-file-uploader",{ref:"upload",staticClass:"inline",attrs:{"file-list":t.fileList,limit:1,accept:".xlsx",multiple:!1,"service-name":"customize-store","on-success":function(e,r,i){return t.fileSuccess(e,r,i)},"on-remove":t.fileRemove}},[r("el-button",{staticClass:"action-btn-item",attrs:{type:"primary"}},[t._v("上传")])],1),r("el-button",{staticClass:"action-btn-item action-btn-down",attrs:{type:"text"},on:{click:t.handleDownload}},[t._v("下载模板")])],1)]:t._e()],2):t._e()],1)],1)]),t.showError?r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.showError=!1}}},[t._v("返回")])],1):r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")]),r("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.handleSubmit}},[t._v("确定")])],1)])},n=[],s=(r("8e6e"),r("456d"),r("b54a"),r("a481"),r("96cf"),r("3b8d")),a=r("bd86"),o=(r("ac6a"),r("28a5"),r("74a8")),c=r("aa51"),u=r("be9e"),l=r("2f62"),f=r("fa7d");function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(r,!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){e||r();var i=e.trim().split("\n"),n=/^[^-]+-[0-9]{1,}$/;i.forEach((function(t){n.test(t)||r(new Error("请输入正确的IMEI号，格式为机型-IMEI号，请重新输入"))})),r()}function h(t,e,r){e||r();var i=e.trim().split("\n"),n=/^[^-]+-[a-zA-Z0-9]{1,}$/;i.forEach((function(t){n.test(t)||r(new Error("请输入正确的openid号，格式为机型-openid号，请重新输入"))})),r()}var v={components:{CustomDialog:o["a"],OssFileUploader:c["a"]},props:{showDialog:{type:Boolean,default:!1},formType:{type:String,default:"test"},editData:{type:Object}},data:function(){return{visible:!1,isImei:!0,showError:!1,loading:!1,form:{testIdList:"",fullIdList:"",idFileUrl:""},fileList:[],errorList:[]}},watch:{showDialog:{handler:function(t){this.visible=t},immediate:!0},visible:function(t){t||(this.loading=!1,this.$refs.form&&this.$refs.form.resetFields(),"test"!==this.formType&&this.resetFile()),this.$emit("update:showDialog",t)},isImei:function(){var t=this;this.$nextTick((function(){t.form=p({},t.$options.data().form),t.$refs.form.resetFields()})),"test"!==this.formType&&this.resetFile()},"form.testIdList":function(t){this.form.testIdList=this.formatImeiList(t)},"form.fullIdList":function(t){this.form.fullIdList=this.formatImeiList(t)},"form.idFileUrl":function(t){t&&!this.form.fullIdList&&this.$refs.form.fields.forEach((function(t){"fullIdList"===t.prop&&t.clearValidate()}))}},computed:p({},Object(l["e"])({userInfo:function(t){return t.user.userInfo}}),{meta:function(){return this.isImei?"IMEI":"openid"},idType:function(){return this.isImei?0:1},uploadImeiApi:function(){return 2===this.userInfo.role?u["a"].uploadImeiByAgent:u["a"].uploadImeiByCustom},id:function(){return this.editData.resourceOrderId?this.editData.resourceOrderId:this.editData.id},rules:function(){var t=this;return{testIdList:[{required:!0,message:"请输入机型和测试".concat(this.meta,"号，每行填写一条，最多填写10条，参考格式：机型-").concat(this.meta,"号"),trigger:["blur","change"]},{validator:function(e,r,i){r?(r=r.trim(),r.split("\n").length>10?i(new Error("最多输入10个".concat(t.meta,"号"))):i()):i()},trigger:["blur","change"]},{validator:this.isImei?m:h,trigger:"blur"}],fullIdList:[{required:!0,validator:function(e,r,i){r?i():t.form.idFileUrl?i():i(new Error("请手动填写或批量上传，每行填写一条，参考格式：机型-".concat(t.meta,"号")))},trigger:["blur","change"]},{validator:this.isImei?m:h,trigger:"blur"}]}}}),methods:{simulateClick:f["b"],handleSubmit:function(){var t=this;this.$refs.form.validate(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!r){e.next=22;break}if(e.prev=1,t.loading=!0,2===t.userInfo.role){e.next=8;break}return e.next=6,t.uploadImeiApi(p({},t.form,{testIdList:t.form.testIdList.trim().replace(/\n/g,","),fullIdList:t.form.fullIdList?t.form.fullIdList.trim().replace(/\n/g,","):"",idType:t.idType,id:t.id}),{"Content-Type":"application/x-www-form-urlencoded"});case 6:e.next=10;break;case 8:return e.next=10,t.uploadImeiApi({id:t.id,idType:t.idType,isFullData:"full"===t.formType?1:0,idList:"full"===t.formType?t.form.fullIdList.trim().replace(/\n/g,","):t.form.testIdList.trim().replace(/\n/g,","),idFileUrl:t.form.idFileUrl},{"Content-Type":"application/x-www-form-urlencoded"});case 10:t.$message({type:"success",message:"".concat(t.meta,"号上传成功")}),t.$emit("refresh"),t.visible=!1,e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](1),t.showError=!0,t.errorList=e.t0.data;case 19:return e.prev=19,t.loading=!1,e.finish(19);case 22:case"end":return e.stop()}}),e,null,[[1,15,19,22]])})));return function(t){return e.apply(this,arguments)}}())},formatImeiList:function(t){return t=t.replace(/^\n|^-|[^a-zA-Z0-9-|^\n|^ ]/g,""),t=t.replace(/\n{2,}/g,"\n"),t},switchFormType:function(){this.isImei=!this.isImei},resetFile:function(){this.form.idFileUrl="",this.$refs.upload.$refs.upload.clearFiles()},handleDownload:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].getImeiTemplate({idType:this.idType});case 2:if(e=t.sent,e.data){t.next=6;break}return this.$message({type:"error",message:"没有可用的模板"}),t.abrupt("return");case 6:this.templateUrl=e.data,this.simulateClick(this.templateUrl);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fileSuccess:function(t,e,r){var i=e.raw.link;this.form.idFileUrl=i,this.fileList=r},fileRemove:function(){this.form.idFileUrl=""}}},g=v,b=(r("39c5"),r("2877")),y=Object(b["a"])(g,i,n,!1,null,"adb0eb94",null);e["a"]=y.exports}}]);
//# sourceMappingURL=myOrder~resourceOrder.8b512573.js.map


