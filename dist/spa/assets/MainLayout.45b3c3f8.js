import{k as le,c as v,h as b,l as ut,u as il,m as rl,w as K,n as at,p as It,q as Ht,s as Et,t as Rt,r as F,v as ue,x as sl,y as cl,z as dl,A as fl,B as Qe,g as Ce,C as vl,D as ml,E as Vt,G as Te,H as hl,I as gl,J as Ge,Q as Sl,K as yl,L as be,M as Pt,N as bl,O as pe,P as pl,R as Bt,i as $t,S as we,U as it,V as wl,W as Dt,X as Vl,o as Cl,Y as _l,Z as xl,_ as kl,$ as zl,a0 as ql,a1 as Je,a2 as De,a as Al,a3 as Tl,a4 as Ll,a5 as Fl,a6 as Ct,a7 as Le,a8 as Fe,a9 as B,j as $,aa as Y,ab as _t,ac as xt,ad as kt,ae as zt,af as Ml,f as Ol}from"./index.76b3ac71.js";import{u as Il,a as Hl,b as El,r as et,n as qt,Q as Rl,c as Qt,d as tt,e as Pl}from"./format.a220b7f6.js";import{Q as lt,a as nt,b as ot,c as Bl}from"./selection.cc644b89.js";import{_ as $l,a as Dl,b as Ql,c as Nl}from"./UG logo 23.3c2a60a6.js";import{u as Kl}from"./vue-i18n.runtime.03001e55.js";var jl=le({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const n=v(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>b("div",{class:n.value},ut(i.default))}}),At=le({name:"QRouteTab",props:{...il,...Il},emits:Hl,setup(e,{slots:i,emit:n}){const u=rl({useDisableForRouterLinkProps:!1}),{renderTab:c,$tabs:o}=El(e,i,n,{exact:v(()=>e.exact),...u});return K(()=>`${e.name} | ${e.exact} | ${(u.resolvedLink.value||{}).href}`,()=>{o.verifyRouteModel()}),()=>c(u.linkTag.value,u.linkAttrs.value)}}),Ul=le({name:"QField",inheritAttrs:!1,props:at,emits:It,setup(){return Ht(Et())}});const J=1e3,Wl=["start","center","end","start-force","center-force","end-force"],Nt=Array.prototype.filter,Xl=window.getComputedStyle(document.body).overflowAnchor===void 0?Rt:function(e,i){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const n=e.children||[];Nt.call(n,c=>c.dataset&&c.dataset.qVsAnchor!==void 0).forEach(c=>{delete c.dataset.qVsAnchor});const u=n[i];u&&u.dataset&&(u.dataset.qVsAnchor="")}))};function Ve(e,i){return e+i}function Ze(e,i,n,u,c,o,w,g){const S=e===window?document.scrollingElement||document.documentElement:e,x=c===!0?"offsetWidth":"offsetHeight",d={scrollStart:0,scrollViewSize:-w-g,scrollMaxSize:0,offsetStart:-w,offsetEnd:-g};if(c===!0?(e===window?(d.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,d.scrollViewSize+=document.documentElement.clientWidth):(d.scrollStart=S.scrollLeft,d.scrollViewSize+=S.clientWidth),d.scrollMaxSize=S.scrollWidth,o===!0&&(d.scrollStart=(et===!0?d.scrollMaxSize-d.scrollViewSize:0)-d.scrollStart)):(e===window?(d.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,d.scrollViewSize+=document.documentElement.clientHeight):(d.scrollStart=S.scrollTop,d.scrollViewSize+=S.clientHeight),d.scrollMaxSize=S.scrollHeight),n!==null)for(let p=n.previousElementSibling;p!==null;p=p.previousElementSibling)p.classList.contains("q-virtual-scroll--skip")===!1&&(d.offsetStart+=p[x]);if(u!==null)for(let p=u.nextElementSibling;p!==null;p=p.nextElementSibling)p.classList.contains("q-virtual-scroll--skip")===!1&&(d.offsetEnd+=p[x]);if(i!==e){const p=S.getBoundingClientRect(),V=i.getBoundingClientRect();c===!0?(d.offsetStart+=V.left-p.left,d.offsetEnd-=V.width):(d.offsetStart+=V.top-p.top,d.offsetEnd-=V.height),e!==window&&(d.offsetStart+=d.scrollStart),d.offsetEnd+=d.scrollMaxSize-d.offsetStart}return d}function Tt(e,i,n,u){i==="end"&&(i=(e===window?document.body:e)[n===!0?"scrollWidth":"scrollHeight"]),e===window?n===!0?(u===!0&&(i=(et===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-i),window.scrollTo(i,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,i):n===!0?(u===!0&&(i=(et===!0?e.scrollWidth-e.offsetWidth:0)-i),e.scrollLeft=i):e.scrollTop=i}function Me(e,i,n,u){if(n>=u)return 0;const c=i.length,o=Math.floor(n/J),w=Math.floor((u-1)/J)+1;let g=e.slice(o,w).reduce(Ve,0);return n%J!==0&&(g-=i.slice(o*J,n).reduce(Ve,0)),u%J!==0&&u!==c&&(g-=i.slice(u,w*J).reduce(Ve,0)),g}const Yl={virtualScrollSliceSize:{type:[Number,String],default:null},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},Gl={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...Yl};function Jl({virtualScrollLength:e,getVirtualScrollTarget:i,getVirtualScrollEl:n,virtualScrollItemSizeComputed:u}){const c=Ce(),{props:o,emit:w,proxy:g}=c,{$q:S}=g;let x,d,p,V=[],m;const q=F(0),D=F(0),H=F({}),Q=F(null),h=F(null),L=F(null),f=F({from:0,to:0}),E=v(()=>o.tableColspan!==void 0?o.tableColspan:100);u===void 0&&(u=v(()=>o.virtualScrollItemSize));const T=v(()=>u.value+";"+o.virtualScrollHorizontal),j=v(()=>T.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);K(j,()=>{Z()}),K(T,G);function G(){de(d,!0)}function ne(l){de(l===void 0?d:l)}function ae(l,s){const C=i();if(C==null||C.nodeType===8)return;const O=Ze(C,n(),Q.value,h.value,o.virtualScrollHorizontal,S.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);p!==O.scrollViewSize&&Z(O.scrollViewSize),U(C,O,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,Wl.indexOf(s)>-1?s:d>-1&&l>d?"end":"start")}function Oe(){const l=i();if(l==null||l.nodeType===8)return;const s=Ze(l,n(),Q.value,h.value,o.virtualScrollHorizontal,S.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),C=e.value-1,O=s.scrollMaxSize-s.offsetStart-s.offsetEnd-D.value;if(x===s.scrollStart)return;if(s.scrollMaxSize<=0){U(l,s,0,0);return}p!==s.scrollViewSize&&Z(s.scrollViewSize),_e(f.value.from);const R=Math.floor(s.scrollMaxSize-Math.max(s.scrollViewSize,s.offsetEnd)-Math.min(m[C],s.scrollViewSize/2));if(R>0&&Math.ceil(s.scrollStart)>=R){U(l,s,C,s.scrollMaxSize-s.offsetEnd-V.reduce(Ve,0));return}let z=0,k=s.scrollStart-s.offsetStart,P=k;if(k<=O&&k+s.scrollViewSize>=q.value)k-=q.value,z=f.value.from,P=k;else for(let _=0;k>=V[_]&&z<C;_++)k-=V[_],z+=J;for(;k>0&&z<C;)k-=m[z],k>-s.scrollViewSize?(z++,P=k):P=m[z]+k;U(l,s,z,P)}function U(l,s,C,O,R){const z=typeof R=="string"&&R.indexOf("-force")>-1,k=z===!0?R.replace("-force",""):R,P=k!==void 0?k:"start";let _=Math.max(0,C-H.value[P]),W=_+H.value.total;W>e.value&&(W=e.value,_=Math.max(0,W-H.value.total)),x=s.scrollStart;const oe=_!==f.value.from||W!==f.value.to;if(oe===!1&&k===void 0){xe(C);return}const{activeElement:He}=document,ee=L.value;oe===!0&&ee!==null&&ee!==He&&ee.contains(He)===!0&&(ee.addEventListener("focusout",Ie),setTimeout(()=>{ee!==null&&ee.removeEventListener("focusout",Ie)})),Xl(ee,C-_);const Ee=k!==void 0?m.slice(_,C).reduce(Ve,0):0;if(oe===!0){const ie=W>=f.value.from&&_<=f.value.to?f.value.to:W;f.value={from:_,to:ie},q.value=Me(V,m,0,_),D.value=Me(V,m,W,e.value),requestAnimationFrame(()=>{f.value.to!==W&&x===s.scrollStart&&(f.value={from:f.value.from,to:W},D.value=Me(V,m,W,e.value))})}requestAnimationFrame(()=>{if(x!==s.scrollStart)return;oe===!0&&_e(_);const ie=m.slice(_,C).reduce(Ve,0),re=ie+s.offsetStart+q.value,Re=re+m[C];let ze=re+O;if(k!==void 0){const Ke=ie-Ee,qe=s.scrollStart+Ke;ze=z!==!0&&qe<re&&Re<qe+s.scrollViewSize?qe:k==="end"?Re-s.scrollViewSize:re-(k==="start"?0:Math.round((s.scrollViewSize-m[C])/2))}x=ze,Tt(l,ze,o.virtualScrollHorizontal,S.lang.rtl),xe(C)})}function _e(l){const s=L.value;if(s){const C=Nt.call(s.children,_=>_.classList&&_.classList.contains("q-virtual-scroll--skip")===!1),O=C.length,R=o.virtualScrollHorizontal===!0?_=>_.getBoundingClientRect().width:_=>_.offsetHeight;let z=l,k,P;for(let _=0;_<O;){for(k=R(C[_]),_++;_<O&&C[_].classList.contains("q-virtual-scroll--with-prev")===!0;)k+=R(C[_]),_++;P=k-m[z],P!==0&&(m[z]+=P,V[Math.floor(z/J)]+=P),z++}}}function Ie(){L.value!==null&&L.value!==void 0&&L.value.focus()}function de(l,s){const C=1*u.value;(s===!0||Array.isArray(m)===!1)&&(m=[]);const O=m.length;m.length=e.value;for(let z=e.value-1;z>=O;z--)m[z]=C;const R=Math.floor((e.value-1)/J);V=[];for(let z=0;z<=R;z++){let k=0;const P=Math.min((z+1)*J,e.value);for(let _=z*J;_<P;_++)k+=m[_];V.push(k)}d=-1,x=void 0,q.value=Me(V,m,0,f.value.from),D.value=Me(V,m,f.value.to,e.value),l>=0?(_e(f.value.from),ue(()=>{ae(l)})):fe()}function Z(l){if(l===void 0&&typeof window!="undefined"){const k=i();k!=null&&k.nodeType!==8&&(l=Ze(k,n(),Q.value,h.value,o.virtualScrollHorizontal,S.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}p=l;const s=parseFloat(o.virtualScrollSliceRatioBefore)||0,C=parseFloat(o.virtualScrollSliceRatioAfter)||0,O=1+s+C,R=l===void 0||l<=0?1:Math.ceil(l/u.value),z=Math.max(1,R,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/O));H.value={total:Math.ceil(z*O),start:Math.ceil(z*s),center:Math.ceil(z*(.5+s)),end:Math.ceil(z*(1+s)),view:R}}function Ne(l,s){const C=o.virtualScrollHorizontal===!0?"width":"height",O={["--q-virtual-scroll-item-"+C]:u.value+"px"};return[l==="tbody"?b(l,{class:"q-virtual-scroll__padding",key:"before",ref:Q},[b("tr",[b("td",{style:{[C]:`${q.value}px`,...O},colspan:E.value})])]):b(l,{class:"q-virtual-scroll__padding",key:"before",ref:Q,style:{[C]:`${q.value}px`,...O}}),b(l,{class:"q-virtual-scroll__content",key:"content",ref:L,tabindex:-1},s.flat()),l==="tbody"?b(l,{class:"q-virtual-scroll__padding",key:"after",ref:h},[b("tr",[b("td",{style:{[C]:`${D.value}px`,...O},colspan:E.value})])]):b(l,{class:"q-virtual-scroll__padding",key:"after",ref:h,style:{[C]:`${D.value}px`,...O}})]}function xe(l){d!==l&&(o.onVirtualScroll!==void 0&&w("virtualScroll",{index:l,from:f.value.from,to:f.value.to-1,direction:l<d?"decrease":"increase",ref:g}),d=l)}Z();const fe=sl(Oe,S.platform.is.ios===!0?120:35);cl(()=>{Z()});let ke=!1;return dl(()=>{ke=!0}),fl(()=>{if(ke!==!0)return;const l=i();x!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?Tt(l,x,o.virtualScrollHorizontal,S.lang.rtl):ae(d)}),Qe(()=>{fe.cancel()}),Object.assign(g,{scrollTo:ae,reset:G,refresh:ne}),{virtualScrollSliceRange:f,virtualScrollSliceSizeComputed:H,setVirtualScrollSize:Z,onVirtualScrollEvt:fe,localResetVirtualScroll:de,padVirtualScroll:Ne,scrollTo:ae,reset:G,refresh:ne}}const Lt=e=>["add","add-unique","toggle"].includes(e),Zl=".*+?^${}()|[]\\",en=Object.keys(at);var tn=le({name:"QSelect",inheritAttrs:!1,props:{...Gl,...vl,...at,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:Lt},mapOptions:Boolean,emitValue:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:String,transitionHide:String,transitionDuration:[String,Number],behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:{type:[Number,String],default:void 0},onNewValue:Function,onFilter:Function},emits:[...It,"add","remove","inputValue","newValue","keyup","keypress","keydown","filterAbort"],setup(e,{slots:i,emit:n}){const{proxy:u}=Ce(),{$q:c}=u,o=F(!1),w=F(!1),g=F(-1),S=F(""),x=F(!1),d=F(!1);let p=null,V=null,m,q,D,H=null,Q,h,L,f;const E=F(null),T=F(null),j=F(null),G=F(null),ne=F(null),ae=ml(e),Oe=yl(St),U=v(()=>Array.isArray(e.options)?e.options.length:0),_e=v(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Ie,virtualScrollSliceSizeComputed:de,localResetVirtualScroll:Z,padVirtualScroll:Ne,onVirtualScrollEvt:xe,scrollTo:fe,setVirtualScrollSize:ke}=Jl({virtualScrollLength:U,getVirtualScrollTarget:Wt,getVirtualScrollEl:ht,virtualScrollItemSizeComputed:_e}),l=Et(),s=v(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,r=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const a=e.mapOptions===!0&&m!==void 0?m:[],y=r.map(M=>Ut(M,a));return e.modelValue===null&&t===!0?y.filter(M=>M!==null):y}return r}),C=v(()=>{const t={};return en.forEach(r=>{const a=e[r];a!==void 0&&(t[r]=a)}),t}),O=v(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),R=v(()=>Vt(s.value)),z=v(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||s.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),k=v(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),P=v(()=>U.value===0),_=v(()=>s.value.map(t=>X.value(t)).join(", ")),W=v(()=>e.displayValue!==void 0?e.displayValue:_.value),oe=v(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),He=v(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||s.value.some(oe.value))),ee=v(()=>l.focused.value===!0?e.tabindex:-1),Ee=v(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return g.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${g.value}`),t}),ie=v(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),re=v(()=>s.value.map((t,r)=>({index:r,opt:t,html:oe.value(t),selected:!0,removeAtIndex:jt,toggleOption:se,tabindex:ee.value}))),Re=v(()=>{if(U.value===0)return[];const{from:t,to:r}=Ie.value;return e.options.slice(t,r).map((a,y)=>{const M=ve.value(a)===!0,A=t+y,I={clickable:!0,active:!1,activeClass:qe.value,manualFocus:!0,focused:!1,disable:M,tabindex:-1,dense:e.optionsDense,dark:O.value,role:"option",id:`${l.targetUid.value}_${A}`,onClick:()=>{se(a)}};return M!==!0&&(We(a)===!0&&(I.active=!0),g.value===A&&(I.focused=!0),I["aria-selected"]=I.active===!0?"true":"false",c.platform.is.desktop===!0&&(I.onMousemove=()=>{o.value===!0&&me(A)})),{index:A,opt:a,html:oe.value(a),label:X.value(a),selected:I.active,focused:I.focused,toggleOption:se,setOptionIndex:me,itemProps:I}})}),ze=v(()=>e.dropdownIcon!==void 0?e.dropdownIcon:c.iconSet.arrow.dropdown),Ke=v(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),qe=v(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),te=v(()=>Ue(e.optionValue,"value")),X=v(()=>Ue(e.optionLabel,"label")),ve=v(()=>Ue(e.optionDisable,"disable")),Pe=v(()=>s.value.map(t=>te.value(t))),Kt=v(()=>{const t={onInput:St,onChange:Oe,onKeydown:mt,onKeyup:ft,onKeypress:vt,onFocus:ct,onClick(r){q===!0&&be(r)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=Oe,t});K(s,t=>{m=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(w.value!==!0&&o.value!==!0||R.value!==!0)&&(D!==!0&&ye(),(w.value===!0||o.value===!0)&&he(""))},{immediate:!0}),K(()=>e.fillInput,ye),K(o,Xe),K(U,al);function rt(t){return e.emitValue===!0?te.value(t):t}function je(t){if(t>-1&&t<s.value.length)if(e.multiple===!0){const r=e.modelValue.slice();n("remove",{index:t,value:r.splice(t,1)[0]}),n("update:modelValue",r)}else n("update:modelValue",null)}function jt(t){je(t),l.focus()}function st(t,r){const a=rt(t);if(e.multiple!==!0){e.fillInput===!0&&Ae(X.value(t),!0,!0),n("update:modelValue",a);return}if(s.value.length===0){n("add",{index:0,value:a}),n("update:modelValue",e.multiple===!0?[a]:a);return}if(r===!0&&We(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const y=e.modelValue.slice();n("add",{index:y.length,value:a}),y.push(a),n("update:modelValue",y)}function se(t,r){if(l.editable.value!==!0||t===void 0||ve.value(t)===!0)return;const a=te.value(t);if(e.multiple!==!0){r!==!0&&(Ae(e.fillInput===!0?X.value(t):"",!0,!0),ce()),T.value!==null&&T.value.focus(),(s.value.length===0||Te(te.value(s.value[0]),a)!==!0)&&n("update:modelValue",e.emitValue===!0?a:t);return}if((q!==!0||x.value===!0)&&l.focus(),ct(),s.value.length===0){const A=e.emitValue===!0?a:t;n("add",{index:0,value:A}),n("update:modelValue",e.multiple===!0?[A]:A);return}const y=e.modelValue.slice(),M=Pe.value.findIndex(A=>Te(A,a));if(M>-1)n("remove",{index:M,value:y.splice(M,1)[0]});else{if(e.maxValues!==void 0&&y.length>=e.maxValues)return;const A=e.emitValue===!0?a:t;n("add",{index:y.length,value:A}),y.push(A)}n("update:modelValue",y)}function me(t){if(c.platform.is.desktop!==!0)return;const r=t>-1&&t<U.value?t:-1;g.value!==r&&(g.value=r)}function Be(t=1,r){if(o.value===!0){let a=g.value;do a=qt(a+t,-1,U.value-1);while(a!==-1&&a!==g.value&&ve.value(e.options[a])===!0);g.value!==a&&(me(a),fe(a),r!==!0&&e.useInput===!0&&e.fillInput===!0&&$e(a>=0?X.value(e.options[a]):Q,!0))}}function Ut(t,r){const a=y=>Te(te.value(y),t);return e.options.find(a)||r.find(a)||t}function Ue(t,r){const a=t!==void 0?t:r;return typeof a=="function"?a:y=>y!==null&&typeof y=="object"&&a in y?y[a]:y}function We(t){const r=te.value(t);return Pe.value.find(a=>Te(a,r))!==void 0}function ct(t){e.useInput===!0&&T.value!==null&&(t===void 0||T.value===t.target&&t.target.value===_.value)&&T.value.select()}function dt(t){Pt(t,27)===!0&&o.value===!0&&(be(t),ce(),ye()),n("keyup",t)}function ft(t){const{value:r}=t.target;if(t.keyCode!==void 0){dt(t);return}if(t.target.value="",p!==null&&(clearTimeout(p),p=null),V!==null&&(clearTimeout(V),V=null),ye(),typeof r=="string"&&r.length!==0){const a=r.toLocaleLowerCase(),y=A=>{const I=e.options.find(N=>A.value(N).toLocaleLowerCase()===a);return I===void 0?!1:(s.value.indexOf(I)===-1?se(I):ce(),!0)},M=A=>{y(te)!==!0&&(y(X)===!0||A===!0||he(r,!0,()=>M(!0)))};M()}else l.clearValue(t)}function vt(t){n("keypress",t)}function mt(t){if(n("keydown",t),bl(t)===!0)return;const r=S.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),a=t.shiftKey!==!0&&e.multiple!==!0&&(g.value>-1||r===!0);if(t.keyCode===27){Ge(t);return}if(t.keyCode===9&&a===!1){ge();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&o.value===!1){pe(t),Se();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&S.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?je(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&n("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof S.value!="string"||S.value.length===0)&&(pe(t),g.value=-1,Be(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&de.value!==void 0&&(pe(t),g.value=Math.max(-1,Math.min(U.value,g.value+(t.keyCode===33?-1:1)*de.value.view)),Be(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(pe(t),Be(t.keyCode===38?-1:1,e.multiple));const y=U.value;if((L===void 0||f<Date.now())&&(L=""),y>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||L.length!==0)){o.value!==!0&&Se(t);const M=t.key.toLocaleLowerCase(),A=L.length===1&&L[0]===M;f=Date.now()+1500,A===!1&&(pe(t),L+=M);const I=new RegExp("^"+L.split("").map(Ye=>Zl.indexOf(Ye)>-1?"\\"+Ye:Ye).join(".*"),"i");let N=g.value;if(A===!0||N<0||I.test(X.value(e.options[N]))!==!0)do N=qt(N+1,-1,y-1);while(N!==g.value&&(ve.value(e.options[N])===!0||I.test(X.value(e.options[N]))!==!0));g.value!==N&&ue(()=>{me(N),fe(N),N>=0&&e.useInput===!0&&e.fillInput===!0&&$e(X.value(e.options[N]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||L!=="")&&(t.keyCode!==9||a===!1))){if(t.keyCode!==9&&pe(t),g.value>-1&&g.value<y){se(e.options[g.value]);return}if(r===!0){const M=(A,I)=>{if(I){if(Lt(I)!==!0)return}else I=e.newValueMode;if(Ae("",e.multiple!==!0,!0),A==null)return;(I==="toggle"?se:st)(A,I==="add-unique"),e.multiple!==!0&&(T.value!==null&&T.value.focus(),ce())};if(e.onNewValue!==void 0?n("newValue",S.value,M):M(S.value),e.multiple!==!0)return}o.value===!0?ge():l.innerLoading.value!==!0&&Se()}}function ht(){return q===!0?ne.value:j.value!==null&&j.value.contentEl!==null?j.value.contentEl:void 0}function Wt(){return ht()}function Xt(){return e.hideSelected===!0?[]:i["selected-item"]!==void 0?re.value.map(t=>i["selected-item"](t)).slice():i.selected!==void 0?[].concat(i.selected()):e.useChips===!0?re.value.map((t,r)=>b(Rl,{key:"option-"+r,removable:l.editable.value===!0&&ve.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:ee.value,onRemove(){t.removeAtIndex(r)}},()=>b("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:X.value(t.opt)}))):[b("span",{[He.value===!0?"innerHTML":"textContent"]:W.value})]}function gt(){if(P.value===!0)return i["no-option"]!==void 0?i["no-option"]({inputValue:S.value}):void 0;const t=i.option!==void 0?i.option:a=>b(ot,{key:a.index,...a.itemProps},()=>b(lt,()=>b(nt,()=>b("span",{[a.html===!0?"innerHTML":"textContent"]:a.label}))));let r=Ne("div",Re.value.map(t));return i["before-options"]!==void 0&&(r=i["before-options"]().concat(r)),Bt(i["after-options"],r)}function Yt(t,r){const a=r===!0?{...Ee.value,...l.splitAttrs.attributes.value}:void 0,y={ref:r===!0?T:void 0,key:"i_t",class:z.value,style:e.inputStyle,value:S.value!==void 0?S.value:"",type:"search",...a,id:r===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Kt.value};return t!==!0&&q===!0&&(Array.isArray(y.class)===!0?y.class=[...y.class,"no-pointer-events"]:y.class+=" no-pointer-events"),b("input",y)}function St(t){p!==null&&(clearTimeout(p),p=null),V!==null&&(clearTimeout(V),V=null),!(t&&t.target&&t.target.qComposing===!0)&&($e(t.target.value||""),D=!0,Q=S.value,l.focused.value!==!0&&(q!==!0||x.value===!0)&&l.focus(),e.onFilter!==void 0&&(p=setTimeout(()=>{p=null,he(S.value)},e.inputDebounce)))}function $e(t,r){S.value!==t&&(S.value=t,r===!0||e.inputDebounce===0||e.inputDebounce==="0"?n("inputValue",t):V=setTimeout(()=>{V=null,n("inputValue",t)},e.inputDebounce))}function Ae(t,r,a){D=a!==!0,e.useInput===!0&&($e(t,!0),(r===!0||a!==!0)&&(Q=t),r!==!0&&he(t))}function he(t,r,a){if(e.onFilter===void 0||r!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?n("filterAbort"):(l.innerLoading.value=!0,d.value=!0),t!==""&&e.multiple!==!0&&s.value.length!==0&&D!==!0&&t===X.value(s.value[0])&&(t="");const y=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);H!==null&&clearTimeout(H),H=y,n("filter",t,(M,A)=>{(r===!0||l.focused.value===!0)&&H===y&&(clearTimeout(H),typeof M=="function"&&M(),d.value=!1,ue(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(r===!0?o.value===!0&&ce():o.value===!0?Xe(!0):o.value=!0),typeof A=="function"&&ue(()=>{A(u)}),typeof a=="function"&&ue(()=>{a(u)})}))},()=>{l.focused.value===!0&&H===y&&(clearTimeout(H),l.innerLoading.value=!1,d.value=!1),o.value===!0&&(o.value=!1)})}function Gt(){return b(Qt,{ref:j,class:k.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&P.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:O.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,square:Ke.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ie.value,onScrollPassive:xe,onBeforeShow:bt,onBeforeHide:Jt,onShow:Zt},gt)}function Jt(t){pt(t),ge()}function Zt(){ke()}function el(t){be(t),T.value!==null&&T.value.focus(),x.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function tl(t){be(t),ue(()=>{x.value=!1})}function ll(){const t=[b(Ul,{class:`col-auto ${l.fieldClass.value}`,...C.value,for:l.targetUid.value,dark:O.value,square:!0,loading:d.value,itemAligned:!1,filled:!0,stackLabel:S.value.length!==0,...l.splitAttrs.listeners.value,onFocus:el,onBlur:tl},{...i,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(b("div",{ref:ne,class:k.value+" scroll",style:e.popupContentStyle,...ie.value,onClick:Ge,onScrollPassive:xe},gt())),b(pl,{ref:G,modelValue:w.value,position:e.useInput===!0?"top":void 0,transitionShow:h,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,onBeforeShow:bt,onBeforeHide:nl,onHide:ol,onShow:ul},()=>b("div",{class:"q-select__dialog"+(O.value===!0?" q-select__dialog--dark q-dark":"")+(x.value===!0?" q-select__dialog--focused":"")},t))}function nl(t){pt(t),G.value!==null&&G.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function ol(t){ce(),l.focused.value===!1&&n("blur",t),ye()}function ul(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&T.value!==null&&T.value!==t&&T.value.focus(),ke()}function ge(){w.value!==!0&&(g.value=-1,o.value===!0&&(o.value=!1),l.focused.value===!1&&(H!==null&&(clearTimeout(H),H=null),l.innerLoading.value===!0&&(n("filterAbort"),l.innerLoading.value=!1,d.value=!1)))}function Se(t){l.editable.value===!0&&(q===!0?(l.onControlFocusin(t),w.value=!0,ue(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?he(S.value):(P.value!==!0||i["no-option"]!==void 0)&&(o.value=!0))}function ce(){w.value=!1,ge()}function ye(){e.useInput===!0&&Ae(e.multiple!==!0&&e.fillInput===!0&&s.value.length!==0&&X.value(s.value[0])||"",!0,!0)}function Xe(t){let r=-1;if(t===!0){if(s.value.length!==0){const a=te.value(s.value[0]);r=e.options.findIndex(y=>Te(te.value(y),a))}Z(r)}me(r)}function al(t,r){o.value===!0&&l.innerLoading.value===!1&&(Z(-1,!0),ue(()=>{o.value===!0&&l.innerLoading.value===!1&&(t>r?Z():Xe(!0))}))}function yt(){w.value===!1&&j.value!==null&&j.value.updatePosition()}function bt(t){t!==void 0&&be(t),n("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function pt(t){t!==void 0&&be(t),n("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function wt(){q=c.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?i["no-option"]!==void 0||e.onFilter!==void 0||P.value===!1:!0),h=c.platform.is.ios===!0&&q===!0&&e.useInput===!0?"fade":e.transitionShow}return hl(wt),gl(yt),wt(),Qe(()=>{p!==null&&clearTimeout(p),V!==null&&clearTimeout(V)}),Object.assign(u,{showPopup:Se,hidePopup:ce,removeAtIndex:je,add:st,toggleOption:se,getOptionIndex:()=>g.value,setOptionIndex:me,moveOptionSelection:Be,filter:he,updateMenuPosition:yt,updateInputValue:Ae,isOptionSelected:We,getEmittingOptionValue:rt,isOptionDisabled:(...t)=>ve.value.apply(null,t)===!0,getOptionValue:(...t)=>te.value.apply(null,t),getOptionLabel:(...t)=>X.value.apply(null,t)}),Object.assign(l,{innerValue:s,fieldClass:v(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:E,targetRef:T,hasValue:R,showPopup:Se,floatingLabel:v(()=>e.hideSelected!==!0&&R.value===!0||typeof S.value=="number"||S.value.length!==0||Vt(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(w.value===!0||P.value!==!0||i["no-option"]!==void 0))return q===!0?ll():Gt();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{ye(),ge()})},onClick(t){if(Ge(t),q!==!0&&o.value===!0){ge(),T.value!==null&&T.value.focus();return}Se(t)}},getControl:t=>{const r=Xt(),a=t===!0||w.value!==!0||q!==!0;if(e.useInput===!0)r.push(Yt(t,a));else if(l.editable.value===!0){const M=a===!0?Ee.value:void 0;r.push(b("input",{ref:a===!0?T:void 0,key:"d_t",class:"q-select__focus-target",id:a===!0?l.targetUid.value:void 0,value:W.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...M,onKeydown:mt,onKeyup:dt,onKeypress:vt})),a===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&r.push(b("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:ft}))}if(ae.value!==void 0&&e.disable!==!0&&Pe.value.length!==0){const M=Pe.value.map(A=>b("option",{value:A,selected:!0}));r.push(b("select",{class:"hidden",name:ae.value,multiple:e.multiple},M))}const y=e.useInput===!0||a!==!0?void 0:l.splitAttrs.attributes.value;return b("div",{class:"q-field__native row items-center",...y,...l.splitAttrs.listeners.value},r)},getInnerAppend:()=>e.loading!==!0&&d.value!==!0&&e.hideDropdownIcon!==!0?[b(Sl,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:ze.value})]:null}),Ht(l)}}),ln=le({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const n=v(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>b("div",{class:n.value,role:"toolbar"},ut(i.default))}}),nn=le({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:n}){const{proxy:{$q:u}}=Ce(),c=$t(it,we);if(c===we)return console.error("QHeader needs to be child of QLayout"),we;const o=F(parseInt(e.heightHint,10)),w=F(!0),g=v(()=>e.reveal===!0||c.view.value.indexOf("H")>-1||u.platform.is.ios&&c.isContainer.value===!0),S=v(()=>{if(e.modelValue!==!0)return 0;if(g.value===!0)return w.value===!0?o.value:0;const h=o.value-c.scroll.value.position;return h>0?h:0}),x=v(()=>e.modelValue!==!0||g.value===!0&&w.value!==!0),d=v(()=>e.modelValue===!0&&x.value===!0&&e.reveal===!0),p=v(()=>"q-header q-layout__section--marginal "+(g.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(x.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),V=v(()=>{const h=c.rows.value.top,L={};return h[0]==="l"&&c.left.space===!0&&(L[u.lang.rtl===!0?"right":"left"]=`${c.left.size}px`),h[2]==="r"&&c.right.space===!0&&(L[u.lang.rtl===!0?"left":"right"]=`${c.right.size}px`),L});function m(h,L){c.update("header",h,L)}function q(h,L){h.value!==L&&(h.value=L)}function D({height:h}){q(o,h),m("size",h)}function H(h){d.value===!0&&q(w,!0),n("focusin",h)}K(()=>e.modelValue,h=>{m("space",h),q(w,!0),c.animate()}),K(S,h=>{m("offset",h)}),K(()=>e.reveal,h=>{h===!1&&q(w,e.modelValue)}),K(w,h=>{c.animate(),n("reveal",h)}),K(c.scroll,h=>{e.reveal===!0&&q(w,h.direction==="up"||h.position<=e.revealOffset||h.position-h.inflectionPoint<100)});const Q={};return c.instances.header=Q,e.modelValue===!0&&m("size",o.value),m("space",e.modelValue),m("offset",S.value),Qe(()=>{c.instances.header===Q&&(c.instances.header=void 0,m("size",0),m("offset",0),m("space",!1))}),()=>{const h=wl(i.default,[]);return e.elevated===!0&&h.push(b("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),h.push(b(tt,{debounce:0,onResize:D})),b("header",{class:p.value,style:V.value,onFocusin:H},h)}}}),on=le({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:n}}=Ce(),u=$t(it,we);if(u===we)return console.error("QPageContainer needs to be child of QLayout"),we;Dt(Vl,!0);const c=v(()=>{const o={};return u.header.space===!0&&(o.paddingTop=`${u.header.size}px`),u.right.space===!0&&(o[`padding${n.lang.rtl===!0?"Left":"Right"}`]=`${u.right.size}px`),u.footer.space===!0&&(o.paddingBottom=`${u.footer.size}px`),u.left.space===!0&&(o[`padding${n.lang.rtl===!0?"Right":"Left"}`]=`${u.left.size}px`),o});return()=>b("div",{class:"q-page-container",style:c.value},ut(i.default))}});const{passive:Ft}=xl,un=["both","horizontal","vertical"];var an=le({name:"QScrollObserver",props:{axis:{type:String,validator:e=>un.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:i}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let u=null,c,o;K(()=>e.scrollTarget,()=>{S(),g()});function w(){u!==null&&u();const p=Math.max(0,kl(c)),V=zl(c),m={top:p-n.position.top,left:V-n.position.left};if(e.axis==="vertical"&&m.top===0||e.axis==="horizontal"&&m.left===0)return;const q=Math.abs(m.top)>=Math.abs(m.left)?m.top<0?"up":"down":m.left<0?"left":"right";n.position={top:p,left:V},n.directionChanged=n.direction!==q,n.delta=m,n.directionChanged===!0&&(n.direction=q,n.inflectionPoint=n.position),i("scroll",{...n})}function g(){c=_l(o,e.scrollTarget),c.addEventListener("scroll",x,Ft),x(!0)}function S(){c!==void 0&&(c.removeEventListener("scroll",x,Ft),c=void 0)}function x(p){if(p===!0||e.debounce===0||e.debounce==="0")w();else if(u===null){const[V,m]=e.debounce?[setTimeout(w,e.debounce),clearTimeout]:[requestAnimationFrame(w),cancelAnimationFrame];u=()=>{m(V),u=null}}}const{proxy:d}=Ce();return K(()=>d.$q.lang.rtl,w),Cl(()=>{o=d.$el.parentNode,g()}),Qe(()=>{u!==null&&u(),S()}),Object.assign(d,{trigger:x,getPosition:()=>n}),Rt}}),rn=le({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:n}){const{proxy:{$q:u}}=Ce(),c=F(null),o=F(u.screen.height),w=F(e.container===!0?0:u.screen.width),g=F({position:0,direction:"down",inflectionPoint:0}),S=F(0),x=F(ql.value===!0?0:Je()),d=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),p=v(()=>e.container===!1?{minHeight:u.screen.height+"px"}:null),V=v(()=>x.value!==0?{[u.lang.rtl===!0?"left":"right"]:`${x.value}px`}:null),m=v(()=>x.value!==0?{[u.lang.rtl===!0?"right":"left"]:0,[u.lang.rtl===!0?"left":"right"]:`-${x.value}px`,width:`calc(100% + ${x.value}px)`}:null);function q(f){if(e.container===!0||document.qScrollPrevented!==!0){const E={position:f.position.top,direction:f.direction,directionChanged:f.directionChanged,inflectionPoint:f.inflectionPoint.top,delta:f.delta.top};g.value=E,e.onScroll!==void 0&&n("scroll",E)}}function D(f){const{height:E,width:T}=f;let j=!1;o.value!==E&&(j=!0,o.value=E,e.onScrollHeight!==void 0&&n("scrollHeight",E),Q()),w.value!==T&&(j=!0,w.value=T),j===!0&&e.onResize!==void 0&&n("resize",f)}function H({height:f}){S.value!==f&&(S.value=f,Q())}function Q(){if(e.container===!0){const f=o.value>S.value?Je():0;x.value!==f&&(x.value=f)}}let h=null;const L={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:c,height:o,containerHeight:S,scrollbarWidth:x,totalWidth:v(()=>w.value+x.value),rows:v(()=>{const f=e.view.toLowerCase().split(" ");return{top:f[0].split(""),middle:f[1].split(""),bottom:f[2].split("")}}),header:De({size:0,offset:0,space:!1}),right:De({size:300,offset:0,space:!1}),footer:De({size:0,offset:0,space:!1}),left:De({size:300,offset:0,space:!1}),scroll:g,animate(){h!==null?clearTimeout(h):document.body.classList.add("q-body--layout-animate"),h=setTimeout(()=>{h=null,document.body.classList.remove("q-body--layout-animate")},155)},update(f,E,T){L[f][E]=T}};if(Dt(it,L),Je()>0){let T=function(){f=null,E.classList.remove("hide-scrollbar")},j=function(){if(f===null){if(E.scrollHeight>u.screen.height)return;E.classList.add("hide-scrollbar")}else clearTimeout(f);f=setTimeout(T,300)},G=function(ne){f!==null&&ne==="remove"&&(clearTimeout(f),T()),window[`${ne}EventListener`]("resize",j)},f=null;const E=document.body;K(()=>e.container!==!0?"add":"remove",G),e.container!==!0&&G("add"),Al(()=>{G("remove")})}return()=>{const f=Bt(i.default,[b(an,{onScroll:q}),b(tt,{onResize:D})]),E=b("div",{class:d.value,style:p.value,ref:e.container===!0?void 0:c,tabindex:-1},f);return e.container===!0?b("div",{class:"q-layout-container overflow-hidden",ref:c},[b(tt,{onResize:H}),b("div",{class:"absolute-full",style:V.value},[b("div",{class:"scroll",style:m.value},[E])])]):E}}});function Mt(e){if(e===!1)return 0;if(e===!0||e===void 0)return 1;const i=parseInt(e,10);return isNaN(i)?0:i}var Ot=Tl({name:"close-popup",beforeMount(e,{value:i}){const n={depth:Mt(i),handler(u){n.depth!==0&&setTimeout(()=>{const c=Ll(e);c!==void 0&&Fl(c,u,n.depth)})},handlerKey(u){Pt(u,13)===!0&&n.handler(u)}};e.__qclosepopup=n,e.addEventListener("click",n.handler),e.addEventListener("keyup",n.handlerKey)},updated(e,{value:i,oldValue:n}){i!==n&&(e.__qclosepopup.depth=Mt(i))},beforeUnmount(e){const i=e.__qclosepopup;e.removeEventListener("click",i.handler),e.removeEventListener("keyup",i.handlerKey),delete e.__qclosepopup}}),sn="/assets/MarCNoWA_blue.509ffdfd.jpeg";const cn={class:"row"},dn=Y("div",{class:"column"},[Y("img",{src:$l,style:{position:"relative",width:"100%",height:"35px"}})],-1),fn=Y("div",{class:"column q-pl-md"},[Y("img",{src:Dl,style:{position:"relative",width:"100%",height:"35px",left:"-1%"}})],-1),vn=Y("div",{class:"column q-pl-md"},[Y("img",{src:Ql,style:{position:"relative",width:"100%",height:"35px",left:"-1%"}})],-1),mn=Y("div",{class:"column q-pl-md q-ml-xl"},[Y("img",{src:Nl,style:{position:"relative",width:"100%",height:"35px",left:"-1%"}})],-1),hn={class:"column q-pr-xl"},gn=Y("img",{src:sn,style:{position:"relative",width:"100%",height:"30px"}},null,-1),Sn={class:"my-font q-mr-sm",style:{"font-weight":"700"}},Cn={__name:"MainLayout",setup(e){const{locale:i}=Kl({useScope:"global"}),n=F([{value:"en-US",label:"English"},{value:"fr",label:"French"}]);return(u,c)=>{const o=Ct("router-link"),w=Ct("router-view");return Le(),Fe(rn,{view:"lHh Lpr lFf"},{default:B(()=>[$(nn,{reveal:"",class:"text-white q-py-md navigation-background-color bg-white","height-hint":"98"},{default:B(()=>[$(ln,null,{default:B(()=>[$(jl,{style:{"margin-left":"5%"}},{default:B(()=>[Y("div",cn,[dn,fn,vn,mn,Y("div",hn,[$(o,{to:"/home"},{default:B(()=>[gn]),_:1})])])]),_:1}),$(Pl,{align:"left","no-caps":"",dense:"","inline-label":"",class:"text-black my-font-2",style:{"margin-right":"auto"}},{default:B(()=>[$(At,{name:"images",label:u.$t("home"),to:"/home"},null,8,["label"]),$(At,{ripple:"false",name:"videos",label:u.$t("dashboard"),to:"/dashboard"},null,8,["label"]),u.user?(Le(),Fe(_t,{key:0,class:"my-font-2 q-mr-md",style:{"font-weight":"400"},flat:"","no-caps":"",color:"grey-9",icon:"mdi-account","icon-right":"mdi-menu-down",label:"Hi, "+u.user.user_metadata.firstName},{default:B(()=>[$(Qt,{fit:""},{default:B(()=>[$(Bl,null,{default:B(()=>[xt((Le(),Fe(ot,{clickable:"",to:"/me"},{default:B(()=>[$(lt,null,{default:B(()=>[$(nt,null,{default:B(()=>[kt(zt(u.$t("profile")),1)]),_:1})]),_:1})]),_:1})),[[Ot]]),xt((Le(),Fe(ot,{clickable:"",onClick:u.handleLogout},{default:B(()=>[$(lt,null,{default:B(()=>[$(nt,null,{default:B(()=>[kt(zt(u.$t("logout")),1)]),_:1})]),_:1})]),_:1},8,["onClick"])),[[Ot]])]),_:1})]),_:1})]),_:1},8,["label"])):(Le(),Fe(_t,{key:1,class:"my-font-2 q-mr-lg",style:{"font-weight":"700"},flat:"","no-caps":"",color:"grey-9",icon:"mdi-account",label:u.$t("login"),to:"/login"},null,8,["label"]))]),_:1}),Y("div",Sn,[$(tn,{"label-color":"grey-9",modelValue:Ml(i),"onUpdate:modelValue":c[0]||(c[0]=g=>Ol(i)?i.value=g:null),options:n.value,dense:"",borderless:"","emit-value":"","map-options":"",style:{"font-weight":"700","font-size":"12px","font-color":"rgb(41, 41, 41)"}},null,8,["modelValue","options"])])]),_:1})]),_:1}),$(on,null,{default:B(()=>[$(w)]),_:1})]),_:1})}}};export{Cn as default};
