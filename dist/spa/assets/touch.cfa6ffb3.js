import{bI as d,c as l,h as o,bJ as v,bK as h,bL as Q,bM as k,bN as E,r as q,g as y,bO as A,bP as N,bQ as p,bR as K}from"./index.78297fd3.js";var D=d({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=l(()=>parseInt(e.lines,10)),i=l(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),u=l(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>o("div",{style:u.value,class:i.value},v(t.default))}}),T=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=l(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:n.value},v(t.default))}}),$=d({name:"QItem",props:{...h,...Q,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:i}}=y(),u=k(e,i),{hasLink:m,linkAttrs:_,linkClass:B,linkTag:w,navigateOnClick:L}=E(),s=q(null),c=q(null),b=l(()=>e.clickable===!0||m.value===!0||e.tag==="label"),r=l(()=>e.disable!==!0&&b.value===!0),C=l(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(u.value===!0?" q-item--dark":"")+(m.value===!0&&e.active===null?B.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(r.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),S=l(()=>{if(e.insetLevel===void 0)return null;const a=i.lang.rtl===!0?"Right":"Left";return{["padding"+a]:16+e.insetLevel*56+"px"}});function x(a){r.value===!0&&(c.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===s.value?c.value.focus():document.activeElement===c.value&&s.value.focus()),L(a))}function R(a){if(r.value===!0&&A(a,13)===!0){N(a),a.qKeyEvent=!0;const g=new MouseEvent("click",a);g.qKeyEvent=!0,s.value.dispatchEvent(g)}n("keyup",a)}function I(){const a=p(t.default,[]);return r.value===!0&&a.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:c})),a}return()=>{const a={ref:s,class:C.value,style:S.value,role:"listitem",onClick:x,onKeyup:R};return r.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,_.value)):b.value===!0&&(a["aria-disabled"]="true"),o(w.value,a,I())}}});function z(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),K.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}var M=d({name:"QList",props:{...h,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=y(),i=k(e,n.proxy.$q),u=l(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o(e.tag,{class:u.value},v(t.default))}});const f={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},O=Object.keys(f);f.all=!0;function U(e){const t={};for(const n of O)e[n]===!0&&(t[n]=!0);return Object.keys(t).length===0?f:(t.horizontal===!0?t.left=t.right=!0:t.left===!0&&t.right===!0&&(t.horizontal=!0),t.vertical===!0?t.up=t.down=!0:t.up===!0&&t.down===!0&&(t.vertical=!0),t.horizontal===!0&&t.vertical===!0&&(t.all=!0),t)}const P=["INPUT","TEXTAREA"];function F(e,t){return t.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof t.handler=="function"&&P.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(t.uid)===-1)}export{M as Q,$ as a,T as b,D as c,z as d,U as g,F as s};