import{a as Ie,b as Fe,c as _e,d as Re,e as Oe,f as D,g as je,h as H,i as we,j as z,k as N,l as P}from"./chunk-MORHVNJ7.js";import{$ as Y,Ba as w,C as p,Ca as T,D as y,Da as A,E as c,Ea as k,F as l,H as fe,I as C,J as pe,O as ue,Q as R,R as le,S as f,T as K,V as F,W as d,X as o,Y as i,Z as O,_ as Q,a as m,aa as de,b as M,ba as me,c as ee,d as te,da as a,ea as Z,fa as j,h as re,i as ne,j as g,k as I,ka as ge,l as q,m as _,n as v,o as oe,oa as ye,p as ie,pa as he,q as ae,s as se,sa as Ee,t as L,ta as ve,u as ce,ua as Ce,va as be,xa as Se,ya as xe,za as Me}from"./chunk-AM6THSOW.js";var U=class e{constructor(){}ngOnInit(){}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-main"]],standalone:!0,features:[j],decls:11,vars:0,consts:[[1,"absolute","inset-x-0","top-1/4","flex","flex-col","items-center","justify-between"],[1,"first:text-bright","flex","items-center","*:px-1","pb-10","flex-wrap","justify-center","text-center","w-3/4"],["type","H1"],["type","H3","highlightText","framed"],["type","H1","highlightText","ellipse"],["link","/quizzes-catalog"],["size","md","iconState","next"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),a(3,"Make your"),i(),o(4,"app-ui-typography",3),a(5,"choice"),i(),o(6,"app-ui-typography",4),a(7,"."),i()(),o(8,"app-ui-link",5)(9,"app-ui-button",6),a(10,"Go to a quiz"),i()()())},dependencies:[w,A,T,k],encapsulation:2})};var Ae=[{path:"main",component:U},{path:"quizzes-catalog",loadComponent:()=>import("./chunk-KCVRK6BC.js").then(e=>e.QuizzesCatalogComponent)},{path:"quiz/:name",loadComponent:()=>import("./chunk-XXW42B5H.js").then(e=>e.QuizComponent)},{path:"statistics",loadComponent:()=>import("./chunk-PXZJE2BC.js").then(e=>e.StatisticsComponent)},{path:"**",redirectTo:"/main",pathMatch:"full"}];var Xe={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},$="__@ngrx/effects_create__";function ke(e,r={}){let t=r.functional?e:e(),n=m(m({},Xe),r);return Object.defineProperty(t,$,{value:n}),t}function We(e){return Object.getOwnPropertyNames(e).filter(n=>e[n]&&e[n].hasOwnProperty($)?e[n][$].hasOwnProperty("dispatch"):!1).map(n=>{let u=e[n][$];return m({propertyName:n},u)})}function et(e){return We(e)}function De(e){return Object.getPrototypeOf(e)}function tt(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function He(e){return typeof e=="function"}function rt(e){return e.filter(He)}function nt(e,r,t){let n=De(e),s=!!n&&n.constructor.name!=="Object"?n.constructor.name:null,E=et(e).map(({propertyName:h,dispatch:Le,useEffectsErrorHandler:Ke})=>{let X=typeof e[h]=="function"?e[h]():e[h],W=Ke?t(X,r):X;return Le===!1?W.pipe(ie()):W.pipe(ce()).pipe(g(Qe=>({effect:e[h],notification:Qe,propertyName:h,sourceName:s,sourceInstance:e})))});return q(...E)}var ot=10;function ze(e,r,t=ot){return e.pipe(v(n=>(r&&r.handleError(n),t<=1?e:ze(e,r,t-1))))}var Ne=(()=>{class e extends ee{constructor(t){super(),t&&(this.source=t)}lift(t){let n=new e;return n.source=this,n.operator=t,n}static{this.\u0275fac=function(n){return new(n||e)(c(Oe))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Pe(...e){return _(r=>e.some(t=>typeof t=="string"?t===r.type:t.type===r.type))}var Xt=new y("@ngrx/effects Internal Root Guard"),Wt=new y("@ngrx/effects User Provided Effects"),er=new y("@ngrx/effects Internal Root Effects"),tr=new y("@ngrx/effects Internal Root Effects Instances"),rr=new y("@ngrx/effects Internal Feature Effects"),nr=new y("@ngrx/effects Internal Feature Effects Instance Groups"),it=new y("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>ze}),at="@ngrx/effects/init",st=Fe(at);function ct(e,r){if(e.notification.kind==="N"){let t=e.notification.value;!ft(t)&&r.handleError(new Error(`Effect ${pt(e)} dispatched an invalid action: ${ut(t)}`))}}function ft(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function pt({propertyName:e,sourceInstance:r,sourceName:t}){let n=typeof r[e]=="function";return!!t?`"${t}.${String(e)}${n?"()":""}"`:`"${String(e)}()"`}function ut(e){try{return JSON.stringify(e)}catch{return e}}var lt="ngrxOnIdentifyEffects";function dt(e){return J(e,lt)}var mt="ngrxOnRunEffects";function gt(e){return J(e,mt)}var yt="ngrxOnInitEffects";function ht(e){return J(e,yt)}function J(e,r){return e&&r in e&&typeof e[r]=="function"}var Ue=(()=>{class e extends te{constructor(t,n){super(),this.errorHandler=t,this.effectsErrorHandler=n}addEffects(t){this.next(t)}toActions(){return this.pipe(L(t=>tt(t)?De(t):t),I(t=>t.pipe(L(Et))),I(t=>{let n=t.pipe(se(s=>vt(this.errorHandler,this.effectsErrorHandler)(s)),g(s=>(ct(s,this.errorHandler),s.notification)),_(s=>s.kind==="N"&&s.value!=null),ae()),u=t.pipe(oe(1),_(ht),g(s=>s.ngrxOnInitEffects()));return q(n,u)}))}static{this.\u0275fac=function(n){return new(n||e)(c(R),c(it))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function Et(e){return dt(e)?e.ngrxOnIdentifyEffects():""}function vt(e,r){return t=>{let n=nt(t,e,r);return gt(t)?t.ngrxOnRunEffects(n):n}}var Ct=(()=>{class e{get isStarted(){return!!this.effectsSubscription}constructor(t,n){this.effectSources=t,this.store=n,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}static{this.\u0275fac=function(n){return new(n||e)(c(Ue),c(D))}}static{this.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();function $e(...e){let r=e.flat(),t=rt(r);return pe([t,{provide:fe,multi:!0,useValue:()=>{l(_e),l(Re,{optional:!0});let n=l(Ct),u=l(Ue),s=!n.isStarted;s&&n.start();for(let E of r){let h=He(E)?l(E):E;u.addEffects(h)}s&&l(D).dispatch(st())}}])}var St={categories:[],loading:!1,error:""},Ge=we(St,H(z,e=>M(m({},e),{loading:!0})),H(N,(e,{categories:r})=>M(m({},e),{categories:r,loading:!1})),H(P,(e,{error:r})=>M(m({},e),{error:r,loading:!1})));var S=class e{constructor(r){this.http=r}API_URL="https://opentdb.com/api_category.php";get(){return this.http.get(this.API_URL).pipe(g(r=>r.trivia_categories.slice(1,11)),v(()=>ne(()=>new Error("An error occurred. Please reload the page or try later."))))}static \u0275fac=function(t){return new(t||e)(c(Ee))};static \u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})};var x=class e{errors=[];handleError(r){let t=this.formatError(r);this.errors.push(t),this.showError(t)}formatError(r){return r instanceof Error?r.message:typeof r=="string"?r:"An error occurred. Please reload the page or try later."}showError(r){let t=document.createElement("div"),n=document.createElement("img");n.src="error-notification-icon.svg",n.className="w-5 h-5 mr-2",t.className="flex items-center fixed right-4 p-3 pr-5 bg-error text-bright border-4 border-error rounded z-50",t.textContent=r,t.appendChild(n),document.body.appendChild(t),setTimeout(()=>{t.remove()},5e3)}static \u0275fac=function(t){return new(t||e)};static \u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"root"})};var G=class e{constructor(r,t){this.categoryService=r;this.errorService=t}loadCategories$=ke(()=>l(Ne).pipe(Pe(z),I(()=>this.categoryService.get().pipe(g(r=>N({categories:r})),v(r=>(this.errorService.handleError(r),re(P({error:r}))))))));static \u0275fac=function(t){return new(t||e)(c(S),c(x))};static \u0275prov=p({token:e,factory:e.\u0275fac})};var Ve={categories:Ge},Be=[G];var qe={providers:[ge({eventCoalescing:!0}),Me(Ae),ve(),je(Ve),$e(Be),S,[{provide:R,useClass:x}]]};function It(e,r){e&1&&(o(0,"app-ui-typography"),a(1,"\u2630"),i())}function Ft(e,r){e&1&&(o(0,"app-ui-typography"),a(1,"\u2193"),i())}function _t(e,r){if(e&1&&(Q(0),o(1,"app-ui-link",13)(2,"app-ui-typography",14),a(3),i()(),Y()),e&2){let t=r.$implicit;f(),d("link",t.link),f(2),Z(t.label)}}function Rt(e,r){if(e&1&&(Q(0),o(1,"app-ui-link",13)(2,"app-ui-typography",14),a(3),i()(),Y()),e&2){let t=r.$implicit;f(),d("link",t.link),f(2),Z(t.label)}}function Ot(e,r){if(e&1&&(o(0,"div",15),F(1,Rt,4,2,"ng-container",8),o(2,"div",16)(3,"app-ui-button",10),a(4,"Sign in"),i(),o(5,"app-ui-button",11),a(6,"Sign up"),i()()()),e&2){let t=me();f(),d("ngForOf",t.menuItems)}}var V=class e{constructor(r,t){this.router=r;this.destroyRef=t}logoSrc="main-logo.svg";isMenuOpen=!1;menuItems=[{link:"quizzes-catalog",label:"Quizzes catalog"},{link:"quiz",label:"Quiz"},{link:"statistics",label:"Statistics"}];toggleMenu(){this.isMenuOpen=!this.isMenuOpen}ngOnInit(){this.router.events.pipe(Ie(this.destroyRef)).subscribe(r=>{r instanceof be&&(this.isMenuOpen=!1)})}static \u0275fac=function(t){return new(t||e)(K(xe),K(ue))};static \u0275cmp=C({type:e,selectors:[["app-ui-header"]],decls:18,vars:5,consts:[[1,"bg-primary","text-bright"],[1,"bg-primary","mx-auto","flex","items-center","justify-between","p-4"],["link","/"],["alt","logo","width","75","height","40",3,"src"],["aria-label","Toggle navigation",1,"text-white","md:hidden","flex","items-center","*:pl-3","hover:text-muted",3,"click"],[4,"ngIf"],[1,"hidden","md:flex","w-full","items-center","justify-between"],[1,"flex","items-center","justify-around","w-1/4","pl-7"],[4,"ngFor","ngForOf"],[1,"flex","w-1/4","justify-end"],["textName","P2","type","accent","size","sm"],["textName","P2","type","ghost","size","sm"],["class","absolute rounded-b-lg border-b-4 border-opacity-75 border-b-muted w-full bg-primary flex flex-col items-end md:hidden p-4 *:my-3 z-[1003]",4,"ngIf"],[1,"relative","cursor-pointer","hover:text-shade","nav-item-animation",3,"link"],["type","P1"],[1,"absolute","rounded-b-lg","border-b-4","border-opacity-75","border-b-muted","w-full","bg-primary","flex","flex-col","items-end","md:hidden","p-4","*:my-3","z-[1003]"],[1,"flex","items-center"]],template:function(t,n){t&1&&(o(0,"nav",0)(1,"div",1)(2,"app-ui-link",2),O(3,"img",3),i(),o(4,"button",4),de("click",function(){return n.toggleMenu()}),F(5,It,2,0,"app-ui-typography",5)(6,Ft,2,0,"app-ui-typography",5),o(7,"app-ui-typography"),a(8,"Menu"),i()(),o(9,"div",6)(10,"div",7),F(11,_t,4,2,"ng-container",8),i(),o(12,"div",9)(13,"app-ui-button",10),a(14,"Sign in"),i(),o(15,"app-ui-button",11),a(16,"Sign up"),i()()()(),F(17,Ot,7,1,"div",12),i()),t&2&&(f(3),d("src",n.logoSrc,le),f(2),d("ngIf",!n.isMenuOpen),f(),d("ngIf",n.isMenuOpen),f(5),d("ngForOf",n.menuItems),f(6),d("ngIf",n.isMenuOpen))},dependencies:[ye,he,A,T,k],styles:['.nav-item-animation[_ngcontent-%COMP%]:before{background-color:#7c9cbf;border-radius:4px;bottom:-3px;content:"";height:2px;left:0;position:absolute;transform-origin:right;transition:width .6s ease-in-out;width:0}.nav-item-animation[_ngcontent-%COMP%]:after{background-color:transparent;bottom:0;content:"";height:2px;position:absolute;right:100%;transform-origin:right;transition:width .6s ease-in-out;width:0}.nav-item-animation[_ngcontent-%COMP%]:hover:before{width:100%}.nav-item-animation[_ngcontent-%COMP%]:hover:after{width:100%}']})};var B=class e{title="quiz-app";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["app-root"]],standalone:!0,features:[j],decls:3,vars:0,consts:[[1,"w-full","min-h-screen","bg-primary"]],template:function(t,n){t&1&&(o(0,"div",0),O(1,"app-ui-header")(2,"router-outlet"),i())},dependencies:[Se,w,V],encapsulation:2})};Ce(B,qe).catch(e=>console.error(e));
