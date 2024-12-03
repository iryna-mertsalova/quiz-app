import{a as z,b as Fe,c as _e,d as Oe,e as je,f as S,g as we,h as N,i as Te,j as P,k as F,l as U}from"./chunk-J6IGZZJQ.js";import{$ as W,Aa as Re,B as u,C as y,Ca as A,D as c,Da as D,E as l,Ea as k,Fa as H,G as le,H as C,I as de,N as O,Q as j,R as me,S as f,T as J,V as R,W as d,X as n,Y as i,Z as w,_ as X,a as m,aa as ge,b as I,ba as ye,c as ne,d as ie,da as a,ea as ee,ga as T,h as L,i as ae,j as g,k as K,l as Q,la as he,m as _,n as v,o as se,p as ce,pa as Ee,q as fe,qa as ve,s as pe,t as Y,ta as Ce,u as ue,ua as Se,va as be,wa as xe,x as Z,ya as Me,za as Ie}from"./chunk-Y3YIEHKT.js";var $=class e{constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-main"]],standalone:!0,features:[T],decls:11,vars:0,consts:[[1,"absolute","inset-x-0","top-1/4","flex","flex-col","items-center","justify-between"],[1,"first:text-bright","flex","items-center","*:px-1","pb-10","flex-wrap","justify-center","text-center","w-3/4"],["type","H1"],["type","H3","highlightText","framed"],["type","H1","highlightText","ellipse"],["link","/quizzes-catalog"],["size","md","iconState","next"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),a(3,"Make your"),i(),n(4,"app-ui-typography",3),a(5,"choice"),i(),n(6,"app-ui-typography",4),a(7,"."),i()(),n(8,"app-ui-link",5)(9,"app-ui-button",6),a(10,"Go to a quiz"),i()()())},dependencies:[A,k,D,H],encapsulation:2})};var De=[{path:"main",component:$},{path:"quizzes-catalog",loadComponent:()=>import("./chunk-CGOBTBRX.js").then(e=>e.QuizzesCatalogComponent)},{path:"quiz/:name",loadComponent:()=>import("./chunk-MVNFHEH7.js").then(e=>e.QuizComponent)},{path:"statistics",loadComponent:()=>import("./chunk-4WLLYXHH.js").then(e=>e.StatisticsComponent)},{path:"**",redirectTo:"/main",pathMatch:"full"}];var et={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},G="__@ngrx/effects_create__";function ke(e,r={}){let t=r.functional?e:e(),o=m(m({},et),r);return Object.defineProperty(t,G,{value:o}),t}function tt(e){return Object.getOwnPropertyNames(e).filter(o=>e[o]&&e[o].hasOwnProperty(G)?e[o][G].hasOwnProperty("dispatch"):!1).map(o=>{let p=e[o][G];return m({propertyName:o},p)})}function rt(e){return tt(e)}function He(e){return Object.getPrototypeOf(e)}function ot(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function ze(e){return typeof e=="function"}function nt(e){return e.filter(ze)}function it(e,r,t){let o=He(e),s=!!o&&o.constructor.name!=="Object"?o.constructor.name:null,E=rt(e).map(({propertyName:h,dispatch:Ke,useEffectsErrorHandler:Qe})=>{let re=typeof e[h]=="function"?e[h]():e[h],oe=Qe?t(re,r):re;return Ke===!1?oe.pipe(ce()):oe.pipe(ue()).pipe(g(Ye=>({effect:e[h],notification:Ye,propertyName:h,sourceName:s,sourceInstance:e})))});return Q(...E)}var at=10;function Ne(e,r,t=at){return e.pipe(v(o=>(r&&r.handleError(o),t<=1?e:Ne(e,r,t-1))))}var Pe=(()=>{class e extends ne{constructor(t){super(),t&&(this.source=t)}lift(t){let o=new e;return o.source=this,o.operator=t,o}static{this.\u0275fac=function(o){return new(o||e)(c(je))}}static{this.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Ue(...e){return _(r=>e.some(t=>typeof t=="string"?t===r.type:t.type===r.type))}var Wt=new y("@ngrx/effects Internal Root Guard"),er=new y("@ngrx/effects User Provided Effects"),tr=new y("@ngrx/effects Internal Root Effects"),rr=new y("@ngrx/effects Internal Root Effects Instances"),or=new y("@ngrx/effects Internal Feature Effects"),nr=new y("@ngrx/effects Internal Feature Effects Instance Groups"),st=new y("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>Ne}),ct="@ngrx/effects/init",ft=Fe(ct);function pt(e,r){if(e.notification.kind==="N"){let t=e.notification.value;!ut(t)&&r.handleError(new Error(`Effect ${lt(e)} dispatched an invalid action: ${dt(t)}`))}}function ut(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function lt({propertyName:e,sourceInstance:r,sourceName:t}){let o=typeof r[e]=="function";return!!t?`"${t}.${String(e)}${o?"()":""}"`:`"${String(e)}()"`}function dt(e){try{return JSON.stringify(e)}catch{return e}}var mt="ngrxOnIdentifyEffects";function gt(e){return te(e,mt)}var yt="ngrxOnRunEffects";function ht(e){return te(e,yt)}var Et="ngrxOnInitEffects";function vt(e){return te(e,Et)}function te(e,r){return e&&r in e&&typeof e[r]=="function"}var $e=(()=>{class e extends ie{constructor(t,o){super(),this.errorHandler=t,this.effectsErrorHandler=o}addEffects(t){this.next(t)}toActions(){return this.pipe(Y(t=>ot(t)?He(t):t),K(t=>t.pipe(Y(Ct))),K(t=>{let o=t.pipe(pe(s=>St(this.errorHandler,this.effectsErrorHandler)(s)),g(s=>(pt(s,this.errorHandler),s.notification)),_(s=>s.kind==="N"&&s.value!=null),fe()),p=t.pipe(se(1),_(vt),g(s=>s.ngrxOnInitEffects()));return Q(o,p)}))}static{this.\u0275fac=function(o){return new(o||e)(c(j),c(st))}}static{this.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Ct(e){return gt(e)?e.ngrxOnIdentifyEffects():""}function St(e,r){return t=>{let o=it(t,e,r);return ht(t)?t.ngrxOnRunEffects(o):o}}var bt=(()=>{class e{get isStarted(){return!!this.effectsSubscription}constructor(t,o){this.effectSources=t,this.store=o,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(o){return new(o||e)(c($e),c(S))}}static{this.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Ge(...e){let r=e.flat(),t=nt(r);return de([t,{provide:le,multi:!0,useValue:()=>{l(_e),l(Oe,{optional:!0});let o=l(bt),p=l($e),s=!o.isStarted;s&&o.start();for(let E of r){let h=ze(E)?l(E):E;p.addEffects(h)}s&&l(S).dispatch(ft())}}])}var Mt={categories:[],loading:!1,error:""},Ve=Te(Mt,N(P,e=>I(m({},e),{loading:!0})),N(F,(e,{categories:r})=>I(m({},e),{categories:r,loading:!1})),N(U,(e,{error:r})=>I(m({},e),{error:r,loading:!1})));var x=class e{constructor(r){this.http=r}API_URL="https://opentdb.com/api_category.php";get(){return this.http.get(this.API_URL).pipe(g(r=>r.trivia_categories.slice(1,11)),v(()=>ae(()=>new Error("An error occurred. Please reload the page or try later."))))}static \u0275fac=function(t){return new(t||e)(c(Ce))};static \u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"})};var M=class e{errors=[];handleError(r){let t=this.formatError(r);this.errors.push(t),this.showError(t)}formatError(r){return r instanceof Error?r.message:typeof r=="string"?r:"An error occurred. Please reload the page or try later."}showError(r){let t=document.createElement("div"),o=document.createElement("img");o.src="error-notification-icon.svg",o.className="w-5 h-5 mr-2",t.className="flex items-center fixed right-4 p-3 pr-5 bg-error text-bright border-4 border-error rounded z-50",t.textContent=r,t.appendChild(o),document.body.appendChild(t),setTimeout(()=>{t.remove()},5e3)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"})};var V=class e{constructor(r,t,o,p){this.categoryService=r;this.errorService=t;this.store=o;this.destroyRef=p}loadCategories$=ke(()=>l(Pe).pipe(Ue(P),Z(()=>this.store.select(r=>r.categories.categories).pipe(z(this.destroyRef),Z(r=>r&&r.length>0?L(F({categories:r})):this.categoryService.get().pipe(g(t=>F({categories:t})),v(t=>(this.errorService.handleError(t),L(U({error:t}))))))))));static \u0275fac=function(t){return new(t||e)(c(x),c(M),c(S),c(O))};static \u0275prov=u({token:e,factory:e.\u0275fac})};var Be={categories:Ve},qe=[V];var Le={providers:[he({eventCoalescing:!0}),Re(De),Se(),we(Be),Ge(qe),x,[{provide:j,useClass:M}]]};function Ft(e,r){e&1&&(n(0,"app-ui-typography"),a(1,"\u2630"),i())}function _t(e,r){e&1&&(n(0,"app-ui-typography"),a(1,"\u2193"),i())}function Ot(e,r){if(e&1&&(X(0),n(1,"app-ui-link",13)(2,"app-ui-typography",14),a(3),i()(),W()),e&2){let t=r.$implicit;f(),d("link",t.link),f(2),ee(t.label)}}function jt(e,r){if(e&1&&(X(0),n(1,"app-ui-link",13)(2,"app-ui-typography",14),a(3),i()(),W()),e&2){let t=r.$implicit;f(),d("link",t.link),f(2),ee(t.label)}}function wt(e,r){if(e&1&&(n(0,"div",15),R(1,jt,4,2,"ng-container",8),n(2,"div",16)(3,"app-ui-button",10),a(4,"Sign in"),i(),n(5,"app-ui-button",11),a(6,"Sign up"),i()()()),e&2){let t=ye();f(),d("ngForOf",t.menuItems)}}var B=class e{constructor(r,t){this.router=r;this.destroyRef=t}logoSrc="main-logo.svg";isMenuOpen=!1;menuItems=[{link:"quizzes-catalog",label:"Quizzes catalog"},{link:"quiz",label:"Quiz"},{link:"statistics",label:"Statistics"}];toggleMenu(){this.isMenuOpen=!this.isMenuOpen}ngOnInit(){this.router.events.pipe(z(this.destroyRef)).subscribe(r=>{r instanceof xe&&(this.isMenuOpen=!1)})}static \u0275fac=function(t){return new(t||e)(J(Ie),J(O))};static \u0275cmp=C({type:e,selectors:[["app-ui-header"]],decls:18,vars:5,consts:[[1,"bg-primary","text-bright"],[1,"bg-primary","mx-auto","flex","items-center","justify-between","p-4"],["link","/"],["alt","logo","width","75","height","40",3,"src"],["aria-label","Toggle navigation",1,"text-white","md:hidden","flex","items-center","*:pl-3","hover:text-muted",3,"click"],[4,"ngIf"],[1,"hidden","md:flex","w-full","items-center","justify-between"],[1,"flex","items-center","justify-around","w-1/4","pl-7"],[4,"ngFor","ngForOf"],[1,"flex","w-1/4","justify-end"],["textName","P2","type","accent","size","sm"],["textName","P2","type","ghost","size","sm"],["class","absolute rounded-b-lg border-b-4 border-opacity-75 border-b-muted w-full bg-primary flex flex-col items-end md:hidden p-4 *:my-3 z-[1003]",4,"ngIf"],[1,"relative","cursor-pointer","hover:text-shade","nav-item-animation",3,"link"],["type","P1"],[1,"absolute","rounded-b-lg","border-b-4","border-opacity-75","border-b-muted","w-full","bg-primary","flex","flex-col","items-end","md:hidden","p-4","*:my-3","z-[1003]"],[1,"flex","items-center"]],template:function(t,o){t&1&&(n(0,"nav",0)(1,"div",1)(2,"app-ui-link",2),w(3,"img",3),i(),n(4,"button",4),ge("click",function(){return o.toggleMenu()}),R(5,Ft,2,0,"app-ui-typography",5)(6,_t,2,0,"app-ui-typography",5),n(7,"app-ui-typography"),a(8,"Menu"),i()(),n(9,"div",6)(10,"div",7),R(11,Ot,4,2,"ng-container",8),i(),n(12,"div",9)(13,"app-ui-button",10),a(14,"Sign in"),i(),n(15,"app-ui-button",11),a(16,"Sign up"),i()()()(),R(17,wt,7,1,"div",12),i()),t&2&&(f(3),d("src",o.logoSrc,me),f(2),d("ngIf",!o.isMenuOpen),f(),d("ngIf",o.isMenuOpen),f(5),d("ngForOf",o.menuItems),f(6),d("ngIf",o.isMenuOpen))},dependencies:[Ee,ve,k,D,H],styles:['.nav-item-animation[_ngcontent-%COMP%]:before{background-color:#7c9cbf;border-radius:4px;bottom:-3px;content:"";height:2px;left:0;position:absolute;transform-origin:right;transition:width .6s ease-in-out;width:0}.nav-item-animation[_ngcontent-%COMP%]:after{background-color:transparent;bottom:0;content:"";height:2px;position:absolute;right:100%;transform-origin:right;transition:width .6s ease-in-out;width:0}.nav-item-animation[_ngcontent-%COMP%]:hover:before{width:100%}.nav-item-animation[_ngcontent-%COMP%]:hover:after{width:100%}']})};var q=class e{title="quiz-app";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-root"]],standalone:!0,features:[T],decls:3,vars:0,consts:[[1,"w-full","min-h-screen","bg-primary"]],template:function(t,o){t&1&&(n(0,"div",0),w(1,"app-ui-header")(2,"router-outlet"),i())},dependencies:[Me,A,B],encapsulation:2})};be(q,Le).catch(e=>console.error(e));
