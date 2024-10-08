import{bE as F,r,c as x,o as E,w as B,aI as n,a6 as u,j as a,bb as v,cX as h,bG as A,a7 as o,Q as d,F as P,aO as D,dg as N,a4 as I,db as q,a5 as V,bF as $,cW as L,da as M}from"./index.54040dac.js";import{Q as C}from"./QSelect.11f9ea61.js";import{u as T}from"./useNotify.c0040424.js";import{r as c}from"./institutions.44505cc1.js";import"./selection.1be3b56c.js";const Y={id:"onboarding",style:{"min-width":"100vw","min-height":"100vh"}},j={key:0,class:"q-pa-md",style:{"max-width":"60%",position:"relative",margin:"auto"}},G=o("div",{class:"bg-grey-4",style:{height:"20vh"}},null,-1),J={class:"text-subtitle1",style:{"font-size":"1.75em"}},W={class:"text-caption text-grey-9",style:{"font-size":"1em"}},X=o("div",{class:"text-grey-9"},null,-1),Z={class:"q-pa-md bg-white",style:{position:"relative",margin:"auto"}},H={class:"column items-"},K={style:{"min-width":"25vw"},class:"q-pt-lg q-mx-md"},ee={style:{"font-weight":"700","font-size":"0.85em"},class:"text-left text-grey-9"},te={class:"row q-pa-xs q-mb-md",style:{"min-width":"25vw"}},se={class:"col"},le={key:0,class:"q-px-lg"},oe=o("div",null,"Role*",-1),ae={style:{"font-weight":"700","font-size":"0.85em"},class:"text-left text-grey-9"},re={class:"row q-pa-xs q-mb-md",style:{"min-width":"25vw"}},ne={class:"col"},ie={style:{"font-weight":"700","font-size":"0.85em"},class:"text-left text-grey-9"},ue={class:"row q-pa-xs q-mb-md",style:{"min-width":"25vw"}},de={class:"col"},ce={class:"row justify-center q-px-xl q-my-md"},me=o("div",{class:"col"},null,-1),ve={class:"col-4"},fe={key:1},be={__name:"profile",setup(pe){F();const{supabase:f}=M(),{notifyError:g,notifySuccess:z}=T();r("");const e=r({email:"",firstName:"",lastName:"",Country:"",organization:"",role:"",sector:""}),_=r([]),m=r([]),i=r(null),U=r(null);function O(s){return s.sectors.map(l=>l.sector)}const p=s=>s.countries.map(l=>l.name),k=(s,l)=>{if(s===""){l(()=>{m.value=p(c)});return}l(()=>{const t=s.toLowerCase();m.value=p(c).filter(y=>y.toLowerCase().indexOf(t)>-1)})},S=async s=>{const{data:l,error:t}=await f.from("user_analytics").select("*").eq("email",s).single();return t?(console.error("Error fetching user profile:",t),null):l},w=async()=>{const{data:s,error:l}=await f.auth.getSession();return l?(console.error("Error fetching user data:",l.message),null):(console.log(s.session.user),e.value.firstName=s.session.user.user_metadata.firstName,e.value.lastName=s.session.user.user_metadata.lastName,e.value.email=s.session.user.email,S(e.value.email).then(t=>{t?(e.value.Country=t.country,e.value.organization=t.organization,e.value.role=t.role,e.value.sector=t.sector):console.log("No profile found for this email.")}),s.session.user)},b=x(()=>w());E(()=>{_.value=O(c),m.value=p(c),console.log(b.value),w()}),x(()=>e.value.password&&e.value.password.length>0);const Q=async()=>{if(e.value.email&&e.value.Country)try{const{data:s,error:l}=await f.from("user_analytics").update({firstName:e.value.firstName,lastName:e.value.lastName,country:e.value.Country,organization:e.value.organization,role:e.value.role,sector:e.value.sector}).eq("email",e.value.email);z("User Profile Updated")}catch(s){g(s.message)}else g("Please fill in the required fields")};r(!1),r(!0),B(e.value.sector,()=>{i.value=c.sectors.find(s=>s.sector===e.value.sector),console.log(i)});const R=()=>{i.value=c.sectors.find(s=>s.sector===e.value.sector),console.log(i),U.value=null};return(s,l)=>(n(),u("div",Y,[b.value?(n(),u("div",j,[a(L,{class:"my-card q-my-md",flat:"",style:{"min-width":"100%","border-radius":"20px"}},{default:v(()=>[G,a(h,{class:"q-py-md"},{default:v(()=>[a(A,{size:"150px","font-size":"120px",color:"primary","text-color":"white",icon:"mdi-account",class:"absolute",style:{top:"0",right:"28px",transform:"translateY(-50%)",border:"2px solid white"}})]),_:1}),a(h,{class:"q-mt-md q-mx-lg"},{default:v(()=>[o("div",J,d(e.value.firstName)+" "+d(e.value.lastName),1),o("div",W,d(e.value.email),1),X]),_:1}),a(h,null,{default:v(()=>[o("div",Z,[o("div",H,[o("div",K,[o("div",ee,d(s.$t("SECTOR")),1),o("div",te,[o("div",se,[o("div",null,[a(C,{dense:"",modelValue:e.value.sector,"onUpdate:modelValue":[l[0]||(l[0]=t=>e.value.sector=t),R],options:_.value,"emit-value":"","map-options":"","lazy-rules":"",rules:[t=>t&&t.length>0||"Field is required *"]},null,8,["modelValue","options","rules"])]),i.value?(n(),u("div",le,[oe,(n(!0),u(P,null,D(i.value.roles,t=>(n(),u("div",{key:t},[a(N,{modelValue:e.value.role,"onUpdate:modelValue":y=>e.value.role=y,label:t,val:t},null,8,["modelValue","onUpdate:modelValue","label","val"])]))),128)),a(N,{modelValue:e.value.role,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value.role=t),val:"Other",label:"Other"},null,8,["modelValue"]),e.value.role==="Other"?(n(),I(q,{key:0,dense:"",modelValue:e.value.otherRoles,"onUpdate:modelValue":l[2]||(l[2]=t=>e.value.otherRoles=t),label:"Describe your role/work"},null,8,["modelValue"])):V("",!0)])):V("",!0)])]),o("div",ae,d(s.$t("COMPANY / ORGANIZATION")),1),o("div",re,[o("div",ne,[o("div",null,[a(q,{dense:"",modelValue:e.value.organization,"onUpdate:modelValue":l[3]||(l[3]=t=>e.value.organization=t),label:"Company / Organization / Agency Name","lazy-rules":"",rules:[t=>t&&t.length>0||"Field is required *"]},null,8,["modelValue","rules"])])])]),o("div",ie,d(s.$t("COUNTRY")),1),o("div",ue,[o("div",de,[o("div",null,[a(C,{dense:"",modelValue:e.value.Country,"onUpdate:modelValue":l[4]||(l[4]=t=>e.value.Country=t),"use-input":"","input-debounce":"0",options:m.value,onFilter:k},null,8,["modelValue","options"])])])])])]),o("div",ce,[me,o("div",ve,[a($,{class:"full-width text-h6",rounded:"",dense:"","no-caps":"",unelevated:"",color:"primary",label:s.$t("Update"),onClick:Q},null,8,["label"])])])])]),_:1})]),_:1})])):(n(),u("div",fe,"Not logged in"))]))}};export{be as default};
