(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"1e5b":function(e,t,a){},"2da0":function(e,t,a){"use strict";a("1e5b")},"713b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-layout",{attrs:{view:"hHh Lpr fFf"}},[i("q-header",{staticClass:"bg-primary",attrs:{reveal:"",elevated:"","height-hint":"98"}},[i("q-toolbar",{staticStyle:{"justify-content":"space-between"}},[i("q-btn",{style:"visibility: "+(e.isAuthenticated?"visible":"hidden"),attrs:{dense:"",flat:"",round:"",icon:"menu"},on:{click:function(t){e.drawer=!e.drawer}}}),e.isAuthenticated?i("q-btn",{staticStyle:{width:"150px"},attrs:{flat:"","no-caps":"",color:"white",label:"Dividend Compute"},on:{click:function(t){return e.DividendCompute()}}}):e._e(),e.isAuthenticated?i("div",[e._v(e._s(this.version))]):e._e(),i("div",{staticStyle:{display:"flex","align-items":"center"}},[i("img",{attrs:{width:"35",src:a("7ce5")}}),e._v("  \n        "),e.isAuthenticated?i("div",{staticStyle:{"margin-right":"1rem"}},[e._v(e._s(e.accountName))]):e._e(),e.isAuthenticated?e._e():i("q-btn",{attrs:{color:"primary",label:"Login"},on:{click:function(){return e.connectWallet("anchor")}}}),e.isAuthenticated?i("q-btn",{staticStyle:{"justify-self":"flex-end"},on:{click:function(){return e.logout()}}},[e._v("Logout")]):e._e()],1)],1)],1),i("q-drawer",{attrs:{width:200,breakpoint:800,bordered:"","content-class":"bg-grey-0"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[i("q-scroll-area",{staticClass:"fit"},[i("q-list",[e._l(e.menuList,(function(t,a){return[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:a,attrs:{clickable:"",active:e.selectedItemLabel===t.label,"active-class":"bg-grey-4"},on:{click:function(a){return e.onSelectMenu(t)}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:t.icon}})],1),i("q-item-section",[e._v("\n                "+e._s(t.label)+"\n              ")])],1),t.separator?i("q-separator",{key:"sep"+a}):e._e()]}))],2)],1)],1),i("q-page-container",[i("div",{staticClass:"text-center q-ma-md row"},[i("div",{staticClass:"col-md-5"})]),i("router-view")],1)],1)},n=[],r=a("ded3"),o=a.n(r),c=a("2f62");const s=[{icon:"monetization_on",label:"Proposal",separator:!0,route:"/proposal"},{icon:"swap_horiz",label:"Vote",separator:!0,route:"/vote"},{icon:"get_app",label:"Customer",separator:!0,route:"/customer"},{icon:"get_app",label:"Analytics",separator:!0,route:"/analytics"},{icon:"get_app",label:"Test",separator:!0,route:"/test"}];var l={data(){return{version:"",isShowDrawerButton:!1,drawer:!1,selectedItemLabel:null,tokenType:"",menuList:s}},computed:o()(o()({},Object(c["d"])({accountName:e=>e.account.accountName})),Object(c["c"])("account",["isAuthenticated","connecting"])),methods:o()(o()(o()(o()(o()({onSigninFinish(e){e.isFinished&&(this.isShowDrawerButton=!0,this.drawer=!0,this.onSelectMenu(s[0]))},initiateValues(){this.getEwsTable(),this.getByUserTotal()},onSelectMenu(e){this.$route.path!==e.route&&this.$router.push(e.route),this.selectedItemLabel=e.label}},Object(c["b"])("account",["checkIfLoggedIn","connectWallet","logout","getActionProposal"])),Object(c["b"])("analytics",["actionDividendCompute"])),Object(c["b"])("analytics",["getByUserTotal","getEwsTable"])),Object(c["b"])("account",["getwhitelistTable"])),{},{DividendCompute(){this.actionDividendCompute(this.accountName)}}),watch:{isAuthenticated:{immediate:!0,handler:function(e){e&&this.$route.query.returnUrl&&this.$router.push({path:this.$route.query.returnUrl})}}},created(){this.checkIfLoggedIn(),this.initiateValues(),this.getwhitelistTable(),this.version="v0.9.1pb"}},u=l,d=(a("2da0"),a("2877")),p=a("4d5a"),h=a("e359"),b=a("65c6"),m=a("9c40"),v=a("9404"),g=a("4983"),w=a("1c1c"),f=a("66e5"),y=a("4074"),_=a("0016"),q=a("eb85"),k=a("09e3"),Q=a("7ff0"),S=a("6ac5"),A=a("cb32"),L=a("714f"),C=a("eebe"),T=a.n(C),j=Object(d["a"])(u,i,n,!1,null,null,null);t["default"]=j.exports;T()(j,"components",{QLayout:p["a"],QHeader:h["a"],QToolbar:b["a"],QBtn:m["a"],QDrawer:v["a"],QScrollArea:g["a"],QList:w["a"],QItem:f["a"],QItemSection:y["a"],QIcon:_["a"],QSeparator:q["a"],QPageContainer:k["a"],QFooter:Q["a"],QToolbarTitle:S["a"],QAvatar:A["a"]}),T()(j,"directives",{Ripple:L["a"]})},"7ce5":function(e,t,a){e.exports=a.p+"img/decentralised.7e7fdf74.jpg"}}]);