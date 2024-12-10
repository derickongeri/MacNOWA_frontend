import{bL as p,c8 as Be,bN as Pe,cb as Oe,bP as Re,cd as Me,i as ne,cB as O,cC as U,r as q,c as n,cf as Qe,cD as We,w as v,o as He,ax as se,aA as ve,bd as De,h as y,b$ as ce,bM as fe,g as j,cE as _e,bO as Ae,bQ as Ve,bT as pe,aK as he,cF as Fe,cG as Ie,c7 as te,x as N,a as Ne,cA as Ee}from"./index.8c2cb255.js";import{T as ae,u as Ue,c as je,d as Ke,e as le,f as Ge}from"./marcnowa.075c89bb.js";import{b as E}from"./QSelect.6b8a84ac.js";const de=150;var et=p({name:"QDrawer",inheritAttrs:!1,props:{...Be,...Pe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Oe,"onLayout","miniState"],setup(e,{slots:T,emit:f,attrs:r}){const o=j(),{proxy:{$q:s}}=o,S=Re(e,s),{preventBodyScroll:z}=_e(),{registerTimeout:L,removeTimeout:g}=Me(),a=ne(U,O);if(a===O)return console.error("QDrawer needs to be child of QLayout"),O;let Q,C=null,m;const d=q(e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint),B=n(()=>e.mini===!0&&d.value!==!0),b=n(()=>B.value===!0?e.miniWidth:e.width),c=q(e.showIfAbove===!0&&d.value===!1?!0:e.modelValue===!0),l=n(()=>e.persistent!==!0&&(d.value===!0||me.value===!0));function w(t,i){if(W(),t!==!1&&a.animate(),k(0),d.value===!0){const x=a.instances[F.value];x!==void 0&&x.belowBreakpoint===!0&&x.hide(!1),R(1),a.isContainer.value!==!0&&z(!0)}else R(0),t!==!1&&Y(!1);L(()=>{t!==!1&&Y(!0),i!==!0&&f("show",t)},de)}function u(t,i){A(),t!==!1&&a.animate(),R(0),k(D.value*b.value),Z(),i!==!0?L(()=>{f("hide",t)},de):g()}const{show:h,hide:$}=Qe({showing:c,hideOnRouteChange:l,handleShow:w,handleHide:u}),{addToHistory:W,removeFromHistory:A}=We(c,$,l),H={belowBreakpoint:d,hide:$},P=n(()=>e.side==="right"),D=n(()=>(s.lang.rtl===!0?-1:1)*(P.value===!0?1:-1)),oe=q(0),_=q(!1),K=q(!1),ie=q(b.value*D.value),F=n(()=>P.value===!0?"left":"right"),G=n(()=>c.value===!0&&d.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:b.value:0),X=n(()=>e.overlay===!0||e.miniToOverlay===!0||a.view.value.indexOf(P.value?"R":"L")!==-1||s.platform.is.ios===!0&&a.isContainer.value===!0),V=n(()=>e.overlay===!1&&c.value===!0&&d.value===!1),me=n(()=>e.overlay===!0&&c.value===!0&&d.value===!1),be=n(()=>"fullscreen q-drawer__backdrop"+(c.value===!1&&_.value===!1?" hidden":"")),ye=n(()=>({backgroundColor:`rgba(0,0,0,${oe.value*.4})`})),ue=n(()=>P.value===!0?a.rows.value.top[2]==="r":a.rows.value.top[0]==="l"),ge=n(()=>P.value===!0?a.rows.value.bottom[2]==="r":a.rows.value.bottom[0]==="l"),we=n(()=>{const t={};return a.header.space===!0&&ue.value===!1&&(X.value===!0?t.top=`${a.header.offset}px`:a.header.space===!0&&(t.top=`${a.header.size}px`)),a.footer.space===!0&&ge.value===!1&&(X.value===!0?t.bottom=`${a.footer.offset}px`:a.footer.space===!0&&(t.bottom=`${a.footer.size}px`)),t}),xe=n(()=>{const t={width:`${b.value}px`,transform:`translateX(${ie.value}px)`};return d.value===!0?t:Object.assign(t,we.value)}),qe=n(()=>"q-drawer__content fit "+(a.isContainer.value!==!0?"scroll":"overflow-auto")),Se=n(()=>`q-drawer q-drawer--${e.side}`+(K.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(S.value===!0?" q-drawer--dark q-dark":"")+(_.value===!0?" no-transition":c.value===!0?"":" q-layout--prevent-focus")+(d.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${B.value===!0?"mini":"standard"}`+(X.value===!0||V.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ue.value===!0?" q-drawer--top-padding":""))),$e=n(()=>{const t=s.lang.rtl===!0?e.side:F.value;return[[ae,ze,void 0,{[t]:!0,mouse:!0}]]}),ke=n(()=>{const t=s.lang.rtl===!0?F.value:e.side;return[[ae,re,void 0,{[t]:!0,mouse:!0}]]}),Te=n(()=>{const t=s.lang.rtl===!0?F.value:e.side;return[[ae,re,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]});function J(){Le(d,e.behavior==="mobile"||e.behavior!=="desktop"&&a.totalWidth.value<=e.breakpoint)}v(d,t=>{t===!0?(Q=c.value,c.value===!0&&$(!1)):e.overlay===!1&&e.behavior!=="mobile"&&Q!==!1&&(c.value===!0?(k(0),R(0),Z()):h(!1))}),v(()=>e.side,(t,i)=>{a.instances[i]===H&&(a.instances[i]=void 0,a[i].space=!1,a[i].offset=0),a.instances[t]=H,a[t].size=b.value,a[t].space=V.value,a[t].offset=G.value}),v(a.totalWidth,()=>{(a.isContainer.value===!0||document.qScrollPrevented!==!0)&&J()}),v(()=>e.behavior+e.breakpoint,J),v(a.isContainer,t=>{c.value===!0&&z(t!==!0),t===!0&&J()}),v(a.scrollbarWidth,()=>{k(c.value===!0?0:void 0)}),v(G,t=>{M("offset",t)}),v(V,t=>{f("onLayout",t),M("space",t)}),v(P,()=>{k()}),v(b,t=>{k(),ee(e.miniToOverlay,t)}),v(()=>e.miniToOverlay,t=>{ee(t,b.value)}),v(()=>s.lang.rtl,()=>{k()}),v(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Ce(),a.animate())}),v(B,t=>{f("miniState",t)});function k(t){t===void 0?se(()=>{t=c.value===!0?0:b.value,k(D.value*t)}):(a.isContainer.value===!0&&P.value===!0&&(d.value===!0||Math.abs(t)===b.value)&&(t+=D.value*a.scrollbarWidth.value),ie.value=t)}function R(t){oe.value=t}function Y(t){const i=t===!0?"remove":a.isContainer.value!==!0?"add":"";i!==""&&document.body.classList[i]("q-body--drawer-toggle")}function Ce(){C!==null&&clearTimeout(C),o.proxy&&o.proxy.$el&&o.proxy.$el.classList.add("q-drawer--mini-animate"),K.value=!0,C=setTimeout(()=>{C=null,K.value=!1,o&&o.proxy&&o.proxy.$el&&o.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function ze(t){if(c.value!==!1)return;const i=b.value,x=E(t.distance.x,0,i);if(t.isFinal===!0){x>=Math.min(75,i)===!0?h():(a.animate(),R(0),k(D.value*i)),_.value=!1;return}k((s.lang.rtl===!0?P.value!==!0:P.value)?Math.max(i-x,0):Math.min(0,x-i)),R(E(x/i,0,1)),t.isFirst===!0&&(_.value=!0)}function re(t){if(c.value!==!0)return;const i=b.value,x=t.direction===e.side,I=(s.lang.rtl===!0?x!==!0:x)?E(t.distance.x,0,i):0;if(t.isFinal===!0){Math.abs(I)<Math.min(75,i)===!0?(a.animate(),R(1),k(0)):$(),_.value=!1;return}k(D.value*I),R(E(1-I/i,0,1)),t.isFirst===!0&&(_.value=!0)}function Z(){z(!1),Y(!0)}function M(t,i){a.update(e.side,t,i)}function Le(t,i){t.value!==i&&(t.value=i)}function ee(t,i){M("size",t===!0?e.miniWidth:i)}return a.instances[e.side]=H,ee(e.miniToOverlay,b.value),M("space",V.value),M("offset",G.value),e.showIfAbove===!0&&e.modelValue!==!0&&c.value===!0&&e["onUpdate:modelValue"]!==void 0&&f("update:modelValue",!0),He(()=>{f("onLayout",V.value),f("miniState",B.value),Q=e.showIfAbove===!0;const t=()=>{(c.value===!0?w:u)(!1,!0)};if(a.totalWidth.value!==0){se(t);return}m=v(a.totalWidth,()=>{m(),m=void 0,c.value===!1&&e.showIfAbove===!0&&d.value===!1?h(!1):t()})}),ve(()=>{m!==void 0&&m(),C!==null&&(clearTimeout(C),C=null),c.value===!0&&Z(),a.instances[e.side]===H&&(a.instances[e.side]=void 0,M("size",0),M("offset",0),M("space",!1))}),()=>{const t=[];d.value===!0&&(e.noSwipeOpen===!1&&t.push(De(y("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),$e.value)),t.push(ce("div",{ref:"backdrop",class:be.value,style:ye.value,"aria-hidden":"true",onClick:$},void 0,"backdrop",e.noSwipeBackdrop!==!0&&c.value===!0,()=>Te.value)));const i=B.value===!0&&T.mini!==void 0,x=[y("div",{...r,key:""+i,class:[qe.value,r.class]},i===!0?T.mini():fe(T.default))];return e.elevated===!0&&c.value===!0&&x.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),t.push(ce("aside",{ref:"content",class:Se.value,style:xe.value},x,"contentclose",e.noSwipeClose!==!0&&d.value===!0,()=>ke.value)),y("div",{class:"q-drawer-container"},t)}}}),tt=p({name:"QRouteTab",props:{...Ae,...Ue},emits:je,setup(e,{slots:T,emit:f}){const r=Ve({useDisableForRouterLinkProps:!1}),{renderTab:o,$tabs:s}=Ke(e,T,f,{exact:n(()=>e.exact),...r});return v(()=>`${e.name} | ${e.exact} | ${(r.resolvedLink.value||{}).href}`,s.verifyRouteModel),()=>o(r.linkTag.value,r.linkAttrs.value)}}),at=p({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:T,emit:f}){const{proxy:{$q:r}}=j(),o=ne(U,O);if(o===O)return console.error("QHeader needs to be child of QLayout"),O;const s=q(parseInt(e.heightHint,10)),S=q(!0),z=n(()=>e.reveal===!0||o.view.value.indexOf("H")!==-1||r.platform.is.ios&&o.isContainer.value===!0),L=n(()=>{if(e.modelValue!==!0)return 0;if(z.value===!0)return S.value===!0?s.value:0;const l=s.value-o.scroll.value.position;return l>0?l:0}),g=n(()=>e.modelValue!==!0||z.value===!0&&S.value!==!0),a=n(()=>e.modelValue===!0&&g.value===!0&&e.reveal===!0),Q=n(()=>"q-header q-layout__section--marginal "+(z.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(g.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),C=n(()=>{const l=o.rows.value.top,w={};return l[0]==="l"&&o.left.space===!0&&(w[r.lang.rtl===!0?"right":"left"]=`${o.left.size}px`),l[2]==="r"&&o.right.space===!0&&(w[r.lang.rtl===!0?"left":"right"]=`${o.right.size}px`),w});function m(l,w){o.update("header",l,w)}function d(l,w){l.value!==w&&(l.value=w)}function B({height:l}){d(s,l),m("size",l)}function b(l){a.value===!0&&d(S,!0),f("focusin",l)}v(()=>e.modelValue,l=>{m("space",l),d(S,!0),o.animate()}),v(L,l=>{m("offset",l)}),v(()=>e.reveal,l=>{l===!1&&d(S,e.modelValue)}),v(S,l=>{o.animate(),f("reveal",l)}),v(o.scroll,l=>{e.reveal===!0&&d(S,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const c={};return o.instances.header=c,e.modelValue===!0&&m("size",s.value),m("space",e.modelValue),m("offset",L.value),ve(()=>{o.instances.header===c&&(o.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const l=pe(T.default,[]);return e.elevated===!0&&l.push(y("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(y(le,{debounce:0,onResize:B})),y("header",{class:Q.value,style:C.value,onFocusin:b},l)}}}),lt=p({name:"QPageContainer",setup(e,{slots:T}){const{proxy:{$q:f}}=j(),r=ne(U,O);if(r===O)return console.error("QPageContainer needs to be child of QLayout"),O;he(Fe,!0);const o=n(()=>{const s={};return r.header.space===!0&&(s.paddingTop=`${r.header.size}px`),r.right.space===!0&&(s[`padding${f.lang.rtl===!0?"Left":"Right"}`]=`${r.right.size}px`),r.footer.space===!0&&(s.paddingBottom=`${r.footer.size}px`),r.left.space===!0&&(s[`padding${f.lang.rtl===!0?"Right":"Left"}`]=`${r.left.size}px`),s});return()=>y("div",{class:"q-page-container",style:o.value},fe(T.default))}}),nt=p({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:T,emit:f}){const{proxy:{$q:r}}=j(),o=q(null),s=q(r.screen.height),S=q(e.container===!0?0:r.screen.width),z=q({position:0,direction:"down",inflectionPoint:0}),L=q(0),g=q(Ie.value===!0?0:te()),a=n(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),Q=n(()=>e.container===!1?{minHeight:r.screen.height+"px"}:null),C=n(()=>g.value!==0?{[r.lang.rtl===!0?"left":"right"]:`${g.value}px`}:null),m=n(()=>g.value!==0?{[r.lang.rtl===!0?"right":"left"]:0,[r.lang.rtl===!0?"left":"right"]:`-${g.value}px`,width:`calc(100% + ${g.value}px)`}:null);function d(u){if(e.container===!0||document.qScrollPrevented!==!0){const h={position:u.position.top,direction:u.direction,directionChanged:u.directionChanged,inflectionPoint:u.inflectionPoint.top,delta:u.delta.top};z.value=h,e.onScroll!==void 0&&f("scroll",h)}}function B(u){const{height:h,width:$}=u;let W=!1;s.value!==h&&(W=!0,s.value=h,e.onScrollHeight!==void 0&&f("scrollHeight",h),c()),S.value!==$&&(W=!0,S.value=$),W===!0&&e.onResize!==void 0&&f("resize",u)}function b({height:u}){L.value!==u&&(L.value=u,c())}function c(){if(e.container===!0){const u=s.value>L.value?te():0;g.value!==u&&(g.value=u)}}let l=null;const w={instances:{},view:n(()=>e.view),isContainer:n(()=>e.container),rootRef:o,height:s,containerHeight:L,scrollbarWidth:g,totalWidth:n(()=>S.value+g.value),rows:n(()=>{const u=e.view.toLowerCase().split(" ");return{top:u[0].split(""),middle:u[1].split(""),bottom:u[2].split("")}}),header:N({size:0,offset:0,space:!1}),right:N({size:300,offset:0,space:!1}),footer:N({size:0,offset:0,space:!1}),left:N({size:300,offset:0,space:!1}),scroll:z,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(u,h,$){w[u][h]=$}};if(he(U,w),te()>0){let $=function(){u=null,h.classList.remove("hide-scrollbar")},W=function(){if(u===null){if(h.scrollHeight>r.screen.height)return;h.classList.add("hide-scrollbar")}else clearTimeout(u);u=setTimeout($,300)},A=function(H){u!==null&&H==="remove"&&(clearTimeout(u),$()),window[`${H}EventListener`]("resize",W)},u=null;const h=document.body;v(()=>e.container!==!0?"add":"remove",A),e.container!==!0&&A("add"),Ne(()=>{A("remove")})}return()=>{const u=Ee(T.default,[y(Ge,{onScroll:d}),y(le,{onResize:B})]),h=y("div",{class:a.value,style:Q.value,ref:e.container===!0?void 0:o,tabindex:-1},u);return e.container===!0?y("div",{class:"q-layout-container overflow-hidden",ref:o},[y(le,{onResize:b}),y("div",{class:"absolute-full",style:C.value},[y("div",{class:"scroll",style:m.value},[h])])]):h}}}),ot="/assets/MarCNoWA_blue.509ffdfd.jpeg";export{et as Q,ot as _,at as a,tt as b,lt as c,nt as d};