import{h as P,bI as O,cD as R,c3 as C,cm as U,cE as j,b$ as k,cF as T,ce as I,bP as E,c0 as V,r as M,c as m,w as J,g as G,ax as H,bg as Z,cV as ee,bJ as F,X as te}from"./index.c5019b13.js";import{g as L,s as X}from"./touch.a05ec304.js";import{c as ne}from"./selection.ec5da427.js";import{u as ie}from"./use-cache.b0833c75.js";const oe=P("div",{class:"q-space"});var pe=O({name:"QSpace",setup(){return()=>oe}});function re(t){const o=[.06,6,50];return typeof t=="string"&&t.length&&t.split(":").forEach((c,p)=>{const a=parseFloat(c);a&&(o[p]=a)}),o}var ae=R({name:"touch-swipe",beforeMount(t,{value:o,arg:c,modifiers:p}){if(p.mouse!==!0&&C.has.touch!==!0)return;const a=p.mouseCapture===!0?"Capture":"",e={handler:o,sensitivity:re(c),direction:L(p),noop:U,mouseStart(i){X(i,e)&&j(i)&&(k(e,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),e.start(i,!0))},touchStart(i){if(X(i,e)){const l=i.target;k(e,"temp",[[l,"touchmove","move","notPassiveCapture"],[l,"touchcancel","end","notPassiveCapture"],[l,"touchend","end","notPassiveCapture"]]),e.start(i)}},start(i,l){C.is.firefox===!0&&T(t,!0);const f=I(i);e.event={x:f.left,y:f.top,time:Date.now(),mouse:l===!0,dir:!1}},move(i){if(e.event===void 0)return;if(e.event.dir!==!1){E(i);return}const l=Date.now()-e.event.time;if(l===0)return;const f=I(i),h=f.left-e.event.x,u=Math.abs(h),g=f.top-e.event.y,s=Math.abs(g);if(e.event.mouse!==!0){if(u<e.sensitivity[1]&&s<e.sensitivity[1]){e.end(i);return}}else if(window.getSelection().toString()!==""){e.end(i);return}else if(u<e.sensitivity[2]&&s<e.sensitivity[2])return;const v=u/l,y=s/l;e.direction.vertical===!0&&u<s&&u<100&&y>e.sensitivity[0]&&(e.event.dir=g<0?"up":"down"),e.direction.horizontal===!0&&u>s&&s<100&&v>e.sensitivity[0]&&(e.event.dir=h<0?"left":"right"),e.direction.up===!0&&u<s&&g<0&&u<100&&y>e.sensitivity[0]&&(e.event.dir="up"),e.direction.down===!0&&u<s&&g>0&&u<100&&y>e.sensitivity[0]&&(e.event.dir="down"),e.direction.left===!0&&u>s&&h<0&&s<100&&v>e.sensitivity[0]&&(e.event.dir="left"),e.direction.right===!0&&u>s&&h>0&&s<100&&v>e.sensitivity[0]&&(e.event.dir="right"),e.event.dir!==!1?(E(i),e.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),ne(),e.styleCleanup=S=>{e.styleCleanup=void 0,document.body.classList.remove("non-selectable");const b=()=>{document.body.classList.remove("no-pointer-events--children")};S===!0?setTimeout(b,50):b()}),e.handler({evt:i,touch:e.event.mouse!==!0,mouse:e.event.mouse,direction:e.event.dir,duration:l,distance:{x:u,y:s}})):e.end(i)},end(i){e.event!==void 0&&(V(e,"temp"),C.is.firefox===!0&&T(t,!1),e.styleCleanup!==void 0&&e.styleCleanup(!0),i!==void 0&&e.event.dir!==!1&&E(i),e.event=void 0)}};if(t.__qtouchswipe=e,p.mouse===!0){const i=p.mouseCapture===!0||p.mousecapture===!0?"Capture":"";k(e,"main",[[t,"mousedown","mouseStart",`passive${i}`]])}C.has.touch===!0&&k(e,"main",[[t,"touchstart","touchStart",`passive${p.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,o){const c=t.__qtouchswipe;c!==void 0&&(o.oldValue!==o.value&&(typeof o.value!="function"&&c.end(),c.handler=o.value),c.direction=L(o.modifiers))},beforeUnmount(t){const o=t.__qtouchswipe;o!==void 0&&(V(o,"main"),V(o,"temp"),C.is.firefox===!0&&T(t,!1),o.styleCleanup!==void 0&&o.styleCleanup(),delete t.__qtouchswipe)}});const de={name:{required:!0},disable:Boolean},z={setup(t,{slots:o}){return()=>P("div",{class:"q-panel scroll",role:"tabpanel"},F(o.default))}},ve={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},fe=["update:modelValue","beforeTransition","transition"];function me(){const{props:t,emit:o,proxy:c}=G(),{getCacheWithFn:p}=ie();let a,e;const i=M(null),l=M(null);function f(n){const r=t.vertical===!0?"up":"left";x((c.$q.lang.rtl===!0?-1:1)*(n.direction===r?1:-1))}const h=m(()=>[[ae,f,void 0,{horizontal:t.vertical!==!0,vertical:t.vertical,mouse:!0}]]),u=m(()=>t.transitionPrev||`slide-${t.vertical===!0?"down":"right"}`),g=m(()=>t.transitionNext||`slide-${t.vertical===!0?"up":"left"}`),s=m(()=>`--q-transition-duration: ${t.transitionDuration}ms`),v=m(()=>typeof t.modelValue=="string"||typeof t.modelValue=="number"?t.modelValue:String(t.modelValue)),y=m(()=>({include:t.keepAliveInclude,exclude:t.keepAliveExclude,max:t.keepAliveMax})),S=m(()=>t.keepAliveInclude!==void 0||t.keepAliveExclude!==void 0);J(()=>t.modelValue,(n,r)=>{const d=w(n)===!0?q(n):-1;e!==!0&&N(d===-1?0:d<q(r)?-1:1),i.value!==d&&(i.value=d,o("beforeTransition",n,r),H(()=>{o("transition",n,r)}))});function b(){x(1)}function D(){x(-1)}function _(n){o("update:modelValue",n)}function w(n){return n!=null&&n!==""}function q(n){return a.findIndex(r=>r.props.name===n&&r.props.disable!==""&&r.props.disable!==!0)}function K(){return a.filter(n=>n.props.disable!==""&&n.props.disable!==!0)}function N(n){const r=n!==0&&t.animated===!0&&i.value!==-1?"q-transition--"+(n===-1?u.value:g.value):null;l.value!==r&&(l.value=r)}function x(n,r=i.value){let d=r+n;for(;d>-1&&d<a.length;){const A=a[d];if(A!==void 0&&A.props.disable!==""&&A.props.disable!==!0){N(n),e=!0,o("update:modelValue",A.props.name),setTimeout(()=>{e=!1});return}d+=n}t.infinite===!0&&a.length!==0&&r!==-1&&r!==a.length&&x(n,n===-1?a.length:-1)}function $(){const n=q(t.modelValue);return i.value!==n&&(i.value=n),!0}function B(){const n=w(t.modelValue)===!0&&$()&&a[i.value];return t.keepAlive===!0?[P(te,y.value,[P(S.value===!0?p(v.value,()=>({...z,name:v.value})):z,{key:v.value,style:s.value},()=>n)])]:[P("div",{class:"q-panel scroll",style:s.value,key:v.value,role:"tabpanel"},[n])]}function Q(){if(a.length!==0)return t.animated===!0?[P(Z,{name:l.value},B)]:B()}function W(n){return a=ee(F(n.default,[])).filter(r=>r.props!==null&&r.props.slot===void 0&&w(r.props.name)===!0),a.length}function Y(){return a}return Object.assign(c,{next:b,previous:D,goTo:_}),{panelIndex:i,panelDirectives:h,updatePanelsList:W,updatePanelIndex:$,getPanelContent:Q,getEnabledPanels:K,getPanels:Y,isValidPanelName:w,keepAliveProps:y,needsUniqueKeepAliveWrapper:S,goToPanelByOffset:x,goToPanel:_,nextPanel:b,previousPanel:D}}export{pe as Q,ve as a,fe as b,me as c,de as u};
