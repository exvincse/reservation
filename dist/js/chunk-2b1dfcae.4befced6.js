(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b1dfcae"],{"01fc":function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,n=t._self._c||a;return t.datashow?n("div",[n("header",{staticClass:"light-box mb-5"},[n("div",{staticClass:"header-title px-2"},[t._v("WhiteSpace")]),n("div",{staticClass:"header-linear"}),n("div",{staticClass:"d-flex flex-row"},[n("div",{staticClass:"room-bg",staticStyle:{height:"596px",width:"65%"},style:{backgroundImage:"url("+t.room.imageUrl[0]+")"}}),n("div",{staticClass:"d-flex flex-column",staticStyle:{width:"35%"}},[n("div",{staticClass:"room-bg",staticStyle:{height:"298px"},style:{backgroundImage:"url("+t.room.imageUrl[1]+")"}}),n("div",{staticClass:"room-bg",staticStyle:{height:"298px"},style:{backgroundImage:"url("+t.room.imageUrl[2]+")"}})]),n("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.showMultiple()}}})]),n("VueEasyLightbox",{attrs:{visible:t.visible,imgs:t.imgs,index:t.index},on:{hide:t.handleHide}},[n("div",[t._v("123")])])],1),n("section",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"d-flex"},[n("div",{staticClass:"room-msg"},[n("div",{staticClass:"d-flex justify-content-between"},[n("div",{staticClass:"mb-5"},[n("h2",{staticClass:"title mb-5"},[t._v(t._s(t.room.name))]),n("div",{staticClass:"mb-2"},[t._v("房客人數限制： "+t._s(t.room.descriptionShort.GuestMin)+"~"+t._s(t.room.descriptionShort.GuestMax)+" 人")]),"Single Room"===t.room.name?n("div",{staticClass:"mb-2"},[t._v("床型：單人房")]):"Twin Room"===t.room.name?n("div",{staticClass:"mb-2"},[t._v("床型：雙床雙人房")]):"Double Room"===t.room.name?n("div",{staticClass:"mb-2"},[t._v("床型：雙人房")]):"Deluxe Single Room"===t.room.name?n("div",{staticClass:"mb-2"},[t._v("床型：豪華單人房")]):"Deluxe Twin Room"===t.room.name?n("div",{staticClass:"mb-2"},[t._v("床型：豪華雙床雙人房")]):"Deluxe Double Room"===t.room.name?n("div",{staticClass:"mb-2"},[t._v("床型：豪華單床雙人房")]):t._e(),n("div",{staticClass:"mb-2"},[t._v("衛浴數量： "+t._s(t.room.descriptionShort["Private-Bath"])+" 間")]),n("div",[t._v("房間大小： "+t._s(t.room.descriptionShort.Footage)+" 平方公尺")])])]),n("p",{staticClass:"description mb-4"},[t._v("\n              "+t._s(t.room.description)+"\n            ")]),n("div",{staticClass:"room-mark mb-4"},[t._v("\\ \\ \\")]),n("div",{staticClass:"checktime mb-5"},[n("div",{staticClass:"checkin d-inline-block"},[n("span",{staticClass:"checktitle"},[t._v("Check In")]),n("div",{staticClass:"time"},[t._v(t._s(t.room.checkInAndOut.checkInEarly)+"  —  "+t._s(t.room.checkInAndOut.checkInLate))])]),n("div",{staticClass:"d-inline-block"},[n("span",{staticClass:"checktitle"},[t._v("Check Out")]),n("div",{staticClass:"time"},[t._v(t._s(t.room.checkInAndOut.checkOut))])])]),n("div",{staticClass:"amenities container py-3 mb-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-4 mb-4",class:{iconcolor:!t.room.amenities["Wi-Fi"]}},[n("i",{staticClass:"fas fa-wifi fa-lg mr-2"}),n("span",[t._v("Wi-Fi")])]),n("div",{staticClass:"col-4",class:{iconcolor:!t.room.amenities["Room-Service"]}},[n("i",{staticClass:"fas fa-phone fa-lg mr-2"}),n("span",[t._v("電話")])]),n("div",{staticClass:"col-4",class:{iconcolor:!t.room.amenities["Great-View"]}},[n("i",{staticClass:"fas fa-mountain fa-lg mr-2"}),n("span",[t._v("漂亮的視野")])]),n("div",{staticClass:"col-4 mb-4",class:{iconcolor:!t.room.amenities.Breakfast}},[n("i",{staticClass:"fas fa-utensils fa-lg mr-2"}),n("span",[t._v("早餐")])]),n("div",{staticClass:"col-4",class:{iconcolor:!t.room.amenities["Air-Conditioner"]}},[n("i",{staticClass:"fas fa-wind fa-lg mr-2"}),n("span",[t._v("空調")])]),n("div",{staticClass:"col-4",class:{iconcolor:!t.room.amenities["Smoke-Free"]}},[n("i",{staticClass:"fas fa-smoking-ban fa-lg mr-2"}),n("span",[t._v("禁止吸煙")])]),n("div",{staticClass:"col-4 mb-4",class:{iconcolor:!t.room.amenities["Mini-Bar"]}},[n("i",{staticClass:"fas fa-glass-martini-alt fa-lg mr-2"}),n("span",[t._v("Mini Bar")])]),n("div",{staticClass:"col-4",class:{iconcolor:!t.room.amenities.Refrigerator}},[t.room.amenities.Refrigerator?n("img",{staticClass:"mr-2",attrs:{src:e("4b94"),width:"30px",height:"30px",alt:""}}):n("img",{staticClass:"mr-2",attrs:{src:e("9416"),width:"30px",height:"30px",alt:""}}),n("span",[t._v("冰箱")])]),n("div",{staticClass:"col-4",class:{iconcolor:!t.room.amenities["Child-Friendly"]}},[n("i",{staticClass:"fas fa-baby fa-lg mr-2"}),n("span",[t._v("適合兒童")])]),n("div",{staticClass:"col-4",class:{iconcolor:!t.room.amenities["Room-Service"]}},[n("i",{staticClass:"fas fa-concierge-bell fa-lg mr-2"}),n("span",[t._v("Room Service")])]),n("div",{staticClass:"col-4",class:{iconcolor:!t.room.amenities.Sofa}},[n("i",{staticClass:"fas fa-couch fa-lg mr-2"}),n("span",[t._v("沙發")])]),n("div",{staticClass:"col-4",class:{iconcolor:!t.room.amenities["Pet-Friendly"]}},[n("i",{staticClass:"fas fa-dog fa-lg mr-2"}),n("span",[t._v("寵物攜帶")])])])])])])]),n("div",{staticClass:"col-lg-2"},[n("div",{staticClass:"dayprice text-right"},[n("div",{staticClass:"normalday-price"},[t._v("NT."+t._s(t.room.normalDayPrice))]),n("span",{staticClass:"normalday"},[t._v("平日(一~四)")]),n("div",{staticClass:"holiday-price"},[t._v("NT."+t._s(t.room.holidayPrice))]),n("span",{staticClass:"holiday"},[t._v("假日(五~日)")])])]),n("div",{staticClass:"col-lg-4"},[n("datepeacker",{ref:"date",staticClass:"mb-4",attrs:{bad:t.bad}}),t._m(0),n("span",{staticClass:"d-inline-block"},[t._v("可預約時間為現在時間後推90天左右")]),n("span",{staticClass:"mb-4 d-inline-block"},[t._v("如果被預約超過90天，就無法再訂房")]),n("div",{staticClass:"d-flex"},[t._m(1),n("div",{staticClass:"btn-time"},[n("button",{staticClass:"btn rounded-0",on:{click:function(a){return t.clear()}}},[t._v("測試清除預約")])])])],1)])]),n("div",{staticClass:"modal fade",attrs:{id:"Modal1",tabindex:"-1"}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content rounded-0"},[n("div",{staticClass:"modal-header p-4"},[n("h5",{staticClass:"modal-title",attrs:{id:"ModalLabel"}},[t._v("預約時段")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(a){return t.errors.clear()}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("div",{staticClass:"px-4 pt-4"},[t._v("\\ \\ \\")]),n("div",[n("form",{staticClass:"p-4"},[n("div",{staticClass:"form-group d-flex flex-wrap align-items-center"},[n("label",{staticClass:"col-form-label label-w",attrs:{for:"inputEmail3"}},[t._v("姓名")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"},{name:"validate",rawName:"v-validate.persist",value:"required",expression:"'required'",modifiers:{persist:!0}}],staticClass:"form-control w-75",class:{"is-invalid":t.errors.has("name")},attrs:{type:"text",id:"inputEmail3",name:"name",placeholder:"輸入姓名"},domProps:{value:t.name},on:{input:function(a){a.target.composing||(t.name=a.target.value)}}}),t.errors.has("name")?n("div",{staticClass:"text-danger text-center w-100"},[t._v("姓名不得為空")]):t._e()]),n("div",{staticClass:"form-group d-flex flex-wrap align-items-center"},[n("label",{staticClass:"col-form-label label-w",attrs:{for:"inputPassword3"}},[t._v("電話")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"},{name:"validate",rawName:"v-validate.persist",value:"required",expression:"'required'",modifiers:{persist:!0}}],staticClass:"form-control w-75",class:{"is-invalid":t.errors.has("phone")},attrs:{type:"phone",id:"inputPassword3",name:"phone",placeholder:"輸入電話"},domProps:{value:t.phone},on:{input:function(a){a.target.composing||(t.phone=a.target.value)}}}),t.errors.has("phone")?n("span",{staticClass:"text-danger text-center w-100"},[t._v("電話不得為空")]):t._e()]),n("div",{staticClass:"form-group d-flex flex-wrap date-pos"},[n("label",{staticClass:"col-form-label label-w"},[t._v("預約起迄")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.startdata,expression:"startdata"},{name:"validate",rawName:"v-validate.persist",value:"required",expression:"'required'",modifiers:{persist:!0}}],staticClass:"form-control coustomdate",class:{"is-invalid":t.errors.has("start")},attrs:{type:"text",id:"inputEmail3",readonly:"readonly",name:"start",placeholder:"選擇訂房時間"},domProps:{value:t.startdata},on:{click:function(a){t.openstart=!t.openstart,t.openend=!1},input:function(a){a.target.composing||(t.startdata=a.target.value)}}}),t.errors.has("start")?n("span",{staticClass:"text-danger text-center w-100"},[t._v("訂房時間不得為空")]):t._e(),t.openstart?n("customdate",{staticClass:"start p-0",attrs:{bad:t.bad},on:{chooseday:t.startday}}):t._e()],1),n("div",{staticClass:"mx-3",staticStyle:{"line-height":"35px"}},[t._v("~")]),n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.enddata,expression:"enddata"},{name:"validate",rawName:"v-validate.persist",value:"required",expression:"'required'",modifiers:{persist:!0}}],staticClass:"form-control coustomdate",class:{"is-invalid":t.errors.has("end")},attrs:{type:"text",id:"inputEmail3",readonly:"readonly",name:"end",placeholder:"選擇訂房時間"},domProps:{value:t.enddata},on:{click:function(a){t.openend=!t.openend,t.openstart=!1},input:function(a){a.target.composing||(t.enddata=a.target.value)}}}),t.errors.has("end")?n("span",{staticClass:"text-danger"},[t._v("訂房時間不得為空")]):t._e(),t.openend?n("customdate",{staticClass:"end p-0",attrs:{bad:t.bad},on:{chooseday:t.endday}}):t._e()],1)])]),n("div",{staticClass:"total p-4"},[n("div",{staticClass:"d-flex justify-content-between"},[n("span",[t._v("平日時段")]),n("span",[t._v(t._s(t.normalDay)+"夜")])]),n("div",{staticClass:"d-flex justify-content-between"},[n("span",[t._v("假日時段")]),n("span",[t._v(t._s(t.holiDay)+"夜")])])]),n("div",{staticClass:"text-right p-4"},[n("span",{staticClass:"h3",staticStyle:{color:"#FF5C5C"}},[n("span",{staticClass:"m-5"},[t._v("=")]),t._v("NT."+t._s(t.normalDay*t.normalDayPrice+t.holiDay*t.holiDayPrice))])])]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"btn mr-auto rounded-0",staticStyle:{"background-color":"#D8D8D8"},attrs:{type:"button","data-dismiss":"modal"},on:{click:function(a){return t.errors.clear()}}},[t._v("取消")]),n("button",{staticClass:"btn rounded-0",staticStyle:{"background-color":"#484848",color:"#fff"},attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.checkrequest()}}},[t._v("確定預約")])])])])]),n("div",{staticClass:"modal fade",attrs:{id:"Modal2",tabindex:"-1"}},[n("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[n("div",{staticClass:"modal-content rounded-0"},[n("div",{staticClass:"modal-header flex-column px-4 pt-4"},[n("div",{staticClass:"d-flex justify-content-between align-items-center w-100 mb-3"},[t.success?n("h4",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("預約成功")]):n("h4",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("預約失敗")]),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"},on:{click:function(a){return t.getroom()}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),n("div",[t._v("\\ \\ \\")])]),n("div",{staticClass:"modal-body py-0 px-4"},[t.success?n("div",{staticClass:"room-bg mx-auto",staticStyle:{width:"60px",height:"60px"},style:{backgroundImage:"url("+e("d1ae")+")"}}):n("div",[t._v(t._s(t.errormsg))])]),n("div",{staticClass:"modal-footer"},[n("router-link",{staticClass:"btn btn-secondary rounded-0",staticStyle:{"background-color":"#484848",color:"#fff"},attrs:{to:"/",type:"button","data-dismiss":"modal"}},[t._v("回首頁")])],1)])])])]):t._e()},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex flex-wrap"},[e("span",{staticClass:"out d-inline-block",staticStyle:{width:"20px",height:"20px"}}),e("span",{staticClass:"d-inline-block"},[t._v("代表已被預約。")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"btn-time mr-3"},[e("button",{staticClass:"btn rounded-0",attrs:{"data-toggle":"modal","data-target":"#Modal1"}},[t._v("預約時段")]),e("div",{staticClass:"btn-bg"})])}],o=(e("8e6e"),e("456d"),e("7f7f"),e("ac6a"),e("6b54"),e("c5f6"),e("28a5"),e("bd86")),i=e("2f62"),r=e("1157"),c=e.n(r),l=e("825a"),d=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"calendar"},[e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("a",{staticClass:"h3 mb-0",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.lastYear(a)}}},[t._v("«")]),e("a",{staticClass:"h3 mb-0",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.lastMonth(a)}}},[t._v("‹")]),e("p",{staticClass:"h5 mb-0"},[t._v(t._s(t.nowdate.year)+"/"+t._s(t.nowdate.month+1))]),e("a",{staticClass:"h3 mb-0",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.nextMonth(a)}}},[t._v("›")]),e("a",{staticClass:"h3 mb-0",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.nextYear(a)}}},[t._v("»")])]),e("div",{staticClass:"d-flex justify-content-between text-center"},t._l(7,function(a,n){return e("div",{key:a,staticClass:"datewidth",class:{"text-danger":0===n||6===n}},[t._v(t._s(t.week(n)))])}),0),e("div",{staticClass:"d-flex flex-wrap justify-content-between text-center"},[t._l(t.lastMonthDays,function(a){return e("div",{key:a+100,staticClass:"none-week datewidth"},[t._v(t._s(t.lastmonthdate+a))])}),t._l(t.nowmonthdate,function(a){return e("div",{key:a,staticClass:"datewidth",class:{out:t.noclick(a)}},[t.dayoverflow(a-1)?e("span",{class:{"text-danger":t.holiday(a)}},[t._v(t._s(a))]):e("span",{staticClass:"none-week"},[t._v(t._s(a))])])}),t._l(42-t.lastMonthDays-t.nowmonthdate,function(a){return e("div",{key:a+200,staticClass:"none-week datewidth"},[t._v(t._s(a))])})],2)])])},h=[],u={props:["bad"],data:function(){return{nowdate:{},lastmonthday:0}},created:function(){this.nowdate=this.getdate(new Date);var t=this.everymonth(this.nowdate.year,this.nowdate.month);this.nowdate.date+1>t?(this.nowdate.month+=1,this.nowdate.date=1):this.nowdate.date+=1},computed:{lastMonthDays:function(){return this.nowmonthoneday()},nowmonthdate:function(){return this.everymonth(this.nowdate.year,this.nowdate.month)},lastmonthdate:function(){return this.monthoverflow(this.nowdate.year,this.nowdate.month)-this.nowmonthoneday()}},methods:{holiday:function(t){var a=new Date(this.nowdate.year,this.nowdate.month,t).getDay();return Boolean(6===a||0===a)},week:function(t){switch(t){case 0:return"日";case 1:return"一";case 2:return"二";case 3:return"三";case 4:return"四";case 5:return"五";case 6:return"六";default:return!1}},dayoverflow:function(t){var a=this.getdate(new Date),e=a.month+3,n=a.year;return e>11&&(e-=12,n+=1),!(this.nowdate.year===a.year&&this.nowdate.month<a.month)&&(this.nowdate.month===a.month&&this.nowdate.year===a.year?Boolean(a.date<=t):(e<this.nowdate.month||a.date>=t)&&this.nowdate.year===n?!(this.nowdate.month>e):(e<this.nowdate.month||a.date>=t)&&this.nowdate.year===a.year||(this.nowdate.month<e||a.date>=t)&&this.nowdate.year===n&&!(this.nowdate.month>e))},noclick:function(t){var a=this,e=this.bad,n=null,s=null;s=t<10?"0".concat(t):"".concat(t),n=this.nowdate.month+1<10?"0".concat(this.nowdate.month+1):"".concat(this.nowdate.month+1);var o=e.filter(function(e){if(null===t)return!1;var o=e.split("-");return o[0]===a.nowdate.year.toString()&&o[1]===n.toString()&&o[2]===s});return Boolean(0!==o.length)},getdate:function(t){return{year:t.getFullYear(),month:t.getMonth(),day:t.getDay(),date:t.getDate()}},monthoverflow:function(t,a){return 0===a?this.everymonth(t-1,11):this.everymonth(t,a-1)},everymonth:function(t,a){var e=t%4===0&&(t%100!==0||t%400===0),n=[31,28,31,30,31,30,31,31,30,31,30,31];return e&&1===a?29:n[a]},nowmonthoneday:function(){return new Date(this.nowdate.year,this.nowdate.month,1).getDay()},lastMonth:function(){0===this.nowdate.month?(this.nowdate.month=11,this.nowdate.year-=1):this.nowdate.month-=1},nextMonth:function(){11===this.nowdate.month?(this.nowdate.month=0,this.nowdate.year+=1):this.nowdate.month+=1},lastYear:function(){this.nowdate.year-=1},nextYear:function(){this.nowdate.year+=1}}},m=u,f=e("2877"),v=Object(f["a"])(m,d,h,!1,null,null,null),p=v.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"calendar"},[e("div",{staticClass:"d-flex align-items-center justify-content-between"},[e("a",{staticClass:"h3 mb-0",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.lastYear(a)}}},[t._v("«")]),e("a",{staticClass:"h3 mb-0",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.lastMonth(a)}}},[t._v("‹")]),e("p",{staticClass:"h5 mb-0"},[t._v(t._s(t.nowdate.year)+"/"+t._s(t.nowdate.month+1))]),e("a",{staticClass:"h3 mb-0",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.nextMonth(a)}}},[t._v("›")]),e("a",{staticClass:"h3 mb-0",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.nextYear(a)}}},[t._v("»")])]),e("div",{staticClass:"d-flex justify-content-between text-center"},t._l(7,function(a,n){return e("div",{key:a,staticClass:"datewidth",class:{"text-danger":0===n||6===n}},[t._v(t._s(t.formatWeek(n)))])}),0),e("div",{staticClass:"d-flex flex-wrap justify-content-between align-items-center text-center"},[t._l(t.lastMonthDays,function(a){return e("div",{key:a+100,staticClass:"none-week datewidth"},[t._v(t._s(t.lastmonthdate+a))])}),t._l(t.nowmonthdate,function(a){return e("div",{key:a,staticClass:"datewidth",class:{out:t.noclick(a)}},[t.dayoverflow(a-1)?e("div",[t.noclick(a)?e("span",[t._v(t._s(a))]):e("a",{staticClass:"coustom-click d-block",class:{"text-danger":t.holiday(a)},attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.clickday(a)}}},[t._v(t._s(a))])]):e("span",{staticClass:"none-week"},[t._v(t._s(a))])])}),t._l(42-t.lastMonthDays-t.nowmonthdate,function(a){return e("div",{key:a+200,staticClass:"none-week datewidth"},[t._v(t._s(a))])})],2)])])},g=[],w={props:["bad"],data:function(){return{nowdate:{},lastmonthday:0,chooseday:""}},created:function(){this.nowdate=this.getdate(new Date);var t=this.everymonth(this.nowdate.year,this.nowdate.month);this.nowdate.date+1>t?(this.nowdate.month+=1,this.nowdate.date=1):this.nowdate.date+=1},computed:{lastMonthDays:function(){return this.nowmonthoneday()},nowmonthdate:function(){return this.everymonth(this.nowdate.year,this.nowdate.month)},lastmonthdate:function(){return this.monthoverflow(this.nowdate.year,this.nowdate.month)-this.nowmonthoneday()}},methods:{hoverday:function(t){return this.startdata.split("-")[2]===t.toString()},holiday:function(t){var a=new Date(this.nowdate.year,this.nowdate.month,t).getDay();return Boolean(6===a||0===a)},noclick:function(t){var a=this,e=this.bad,n="",s=t;s<10&&(s="0".concat(s)),n=this.nowdate.month+1<10?"0".concat(this.nowdate.month+1):"".concat(this.nowdate.month+1);var o=e.filter(function(t){if(void 0===s)return!1;var e=t.split("-");return e[0]===a.nowdate.year.toString()&&e[1]===n.toString()&&e[2]===s.toString()||null});return Boolean(0!==o.length)},clickday:function(t){var a=null,e=null;a=this.nowdate.month+1<10?"0".concat(this.nowdate.month+1):"".concat(this.nowdate.month+1),e=t<10?"0".concat(t):"".concat(t),this.chooseday!=="".concat(this.nowdate.year,"-").concat(a,"-").concat(e)&&(this.chooseday="".concat(this.nowdate.year,"-").concat(a,"-").concat(e),this.$emit("chooseday",this.chooseday,!1))},formatWeek:function(t){switch(t){case 0:return"日";case 1:return"一";case 2:return"二";case 3:return"三";case 4:return"四";case 5:return"五";case 6:return"六";default:return!1}},dayoverflow:function(t){var a=this.getdate(new Date),e=a.month+3,n=a.year;return e>11&&(e-=12,n+=1),!(this.nowdate.year===a.year&&this.nowdate.month<a.month)&&(this.nowdate.month===a.month&&this.nowdate.year===a.year?Boolean(a.date<=t):(e<this.nowdate.month||a.date>=t)&&this.nowdate.year===n?!(this.nowdate.month>e):(e<this.nowdate.month||a.date>=t)&&this.nowdate.year===a.year||(this.nowdate.month<e||a.date>=t)&&this.nowdate.year===n&&!(this.nowdate.month>e))},getdate:function(t){return{year:t.getFullYear(),month:t.getMonth(),day:t.getDay(),date:t.getDate()}},monthoverflow:function(t,a){return 0===a?this.everymonth(t-1,11):this.everymonth(t,a-1)},everymonth:function(t,a){var e=t%4===0&&(t%100!==0||t%400===0),n=[31,28,31,30,31,30,31,31,30,31,30,31];return e&&1===a?29:n[a]},nowmonthoneday:function(){return new Date(this.nowdate.year,this.nowdate.month,1).getDay()},lastMonth:function(){0===this.nowdate.month?(this.nowdate.month=11,this.nowdate.year-=1):this.nowdate.month-=1},nextMonth:function(){11===this.nowdate.month?(this.nowdate.month=0,this.nowdate.year+=1):this.nowdate.month+=1},lastYear:function(){this.nowdate.year-=1},nextYear:function(){this.nowdate.year+=1}}},b=w,C=Object(f["a"])(b,y,g,!1,null,null,null),_=C.exports;function x(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),e.push.apply(e,n)}return e}function k(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?x(e,!0).forEach(function(a){Object(o["a"])(t,a,e[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):x(e).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))})}return t}var D={components:{datepeacker:p,customdate:_,VueEasyLightbox:l["a"]},data:function(){return{imgs:[],startdata:"",enddata:"",name:"",phone:"",date:[],normalDay:0,normalDayPrice:0,holiDay:0,holiDayPrice:0,visible:!1,openstart:!1,openend:!1,datashow:!1,success:!0,index:0,bad:[],errormsg:""}},created:function(){this.getroom()},watch:{enddata:function(){this.reservation()},startdata:function(){this.reservation()}},computed:k({},Object(i["c"])(["room"])),methods:{getroom:function(){var t=this;this.startdata="",this.enddata="",this.name="",this.phone="",this.datashow=!1,this.$store.dispatch("updateLoading",!0),this.$store.dispatch("getmoreroom",this.$route.params.id).then(function(){t.bad=t.$store.state.bad,t.normalDayPrice=t.$store.state.moreroom.normalDayPrice,t.holiDayPrice=t.$store.state.moreroom.holidayPrice,t.datashow=!0,t.$store.dispatch("updateLoading",!1)})},everymonth:function(t,a){var e=t%4===0&&(t%100!==0||t%400===0),n=[31,28,31,30,31,30,31,31,30,31,30,31];return e&&1===a?29:n[a]},reservation:function(){var t=this;if(""===this.startdata||""===this.enddata)return!1;this.date=[],this.holiDay=0,this.normalDay=0;var a={year:this.startdata.split("-")[0],month:this.startdata.split("-")[1],day:Number(this.startdata.split("-")[2])},e={year:this.enddata.split("-")[0],month:this.enddata.split("-")[1],day:Number(this.enddata.split("-")[2])};if(a.year===e.year&&a.month===e.month){if(a.day>e.day)return alert("不可小於起始日期"),this.startdata="",this.enddata="",!1;for(var n=a.day;n<=e.day;n++){var s=n=n<10?"0".concat(n):n.toString();this.date.push("".concat(a.year,"-").concat(a.month,"-").concat(s))}}else{if(a.year>e.year||a.year===e.year&&a.month>e.month)return alert("不可小於起始日期"),this.startdata="",this.enddata="",!1;if(a.year===e.year&&a.month<e.month){for(var o=this.everymonth(Number(a.year),Number(a.month-1)),i=a.day;i<=o;i++){var r=i=i<10?"0".concat(i):i.toString();this.date.push("".concat(a.year,"-").concat(a.month,"-").concat(r))}if(a.month<e.month)for(var c=Number(a.month)+1,l=Number(e.month),d="",h=c;h<l;h++){var u=this.everymonth(Number(a.year),Number(h-1));d=h<10?"0".concat(h):"".concat(h);for(var m=1;m<=u;m++){var f=m=m<10?"0".concat(m):m.toString();this.date.push("".concat(a.year,"-").concat(d,"-").concat(f))}}for(var v=1;v<=e.day;v++){var p=v=v<10?"0".concat(v):v.toString();this.date.push("".concat(a.year,"-").concat(e.month,"-").concat(p))}}else if(a.year<e.year){for(var y=this.everymonth(Number(a.year),Number(a.month-1)),g=a.day;g<=y;g++){var w=g=g<10?"0".concat(g):g.toString();this.date.push("".concat(a.year,"-").concat(a.month,"-").concat(w))}if(a.month<=12)for(var b=Number(a.month)+1,C="",_=b;_<=12;_++){C=_<10?"0".concat(_):"".concat(_);for(var x=this.everymonth(Number(a.year),Number(_-1)),k=1;k<=x;k++){var D=k=k<10?"0".concat(k):k.toString();this.date.push("".concat(a.year,"-").concat(C,"-").concat(D))}}if(e.month>=1)for(var S=1,E=Number(e.month)-1,N="",M=S;M<=E;M++){N=M<10?"0".concat(M):"".concat(M);for(var O=this.everymonth(Number(e.year),Number(M-1)),I=1;I<=O;I++){var j=I=I<10?"0".concat(M):I.toString();this.date.push("".concat(e.year,"-").concat(N,"-").concat(j))}}for(var P=1;P<=e.day;P++){var R=P=P<10?"0".concat(P):P.toString();this.date.push("".concat(e.year,"-").concat(e.month,"-").concat(R))}}}return this.date.forEach(function(a){var e=new Date(a.split("-")[0],a.split("-")[1]-1,a.split("-")[2]).getDay();0===e||6===e||5===e?t.holiDay+=1:t.normalDay+=1}),null},checkrequest:function(){var t=this;this.$validator.validate().then(function(a){if(a){t.$store.dispatch("updateLoading",!0);var e=new FormData;e.append("name",t.name),e.append("tel",t.phone),t.date.forEach(function(t,a){e.append("date[".concat(a,"]"),t)});var n="".concat("https://challenge.thef2e.com/api/thef2e2019/stage6","/room/").concat(t.$route.params.id);t.$http.post(n,e,{headers:{accept:"application/json",authorization:"Bearer ".concat("EZdh4s1SzggyW6WGqiilybnv1BlVYGg3wIBqE5bo8QoEyD0GX0OCyGopFbOe")}}).then(function(){t.success=!0,c()("#Modal1").modal("hide"),c()("#Modal2").modal("show"),t.$store.dispatch("updateLoading",!1)}).catch(function(a){t.errormsg=a.response.data.message,t.success=!1,c()("#Modal1").modal("hide"),c()("#Modal2").modal("show"),t.$store.dispatch("updateLoading",!1)})}})},clear:function(){var t=this,a="".concat("https://challenge.thef2e.com/api/thef2e2019/stage6","/rooms");this.$http.delete(a,{headers:{accept:"application/json",authorization:"Bearer ".concat("EZdh4s1SzggyW6WGqiilybnv1BlVYGg3wIBqE5bo8QoEyD0GX0OCyGopFbOe")}}).then(function(){t.getroom()})},showMultiple:function(){this.imgs=this.room.imageUrl,this.index=0,this.show()},show:function(){this.visible=!0},handleHide:function(){this.visible=!1},startday:function(t,a){this.startdata=t,this.openstart=a},endday:function(t,a){this.enddata=t,this.openend=a}}},S=D,E=Object(f["a"])(S,n,s,!1,null,null,null);a["default"]=E.exports},"02f4":function(t,a,e){var n=e("4588"),s=e("be13");t.exports=function(t){return function(a,e){var o,i,r=String(s(a)),c=n(e),l=r.length;return c<0||c>=l?t?"":void 0:(o=r.charCodeAt(c),o<55296||o>56319||c+1===l||(i=r.charCodeAt(c+1))<56320||i>57343?t?r.charAt(c):o:t?r.slice(c,c+2):i-56320+(o-55296<<10)+65536)}}},"0390":function(t,a,e){"use strict";var n=e("02f4")(!0);t.exports=function(t,a,e){return a+(e?n(t,a).length:1)}},"0bfb":function(t,a,e){"use strict";var n=e("cb7c");t.exports=function(){var t=n(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},"214f":function(t,a,e){"use strict";e("b0c5");var n=e("2aba"),s=e("32e9"),o=e("79e5"),i=e("be13"),r=e("2b4c"),c=e("520a"),l=r("species"),d=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),h=function(){var t=/(?:)/,a=t.exec;t.exec=function(){return a.apply(this,arguments)};var e="ab".split(t);return 2===e.length&&"a"===e[0]&&"b"===e[1]}();t.exports=function(t,a,e){var u=r(t),m=!o(function(){var a={};return a[u]=function(){return 7},7!=""[t](a)}),f=m?!o(function(){var a=!1,e=/a/;return e.exec=function(){return a=!0,null},"split"===t&&(e.constructor={},e.constructor[l]=function(){return e}),e[u](""),!a}):void 0;if(!m||!f||"replace"===t&&!d||"split"===t&&!h){var v=/./[u],p=e(i,u,""[t],function(t,a,e,n,s){return a.exec===c?m&&!s?{done:!0,value:v.call(a,e,n)}:{done:!0,value:t.call(e,a,n)}:{done:!1}}),y=p[0],g=p[1];n(String.prototype,t,y),s(RegExp.prototype,u,2==a?function(t,a){return g.call(t,this,a)}:function(t){return g.call(t,this)})}}},"28a5":function(t,a,e){"use strict";var n=e("aae3"),s=e("cb7c"),o=e("ebd6"),i=e("0390"),r=e("9def"),c=e("5f1b"),l=e("520a"),d=e("79e5"),h=Math.min,u=[].push,m="split",f="length",v="lastIndex",p=4294967295,y=!d(function(){RegExp(p,"y")});e("214f")("split",2,function(t,a,e,d){var g;return g="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[f]||2!="ab"[m](/(?:ab)*/)[f]||4!="."[m](/(.?)(.?)/)[f]||"."[m](/()()/)[f]>1||""[m](/.?/)[f]?function(t,a){var s=String(this);if(void 0===t&&0===a)return[];if(!n(t))return e.call(s,t,a);var o,i,r,c=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,m=void 0===a?p:a>>>0,y=new RegExp(t.source,d+"g");while(o=l.call(y,s)){if(i=y[v],i>h&&(c.push(s.slice(h,o.index)),o[f]>1&&o.index<s[f]&&u.apply(c,o.slice(1)),r=o[0][f],h=i,c[f]>=m))break;y[v]===o.index&&y[v]++}return h===s[f]?!r&&y.test("")||c.push(""):c.push(s.slice(h)),c[f]>m?c.slice(0,m):c}:"0"[m](void 0,0)[f]?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,n){var s=t(this),o=void 0==e?void 0:e[a];return void 0!==o?o.call(e,s,n):g.call(String(s),e,n)},function(t,a){var n=d(g,t,this,a,g!==e);if(n.done)return n.value;var l=s(t),u=String(this),m=o(l,RegExp),f=l.unicode,v=(l.ignoreCase?"i":"")+(l.multiline?"m":"")+(l.unicode?"u":"")+(y?"y":"g"),w=new m(y?l:"^(?:"+l.source+")",v),b=void 0===a?p:a>>>0;if(0===b)return[];if(0===u.length)return null===c(w,u)?[u]:[];var C=0,_=0,x=[];while(_<u.length){w.lastIndex=y?_:0;var k,D=c(w,y?u:u.slice(_));if(null===D||(k=h(r(w.lastIndex+(y?0:_)),u.length))===C)_=i(u,_,f);else{if(x.push(u.slice(C,_)),x.length===b)return x;for(var S=1;S<=D.length-1;S++)if(x.push(D[S]),x.length===b)return x;_=C=k}}return x.push(u.slice(C)),x}]})},3846:function(t,a,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"4b94":function(t,a,e){t.exports=e.p+"img/refrigerator.6258a7c9.svg"},"520a":function(t,a,e){"use strict";var n=e("0bfb"),s=RegExp.prototype.exec,o=String.prototype.replace,i=s,r="lastIndex",c=function(){var t=/a/,a=/b*/g;return s.call(t,"a"),s.call(a,"a"),0!==t[r]||0!==a[r]}(),l=void 0!==/()??/.exec("")[1],d=c||l;d&&(i=function(t){var a,e,i,d,h=this;return l&&(e=new RegExp("^"+h.source+"$(?!\\s)",n.call(h))),c&&(a=h[r]),i=s.call(h,t),c&&i&&(h[r]=h.global?i.index+i[0].length:a),l&&i&&i.length>1&&o.call(i[0],e,function(){for(d=1;d<arguments.length-2;d++)void 0===arguments[d]&&(i[d]=void 0)}),i}),t.exports=i},"5dbc":function(t,a,e){var n=e("d3f4"),s=e("8b97").set;t.exports=function(t,a,e){var o,i=a.constructor;return i!==e&&"function"==typeof i&&(o=i.prototype)!==e.prototype&&n(o)&&s&&s(t,o),t}},"5f1b":function(t,a,e){"use strict";var n=e("23c6"),s=RegExp.prototype.exec;t.exports=function(t,a){var e=t.exec;if("function"===typeof e){var o=e.call(t,a);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw new TypeError("RegExp#exec called on incompatible receiver");return s.call(t,a)}},"6b54":function(t,a,e){"use strict";e("3846");var n=e("cb7c"),s=e("0bfb"),o=e("9e1e"),i="toString",r=/./[i],c=function(t){e("2aba")(RegExp.prototype,i,t,!0)};e("79e5")(function(){return"/a/b"!=r.call({source:"a",flags:"b"})})?c(function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!o&&t instanceof RegExp?s.call(t):void 0)}):r.name!=i&&c(function(){return r.call(this)})},"7f7f":function(t,a,e){var n=e("86cc").f,s=Function.prototype,o=/^\s*function ([^ (]*)/,i="name";i in s||e("9e1e")&&n(s,i,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"8b97":function(t,a,e){var n=e("d3f4"),s=e("cb7c"),o=function(t,a){if(s(t),!n(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,a,n){try{n=e("9b43")(Function.call,e("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),a=!(t instanceof Array)}catch(s){a=!0}return function(t,e){return o(t,e),a?t.__proto__=e:n(t,e),t}}({},!1):void 0),check:o}},9416:function(t,a,e){t.exports=e.p+"img/refrigeratori.4b6c4fcd.svg"},aa77:function(t,a,e){var n=e("5ca1"),s=e("be13"),o=e("79e5"),i=e("fdef"),r="["+i+"]",c="​",l=RegExp("^"+r+r+"*"),d=RegExp(r+r+"*$"),h=function(t,a,e){var s={},r=o(function(){return!!i[t]()||c[t]()!=c}),l=s[t]=r?a(u):i[t];e&&(s[e]=l),n(n.P+n.F*r,"String",s)},u=h.trim=function(t,a){return t=String(s(t)),1&a&&(t=t.replace(l,"")),2&a&&(t=t.replace(d,"")),t};t.exports=h},aae3:function(t,a,e){var n=e("d3f4"),s=e("2d95"),o=e("2b4c")("match");t.exports=function(t){var a;return n(t)&&(void 0!==(a=t[o])?!!a:"RegExp"==s(t))}},b0c5:function(t,a,e){"use strict";var n=e("520a");e("5ca1")({target:"RegExp",proto:!0,forced:n!==/./.exec},{exec:n})},c5f6:function(t,a,e){"use strict";var n=e("7726"),s=e("69a8"),o=e("2d95"),i=e("5dbc"),r=e("6a99"),c=e("79e5"),l=e("9093").f,d=e("11e9").f,h=e("86cc").f,u=e("aa77").trim,m="Number",f=n[m],v=f,p=f.prototype,y=o(e("2aeb")(p))==m,g="trim"in String.prototype,w=function(t){var a=r(t,!1);if("string"==typeof a&&a.length>2){a=g?a.trim():u(a,3);var e,n,s,o=a.charCodeAt(0);if(43===o||45===o){if(e=a.charCodeAt(2),88===e||120===e)return NaN}else if(48===o){switch(a.charCodeAt(1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+a}for(var i,c=a.slice(2),l=0,d=c.length;l<d;l++)if(i=c.charCodeAt(l),i<48||i>s)return NaN;return parseInt(c,n)}}return+a};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(t){var a=arguments.length<1?0:t,e=this;return e instanceof f&&(y?c(function(){p.valueOf.call(e)}):o(e)!=m)?i(new v(w(a)),e,f):w(a)};for(var b,C=e("9e1e")?l(v):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;C.length>_;_++)s(v,b=C[_])&&!s(f,b)&&h(f,b,d(v,b));f.prototype=p,p.constructor=f,e("2aba")(n,m,f)}},d1ae:function(t,a,e){t.exports=e.p+"img/success.5e18caa0.svg"},fdef:function(t,a){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-2b1dfcae.4befced6.js.map