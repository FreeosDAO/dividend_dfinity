(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{b6f9:function(t,s,e){"use strict";e("f8a3")},f8a3:function(t,s,e){},ff79:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"q-pa-md"},[e("div",{staticClass:"q-gutter-y-md q-mx-auto",staticStyle:{"max-width":"600px"}},[e("q-card",{staticClass:"uxblue",attrs:{flat:""}},[e("div",{staticClass:"flex justify-center"},[e("q-card-section",[e("div",{staticClass:"text-h5 text-center"},[e("span",[t._v("Vote NFT Proposal")])]),e("div",{staticClass:"q-ma-lg uxblue"},[t._v(" Proposal Active   "+t._s(t.expiration_timer))]),e("div",[e("div",{staticClass:"row justify-left q-mb-md q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs",staticStyle:{"align-items":"center"}},[e("div",{staticClass:"col-xs-5 col-sm-4 text-left"},[t._v("\n                Policy cap\n              ")]),e("div",{staticClass:"col-xs-1 col-sm-2"}),e("div",{staticClass:"col-xs-7 col-sm-7"},[e("q-btn-toggle",{attrs:{"no-caps":"",flat:"","toggle-color":"blue-4",options:[{label:"WayFinder",value:1},{label:"WayFarer",value:2},{label:"WayFounder",value:3}]},model:{value:t.roi_target_cap,callback:function(s){t.roi_target_cap=s},expression:"roi_target_cap"}})],1)]),e("div",{staticClass:"row justify-center q-mb-md q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs",staticStyle:{"align-items":"center"}},[e("div",{staticClass:"col-xs-5 col-sm-4 text-left"},[t._v("\n                Account (Name)\n              ")]),e("div",{staticClass:"col-xs-1 col-sm-2"}),e("div",{staticClass:"col-xs-6 col-sm-6 uxblue"},[t._v("\n                  "+t._s(t.eosaccount)+"\n              ")])]),e("div",{staticClass:"row justify-center q-mb-md q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs",staticStyle:{"align-items":"center"}},[e("div",{staticClass:"col-xs-5 col-sm-4 text-left"},[t._v("\n                % for the Account\n              ")]),e("div",{staticClass:"col-xs-1 col-sm-2"}),e("div",{staticClass:"col-xs-6 col-sm-6 uxblue"},[t._v("\n                 "+t._s(t.proposal_percentage)+"\n              ")])]),1!==t.roi_target_cap?e("div",[e("div",{staticClass:"row justify-center q-mb-md q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs",staticStyle:{"align-items":"center"}},[e("div",{staticClass:"col-xs-5 col-sm-4 text-left"},[t._v("\n                Threshold\n              ")]),e("div",{staticClass:"col-xs-1 col-sm-2"}),e("div",{staticClass:"col-xs-6 col-sm-6 uxblue"},[t._v("\n                "+t._s(t.threshold)+"\n              ")])])]):t._e(),1===t.roi_target_cap?e("div",[e("div",{staticClass:"row justify-center q-mb-md q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs",staticStyle:{"align-items":"center"}},[e("div",{staticClass:"col-xs-5 col-sm-4 text-left"},[t._v("\n                Rates to pay\n              ")]),e("div",{staticClass:"col-xs-1 col-sm-2"}),e("div",{staticClass:"col-xs-6 col-sm-6 uxblue"},[t._v("\n                "+t._s(t.rates_left)+"\n              ")])])]):t._e(),3===t.roi_target_cap?e("div",[e("div",{staticClass:"row justify-center q-mb-md q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs",staticStyle:{"align-items":"center"}},[e("div",{staticClass:"col-xs-5 col-sm-4 text-left"},[t._v("\n                Locked\n              ")]),e("div",{staticClass:"col-xs-1 col-sm-2"}),e("div",{staticClass:"col-xs-6 col-sm-6"},[e("q-toggle",{attrs:{color:"red",disable:""},model:{value:t.locked,callback:function(s){t.locked=s},expression:"locked"}})],1)])]):t._e()]),e("div",{staticClass:"flex justify-center"},[e("q-toggle",{attrs:{size:"xl","checked-icon":"check",color:"green","unchecked-icon":"clear"},model:{value:t.voteresult,callback:function(s){t.voteresult=s},expression:"voteresult"}}),t.voteresult?e("div",{staticStyle:{color:"white"}},[t._v("ACCEPT")]):e("div",{staticStyle:{color:"red"}},[e("b",[t._v("REJECT")])]),t.isProposerActive?e("div",[e("q-btn",{staticClass:"q-ma-lg uxblue",attrs:{outline:"",disable:"","no-caps":"",label:"Submit Vote"}}),e("q-tooltip",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[e("div",[t._v("\n                      You are the Proposer!\n                    ")])])],1):e("div",[e("q-btn",{staticClass:"q-ma-lg uxblue",attrs:{outline:"","no-caps":"",label:"Submit Vote"},on:{click:function(s){return t.submit()}}})],1)],1)])],1)]),e("div",{staticStyle:{"min-height":"100vh"},attrs:{id:"q-app"}},[e("div",{staticClass:"row items-center q-gutter-sm"},[e("q-separator",{attrs:{color:"blue"}}),t._m(0),e("q-linear-progress",{staticClass:"uxblue",staticStyle:{"border-radius":"25px"},attrs:{size:"25px",value:t.progress1,"track-color":"black"}},[e("div",{staticClass:"absolute-full flex flex-left"},[e("q-badge",{staticClass:"uxbadge",attrs:{label:t.progressLabel1}})],1)]),e("span",{staticClass:"infotext"},[t._v("DAO")]),e("q-linear-progress",{staticClass:"uxblue q-mt-sm",staticStyle:{"border-radius":"25px"},attrs:{round:"",size:"25px",value:t.progress2,"track-color":"black"}},[e("div",{staticClass:"absolute-full flex flex-left"},[e("q-badge",{staticClass:"uxbadge",attrs:{label:t.progressLabel2}})],1)]),e("q-space"),e("q-separator",{attrs:{color:"blue"}})],1)])],1)])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"container"}},[e("span",{staticClass:"infotext",staticStyle:{"font-size":"16px"}},[e("b",[t._v("Percentage share")])]),e("br"),e("span",{staticClass:"infotext"},[t._v("Investors/Founders")])])}],i=e("ded3"),l=e.n(i),r=e("2f62"),c={name:"Vote",data(){return{value:1,timestamp:"",displayed_percentage:0,expires:"",tab:"send",activeProposal:!1,expiration_timer:"",isProposerActive:!1,submitData:{currentAccountName:"",toVote:0},voteresult:!1,isShowApprovedDialog:!1,isShowFailedDialog:!1}},created(){this.getActionProposal(),this.isPropoActive(),this.setIntervalId=setInterval((()=>{this.getActionProposal(),this.isPropoActive()}),3e4),document.addEventListener("beforeunload",this.handler),this.isProposer(),this.update()},beforeDestroy(){clearInterval(this.setIntervalId)},computed:l()({},Object(r["d"])({accountName:t=>t.account.accountName,eosaccount:t=>t.account.proposalInfo.proposalInfo.eosaccount,roi_target_cap:t=>t.account.proposalInfo.proposalInfo.roi_target_cap,proposal_percentage:t=>t.account.proposalInfo.proposalInfo.proposal_percentage,locked:t=>t.account.proposalInfo.proposalInfo.locked,expires_at:t=>t.account.proposalInfo.proposalInfo.expires_at,threshold:t=>t.account.proposalInfo.proposalInfo.threshold,rates_left:t=>t.account.proposalInfo.proposalInfo.rates_left,accrued:t=>t.account.proposalInfo.proposalInfo.accrued,progress1:t=>t.analytics.progress1,progress2:t=>t.analytics.progress2,progressLabel1:t=>t.analytics.progressLabel1,progressLabel2:t=>t.analytics.progressLabel2,proposer:t=>t.account.proposer})),methods:l()(l()(l()(l()({},Object(r["b"])("proposal",["actionProposalVote"])),Object(r["b"])("account",["getActionProposal"])),Object(r["b"])("analytics",["getByUserTotal","getEwsTable"])),{},{submit(){!0===this.voteresult?this.submitData.toVote=2:this.submitData.toVote=1,this.submitData.currentAccountName=this.accountName,console.log(this.submitData.currentAccountName,this.toVote,this.voteresult),this.actionProposalVote(this.submitData)},getTimestamp:function(){return Date.now()},update(){this.getEwsTable(),this.getByUserTotal()},isProposer(){this.accountName===this.proposer&&(this.isProposerActive=!0,console.log(" isProposer:",this.accountName,this.proposer,this.isProposerActive))},isPropoActive(){if("empty"!==this.eosaccount){this.expires=1e3*this.expires_at;const t=Date.now();t>this.expires?(this.activeProposal=!1,this.expiration_timer=0):(this.activeProposal=!0,this.expiration_timer=(this.expires-t)/6e4,this.expiration_timer=this.expiration_timer.toFixed(2)),console.log("timestamp:",this.expires,t)}else this.activeProposal=!1,this.expiration_timer=0}})},n=c,p=(e("b6f9"),e("2877")),d=e("f09f"),u=e("a370"),m=e("6a67"),v=e("9564"),b=e("9c40"),x=e("05c0"),f=e("eb85"),g=e("6b1d"),h=e("58a81"),_=e("2c91"),q=e("eebe"),C=e.n(q),y=Object(p["a"])(n,a,o,!1,null,null,null);s["default"]=y.exports;C()(y,"components",{QCard:d["a"],QCardSection:u["a"],QBtnToggle:m["a"],QToggle:v["a"],QBtn:b["a"],QTooltip:x["a"],QSeparator:f["a"],QLinearProgress:g["a"],QBadge:h["a"],QSpace:_["a"]})}}]);