import{r as n,c,aQ as v,aI as y,a6 as g,a7 as t,Q as r,j as a,d5 as d,bb as u,bE as m,bC as w,P as f,K as h}from"./index.cc7c5616.js";import{i as _}from"./DJI_00371.e3907554.js";const b={class:"absolute-center q-pa-md bg-white login-card text-center"},x={class:"row text-h4 text-left justify-center text-primary",style:{"font-weight":"400"}},q={style:{margin:"auto","min-width":"25vw"},class:"q-pt-lg"},V={style:{"font-weight":"400"},class:"text-left text-grey-7"},$={class:"row q-gutter-md q-pa-xs q-mb-md"},N={class:"col"},k={class:"col"},C={style:{"font-weight":"400"},class:"text-left text-grey-7"},U={class:"row q-pa-xs",style:{"min-width":"25vw"}},j={style:{"font-weight":"400"},class:"text-left text-grey-7 q-mt-md"},I={class:"row q-pa-xs",style:{"min-width":"25vw"}},Q={style:{"font-weight":"400"},class:"text-left text-grey-7 q-mt-md"},z={class:"row q-pa-xs",style:{"min-width":"25vw"}},B={class:"row justify-center q-px-xl q-my-md"},P={class:"row justify-center items-center q-gutter-md full-width text-grey-7",style:{"font-weight":"400","font-size":"medium"}},E={class:""},D={__name:"signup",setup(F){const s=n({email:"",password:"",firstName:"",lastName:"",Country:"",Institution:""});c(()=>s.value.password&&s.value.password.length>0),n(!1);const i=n(!0);return(o,l)=>{const p=v("router-link");return y(),g("div",{class:"jumbotron",id:"hero",style:f([{backgroundImage:`url(${h(_)})`},{"min-width":"100vw","min-height":"95vh"}])},[t("div",b,[t("div",x,r(o.$t("Sing Up")),1),t("div",q,[t("div",V,r(o.$t("Yourname")),1),t("div",$,[t("div",N,[a(d,{class:"q-px-none full-width",modelValue:s.value.firstName,"onUpdate:modelValue":l[0]||(l[0]=e=>s.value.firstName=e),color:"grey-1","bg-color":"grey-1",type:"email",placeholder:"Firstname"},null,8,["modelValue"])]),t("div",k,[a(d,{class:"q-px-none full-width",modelValue:s.value.lastName,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value.lastName=e),color:"grey-1","bg-color":"grey-1",type:"email",placeholder:"Lastname"},null,8,["modelValue"])])]),t("div",C,r(o.$t("Emailaddress")),1),t("div",U,[a(d,{class:"q-px-none full-width",modelValue:s.value.email,"onUpdate:modelValue":l[2]||(l[2]=e=>s.value.email=e),color:"grey-1","bg-color":"grey-1",type:"email",placeholder:"example@mail.com*"},null,8,["modelValue"])]),t("div",j,r(o.$t("Password")),1),t("div",I,[a(d,{class:"full-width",type:i.value?"password":"text",modelValue:s.value.password,"onUpdate:modelValue":l[4]||(l[4]=e=>s.value.password=e),"lazy-rules":"",color:"grey-1","bg-color":"grey-1",rules:[e=>e&&e.length>0||o.$t("Field is required *")]},{append:u(()=>[a(m,{name:i.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[3]||(l[3]=e=>i.value=!i.value)},null,8,["name"])]),_:1},8,["type","modelValue","rules"])]),t("div",Q,r(o.$t("Confirmpassword")),1),t("div",z,[a(d,{class:"full-width",type:i.value?"password":"text",modelValue:s.value.password,"onUpdate:modelValue":l[6]||(l[6]=e=>s.value.password=e),"lazy-rules":"",color:"grey-1","bg-color":"grey-1",rules:[e=>e&&e.length>0||"Field is required *"]},{append:u(()=>[a(m,{name:i.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:l[5]||(l[5]=e=>i.value=!i.value)},null,8,["name"])]),_:1},8,["type","modelValue","rules"])])]),t("div",B,[a(w,{class:"full-width text-h6",rounded:"","no-caps":"",unelevated:"",color:"primary",label:o.$t("Register")},null,8,["label"])]),t("div",P,[t("div",null,r(o.$t("haveAccount")),1),a(p,{to:"login"},{default:u(()=>[t("div",E,r(o.$t("login")),1)]),_:1})])])],4)}}};export{D as default};
