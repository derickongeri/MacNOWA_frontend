import{bC as O,bD as F,bE as K,r as b,az as P,c as G,aQ as D,aI as o,a4 as s,bb as t,j as e,a7 as a,bF as k,K as d,ad as u,Q as n,bG as J,bH as f,bI as z,bd as p,a5 as v,f as I,a6 as W,bJ as X,bK as y}from"./index.8f98e293.js";import{Q as m,a as l,b as h}from"./selection.164a0fe9.js";import{Q as S}from"./QSelect.3ed6c584.js";import{Q as x,_ as Y,a as Z,b as ee,c as te}from"./UG logo 23.3b4d3e61.js";import{Q as ae,a as B,b as T,c as le,d as oe,_ as se}from"./MarCNoWA_blue.8add1210.js";import{Q as ie,a as ne,b as de,_ as ue}from"./marcnowa.5333332f.js";import{Q as re}from"./format.69cc4860.js";import{C as H}from"./ClosePopup.d2a136d3.js";import{u as me}from"./vue-i18n.runtime.dd3509c5.js";const ce={class:"row",style:{position:"absolute","z-index":"5001",left:"-5%",top:"2%"}},fe={class:"column justify-between bg-grey-1 text-lime-9",style:{position:"absolute",height:"100%",width:"100%","z-index":"5000"}},pe={class:"row",style:{width:"100%"}},_e={key:0,class:"row"},ge={class:"row items-center justify-between"},he=a("img",{src:ue,style:{width:"100%",height:"50px"}},null,-1),be=a("div",{class:"col"},[a("div",{class:"row items-center",style:{"margin-left":"10%"}},[a("div",{class:"column"},[a("img",{src:Y,style:{position:"relative",width:"100%",height:"35px"}})]),a("div",{class:"column q-pl-md"},[a("img",{src:Z,style:{position:"relative",width:"100%",height:"35px",left:"-1%"}})]),a("div",{class:"column q-pl-md"},[a("img",{src:ee,style:{position:"relative",width:"100%",height:"35px",left:"-1%"}})]),a("div",{class:"column q-pl-md"},[a("img",{src:te,style:{position:"relative",width:"100%",height:"50px",left:"-1%"}})])])],-1),ve={class:"my-font q-mr-md",style:{"font-weight":"700"}},ye={class:"row justify-between q-mx-sm"},we=a("img",{class:"q-ml-none",src:se,style:{position:"relative",width:"100%",height:"50px"}},null,-1),Ne={__name:"MainLayout",setup(ke){const U=O(),{logout:j,user:r}=X(),{locale:_}=me({useScope:"global"}),q=F(),$=K(),V=b([{value:"en-US",label:"English"},{value:"fr",label:"Fran\xE7ais"}]),w=b(!1),Q=b(!1),C=b(!1),M=b(!1),L=()=>{w.value=!w.value,console.log($.currentRoute.value.path)};P(()=>{M.value=window.matchMedia("(max-width: 768px)").matches,C.value=window.matchMedia("(min-width: 768px)").matches});const A=G(()=>q.path==="/home"||q.path==="/"),N=async()=>{U.dialog({title:"Logout",message:"Do you really want to leave?",cancel:!0,persistent:!0}).onOk(async()=>{await j(),$.replace({name:"login"})})};return(i,c)=>{const R=D("router-link"),E=D("router-view");return o(),s(oe,{view:"lHh Lpr lFf"},{default:t(()=>[e(ae,{class:"mobile-view",modelValue:w.value,"onUpdate:modelValue":c[2]||(c[2]=g=>w.value=g),side:"right",style:{"z-index":"5000"}},{default:t(()=>[a("div",ce,[e(k,{color:"grey-1","text-color":"indigo-10",round:"",unelevated:"",icon:"mdi-chevron-right",size:"md",onClick:L})]),a("div",fe,[a("div",pe,[e(x,{padding:"",class:"rounded-borders text-indigo-10 my-font",style:{width:"100%","font-size":"16px","font-weight":"bold"}},{default:t(()=>[d(r)?(o(),s(m,{key:0,class:"q-my-lg q-pt-lg"},{default:t(()=>[e(l,null,{default:t(()=>[e(h,{class:"text-h6",style:{"font-size":"21px","font-weight":"bold"}},{default:t(()=>[u(n(d(r).user_metadata.firstName)+" "+n(d(r).user_metadata.lastName),1)]),_:1}),e(h,{caption:"",style:{"font-size":"12px"}},{default:t(()=>[u(n(d(r).email),1)]),_:1})]),_:1}),e(l,{avatar:""},{default:t(()=>[e(J,{color:"indigo-10","text-color":"grey-1"},{default:t(()=>[u(n(d(r).user_metadata.firstName.charAt(0))+n(d(r).user_metadata.lastName.charAt(0)),1)]),_:1})]),_:1})]),_:1})):(o(),s(m,{key:1,class:"q-my-lg q-pt-lg",clickable:"",to:"/login"},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"",name:"mdi-login-variant"})]),_:1}),e(l,null,{default:t(()=>[e(h,{class:"text-h6",style:{"font-size":"21px","font-weight":"bold"}},{default:t(()=>[u(n(i.$t("login")),1)]),_:1}),e(h,{caption:"",style:{"font-size":"12px"}},{default:t(()=>[u("Login to access features")]),_:1})]),_:1})]),_:1})),e(z,{spaced:""}),A.value?p((o(),s(m,{key:2,clickable:"",to:"/dashboard"},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"xs",name:"mdi-view-dashboard"})]),_:1}),e(l,null,{default:t(()=>[u(n(i.$t("dashboard")),1)]),_:1})]),_:1})),[[y]]):p((o(),s(m,{key:3,clickable:"",to:"/home"},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"xs",name:"mdi-home"})]),_:1}),e(l,null,{default:t(()=>[u(n(i.$t("home")),1)]),_:1})]),_:1})),[[y]]),p((o(),s(m,{clickable:"",onClick:c[0]||(c[0]=g=>Q.value=!Q.value)},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"xs",name:"mdi-cog"})]),_:1}),e(l,null,{default:t(()=>[u(n(i.$t("settings")),1)]),_:1})]),_:1})),[[y]]),e(z,{spaced:""}),Q.value?(o(),s(x,{key:4,class:"q-mx-md",style:{"min-width":"100px"}},{default:t(()=>[d(r)?p((o(),s(m,{key:0,clickable:"",to:"me"},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"xs",name:"mdi-account-cog"})]),_:1}),e(l,null,{default:t(()=>[u(n(i.$t("my_profile")),1)]),_:1})]),_:1})),[[y]]):v("",!0),e(m,{clickable:""},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"xs",name:"mdi-translate"})]),_:1}),e(l,null,{default:t(()=>[e(S,{"label-color":"grey-9",modelValue:d(_),"onUpdate:modelValue":c[1]||(c[1]=g=>I(_)?_.value=g:null),options:V.value,label:i.$t("select_language"),dense:"",borderless:"","emit-value":"","map-options":"","options-dense":"",style:{"min-width":"150px"}},null,8,["modelValue","options","label"])]),_:1})]),_:1})]),_:1})):v("",!0)]),_:1})]),d(r)?(o(),W("div",_e,[e(x,{padding:"",class:"rounded-borders text-indigo-10 my-font",style:{width:"100%","font-size":"16px","font-weight":"bold"}},{default:t(()=>[e(z,{spaced:""}),p((o(),s(m,{clickable:"",active:i.link==="help",onClick:N},{default:t(()=>[e(l,{avatar:""},{default:t(()=>[e(f,{size:"xs",name:"logout"})]),_:1}),e(l,null,{default:t(()=>[u(n(i.$t("logout")),1)]),_:1})]),_:1},8,["active"])),[[y]])]),_:1})])):v("",!0)])]),_:1},8,["modelValue"]),C.value?(o(),s(B,{key:0,reveal:"",class:"text-white q-py-sm navigation-background-color bg-white","height-hint":"98"},{default:t(()=>[e(de,null,{default:t(()=>[e(ie,{class:"q-pa-none",style:{"margin-left":"2%"}},{default:t(()=>[a("div",ge,[a("div",null,[e(R,{to:"/home"},{default:t(()=>[he]),_:1})]),be])]),_:1}),e(ne,{align:"left","no-caps":"",dense:"","inline-label":"",class:"text-black my-font-2",style:{"margin-right":"auto"}},{default:t(()=>[e(T,{name:"images",label:i.$t("home"),to:"/home"},null,8,["label"]),e(T,{ripple:"false",name:"dashboard",label:i.$t("dashboard"),to:"/dashboard"},null,8,["label"]),d(r)?(o(),s(k,{key:0,class:"my-font-2 q-mr-md",style:{"font-weight":"400"},flat:"","no-caps":"",color:"grey-9",icon:"mdi-account","icon-right":"mdi-menu-down",label:"Hi, "+d(r).user_metadata.firstName},{default:t(()=>[e(re,{fit:""},{default:t(()=>[e(x,null,{default:t(()=>[p((o(),s(m,{clickable:"",to:"/me"},{default:t(()=>[e(l,null,{default:t(()=>[e(h,null,{default:t(()=>[u(n(i.$t("profile")),1)]),_:1})]),_:1})]),_:1})),[[H]]),p((o(),s(m,{clickable:"",onClick:N},{default:t(()=>[e(l,null,{default:t(()=>[e(h,null,{default:t(()=>[u(n(i.$t("logout")),1)]),_:1})]),_:1})]),_:1})),[[H]])]),_:1})]),_:1})]),_:1},8,["label"])):(o(),s(k,{key:1,class:"my-font-2 q-mr-lg",style:{"font-weight":"700"},flat:"","no-caps":"",color:"grey-9",icon:"mdi-account",label:i.$t("login"),to:"login"},null,8,["label"]))]),_:1}),a("div",ve,[e(S,{"label-color":"grey-9",modelValue:d(_),"onUpdate:modelValue":c[3]||(c[3]=g=>I(_)?_.value=g:null),options:V.value,dense:"",borderless:"","emit-value":"","map-options":"",style:{"font-weight":"700","font-size":"12px"}},null,8,["modelValue","options"])])]),_:1})]),_:1})):v("",!0),M.value?(o(),s(B,{key:1,class:"text-white q-py-none navigation-background-color","height-hint":"98"},{default:t(()=>[a("div",ye,[e(R,{to:"/home"},{default:t(()=>[we]),_:1}),e(k,{align:"around",class:"q-pa-none text-grey-9",flat:"",label:"MORE","icon-right":"mdi-menu",onClick:L})])]),_:1})):v("",!0),e(le,null,{default:t(()=>[e(E)]),_:1})]),_:1})}}};export{Ne as default};
