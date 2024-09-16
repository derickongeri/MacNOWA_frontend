import u from"./supabase.c506b608.js";import{r as c}from"./index.3bc9ff94.js";const e=c(null);function U(){const{supabase:t}=u(),a="http://localhost:9000/#/login";return{user:e,login:async({email:s,password:o})=>{const r=await t.auth.signInWithPassword({email:s,password:o});if(e.value=r.data.user,console.log(e.value),r.error)throw r.error;return e},loginWithSocialProvider:async s=>{const{user:o,error:r}=await t.auth.signIn({provider:s});if(r)throw r;return o},logout:async()=>{const{error:s}=await t.auth.signOut();if(s)throw s},isLoggedIn:()=>!!e.value,register:async({email:s,password:o,...r})=>{console.log(r);const{user:i,error:n}=await t.auth.signUp({email:s,password:o,options:{data:r,emailRedirectTo:`${a}`}});if(n)throw n;return i},update:async s=>{const{user:o,error:r}=await t.auth.update(s);if(r)throw r;return o},sendPasswordRestEmail:async s=>{const{user:o,error:r}=await t.auth.resetPasswordForEmail(s,{redirectTo:`${a}update-password`});if(r)throw r;return o},updateUserPassword:async s=>{const{user:o,error:r}=await t.auth.updateUser({password:s});if(r)throw r;return o}}}export{U as u};