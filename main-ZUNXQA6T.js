import{a as F,b as Qe,c as Ne,d as Pe,e as ze,f as E,g as Ue,h as S,i as G,j as V,k as D,l as B,m as L,n as K,o as Y}from"./chunk-74UAAOC2.js";import{a as Z,e as qe}from"./chunk-JBRI3J6N.js";import{$ as i,A as f,Aa as je,B as h,C as n,D as m,Da as P,Ea as _e,F as xe,Fa as we,G as M,H as Ie,Ha as De,Ja as Te,Ka as ke,La as He,O as R,R as H,S as Me,U as d,V as _,Wa as z,X as w,Xa as U,Y as y,Ya as q,Za as $,a as ve,aa as a,b as ye,ba as Q,ca as pe,da as ue,f as O,fa as Re,g as T,ga as Fe,h as u,j as se,k as ce,l as k,m as g,n as he,na as s,o as Ee,oa as le,p as Se,qa as N,r as Ce,s as fe,t as be,va as Ae,w as j,za as Oe}from"./chunk-MW7PFOO7.js";import{a as p,b as v}from"./chunk-AIZVJUQQ.js";var J=class e{constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=M({type:e,selectors:[["app-main"]],standalone:!0,features:[N],decls:11,vars:0,consts:[[1,"absolute","inset-x-0","top-1/4","flex","flex-col","items-center","justify-between"],[1,"first:text-bright","flex","items-center","*:px-1","pb-10","flex-wrap","justify-center","text-center","w-3/4"],["type","H1"],["type","H3","highlightText","framed"],["type","H1","highlightText","ellipse"],["link","/quizzes-catalog"],["size","md","iconState","next"]],template:function(t,o){t&1&&(i(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),s(3,"Make your"),a(),i(4,"app-ui-typography",3),s(5,"choice"),a(),i(6,"app-ui-typography",4),s(7,"."),a()(),i(8,"app-ui-link",5)(9,"app-ui-button",6),s(10,"Go to a quiz"),a()()())},dependencies:[z,q,U,$],encapsulation:2})};var Ge=(e,r,t,o)=>o&&t.url!==o.url&&e.canDeactivate?e.canDeactivate():!0;var Ve=[{path:"main",component:J},{path:"quizzes-catalog",loadComponent:()=>import("./chunk-WKWKFQ2I.js").then(e=>e.QuizzesCatalogComponent)},{path:"quiz/:id",loadComponent:()=>import("./chunk-RD2IUFWE.js").then(e=>e.QuestionComponent),canDeactivate:[Ge]},{path:"statistics",loadComponent:()=>import("./chunk-CMRYWX2S.js").then(e=>e.StatisticsComponent)},{path:"**",redirectTo:"/main",pathMatch:"full"}];var pt={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},X="__@ngrx/effects_create__";function W(e,r={}){let t=r.functional?e:e(),o=p(p({},pt),r);return Object.defineProperty(t,X,{value:o}),t}function ut(e){return Object.getOwnPropertyNames(e).filter(o=>e[o]&&e[o].hasOwnProperty(X)?e[o][X].hasOwnProperty("dispatch"):!1).map(o=>{let l=e[o][X];return p({propertyName:o},l)})}function lt(e){return ut(e)}function Le(e){return Object.getPrototypeOf(e)}function mt(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function Ke(e){return typeof e=="function"}function dt(e){return e.filter(Ke)}function gt(e,r,t){let o=Le(e),c=!!o&&o.constructor.name!=="Object"?o.constructor.name:null,I=lt(e).map(({propertyName:x,dispatch:it,useEffectsErrorHandler:nt})=>{let de=typeof e[x]=="function"?e[x]():e[x],ge=nt?t(de,r):de;return it===!1?ge.pipe(Ee()):ge.pipe(be()).pipe(u(at=>({effect:e[x],notification:at,propertyName:x,sourceName:c,sourceInstance:e})))});return ce(...I)}var vt=10;function Ye(e,r,t=vt){return e.pipe(g(o=>(r&&r.handleError(o),t<=1?e:Ye(e,r,t-1))))}var ee=(()=>{class e extends ve{constructor(t){super(),t&&(this.source=t)}lift(t){let o=new e;return o.source=this,o.operator=t,o}static{this.\u0275fac=function(o){return new(o||e)(n(ze))}}static{this.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function te(...e){return k(r=>e.some(t=>typeof t=="string"?t===r.type:t.type===r.type))}var dr=new h("@ngrx/effects Internal Root Guard"),gr=new h("@ngrx/effects User Provided Effects"),vr=new h("@ngrx/effects Internal Root Effects"),yr=new h("@ngrx/effects Internal Root Effects Instances"),hr=new h("@ngrx/effects Internal Feature Effects"),Er=new h("@ngrx/effects Internal Feature Effects Instance Groups"),yt=new h("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>Ye}),ht="@ngrx/effects/init",Et=Qe(ht);function St(e,r){if(e.notification.kind==="N"){let t=e.notification.value;!Ct(t)&&r.handleError(new Error(`Effect ${bt(e)} dispatched an invalid action: ${xt(t)}`))}}function Ct(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function bt({propertyName:e,sourceInstance:r,sourceName:t}){let o=typeof r[e]=="function";return!!t?`"${t}.${String(e)}${o?"()":""}"`:`"${String(e)}()"`}function xt(e){try{return JSON.stringify(e)}catch{return e}}var It="ngrxOnIdentifyEffects";function Mt(e){return me(e,It)}var Rt="ngrxOnRunEffects";function Ft(e){return me(e,Rt)}var At="ngrxOnInitEffects";function Ot(e){return me(e,At)}function me(e,r){return e&&r in e&&typeof e[r]=="function"}var Ze=(()=>{class e extends ye{constructor(t,o){super(),this.errorHandler=t,this.effectsErrorHandler=o}addEffects(t){this.next(t)}toActions(){return this.pipe(fe(t=>mt(t)?Le(t):t),se(t=>t.pipe(fe(jt))),se(t=>{let o=t.pipe(Ce(c=>_t(this.errorHandler,this.effectsErrorHandler)(c)),u(c=>(St(c,this.errorHandler),c.notification)),k(c=>c.kind==="N"&&c.value!=null),Se()),l=t.pipe(he(1),k(Ot),u(c=>c.ngrxOnInitEffects()));return ce(o,l)}))}static{this.\u0275fac=function(o){return new(o||e)(n(H),n(yt))}}static{this.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function jt(e){return Mt(e)?e.ngrxOnIdentifyEffects():""}function _t(e,r){return t=>{let o=gt(t,e,r);return Ft(t)?t.ngrxOnRunEffects(o):o}}var wt=(()=>{class e{get isStarted(){return!!this.effectsSubscription}constructor(t,o){this.effectSources=t,this.store=o,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(o){return new(o||e)(n(Ze),n(E))}}static{this.\u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Je(...e){let r=e.flat(),t=dt(r);return Ie([t,{provide:xe,multi:!0,useValue:()=>{m(Ne),m(Pe,{optional:!0});let o=m(wt),l=m(Ze),c=!o.isStarted;c&&o.start();for(let I of r){let x=Ke(I)?m(I):I;l.addEffects(x)}c&&m(E).dispatch(Et())}}])}var Tt={categories:[],loading:!1,error:""},Xe=G(Tt,S(V,e=>v(p({},e),{loading:!0})),S(D,(e,{categories:r})=>v(p({},e),{categories:r,loading:!1})),S(B,(e,{error:r})=>v(p({},e),{error:r,loading:!1})));var A=class e{constructor(r){this.http=r}get(){return this.http.get(Z.CATEGORY_URL).pipe(u(r=>r.trivia_categories.slice(1,11)),g(()=>T(()=>new Error("An error occurred. Please reload the page or try later."))))}static \u0275fac=function(t){return new(t||e)(n(P))};static \u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})};var b=class e{errors=[];handleError(r){let t=this.formatError(r);this.errors.push(t),this.showError(t)}formatError(r){return r instanceof Error?r.message:typeof r=="string"?r:"An error occurred. Please reload the page or try later."}showError(r){let t=document.createElement("div"),o=document.createElement("img");o.src="error-notification-icon.svg",o.className="w-5 h-5 mr-2",t.className="flex items-center fixed right-4 p-3 pr-5 bg-error text-bright border-4 border-error rounded z-50",t.textContent=r,t.appendChild(o),document.body.appendChild(t),setTimeout(()=>{t.remove()},5e3)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})};var re=class e{constructor(r,t,o,l){this.categoryService=r;this.errorService=t;this.store=o;this.destroyRef=l}loadCategories$=W(()=>m(ee).pipe(te(V),j(()=>this.store.select(r=>r.categories.categories).pipe(F(this.destroyRef),j(r=>r&&r.length>0?O(D({categories:r})):this.categoryService.get().pipe(u(t=>D({categories:t})),g(t=>(this.errorService.handleError(t),O(B({error:t}))))))))));static \u0275fac=function(t){return new(t||e)(n(A),n(b),n(E),n(R))};static \u0275prov=f({token:e,factory:e.\u0275fac})};var Nt={questions:[],loading:!1,error:""},et=G(Nt,S(L,e=>v(p({},e),{loading:!0})),S(K,(e,{questions:r})=>v(p({},e),{questions:r,loading:!1})),S(Y,(e,{error:r})=>v(p({},e),{error:r,loading:!1})));var oe=class e{constructor(r){this.http=r}getQuestions(r){let t=new URLSearchParams;return r!==0&&t.append("category",r.toString()),t.append("type","multiple"),this.http.get(`${Z.QUESTION_URL}${t}`).pipe(u(o=>o.results),g(()=>T(()=>new Error("An error occurred. Please reload the page or try later."))))}static \u0275fac=function(t){return new(t||e)(n(P))};static \u0275prov=f({token:e,factory:e.\u0275fac,providedIn:"root"})};var ie=class e{constructor(r,t,o,l){this.questionService=r;this.errorService=t;this.store=o;this.destroyRef=l}loadQuestions$=W(()=>m(ee).pipe(te(L),j(({categoryId:r})=>this.questionService.getQuestions(r).pipe(F(this.destroyRef),u(t=>K({questions:t})),g(t=>(this.errorService.handleError(t),O(Y({error:t}))))))));static \u0275fac=function(t){return new(t||e)(n(oe),n(b),n(E),n(R))};static \u0275prov=f({token:e,factory:e.\u0275fac})};var tt={categories:Xe,questions:et},rt=[re,ie];var ot={providers:[Ae({eventCoalescing:!0}),He(Ve),_e(),Ue(tt),Je(rt),A,[{provide:H,useClass:b}]]};function zt(e,r){e&1&&(i(0,"app-ui-typography"),s(1,"\u2630"),a())}function Ut(e,r){e&1&&(i(0,"app-ui-typography"),s(1,"\u2193"),a())}function qt(e,r){if(e&1&&(pe(0),i(1,"app-ui-link",13)(2,"app-ui-typography",14),s(3),a()(),ue()),e&2){let t=r.$implicit;d(),y("link",t.link),d(2),le(t.label)}}function $t(e,r){if(e&1&&(pe(0),i(1,"app-ui-link",13)(2,"app-ui-typography",14),s(3),a()(),ue()),e&2){let t=r.$implicit;d(),y("link",t.link),d(2),le(t.label)}}function Gt(e,r){if(e&1&&(i(0,"div",15),w(1,$t,4,2,"ng-container",8),i(2,"div",16)(3,"app-ui-button",10),s(4,"Sign in"),a(),i(5,"app-ui-button",11),s(6,"Sign up"),a()()()),e&2){let t=Fe();d(),y("ngForOf",t.menuItems)}}var ne=class e{constructor(r,t){this.router=r;this.destroyRef=t}logoSrc="main-logo.svg";isMenuOpen=!1;menuItems=[{link:"quizzes-catalog",label:"Quizzes catalog"},{link:"quiz/0",label:"Quiz"},{link:"statistics",label:"Statistics"}];toggleMenu(){this.isMenuOpen=!this.isMenuOpen}ngOnInit(){this.router.events.pipe(F(this.destroyRef)).subscribe(r=>{r instanceof De&&(this.isMenuOpen=!1)})}static \u0275fac=function(t){return new(t||e)(_(ke),_(R))};static \u0275cmp=M({type:e,selectors:[["app-ui-header"]],decls:18,vars:5,consts:[[1,"bg-primary","text-bright"],[1,"bg-primary","mx-auto","flex","items-center","justify-between","p-4"],["link","/"],["alt","logo","width","75","height","40",3,"src"],["aria-label","Toggle navigation",1,"text-white","md:hidden","flex","items-center","*:pl-3","hover:text-muted",3,"click"],[4,"ngIf"],[1,"hidden","md:flex","w-full","items-center","justify-between"],[1,"flex","items-center","justify-around","w-1/4","pl-7"],[4,"ngFor","ngForOf"],[1,"flex","w-1/4","justify-end"],["textName","P2","type","accent","size","sm"],["textName","P2","type","ghost","size","sm"],["class","absolute rounded-b-lg border-b-4 border-opacity-75 border-b-muted w-full bg-primary flex flex-col items-end md:hidden p-4 *:my-3 z-[1003]",4,"ngIf"],[1,"relative","cursor-pointer","hover:text-shade","nav-item-animation",3,"link"],["type","P1"],[1,"absolute","rounded-b-lg","border-b-4","border-opacity-75","border-b-muted","w-full","bg-primary","flex","flex-col","items-end","md:hidden","p-4","*:my-3","z-[1003]"],[1,"flex","items-center"]],template:function(t,o){t&1&&(i(0,"nav",0)(1,"div",1)(2,"app-ui-link",2),Q(3,"img",3),a(),i(4,"button",4),Re("click",function(){return o.toggleMenu()}),w(5,zt,2,0,"app-ui-typography",5)(6,Ut,2,0,"app-ui-typography",5),i(7,"app-ui-typography"),s(8,"Menu"),a()(),i(9,"div",6)(10,"div",7),w(11,qt,4,2,"ng-container",8),a(),i(12,"div",9)(13,"app-ui-button",10),s(14,"Sign in"),a(),i(15,"app-ui-button",11),s(16,"Sign up"),a()()()(),w(17,Gt,7,1,"div",12),a()),t&2&&(d(3),y("src",o.logoSrc,Me),d(2),y("ngIf",!o.isMenuOpen),d(),y("ngIf",o.isMenuOpen),d(5),y("ngForOf",o.menuItems),d(6),y("ngIf",o.isMenuOpen))},dependencies:[Oe,je,q,U,$],styles:['.nav-item-animation[_ngcontent-%COMP%]:before{background-color:#7c9cbf;border-radius:4px;bottom:-3px;content:"";height:2px;left:0;position:absolute;transform-origin:right;transition:width .6s ease-in-out;width:0}.nav-item-animation[_ngcontent-%COMP%]:after{background-color:transparent;bottom:0;content:"";height:2px;position:absolute;right:100%;transform-origin:right;transition:width .6s ease-in-out;width:0}.nav-item-animation[_ngcontent-%COMP%]:hover:before{width:100%}.nav-item-animation[_ngcontent-%COMP%]:hover:after{width:100%}']})};var ae=class e{constructor(r){this.statisticService=r}title="quiz-app";ngOnInit(){this.statisticService.initDefaultStatistic()}static \u0275fac=function(t){return new(t||e)(_(qe))};static \u0275cmp=M({type:e,selectors:[["app-root"]],standalone:!0,features:[N],decls:3,vars:0,consts:[[1,"w-full","min-h-screen","bg-primary"]],template:function(t,o){t&1&&(i(0,"div",0),Q(1,"app-ui-header")(2,"router-outlet"),a())},dependencies:[Te,z,ne],encapsulation:2})};we(ae,ot).catch(e=>console.error(e));
