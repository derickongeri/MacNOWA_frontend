import{bD as B,bE as T,r as y,az as U,c as j,aQ as S,aI as s,a4 as i,bb as t,j as e,a7 as a,bF as $,K as d,ad as r,Q as n,bG as E,bH as f,bI as x,bd as h,a5 as _,f as L,a6 as H,bJ as F,bK as v}from"./index.54040dac.js";import{Q as c,a as l,b as w}from"./selection.1be3b56c.js";import{Q as N}from"./QSelect.11f9ea61.js";import{Q as k,_ as O,a as K,b as G,c as J}from"./UG logo 23.b3964b45.js";import{Q as P,a as D,b as W,c as X,d as Y,_ as Z}from"./MarCNoWA_blue.ae08028f.js";import{Q as ee,a as te,b as ae,_ as le}from"./marcnowa.9fc45021.js";import{u as oe}from"./vue-i18n.runtime.23b4f312.js";const se={class:"row",style:{position:"absolute","z-index":"5001",left:"-5%",top:"2%"}},ie={class:"column justify-between bg-grey-1 text-lime-9",style:{position:"absolute",height:"100%",width:"100%","z-index":"5000"}},ne={class:"row",style:{width:"100%"}},de={key:0,class:"row"},re={class:"row items-center justify-between"},ue=a("img",{src:le,style:{width:"100%",height:"50px"}},null,-1),me=a("div",{class:"col"},[a("div",{class:"row items-center",style:{"margin-left":"10%"}},[a("div",{class:"column"},[a("img",{src:O,style:{position:"relative",width:"100%",height:"35px"}})]),a("div",{class:"column q-pl-md"},[a("img",{src:K,style:{position:"relative",width:"100%",height:"35px",left:"-1%"}})]),a("div",{class:"column q-pl-md"},[a("img",{src:G,style:{position:"relative",width:"100%",height:"35px",left:"-1%"}})]),a("div",{class:"column q-pl-md"},[a("img",{src:J,style:{position:"relative",width:"100%",height:"50px",left:"-1%"}})])])],-1),ce={class:"my-font q-mx-md",style:{"font-weight":"700"}},fe={class:"row justify-between q-mx-sm"},pe=a("img",{class:"q-ml-none",src:Z,style:{position:"relative",width:"100%",height:"50px"}},null,-1),Qe={__name:"AuthLayout",setup(ge){const{logout:he,user:u}=F(),{locale:p}=oe({useScope:"global"}),Q=B(),I=T(),z=y([{value:"en-US",label:"English"},{value:"fr",label:"Fran\xE7ais"}]),b=y(!1),q=y(!1),V=y(!1),C=()=>{b.value=!b.value,console.log(I.currentRoute.value.path)};U(()=>{V.value=window.matchMedia("(max-width: 768px)").matches,q.value=window.matchMedia("(min-width: 768px)").matches});const M=j(()=>Q.path==="/home"||Q.path==="/");return(o,m)=>{const R=S("router-link"),A=S("router-view");return s(),i(Y,{view:"lHh Lpr lFf"},{default:t(()=>[e(P,{class:"mobile-view",modelValue:b.value,"onUpdate:modelValue":m[2]||(m[2]=g=>b.value=g),side:"right",style:{"z-index":"5000"}},{default:t(()=>[a("div",se,[e($,{color:"grey-1","text-color":"indigo-10",round:"",unelevated:"",icon:"mdi-chevron-right",size:"md",onClick:C})]),a("div",ie,[a("div",ne,[e(k,{padding:"",class:"rounded-borders text-indigo-10 my-font",style:{width:"100%","font-size":"16px","font-weight":"bold"}},{default:t(()=>[d(u)?(s(),i(c,{key:0,class:"q-my-lg q-pt-lg"},{default:t(()=>[e(l,null,{default:t(()=>[e(w,{class:"text-h6",style:{"font-size":"21px","font-weight":"bold"}},{default:t(()=>[r(n(d(u).user_metadata.firstName)+" "+n(d(u).user_metadata.lastName),1)]),_:1}),e(w,{caption:"",style:{"font-size":"12px"}},{default:t(()=>[r(n(d(u).email),1)]),_:1})]),_:1}),e(l,{avatar:""},{default:t(()=>[e(E,{color:"indigo-10","text-color":"grey-1"},{default:t(()=>[r(n(d(u).user_metadata.firstName.charAt(0))+n(d(u).user_metadata.lastName.charAt(0)),1)]),_:1})]),_:1})]),_:1})):(s(),i(c,{key:1,class:"q-my-lg q-pt-lg",clickable:"",to:"/login"},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"",name:"mdi-login-variant"})]),_:1}),e(l,null,{default:t(()=>[e(w,{class:"text-h6",style:{"font-size":"21px","font-weight":"bold"}},{default:t(()=>[r(n(o.$t("login")),1)]),_:1}),e(w,{caption:"",style:{"font-size":"12px"}},{default:t(()=>[r("Login to access features")]),_:1})]),_:1})]),_:1})),e(x,{spaced:""}),M.value?h((s(),i(c,{key:2,clickable:"",to:"/dashboard"},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"xs",name:"mdi-view-dashboard"})]),_:1}),e(l,null,{default:t(()=>[r(n(o.$t("dashboard")),1)]),_:1})]),_:1})),[[v]]):h((s(),i(c,{key:3,clickable:"",to:"/home"},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"xs",name:"mdi-home"})]),_:1}),e(l,null,{default:t(()=>[r(n(o.$t("home")),1)]),_:1})]),_:1})),[[v]]),h((s(),i(c,{clickable:"",onClick:m[0]||(m[0]=g=>o.toggleSettings=!o.toggleSettings)},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"xs",name:"mdi-cog"})]),_:1}),e(l,null,{default:t(()=>[r(n(o.$t("settings")),1)]),_:1})]),_:1})),[[v]]),e(x,{spaced:""}),o.toggleSettings?(s(),i(k,{key:4,class:"q-mx-md",style:{"min-width":"100px"}},{default:t(()=>[d(u)?h((s(),i(c,{key:0,clickable:"",to:"me"},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"xs",name:"mdi-account-cog"})]),_:1}),e(l,null,{default:t(()=>[r(n(o.$t("my_profile")),1)]),_:1})]),_:1})),[[v]]):_("",!0),e(c,{clickable:""},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"xs",name:"mdi-translate"})]),_:1}),e(l,null,{default:t(()=>[e(N,{"label-color":"grey-9",modelValue:d(p),"onUpdate:modelValue":m[1]||(m[1]=g=>L(p)?p.value=g:null),options:z.value,label:o.$t("select_language"),dense:"",borderless:"","emit-value":"","map-options":"","options-dense":"",style:{"min-width":"150px"}},null,8,["modelValue","options","label"])]),_:1})]),_:1})]),_:1})):_("",!0)]),_:1})]),d(u)?(s(),H("div",de,[e(k,{padding:"",class:"rounded-borders text-indigo-10 my-font",style:{width:"100%","font-size":"16px","font-weight":"bold"}},{default:t(()=>[e(x,{spaced:""}),h((s(),i(c,{clickable:"",active:o.link==="help",onClick:o.handleLogout},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"xs",name:"logout"})]),_:1}),e(l,null,{default:t(()=>[r(n(o.$t("logout")),1)]),_:1})]),_:1},8,["active","onClick"])),[[v]])]),_:1})])):_("",!0)])]),_:1},8,["modelValue"]),q.value?(s(),i(D,{key:0,reveal:"",class:"text-white q-py-sm navigation-background-color bg-white","height-hint":"98"},{default:t(()=>[e(ae,null,{default:t(()=>[e(ee,{class:"q-pa-none",style:{"margin-left":"2%"}},{default:t(()=>[a("div",re,[a("div",null,[e(R,{to:"/home"},{default:t(()=>[ue]),_:1})]),me])]),_:1}),e(te,{align:"left","no-caps":"",dense:"","inline-label":"",class:"text-black my-font-2",style:{"margin-right":"auto"}},{default:t(()=>[e(W,{name:"images",label:o.$t("home"),to:"/home"},null,8,["label"])]),_:1}),a("div",ce,[e(N,{"label-color":"grey-9",modelValue:d(p),"onUpdate:modelValue":m[3]||(m[3]=g=>L(p)?p.value=g:null),options:z.value,dense:"",borderless:"","emit-value":"","map-options":"",style:{"font-weight":"700","font-size":"12px","font-color":"rgb(41, 41, 41)"}},null,8,["modelValue","options"])])]),_:1})]),_:1})):_("",!0),V.value?(s(),i(D,{key:1,class:"text-white q-py-none navigation-background-color","height-hint":"98"},{default:t(()=>[a("div",fe,[e(R,{to:"/home"},{default:t(()=>[pe]),_:1}),e($,{align:"around",class:"q-pa-none text-grey-9",flat:"",label:"MORE","icon-right":"mdi-menu",onClick:C})])]),_:1})):_("",!0),e(X,null,{default:t(()=>[e(A)]),_:1})]),_:1})}}};export{Qe as default};
