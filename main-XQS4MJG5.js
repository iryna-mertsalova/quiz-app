import{a as Y}from"./chunk-NA6WQYLY.js";import{a as F,b as Qe,c as Ne,d as Pe,e as ze,f as E,g as Ue,h as S,i as $,j as G,k as w,l as V,m as B,n as L,o as K}from"./chunk-XPMWKGZ7.js";import{$ as i,Ba as N,C as f,Ca as _e,D as v,Da as we,E as n,F as m,Fa as Te,H as xe,Ha as De,I,Ia as ke,J as Me,Ja as He,Q as R,T as k,Ta as P,U as Ie,Ua as z,Va as U,W as d,Wa as q,X as fe,Z as _,_ as h,a as p,aa as a,b as y,ba as H,c as ye,ca as pe,d as he,da as ue,fa as Re,ga as Fe,h as j,i as T,j as u,l as ae,la as s,m as se,ma as le,n as D,o as g,oa as Q,p as ve,q as Ee,r as Se,t as Ce,ta as Ae,u as ce,v as be,xa as je,y as O,ya as Oe}from"./chunk-DRVBIJWT.js";var Z=class e{constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-main"]],standalone:!0,features:[Q],decls:11,vars:0,consts:[[1,"absolute","inset-x-0","top-1/4","flex","flex-col","items-center","justify-between"],[1,"first:text-bright","flex","items-center","*:px-1","pb-10","flex-wrap","justify-center","text-center","w-3/4"],["type","H1"],["type","H3","highlightText","framed"],["type","H1","highlightText","ellipse"],["link","/quizzes-catalog"],["size","md","iconState","next"]],template:function(t,o){t&1&&(i(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),s(3,"Make your"),a(),i(4,"app-ui-typography",3),s(5,"choice"),a(),i(6,"app-ui-typography",4),s(7,"."),a()(),i(8,"app-ui-link",5)(9,"app-ui-button",6),s(10,"Go to a quiz"),a()()())},dependencies:[P,U,z,q],encapsulation:2})};var $e=(e,r,t,o)=>o&&t.url!==o.url&&e.canDeactivate?e.canDeactivate():!0;var Ge=[{path:"main",component:Z},{path:"quizzes-catalog",loadComponent:()=>import("./chunk-LE2KIQAA.js").then(e=>e.QuizzesCatalogComponent)},{path:"quiz/:id",loadComponent:()=>import("./chunk-KPJQI7G7.js").then(e=>e.QuestionComponent),canDeactivate:[$e]},{path:"statistics",loadComponent:()=>import("./chunk-MDV2QE4W.js").then(e=>e.StatisticsComponent)},{path:"**",redirectTo:"/main",pathMatch:"full"}];var ft={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},J="__@ngrx/effects_create__";function X(e,r={}){let t=r.functional?e:e(),o=p(p({},ft),r);return Object.defineProperty(t,J,{value:o}),t}function pt(e){return Object.getOwnPropertyNames(e).filter(o=>e[o]&&e[o].hasOwnProperty(J)?e[o][J].hasOwnProperty("dispatch"):!1).map(o=>{let l=e[o][J];return p({propertyName:o},l)})}function ut(e){return pt(e)}function Be(e){return Object.getPrototypeOf(e)}function lt(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function Le(e){return typeof e=="function"}function mt(e){return e.filter(Le)}function dt(e,r,t){let o=Be(e),c=!!o&&o.constructor.name!=="Object"?o.constructor.name:null,M=ut(e).map(({propertyName:x,dispatch:ot,useEffectsErrorHandler:it})=>{let de=typeof e[x]=="function"?e[x]():e[x],ge=it?t(de,r):de;return ot===!1?ge.pipe(Ee()):ge.pipe(be()).pipe(u(nt=>({effect:e[x],notification:nt,propertyName:x,sourceName:c,sourceInstance:e})))});return se(...M)}var gt=10;function Ke(e,r,t=gt){return e.pipe(g(o=>(r&&r.handleError(o),t<=1?e:Ke(e,r,t-1))))}var W=(()=>{class e extends ye{constructor(t){super(),t&&(this.source=t)}lift(t){let o=new e;return o.source=this,o.operator=t,o}static{this.\u0275fac=function(o){return new(o||e)(n(ze))}}static{this.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function ee(...e){return D(r=>e.some(t=>typeof t=="string"?t===r.type:t.type===r.type))}var mr=new v("@ngrx/effects Internal Root Guard"),dr=new v("@ngrx/effects User Provided Effects"),gr=new v("@ngrx/effects Internal Root Effects"),yr=new v("@ngrx/effects Internal Root Effects Instances"),hr=new v("@ngrx/effects Internal Feature Effects"),vr=new v("@ngrx/effects Internal Feature Effects Instance Groups"),yt=new v("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>Ke}),ht="@ngrx/effects/init",vt=Qe(ht);function Et(e,r){if(e.notification.kind==="N"){let t=e.notification.value;!St(t)&&r.handleError(new Error(`Effect ${Ct(e)} dispatched an invalid action: ${bt(t)}`))}}function St(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function Ct({propertyName:e,sourceInstance:r,sourceName:t}){let o=typeof r[e]=="function";return!!t?`"${t}.${String(e)}${o?"()":""}"`:`"${String(e)}()"`}function bt(e){try{return JSON.stringify(e)}catch{return e}}var xt="ngrxOnIdentifyEffects";function Mt(e){return me(e,xt)}var It="ngrxOnRunEffects";function Rt(e){return me(e,It)}var Ft="ngrxOnInitEffects";function At(e){return me(e,Ft)}function me(e,r){return e&&r in e&&typeof e[r]=="function"}var Ye=(()=>{class e extends he{constructor(t,o){super(),this.errorHandler=t,this.effectsErrorHandler=o}addEffects(t){this.next(t)}toActions(){return this.pipe(ce(t=>lt(t)?Be(t):t),ae(t=>t.pipe(ce(jt))),ae(t=>{let o=t.pipe(Ce(c=>Ot(this.errorHandler,this.effectsErrorHandler)(c)),u(c=>(Et(c,this.errorHandler),c.notification)),D(c=>c.kind==="N"&&c.value!=null),Se()),l=t.pipe(ve(1),D(At),u(c=>c.ngrxOnInitEffects()));return se(o,l)}))}static{this.\u0275fac=function(o){return new(o||e)(n(k),n(yt))}}static{this.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function jt(e){return Mt(e)?e.ngrxOnIdentifyEffects():""}function Ot(e,r){return t=>{let o=dt(t,e,r);return Rt(t)?t.ngrxOnRunEffects(o):o}}var _t=(()=>{class e{get isStarted(){return!!this.effectsSubscription}constructor(t,o){this.effectSources=t,this.store=o,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(o){return new(o||e)(n(Ye),n(E))}}static{this.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Ze(...e){let r=e.flat(),t=mt(r);return Me([t,{provide:xe,multi:!0,useValue:()=>{m(Ne),m(Pe,{optional:!0});let o=m(_t),l=m(Ye),c=!o.isStarted;c&&o.start();for(let M of r){let x=Le(M)?m(M):M;l.addEffects(x)}c&&m(E).dispatch(vt())}}])}var Tt={categories:[],loading:!1,error:""},Je=$(Tt,S(G,e=>y(p({},e),{loading:!0})),S(w,(e,{categories:r})=>y(p({},e),{categories:r,loading:!1})),S(V,(e,{error:r})=>y(p({},e),{error:r,loading:!1})));var A=class e{constructor(r){this.http=r}get(){return this.http.get(Y.CATEGORY_URL).pipe(u(r=>r.trivia_categories.slice(1,11)),g(()=>T(()=>new Error("An error occurred. Please reload the page or try later."))))}static \u0275fac=function(t){return new(t||e)(n(N))};static \u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})};var b=class e{errors=[];handleError(r){let t=this.formatError(r);this.errors.push(t),this.showError(t)}formatError(r){return r instanceof Error?r.message:typeof r=="string"?r:"An error occurred. Please reload the page or try later."}showError(r){let t=document.createElement("div"),o=document.createElement("img");o.src="error-notification-icon.svg",o.className="w-5 h-5 mr-2",t.className="flex items-center fixed right-4 p-3 pr-5 bg-error text-bright border-4 border-error rounded z-50",t.textContent=r,t.appendChild(o),document.body.appendChild(t),setTimeout(()=>{t.remove()},5e3)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})};var te=class e{constructor(r,t,o,l){this.categoryService=r;this.errorService=t;this.store=o;this.destroyRef=l}loadCategories$=X(()=>m(W).pipe(ee(G),O(()=>this.store.select(r=>r.categories.categories).pipe(F(this.destroyRef),O(r=>r&&r.length>0?j(w({categories:r})):this.categoryService.get().pipe(u(t=>w({categories:t})),g(t=>(this.errorService.handleError(t),j(V({error:t}))))))))));static \u0275fac=function(t){return new(t||e)(n(A),n(b),n(E),n(R))};static \u0275prov=f({token:e,factory:e.\u0275fac})};var Qt={questions:[],loading:!1,error:""},We=$(Qt,S(B,e=>y(p({},e),{loading:!0})),S(L,(e,{questions:r})=>y(p({},e),{questions:r,loading:!1})),S(K,(e,{error:r})=>y(p({},e),{error:r,loading:!1})));var re=class e{constructor(r){this.http=r}getQuestions(r){let t=new URLSearchParams;return r!==0&&t.append("category",r.toString()),t.append("type","multiple"),this.http.get(`${Y.QUESTION_URL}${t}`).pipe(u(o=>o.results),g(()=>T(()=>new Error("An error occurred. Please reload the page or try later."))))}static \u0275fac=function(t){return new(t||e)(n(N))};static \u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})};var oe=class e{constructor(r,t,o,l){this.questionService=r;this.errorService=t;this.store=o;this.destroyRef=l}loadQuestions$=X(()=>m(W).pipe(ee(B),O(({categoryId:r})=>this.questionService.getQuestions(r).pipe(F(this.destroyRef),u(t=>L({questions:t})),g(t=>(this.errorService.handleError(t),j(K({error:t}))))))));static \u0275fac=function(t){return new(t||e)(n(re),n(b),n(E),n(R))};static \u0275prov=f({token:e,factory:e.\u0275fac})};var et={categories:Je,questions:We},tt=[te,oe];var rt={providers:[Ae({eventCoalescing:!0}),He(Ge),_e(),Ue(et),Ze(tt),A,[{provide:k,useClass:b}]]};function Pt(e,r){e&1&&(i(0,"app-ui-typography"),s(1,"\u2630"),a())}function zt(e,r){e&1&&(i(0,"app-ui-typography"),s(1,"\u2193"),a())}function Ut(e,r){if(e&1&&(pe(0),i(1,"app-ui-link",13)(2,"app-ui-typography",14),s(3),a()(),ue()),e&2){let t=r.$implicit;d(),h("link",t.link),d(2),le(t.label)}}function qt(e,r){if(e&1&&(pe(0),i(1,"app-ui-link",13)(2,"app-ui-typography",14),s(3),a()(),ue()),e&2){let t=r.$implicit;d(),h("link",t.link),d(2),le(t.label)}}function $t(e,r){if(e&1&&(i(0,"div",15),_(1,qt,4,2,"ng-container",8),i(2,"div",16)(3,"app-ui-button",10),s(4,"Sign in"),a(),i(5,"app-ui-button",11),s(6,"Sign up"),a()()()),e&2){let t=Fe();d(),h("ngForOf",t.menuItems)}}var ie=class e{constructor(r,t){this.router=r;this.destroyRef=t}logoSrc="main-logo.svg";isMenuOpen=!1;menuItems=[{link:"quizzes-catalog",label:"Quizzes catalog"},{link:"quiz",label:"Quiz"},{link:"statistics",label:"Statistics"}];toggleMenu(){this.isMenuOpen=!this.isMenuOpen}ngOnInit(){this.router.events.pipe(F(this.destroyRef)).subscribe(r=>{r instanceof Te&&(this.isMenuOpen=!1)})}static \u0275fac=function(t){return new(t||e)(fe(ke),fe(R))};static \u0275cmp=I({type:e,selectors:[["app-ui-header"]],decls:18,vars:5,consts:[[1,"bg-primary","text-bright"],[1,"bg-primary","mx-auto","flex","items-center","justify-between","p-4"],["link","/"],["alt","logo","width","75","height","40",3,"src"],["aria-label","Toggle navigation",1,"text-white","md:hidden","flex","items-center","*:pl-3","hover:text-muted",3,"click"],[4,"ngIf"],[1,"hidden","md:flex","w-full","items-center","justify-between"],[1,"flex","items-center","justify-around","w-1/4","pl-7"],[4,"ngFor","ngForOf"],[1,"flex","w-1/4","justify-end"],["textName","P2","type","accent","size","sm"],["textName","P2","type","ghost","size","sm"],["class","absolute rounded-b-lg border-b-4 border-opacity-75 border-b-muted w-full bg-primary flex flex-col items-end md:hidden p-4 *:my-3 z-[1003]",4,"ngIf"],[1,"relative","cursor-pointer","hover:text-shade","nav-item-animation",3,"link"],["type","P1"],[1,"absolute","rounded-b-lg","border-b-4","border-opacity-75","border-b-muted","w-full","bg-primary","flex","flex-col","items-end","md:hidden","p-4","*:my-3","z-[1003]"],[1,"flex","items-center"]],template:function(t,o){t&1&&(i(0,"nav",0)(1,"div",1)(2,"app-ui-link",2),H(3,"img",3),a(),i(4,"button",4),Re("click",function(){return o.toggleMenu()}),_(5,Pt,2,0,"app-ui-typography",5)(6,zt,2,0,"app-ui-typography",5),i(7,"app-ui-typography"),s(8,"Menu"),a()(),i(9,"div",6)(10,"div",7),_(11,Ut,4,2,"ng-container",8),a(),i(12,"div",9)(13,"app-ui-button",10),s(14,"Sign in"),a(),i(15,"app-ui-button",11),s(16,"Sign up"),a()()()(),_(17,$t,7,1,"div",12),a()),t&2&&(d(3),h("src",o.logoSrc,Ie),d(2),h("ngIf",!o.isMenuOpen),d(),h("ngIf",o.isMenuOpen),d(5),h("ngForOf",o.menuItems),d(6),h("ngIf",o.isMenuOpen))},dependencies:[je,Oe,U,z,q],styles:['.nav-item-animation[_ngcontent-%COMP%]:before{background-color:#7c9cbf;border-radius:4px;bottom:-3px;content:"";height:2px;left:0;position:absolute;transform-origin:right;transition:width .6s ease-in-out;width:0}.nav-item-animation[_ngcontent-%COMP%]:after{background-color:transparent;bottom:0;content:"";height:2px;position:absolute;right:100%;transform-origin:right;transition:width .6s ease-in-out;width:0}.nav-item-animation[_ngcontent-%COMP%]:hover:before{width:100%}.nav-item-animation[_ngcontent-%COMP%]:hover:after{width:100%}']})};var ne=class e{title="quiz-app";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=I({type:e,selectors:[["app-root"]],standalone:!0,features:[Q],decls:3,vars:0,consts:[[1,"w-full","min-h-screen","bg-primary"]],template:function(t,o){t&1&&(i(0,"div",0),H(1,"app-ui-header")(2,"router-outlet"),a())},dependencies:[De,P,ie],encapsulation:2})};we(ne,rt).catch(e=>console.error(e));
