(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"7ce5":function(t,s,e){t.exports=e.p+"img/decentralised.7e7fdf74.jpg"},ff79:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-gutter-y-md q-mx-auto",staticStyle:{"max-width":"600px"}},[a("q-card",[a("q-tabs",{staticClass:"text-grey",attrs:{"active-color":"primary","indicator-color":"primary",align:"justify","narrow-indicator":""},model:{value:t.tab,callback:function(s){t.tab=s},expression:"tab"}}),a("q-separator"),a("q-card",{staticClass:"my-card text-white",staticStyle:{background:"radial-gradient(circle, #35a2ff 0%, #014a88 80%)"}},[t.activeProposal?a("div",{staticClass:"flex justify-center"},[a("q-card-section",[a("div",{staticClass:"text-h6 text-center q-ma-lg",attrs:{id:"nav"}},[a("img",{attrs:{id:"icon",width:"65",src:e("7ce5")}}),a("span",{attrs:{id:"text"}},[t._v("  Vote NFT Proposal")])]),t.activeProposal?a("div",{staticClass:"q-ma-lg"},[t._v(" Proposal Active   "+t._s(t.expiration_timer))]):t._e(),a("div",{staticStyle:{"max-width":"500px",margin:"0 auto"}},[a("div",{staticClass:"row justify-center q-mb-md q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs",staticStyle:{"align-items":"center"}},[a("div",{staticClass:"col-xs-6 col-sm-6"},[a("q-btn-toggle",{attrs:{"no-caps":"","toggle-color":"blue",options:[{label:"WayFinder",value:1},{label:"WayFarer",value:2},{label:"WayFounder",value:3}]},model:{value:t.roi_target_cap,callback:function(s){t.roi_target_cap=s},expression:"roi_target_cap"}})],1)]),a("div",{staticClass:"row justify-center q-mb-md q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs",staticStyle:{"align-items":"center"}},[a("div",{staticClass:"col-xs-5 col-sm-4 text-right"},[t._v("\n                Account\n              ")]),a("div",{staticClass:"col-xs-1 col-sm-2"}),a("div",{staticClass:"col-xs-6 col-sm-6"},[t._v("\n                  "+t._s(t.eosaccount)+"\n              ")])]),a("div",{staticClass:"row justify-center q-mb-md q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs",staticStyle:{"align-items":"center"}},[a("div",{staticClass:"col-xs-5 col-sm-4 text-right"},[t._v("\n                Percentage\n              ")]),a("div",{staticClass:"col-xs-1 col-sm-2"}),a("div",{staticClass:"col-xs-6 col-sm-6"},[t._v("\n                 "+t._s(t.proposal_percentage)+"\n              ")])]),1!==t.roi_target_cap?a("div",[a("div",{staticClass:"row justify-center q-mb-md q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs",staticStyle:{"align-items":"center"}},[a("div",{staticClass:"col-xs-5 col-sm-4 text-right"},[t._v("\n                Threshold\n              ")]),a("div",{staticClass:"col-xs-1 col-sm-2"}),a("div",{staticClass:"col-xs-6 col-sm-6"},[t._v("\n                "+t._s(t.threshold)+"\n              ")])])]):t._e(),1===t.roi_target_cap?a("div",[a("div",{staticClass:"row justify-center q-mb-md q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs",staticStyle:{"align-items":"center"}},[a("div",{staticClass:"col-xs-5 col-sm-4 text-right"},[t._v("\n                Rates to pay\n              ")]),a("div",{staticClass:"col-xs-1 col-sm-2"}),a("div",{staticClass:"col-xs-6 col-sm-6"},[t._v("\n                "+t._s(t.rates_left)+"\n              ")])])]):t._e(),3===t.roi_target_cap?a("div",[a("div",{staticClass:"row justify-center q-mb-md q-pl-md q-pr-md q-ml-md q-mr-md q-pb-xs",staticStyle:{"align-items":"center"}},[a("div",{staticClass:"col-xs-5 col-sm-4 text-right"},[t._v("\n                Locked\n              ")]),a("div",{staticClass:"col-xs-1 col-sm-2"}),a("div",{staticClass:"col-xs-6 col-sm-6"},[a("q-toggle",{attrs:{color:"red",disable:""},model:{value:t.locked,callback:function(s){t.locked=s},expression:"locked"}})],1)])]):t._e()]),a("div",{staticClass:"flex justify-center"},[a("q-toggle",{attrs:{size:"xl","checked-icon":"check",color:"green","unchecked-icon":"clear"},model:{value:t.voteresult,callback:function(s){t.voteresult=s},expression:"voteresult"}}),t.voteresult?a("div",{staticStyle:{color:"white"}},[t._v("ACCEPT")]):a("div",{staticStyle:{color:"red"}},[a("b",[t._v("REJECT")])]),t.isProposerActive?a("div",[a("q-btn",{staticClass:"q-ma-lg",attrs:{icon:"link",color:"grey",disable:"","no-caps":"",label:"Submit Vote"}}),a("q-tooltip",{attrs:{"transition-show":"scale","transition-hide":"scale"}},[a("div",[t._v("\n                      You are the Proposer!\n                    ")])])],1):a("div",[a("q-btn",{staticClass:"q-ma-lg",attrs:{icon:"link",color:"blue","no-caps":"",label:"Submit Vote"},on:{click:function(s){return t.submit()}}})],1)],1)])],1):a("div",[t._v("NOTHING TO VOTE "),a("br"),t._v(" NO ACTIVE PROPOSAL")])])],1),a("div",{staticStyle:{"min-height":"100vh"},attrs:{id:"q-app"}},[a("div",{staticClass:"q-pa-md"},[a("q-linear-progress",{attrs:{size:"25px",value:t.progress1,color:"accent"}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"white","text-color":"accent",label:t.progressLabel1}})],1)]),a("q-linear-progress",{staticClass:"q-mt-sm",attrs:{size:"25px",value:t.progress2,color:"accent"}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"white","text-color":"accent",label:t.progressLabel2}})],1)])],1)])],1)])},o=[],i=e("ded3"),r=e.n(i),c=e("2f62"),l={name:"Vote",data(){return{value:1,timestamp:"",displayed_percentage:0,expires:"",tab:"send",activeProposal:!1,expiration_timer:"",isProposerActive:!1,submitData:{currentAccountName:"",toVote:0},voteresult:!1,isShowApprovedDialog:!1,isShowFailedDialog:!1}},created(){this.getActionProposal(),this.isPropoActive(),this.setIntervalId=setInterval((()=>{this.getActionProposal(),this.isPropoActive()}),3e4),document.addEventListener("beforeunload",this.handler),this.isProposer(),this.update()},beforeDestroy(){clearInterval(this.setIntervalId)},computed:r()({},Object(c["d"])({accountName:t=>t.account.accountName,eosaccount:t=>t.account.proposalInfo.proposalInfo.eosaccount,roi_target_cap:t=>t.account.proposalInfo.proposalInfo.roi_target_cap,proposal_percentage:t=>t.account.proposalInfo.proposalInfo.proposal_percentage,locked:t=>t.account.proposalInfo.proposalInfo.locked,expires_at:t=>t.account.proposalInfo.proposalInfo.expires_at,threshold:t=>t.account.proposalInfo.proposalInfo.threshold,rates_left:t=>t.account.proposalInfo.proposalInfo.rates_left,accrued:t=>t.account.proposalInfo.proposalInfo.accrued,progress1:t=>t.analytics.progress1,progress2:t=>t.analytics.progress2,progressLabel1:t=>t.analytics.progressLabel1,progressLabel2:t=>t.analytics.progressLabel2,proposer:t=>t.account.proposer})),methods:r()(r()(r()(r()({},Object(c["b"])("proposal",["actionProposalVote"])),Object(c["b"])("account",["getActionProposal"])),Object(c["b"])("analytics",["getByUserTotal","getEwsTable"])),{},{submit(){!0===this.voteresult?this.submitData.toVote=2:this.submitData.toVote=1,this.submitData.currentAccountName=this.accountName,console.log(this.submitData.currentAccountName,this.toVote,this.voteresult),this.actionProposalVote(this.submitData)},getTimestamp:function(){return Date.now()},update(){this.getEwsTable(),this.getByUserTotal()},isProposer(){this.accountName===this.proposer&&(this.isProposerActive=!0,console.log(" isProposer:",this.accountName,this.proposer,this.isProposerActive))},isPropoActive(){if("empty"!==this.eosaccount){this.expires=1e3*this.expires_at;const t=Date.now();t>this.expires?(this.activeProposal=!1,this.expiration_timer=0):(this.activeProposal=!0,this.expiration_timer=(this.expires-t)/6e4,this.expiration_timer=this.expiration_timer.toFixed(2)),console.log("timestamp:",this.expires,t)}else this.activeProposal=!1,this.expiration_timer=0}})},n=l,p=e("2877"),d=e("f09f"),m=e("429bb"),u=e("eb85"),v=e("a370"),g=e("6a67"),b=e("9564"),h=e("9c40"),x=e("05c0"),q=e("6b1d"),_=e("58a81"),f=e("eebe"),C=e.n(f),y=Object(p["a"])(n,a,o,!1,null,"37039149",null);s["default"]=y.exports;C()(y,"components",{QCard:d["a"],QTabs:m["a"],QSeparator:u["a"],QCardSection:v["a"],QBtnToggle:g["a"],QToggle:b["a"],QBtn:h["a"],QTooltip:x["a"],QLinearProgress:q["a"],QBadge:_["a"]})}}]);