import{c as _,bA as R,h as g,r as f,w as Q,aA as ie,bg as Pe,bL as oe,cL as ze,az as K,aI as m,a6 as p,P as re,K as ce,a7 as t,Q as y,j as i,bb as a,bX as Ie,bW as h,a5 as w,F,cM as Te,o as we,g as be,cN as de,bC as Me,bE as je,bK as Ae,cO as Ne,bT as Qe,d as Be,cP as Ve,a4 as k,aO as ue,cQ as I,cR as P,cS as N,cT as Oe,aQ as Ee,ad as q,bZ as me,ac as ae}from"./index.cf96c746.js";import{a as he,b as ge,c as W,Q as fe}from"./touch.c5579a7b.js";import{_ as xe,a as qe,b as Se,c as $e}from"./UG logo 23.94742629.js";import{u as Fe,a as Re,b as De,c as Le,Q as Z}from"./use-panel.e08d48f5.js";import{u as Ge}from"./vue-i18n.runtime.099e35ec.js";const ke={ratio:[String,Number]};function Ce(e,o){return _(()=>{const n=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(n)!==!0&&n>0?{paddingBottom:`${100/n}%`}:null})}var ve=R({name:"QVideo",props:{...ke,src:{type:String,required:!0},title:String,fetchpriority:{type:String,default:"auto"},loading:{type:String,default:"eager"},referrerpolicy:{type:String,default:"strict-origin-when-cross-origin"}},setup(e){const o=Ce(e),n=_(()=>"q-video"+(e.ratio!==void 0?" q-video--responsive":""));return()=>g("div",{class:n.value,style:o.value},[g("iframe",{src:e.src,title:e.title,fetchpriority:e.fetchpriority,loading:e.loading,referrerpolicy:e.referrerpolicy,frameborder:"0",allowfullscreen:!0})])}});const Ue=16/9;var T=R({name:"QImg",props:{...ke,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:Ue},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:n}){const l=f(e.initialRatio),u=Ce(e,l);let c=null,s=!1;const r=[f(null),f(z())],b=f(0),S=f(!1),x=f(!1),C=_(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),X=_(()=>({width:e.width,height:e.height})),M=_(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition`),D=_(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));Q(()=>L(),G);function L(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function z(){return e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null}function G(d){c!==null&&(clearTimeout(c),c=null),x.value=!1,d===null?(S.value=!1,r[b.value^1].value=z()):S.value=!0,r[b.value].value=d}function U({target:d}){s!==!0&&(c!==null&&(clearTimeout(c),c=null),l.value=d.naturalHeight===0?.5:d.naturalWidth/d.naturalHeight,B(d,1))}function B(d,A){s===!0||A===1e3||(d.complete===!0?Y(d):c=setTimeout(()=>{c=null,B(d,A+1)},50))}function Y(d){s!==!0&&(b.value=b.value^1,r[b.value].value=null,S.value=!1,x.value=!1,n("load",d.currentSrc||d.src))}function H(d){c!==null&&(clearTimeout(c),c=null),S.value=!1,x.value=!0,r[b.value].value=null,r[b.value^1].value=z(),n("error",d)}function j(d){const A=r[d].value,v={key:"img_"+d,class:M.value,style:D.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...A};return b.value===d?(v.class+=" q-img__image--waiting",Object.assign(v,{onLoad:U,onError:H})):v.class+=" q-img__image--loaded",g("div",{class:"q-img__container absolute-full",key:"img"+d},g("img",v))}function V(){return S.value!==!0?g("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},oe(o[x.value===!0?"error":"default"])):g("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[g(ze,{color:e.spinnerColor,size:e.spinnerSize})])}return G(L()),ie(()=>{s=!0,c!==null&&(clearTimeout(c),c=null)}),()=>{const d=[];return u.value!==null&&d.push(g("div",{key:"filler",style:u.value})),x.value!==!0&&(r[0].value!==null&&d.push(j(0)),r[1].value!==null&&d.push(j(1))),d.push(g(Pe,{name:"q-transition--fade"},V)),g("div",{class:C.value,style:X.value,role:"img","aria-label":e.alt},d)}}}),He="/assets/mockup.f76de99f.png",te="/assets/DJI_00371.4655b24c.png";const We={class:"row items-center",id:"hero",style:{"min-height":"75vh","max-width":"90%","margin-left":"auto"}},Ze={class:"column items-left",style:{"min-height":"70%","border-radius":"20px","max-width":"45%"}},Je={class:"",style:{"border-radius":"20px","background-color":"#03213500"}},Ke={class:"column"},Xe={class:"col justify-left"},Ye={class:"my-font-2 tagline text-left text-grey-1 q-pa-none",style:{}},et={class:"row justify-left"},tt={class:"my-font-2 text-left text-grey-1 q-px-none q-py-md",style:{"font-weight":"400","font-size":"21px"}},it={class:"row justify-left"},ot={class:"text-left q-py-md",style:{"min-width":"60%"}},at={class:"q-px-md my-font-2"},st={class:"col items-center",style:{"min-height":"100%","min-width":"40%"}},nt={class:"column justify-center items-center",style:{"min-height":"100%"}},lt={class:"",style:{height:"100%",width:"80%"}},rt={class:"row"},ct={class:"my-font-2 q-px-sm text-left q-pt-xl text-grey-1 q-pa-none",style:{"max-width":"90vw",margin:"auto","font-weight":"700","font-size":"xx-large","line-height":"1.75"}},dt={class:"my-font-2 q-px-sm q-pt-lg text-left text-grey-1 q-px-none q-pb-md",style:{"font-weight":"400","font-size":"21px","max-width":"90vw",margin:"auto"}},ut={class:"row justify-left q-pb-lg q-ml-xs",style:{"max-width":"90vw"}},mt={class:"text-left q-py-md my-font-2",style:{"min-width":"100vw"}},ht={__name:"herosection",setup(e){f(1),f(!0);const o=f(!1),n=f(!1);return K(()=>{n.value=window.matchMedia("(max-width: 768px)").matches,o.value=window.matchMedia("(min-width: 768px)").matches}),(l,u)=>(m(),p(F,null,[o.value?(m(),p("div",{key:0,class:"col page-tint",id:"",style:re([{"max-width":"100%"},{backgroundImage:`url(${ce(te)})`}])},[t("div",We,[t("div",Ze,[t("div",Je,[t("div",Ke,[t("div",Xe,[t("div",Ye,y(l.$t("tagline")),1)]),t("div",et,[t("div",tt,y(l.$t("subtag")),1)])])]),t("div",it,[t("div",ot,[i(h,{class:"q-mx-none q-px-none",rounded:"",color:"white","text-color":"primary",to:"/dashboard"},{default:a(()=>[i(Ie,{class:"q-mx-sm q-px-none","font-size":"12px",size:"md",color:"indigo-12","text-color":"white",icon:"mdi-monitor-dashboard"}),t("div",at,y(l.$t("webgis")),1)]),_:1})])])]),t("div",st,[t("div",nt,[t("div",lt,[t("div",rt,[i(T,{class:"col",src:He,style:{position:"relative","border-radius":"20px","min-height":"100%"}})])])])])])],4)):w("",!0),n.value?(m(),p("div",{key:1,class:"page-tint",style:re([{"min-width":"100%"},{backgroundImage:`url(${ce(te)})`}])},[t("div",ct,y(l.$t("tagline")),1),t("div",dt,y(l.$t("subtag")),1),t("div",ut,[t("div",mt,[i(h,{class:"my-font-2 q-ml-md text-bold",size:"md","text-color":"blue-9",style:{"background-color":"#ffffff","border-radius":"12px"},label:l.$t("webgis"),to:"/dashboard"},null,8,["label"])])])],4)):w("",!0)],64))}};var ye=R({name:"QCarouselSlide",props:{...Fe,imgSrc:String},setup(e,{slots:o}){const n=_(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>g("div",{class:"q-carousel__slide",style:n.value},oe(o.default))}}),J=R({name:"QCarouselControl",props:{position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,default:()=>[18,18],validator:e=>e.length===2}},setup(e,{slots:o}){const n=_(()=>`q-carousel__control absolute absolute-${e.position}`),l=_(()=>({margin:`${e.offset[1]}px ${e.offset[0]}px`}));return()=>g("div",{class:n.value,style:l.value},oe(o.default))}});let E=0;const gt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},ft=["update:fullscreen","fullscreen"];function vt(){const e=be(),{props:o,emit:n,proxy:l}=e;let u,c,s;const r=f(!1);Te(e)===!0&&Q(()=>l.$route.fullPath,()=>{o.noRouteFullscreenExit!==!0&&x()}),Q(()=>o.fullscreen,C=>{r.value!==C&&b()}),Q(r,C=>{n("update:fullscreen",C),n("fullscreen",C)});function b(){r.value===!0?x():S()}function S(){r.value!==!0&&(r.value=!0,s=l.$el.parentNode,s.replaceChild(c,l.$el),document.body.appendChild(l.$el),E++,E===1&&document.body.classList.add("q-body--fullscreen-mixin"),u={handler:x},de.add(u))}function x(){r.value===!0&&(u!==void 0&&(de.remove(u),u=void 0),s.replaceChild(l.$el,c),r.value=!1,E=Math.max(0,E-1),E===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),l.$el.scrollIntoView!==void 0&&setTimeout(()=>{l.$el.scrollIntoView()})))}return K(()=>{c=document.createElement("span")}),we(()=>{o.fullscreen===!0&&S()}),ie(x),Object.assign(l,{toggleFullscreen:b,setFullscreen:S,exitFullscreen:x}),{inFullscreen:r,toggleFullscreen:b}}const yt=["top","right","bottom","left"],_t=["regular","flat","outline","push","unelevated"];var _e=R({name:"QCarousel",props:{...Me,...Re,...gt,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>_t.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>yt.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...ft,...De],setup(e,{slots:o}){const{proxy:{$q:n}}=be(),l=je(e,n);let u=null,c;const{updatePanelsList:s,getPanelContent:r,panelDirectives:b,goToPanel:S,previousPanel:x,nextPanel:C,getEnabledPanels:X,panelIndex:M}=Le(),{inFullscreen:D}=vt(),L=_(()=>D.value!==!0&&e.height!==void 0?{height:e.height}:{}),z=_(()=>e.vertical===!0?"vertical":"horizontal"),G=_(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(D.value===!0?" fullscreen":"")+(l.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${z.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${H.value}`:"")),U=_(()=>{const v=[e.prevIcon||n.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||n.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&n.lang.rtl===!0?v.reverse():v}),B=_(()=>e.navigationIcon||n.iconSet.carousel.navigationIcon),Y=_(()=>e.navigationActiveIcon||B.value),H=_(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),j=_(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));Q(()=>e.modelValue,()=>{e.autoplay&&V()}),Q(()=>e.autoplay,v=>{v?V():u!==null&&(clearTimeout(u),u=null)});function V(){const v=Ne(e.autoplay)===!0?Math.abs(e.autoplay):5e3;u!==null&&clearTimeout(u),u=setTimeout(()=>{u=null,v>=0?C():x()},v)}we(()=>{e.autoplay&&V()}),ie(()=>{u!==null&&clearTimeout(u)});function d(v,O){return g("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${v} q-carousel__navigation--${H.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[g("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},X().map(O))])}function A(){const v=[];if(e.navigation===!0){const O=o["navigation-icon"]!==void 0?o["navigation-icon"]:$=>g(h,{key:"nav"+$.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${$.active===!0?"":"in"}active`,...$.btnProps,onClick:$.onClick}),ee=c-1;v.push(d("buttons",($,se)=>{const ne=$.props.name,le=M.value===se;return O({index:se,maxIndex:ee,name:ne,active:le,btnProps:{icon:le===!0?Y.value:B.value,size:"sm",...j.value},onClick:()=>{S(ne)}})}))}else if(e.thumbnails===!0){const O=e.controlColor!==void 0?` text-${e.controlColor}`:"";v.push(d("thumbnails",ee=>{const $=ee.props;return g("img",{key:"tmb#"+$.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${$.name===e.modelValue?"":"in"}active`+O,src:$.imgSrc||$["img-src"],onClick:()=>{S($.name)}})}))}return e.arrows===!0&&M.value>=0&&((e.infinite===!0||M.value>0)&&v.push(g("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${z.value} absolute flex flex-center`},[g(h,{icon:U.value[0],...j.value,onClick:x})])),(e.infinite===!0||M.value<c-1)&&v.push(g("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${z.value} absolute flex flex-center`},[g(h,{icon:U.value[1],...j.value,onClick:C})]))),Qe(o.control,v)}return()=>(c=s(o),g("div",{class:G.value,style:L.value},[Ae("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>b.value)].concat(A())))}}),pt="/assets/DJI_00302.81dff950.png",pe="/assets/DJI_08781.f3a3d820.png",wt="/assets/DJI_05791.7d8e23a9.png",bt="/assets/oil-spill2023-05-0323-12-122023-05-0513-53-20_2023-05-08_15-40-07.b1a2b0ba.jpg";const xt=Be({setup(){const e=f([]),o=f(!1),n=f(!1);e.value=[{id:1,image:te,title:"Oceanographic Variables",description:"This service issues two monthly bulletins: one for fisheries managers and fishermen, highlighting local oceanographic processes' impact on fish distribution. The second bulletin explores local oceanographic conditions and their effects on fishing operations and coastal communities."},{id:2,image:pe,title:"Potential Fishing Zones (PFZS)",description:`Sea surface temperature and ocean colour products are useful for
            monitoring conditions that affect fish distribution. Ocean colour
            products including Chl-a data provides measurements of phytoplankton
            abundance. SST measurements are useful for identifying oceanographic
            features including upwelling and fronts. These features are
            associated with nutrient enrichment and areas of the ocean where
            fish aggregate to feed which can be analyzed to generate potential
            fishing zones.`},{id:3,image:pt,title:"Ocean Condition Forecast",description:`Access to oceanic data on waves, currents, winds, and sea surface
            heights is vital for safe navigation, especially in ocean
            transportation, the primary mode of goods and services transport.
            "ROUGH," or "DANGEROUS," are disseminated through SMS texts by
            fisheries institutions. At local fishing communities we use
            color-coded flags\u2014green for 'CALM,' yellow for 'ROUGH,' and red for
            'DANGEROUS'\u2014to share this data, making it easily accessible.`},{id:4,image:wt,title:"Coastal Ecosystem/Habitats",description:"Assessing, monitoring, and mapping the coastal zone is crucial to safeguarding it from degradation caused by natural processes and human activities. The Coastal Zone Mapping service aims to create accurate maps of coastal resources, enabling the management of natural and human-induced impacts on coastal habitats, such as storm surges affecting flora and fauna distribution and mangrove ecosystems. These maps will also provide data on land-use and land-cover changes, helping coastal zone managers and planners understand the drivers and effects of these changes. "},{id:5,image:pe,title:"Coastal Vulnerability Assesment",description:"The goal of Coastal Vulnerability service is to set up an efficient way of monitoring the coastal environment to address the issues related to coastal erosion in these critical areas. The morphological study of the beaches, with their characteristics and changes will provide relevant information for an efficient monitoring of the coastal areas and implement of sound beach-lagoon management practices. Inputs data will include raster and shapefiles of geomorphological, relief and natural habitats indicators. Winds, wave exposure and net sea level change products from models covering the West African region will be an essential input that will help estimate the effect of ocean and winds to the different types of coastal habitats."},{id:6,image:bt,title:"Oil Spill Monitoring",description:`The Coastal Zone Mapping service aims to create accurate maps of
            coastal resources, enabling the management of natural and
            human-induced impacts on coastal habitats, such as storm surges
            affecting flora and fauna distribution and mangrove ecosystems.
            These maps will also provide data on land-use and land-cover
            changes, helping coastal zone managers and planners understand the
            drivers and effects of these changes.`}];const l=c=>{const s=(c+1)%e.value.length;return e.value[s]},u=c=>{if(c>0){const s=(c-1)%e.value.length;return e.value[s]}else return e.value[0]};return K(()=>{n.value=window.matchMedia("(max-width: 768px)").matches,o.value=window.matchMedia("(min-width: 768px)").matches}),{services:e,slide:f(3),getNextService:l,getPrevService:u,matchMediaDesktop:o,matchMediaMobile:n}}}),qt={class:"row fit justify-around items-center q-mx-auto q-col-gutter no-wrap",style:{"max-height":"600vh"}},St=t("div",{class:"text-overline text-orange-9"},null,-1),$t={class:"text-subtitle1 q-mt-sm q-mb-xs"},kt={class:"text-caption text-grey-7 service-desc"},Ct=t("div",{class:"text-overline text-orange-9"},null,-1),Pt={class:"text-h5 q-mt-sm q-mb-xs text-white"},zt={class:"text-caption text-white service-desc"},It={class:"text-h5 text-primary q-mt-sm q-mb-xs",style:{"font-weight":"700"}},Tt=t("div",{class:"text-overline text-orange-9"},null,-1),Mt={class:"text-caption text-grey-7 service-desc"},jt=t("div",{class:"text-overline text-orange-9"},null,-1),At={class:"text-subtitle1 q-mt-sm q-mb-xs"},Nt={class:"text-caption text-grey-7 service-desc"},Qt=t("div",{class:"text-overline text-orange-9"},null,-1),Bt={class:"text-h5 q-mt-sm q-mb-xs text-white"},Vt={class:"text-caption text-white service-desc"},Ot={class:"row fit justify-around items-center q-mx-auto q-col-gutter no-wrap",style:{"max-height":"600vh"}},Et=t("div",{class:"text-overline text-orange-9"},null,-1),Ft={class:"text-h6 q-mt-sm q-mb-xs"},Rt={class:"text-caption text-grey-8"};function Dt(e,o,n,l,u,c){return m(),p(F,null,[e.matchMediaDesktop?(m(),k(_e,{key:0,modelValue:e.slide,"onUpdate:modelValue":o[2]||(o[2]=s=>e.slide=s),"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"",navigation:"","control-color":"grey-7",height:"650px",style:{"background-color":"#00000000"},class:"rounded-borders",ref:"carousel"},{control:a(()=>[i(J,{class:"carousel-control",style:{left:"30%"}},{default:a(()=>[e.slide!==1?(m(),k(h,{key:0,outline:"",round:"",dense:"",color:"primary","text-color":"primary",icon:"arrow_left",onClick:o[0]||(o[0]=s=>e.$refs.carousel.previous())})):w("",!0)]),_:1}),i(J,{class:"carousel-control",style:{right:"30%"}},{default:a(()=>[e.slide!==6?(m(),k(h,{key:0,outline:"",round:"",dense:"",color:"primary","text-color":"primary",icon:"arrow_right",onClick:o[1]||(o[1]=s=>e.$refs.carousel.next())})):w("",!0)]),_:1})]),default:a(()=>[(m(!0),p(F,null,ue(e.services,(s,r)=>(m(),k(ye,{name:s.id,key:s.id,class:"column no-wrap"},{default:a(()=>[t("div",qt,[s.id!==1?(m(),k(I,{key:0,class:"my-card overlay bg-grey-2",flat:"",style:{"max-width":"24%"}},{default:a(()=>[i(T,{src:e.getPrevService(r).image,style:{"max-height":"200px"}},null,8,["src"]),i(P,null,{default:a(()=>[St,t("div",$t,y(e.getPrevService(r).title),1),t("div",kt,y(e.getPrevService(r).description),1)]),_:2},1024),i(N,null,{default:a(()=>[i(h,{to:"/dashboard",outline:"",rounded:"",color:"primary",label:"view on dashboard"}),i(Z)]),_:1})]),_:2},1024)):(m(),k(I,{key:1,class:"my-card overlay bg-grey-2",flat:"",style:{"max-width":"24%"}},{default:a(()=>[i(T,{class:"bg-white",style:{height:"250px"}}),i(P,null,{default:a(()=>[Ct,t("div",Pt,y(e.getPrevService(r).title),1),t("div",zt,y(e.getPrevService(r).description),1)]),_:2},1024),i(N)]),_:2},1024)),i(I,{class:"my-card bg-",flat:"",style:{"max-width":"30%"}},{default:a(()=>[i(P,null,{default:a(()=>[t("div",It,y(s.title),1)]),_:2},1024),i(T,{src:s.image,style:{"max-height":"300px","border-radius":"10px"}},null,8,["src"]),i(P,{style:{"min-height":"15vh"}},{default:a(()=>[Tt,t("div",Mt,y(s.description),1)]),_:2},1024),i(N,{class:"q-mb-xl"},{default:a(()=>[i(h,{to:"/dashboard",outline:"",rounded:"",color:"primary",label:"view on dashboard"}),i(Z)]),_:1})]),_:2},1024),s.id!==6?(m(),k(I,{key:2,class:"my-card overlay bg-grey-2",flat:"",style:{"max-width":"24%"}},{default:a(()=>[i(T,{src:e.getNextService(r).image,style:{"max-height":"200px"}},null,8,["src"]),i(P,null,{default:a(()=>[jt,t("div",At,y(e.getNextService(r).title),1),t("div",Nt,y(e.getNextService(r).description),1)]),_:2},1024),i(N,null,{default:a(()=>[i(h,{to:"/dashboard",outline:"",rounded:"",color:"primary",label:"view on dashboard"}),i(Z)]),_:1})]),_:2},1024)):(m(),k(I,{key:3,class:"my-card overlay bg-grey-2",flat:"",style:{"max-width":"24%"}},{default:a(()=>[i(T,{class:"bg-white",style:{height:"250px"}}),i(P,null,{default:a(()=>[Qt,t("div",Bt,y(e.getPrevService(r).title),1),t("div",Vt,y(e.getPrevService(r).description),1)]),_:2},1024),i(N)]),_:2},1024))])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])):w("",!0),e.matchMediaMobile?(m(),k(_e,{key:1,modelValue:e.slide,"onUpdate:modelValue":o[5]||(o[5]=s=>e.slide=s),"transition-prev":"slide-right","transition-next":"slide-left",swipeable:"",animated:"",navigation:"","control-color":"grey-7",height:"750px",style:{"background-color":"#00000000"},class:"rounded-borders",ref:"carousel"},{control:a(()=>[i(J,{class:"",style:{position:"absolute",margin:"auto",left:"4%",bottom:"45%"}},{default:a(()=>[i(h,{round:"",dense:"",color:"primary","text-color":"white",icon:"arrow_left",onClick:o[3]||(o[3]=s=>e.$refs.carousel.previous())})]),_:1}),i(J,{class:"",style:{position:"absolute",margin:"auto",right:"4%",bottom:"45%"}},{default:a(()=>[i(h,{round:"",dense:"",color:"primary","text-color":"white",icon:"arrow_right",onClick:o[4]||(o[4]=s=>e.$refs.carousel.next())})]),_:1})]),default:a(()=>[(m(!0),p(F,null,ue(e.services,(s,r)=>(m(),k(ye,{name:s.id,key:s.id,class:"column no-wrap"},{default:a(()=>[t("div",Ot,[i(I,{class:"my-card bg-grey-2",flat:"",style:{"max-width":"90%"}},{default:a(()=>[i(P,null,{default:a(()=>[Et,t("div",Ft,y(s.title),1),t("div",Rt,y(s.description),1)]),_:2},1024),i(T,{src:s.image,style:{"max-height":"250px"}},null,8,["src"]),i(N,null,{default:a(()=>[i(h,{to:"/dashboard",class:"q-my-md",outline:"",rounded:"",color:"primary",label:"view on dashboard"}),i(Z)]),_:1})]),_:2},1024)])]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])):w("",!0)],64)}var Lt=Ve(xt,[["render",Dt]]);const Gt={class:"row q-mx-md q-my-sm items-start jumbotron",id:"hero"},Ut={class:"bg-white",style:{"max-width":"90vw",margin:"auto",position:"relative"},id:"products-section"},Ht={key:0,class:"my-font-2 text-Primary text-center q-px-md q-mt-lg",style:{"font-weight":"700","font-size":"30px",color:"#25408f","max-width":"90vw","margin-left":"auto"}},Wt={class:"row justify-center",style:{"min-width":"0vw",position:"absolute",right:"50%",top:"-7%","z-index":"1000"}},Zt={key:0,class:"my-font-2 bg-grey-3 text-h6 text-Primary q-px-md q-pt-lg",style:{"font-weight":"700",color:"#25408f"}},Jt={key:1,class:"column bg-grey-3"},Kt={class:"my-font-2 text-left text-grey-8 q-pa-md",style:{margin:"auto","font-weight":"medium","font-size":"medium","line-height":"1.75"}},Xt={key:2,class:"bg-grey-3",style:{"min-width":"100vw"}},Yt={class:"q-pa-md",style:{"border-radius":"15px"}},ei={key:3,class:"about-container bg-primary"},ti=t("div",{class:"row items-center justify-center my-font-2 text-white q-mt-lg",style:{"font-weight":"700","font-size":"30px",color:"#25408f",width:"90%","min-height":"10vh",margin:"auto"}},[t("div",{class:"q-mx-lg"},"About the MarCNoWA Project")],-1),ii={style:{width:"90vw","min-height":"60vh",margin:"auto"},class:"row items-center justify-center bg-primary q-px-none q-py-lg q-ma-none page-tint",id:"about-section"},oi={class:"col q-pa-none q-ma-none",style:{"min-height":"70%","max-width":"90%"}},ai={class:"row q-mb-lg"},si={class:"col q-mx-xl"},ni={class:"col q-mx-xl",style:{"border-radius":"15px"}},li={key:4,style:{"min-width":"100%","background-color":"#ffffff"},class:"row items-center justify-center q-pa-none q-ma-none"},ri=ae('<div class="column justify-center q-pa-none q-ma-none" style="min-height:70%;"><div class="my-font-2 text-center text-h6 q-px-md q-py-md" style="font-weight:700;color:#25408f;"> Implementing Partners </div><div class="row q-gutter-x-md q-my-lg"><div class="column"><img src="'+xe+'" style="position:relative;width:100%;height:35px;"></div><div class="column q-pl-md"><img src="'+qe+'" style="position:relative;width:100%;height:35px;left:-1%;"></div><div class="column q-pl-md"><img src="'+Se+'" style="position:relative;width:100%;height:35px;left:-1%;"></div><div class="column q-pl-md"><img src="'+$e+'" style="position:relative;width:100%;height:50px;left:-1%;"></div></div></div>',1),ci=[ri],di={key:5,style:{"min-width":"100%","min-height":"45vh","background-color":"#ffffff"},class:"row items-center justify-center q-pa-none q-ma-none"},ui=ae('<div class="column justify-center q-pa-none q-ma-none" style="min-height:70%;max-width:90%;"><div class="my-font-2 text-center q-px-md q-py-md" style="font-weight:700;font-size:30px;color:#25408f;"> Implementing Partners </div><div class="row q-gutter-x-lg"><div class="column"><img src="'+xe+'" style="position:relative;width:100%;height:70px;"></div><div class="column q-pl-md"><img src="'+qe+'" style="position:relative;width:100%;height:70px;left:-1%;"></div><div class="column q-pl-md"><img src="'+Se+'" style="position:relative;width:100%;height:70px;left:-1%;"></div><div class="column q-pl-md"><img src="'+$e+'" style="position:relative;width:100%;height:70px;left:-1%;"></div></div></div>',1),mi=[ui],hi={key:6,class:"footer-pc row justify-center q-pa-none q-ma-none"},gi={class:"column justify-center q-pa-none",style:{"max-width":"90vw","min-height":"100%"}},fi={class:"row q-my-lg"},vi={class:"col q-ma-md",style:{"min-width":"25vw"}},yi={class:"column items-center"},_i={class:"column items-start q-gutter-none",style:{}},pi=t("div",{class:"col q-my-none q-py-none text-blue-2",style:{"font-size":"12px"},caption:"",lines:"2"},[q(" C/o P.O.Box LG 99, Legon"),t("br"),q("Accra, GHANA"),t("br"),q("(+233) 244671350"),t("br"),q("rmc@ug.edu.gh ")],-1),wi={class:"col q-ma-md",style:{"min-width":"25vw"}},bi={class:"column items-center"},xi={class:"q-my-none text-justify text-white",style:{"max-width":"25vw"}},qi=t("div",{class:"q-pa-md",style:{"font-weight":"700","font-size":"21px"}}," Community ",-1),Si=t("div",{class:"q-px-md q-pb-md"}," Stay informed about coastal wonders. Subscribe now for ",-1),$i={class:"row justify-left q-gutter-lg items-left"},ki=ae('<div class="col items-center q-ma-md" style="min-width:25vw;"><div class="column items-center"><div class="q-my-none text-justify text-white" style="max-width:15vw;"><div class="q-pa-md" style="font-weight:700;font-size:21px;"> Make your contribution </div><div class="q-px-md q-pb-md"> Stay informed about coastal wonders. Subscribe now for exclusive updates on geomorphology, shoreline change, and environmental conservation. </div></div></div></div>',1),Ci={key:7,style:{"min-width":"100%","min-height":"30vh","background-color":"#9fa6aa"},class:"column justify-center q-pa-none q-ma-none"},Pi={class:"row"},zi={class:"column q-mx-md items-start q-gutter-none",style:{}},Ii=t("div",{class:"col q-my-none q-py-none text-blue-2",style:{"font-size":"12px"},caption:"",lines:"2"},[q(" C/o P.O.Box LG 99, Legon"),t("br"),q("Accra, GHANA"),t("br"),q("(+233) 244671350"),t("br"),q("rmc@ug.edu.gh ")],-1),Ti={class:"row"},Mi={class:"col q-ma-md"},ji=t("div",{class:"row text-white q-ml-md",style:{"font-weight":"700","font-size":"21px"}}," Community ",-1),Ai={class:"row justify-left q-gutter-lg items-left"},Ei={__name:"home",setup(e){Oe(),Ge({useScope:"global"}),f(1),f("mails"),f([{value:"en-US",label:"English"},{value:"fr",label:"French"}]);const o=()=>{const u=document.getElementById("products-section");u&&u.scrollIntoView({behavior:"smooth"})};f(!1);const n=f(!1),l=f(!1);return K(()=>{l.value=window.matchMedia("(max-width: 768px)").matches,n.value=window.matchMedia("(min-width: 768px)").matches}),(u,c)=>{const s=Ee("P");return m(),p(F,null,[t("div",Gt,[i(ht)]),t("div",Ut,[n.value?(m(),p("div",Ht,[t("div",Wt,[i(h,{class:"bg-white",unelevated:"",round:"",outline:"",color:"white","text-color":"primary",icon:"mdi-chevron-down",onClick:c[0]||(c[0]=r=>o())})])])):w("",!0),i(Lt)]),l.value?(m(),p("div",Zt," About MarCNoWA ")):w("",!0),l.value?(m(),p("div",Jt,[t("div",Kt,[i(s,null,{default:a(()=>[q(" The MarCNoWA consortium is lead by the Regional Marine Centre of the University of Ghana. The objective of the Action is to provide decision-makers with EO information and tools that would support effective marine and coastal resources management in North and West Africa. This is being achieved through delivering EO services that will enhance the formulation of marine, fisheries and environmental policies to support decision-making at the national and regional level. ")]),_:1})])])):w("",!0),l.value?(m(),p("div",Xt,[t("div",Yt,[i(ve,{src:"https://www.youtube.com/embed/8TA9UvQjzmc?si=MHGa14cmwQb026Pb",ratio:16/9})])])):w("",!0),n.value?(m(),p("div",ei,[ti,t("div",ii,[t("div",oi,[t("div",ai,[t("div",si,[i(I,{flat:"",class:"my-card text-grey-9 my-font-2 text-justify",style:{"background-color":"#f1b24a00","border-radius":"15px"}},{default:a(()=>[i(P,{class:"text-white",style:{"font-weight":"400","font-size":"18px"}},{default:a(()=>[i(s,null,{default:a(()=>[q(" The MarCNoWA consortium is lead by the Regional Marine Centre of the University of Ghana. The objective of the Action is to provide decision-makers with EO information and tools that would support effective marine and coastal resources management in North and West Africa. This is being achieved through delivering EO services that will enhance the formulation of marine, fisheries and environmental policies to support decision-making at the national and regional level. ")]),_:1})]),_:1})]),_:1})]),t("div",ni,[i(ve,{src:"https://www.youtube.com/embed/8TA9UvQjzmc?si=MHGa14cmwQb026Pb",ratio:16/9})])])])])])):w("",!0),l.value?(m(),p("div",li,ci)):w("",!0),n.value?(m(),p("div",di,mi)):w("",!0),n.value?(m(),p("div",hi,[t("div",gi,[t("div",fi,[t("div",vi,[t("div",yi,[t("div",_i,[i(fe,null,{default:a(()=>[i(he,null,{default:a(()=>[i(ge,null,{default:a(()=>[i(W,{class:"text-white",style:{"font-size":"21px"}},{default:a(()=>[q("Regional Marine Centre")]),_:1}),i(W,{class:"text-white",style:{"font-size":"21px"}},{default:a(()=>[q("University of Ghana")]),_:1}),pi]),_:1})]),_:1})]),_:1})])])]),i(me,{vertical:"",color:"grey-7"}),t("div",wi,[t("div",bi,[t("div",xi,[qi,Si,t("div",$i,[i(h,{round:"",flat:"",color:"grey-3",size:"lg",icon:"mdi-facebook"}),i(h,{round:"",flat:"",color:"grey-3",size:"lg",icon:"mdi-linkedin"}),i(h,{round:"",flat:"",color:"grey-3",size:"lg",icon:"mdi-twitter"}),i(h,{round:"",flat:"",color:"grey-3",size:"lg",icon:"mdi-content-copy"})])])])]),i(me,{vertical:"",color:"grey-7"}),ki])])])):w("",!0),l.value?(m(),p("div",Ci,[t("div",Pi,[t("div",zi,[i(fe,null,{default:a(()=>[i(he,null,{default:a(()=>[i(ge,null,{default:a(()=>[i(W,{class:"text-white",style:{"font-size":"21px"}},{default:a(()=>[q("Regional Marine Centre")]),_:1}),i(W,{class:"text-white",style:{"font-size":"21px"}},{default:a(()=>[q("University of Ghana")]),_:1}),Ii]),_:1})]),_:1})]),_:1})])]),t("div",Ti,[t("div",Mi,[ji,t("div",Ai,[i(h,{round:"",flat:"",color:"grey-3",size:"lg",icon:"mdi-facebook"}),i(h,{round:"",flat:"",color:"grey-3",size:"lg",icon:"mdi-linkedin"}),i(h,{round:"",flat:"",color:"grey-3",size:"lg",icon:"mdi-twitter"}),i(h,{round:"",flat:"",color:"grey-3",size:"lg",icon:"mdi-content-copy"})])])])])):w("",!0)],64)}}};export{Ei as default};
