(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e30b"],{d504:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.allroom.length?s("div",[s("div",{staticClass:"room-bg",style:{backgroundImage:"url("+this.NowRoomMsg.imgurl+")"}},[s("div",{staticClass:"d-flex flex-column justify-content-between py-5 pl-7 pr-0 h-100"},[s("div",{staticClass:"d-flex justify-content-between linear-pos mb-5"},[t._m(0),s("div",{staticClass:"linear"}),s("div",{staticClass:"menu bg-white py-4 px-5"},[s("div",{staticClass:"menu-linear"}),s("ul",{staticClass:"p-0 mb-0"},[s("li",[s("router-link",{attrs:{to:"/allroom"}},[t._v("ALL Room")])],1),t._l(t.allroom,function(e,a){return s("li",{key:e.id},[s("a",{attrs:{href:"#"},on:{mouseover:function(s){return t.more(a,e.name)},click:function(s){return s.preventDefault(),t.gomoreroom(e.id)}}},[t._v(t._s(e.name))])])})],2)])]),s("div",{staticClass:"d-flex justify-content-between"},[s("div",{staticClass:"room-number"},[s("div",{staticClass:"number linear-pos"},[s("div",{staticClass:"number-linear"}),t._v("\n            "+t._s(this.NowRoomMsg.id)+"\n          ")]),s("div",{staticClass:"name"},[t._v(t._s(this.NowRoomMsg.name))])]),t._m(1)])])])]):t._e()},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"white-space p-4"},[t._v("\n          White"),s("br"),t._v("Space\n        ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"msg d-flex flex-column justify-content-between mr-4"},[s("div",[s("a",{staticClass:"mr-2 link",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-facebook-square fa-lg"})]),s("a",{staticClass:"link",attrs:{href:"#"}},[s("i",{staticClass:"fab fa-instagram fa-lg"})])]),s("div",[s("div",{staticClass:"mb-2"},[s("i",{staticClass:"fas fa-phone-alt"}),s("span",{staticClass:"ml-2"},[t._v("02-17264937")])]),s("div",{staticClass:"mb-2"},[s("i",{staticClass:"fas fa-envelope"}),s("span",{staticClass:"ml-2"},[t._v("whitespace@whitespace.com.tw")])]),s("div",[s("i",{staticClass:"fas fa-home"}),s("span",{staticClass:"ml-2"},[t._v("台北市羅斯福路十段30號")])])])])}],o=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),r=s("2f62");function n(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),s.push.apply(s,a)}return s}function c(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?n(s,!0).forEach(function(e){Object(o["a"])(t,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):n(s).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))})}return t}var l={data:function(){return{chooseimg:["https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80","https://images.unsplash.com/photo-1528908929486-dfaa209c6986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80","https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80","https://images.unsplash.com/photo-1519974719765-e6559eac2575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80","https://images.unsplash.com/photo-1521783593447-5702b9bfd267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2021&q=80","https://images.unsplash.com/photo-1552902019-a6dddd56544a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2124&q=80"],NowRoomMsg:{id:"01",imgurl:"https://images.unsplash.com/photo-1526880792616-4217886b9dc2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",name:"Single Room"}}},created:function(){this.getroom()},computed:c({},Object(r["c"])(["allroom"])),methods:c({},Object(r["b"])(["getroom"]),{more:function(t,e){this.NowRoomMsg={id:"0".concat(t+1),imgurl:this.chooseimg[t],name:e}},gomoreroom:function(t){this.$router.push("/moreroom/".concat(t))}})},m=l,f=s("2877"),u=Object(f["a"])(m,a,i,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d21e30b.6ddc093d.js.map