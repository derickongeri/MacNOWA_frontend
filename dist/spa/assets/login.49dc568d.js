import{r as n,c as p,aQ as w,aI as g,a6 as h,a7 as e,Q as i,j as a,d5 as d,bb as u,bE as v,bC as m,P as y,K as f}from"./index.52bd84cb.js";import{i as _}from"./DJI_00371.e3907554.js";const b={class:"absolute-center q-pa-md bg-white login-card text-center"},x={class:"row text-h4 text-left justify-center text-primary",style:{"font-weight":"400"}},q={style:{margin:"auto","min-width":"25vw"},class:"q-pt-lg"},$={style:{"font-weight":"400"},class:"text-left text-grey-7"},V={class:"row q-pa-xs",style:{"min-width":"25vw"}},j={style:{"font-weight":"400"},class:"text-left text-grey-7 q-mt-md"},k={class:"row q-pa-xs",style:{"min-width":"25vw"}},P={class:"row justify-center full-width q-px-xl text-grey-7",style:{"font-weight":"400","font-size":"medium"}},Q={class:"row justify-center q-px-xl q-my-md"},z={class:"row justify-center items-center q-gutter-md full-width text-grey-7",style:{"font-weight":"400","font-size":"medium"}},B={class:""},N={__name:"login",setup(C){const l=n({email:"",password:""});p(()=>l.value.password&&l.value.password.length>0),n(!1);const r=n(!0);return(t,o)=>{const c=w("router-link");return g(),h("div",{class:"jumbotron",id:"hero",style:y([{backgroundImage:`url(${f(_)})`},{"min-width":"100vw","min-height":"95vh"}])},[e("div",b,[e("div",x,i(t.$t("login")),1),e("div",q,[e("div",$,i(t.$t("Emailaddress")),1),e("div",V,[a(d,{class:"q-px-none full-width",modelValue:l.value.email,"onUpdate:modelValue":o[0]||(o[0]=s=>l.value.email=s),color:"grey-1","bg-color":"grey-1",type:"email",placeholder:"email@example.com*"},null,8,["modelValue"])]),e("div",j,i(t.$t("Password")),1),e("div",k,[a(d,{class:"full-width",type:r.value?"password":"text",modelValue:l.value.password,"onUpdate:modelValue":o[2]||(o[2]=s=>l.value.password=s),"lazy-rules":"",color:"grey-1","bg-color":"grey-1",rules:[s=>s&&s.length>0||t.$t("required")]},{append:u(()=>[a(v,{name:r.value?"visibility_off":"visibility",class:"cursor-pointer",onClick:o[1]||(o[1]=s=>r.value=!r.value)},null,8,["name"])]),_:1},8,["type","modelValue","rules"])])]),e("div",P,[a(m,{class:"",rounded:"","no-caps":"",unelevated:"",color:"white","text-color":"grey-7",label:t.$t("ForgotPassword"),to:"resetpassword"},null,8,["label"])]),e("div",Q,[a(m,{class:"full-width text-h6",rounded:"","no-caps":"",unelevated:"",color:"primary",label:t.$t("login")},null,8,["label"])]),e("div",z,[e("div",null,i(t.$t("account")),1),a(c,{to:"signup"},{default:u(()=>[e("div",B,i(t.$t("Register")),1)]),_:1})])])],4)}}};export{N as default};