import{e as B,i as U,l as W}from"./chunk-U5E76ITB.js";import{$ as T,B as h,F as m,I as k,J as M,P as p,Q as N,S as g,T as s,U as r,V as n,W as l,X as O,Y as j,_ as R,aa as a,ba as _,ca as q,da as F,ea as H,fa as x,ga as I,h as b,ka as L,la as G,ma as A,n as S,na as D,oa as P,va as Q,wa as V,xa as c,ya as $,z as E,za as u}from"./chunk-H7SGWGB2.js";var w=(d=>(d.SUCCESS="success",d.ERROR="error",d.ACCENT="accent",d.BRIGHT="bright",d.WARNING="warning",d))(w||{}),f={accent:{icon:"avatars/Profile-1.svg",bgColor:"bg-accent",textColor:"text-bright"},bright:{icon:"avatars/Profile.svg",bgColor:"bg-bright",textColor:"text-primary"},error:{icon:"avatars/Profile-2.svg",bgColor:"bg-error",textColor:"text-bright"},success:{icon:"avatars/Profile-3.svg",bgColor:"bg-success",textColor:"text-bright"},warning:{icon:"avatars/Profile-2.svg",bgColor:"bg-warning",textColor:"text-primary"}};var C=class i{constructor(e,t){this.store=e;this.errorService=t}getCategories(){return this.store.select(e=>e.categories.categories).pipe(S(e=>(this.errorService.handleError(e),b([]))))}getLoading(){return this.store.select(e=>e.categories.loading).pipe(S(e=>(this.errorService.handleError(e),b(!1))))}loadCategories(){try{this.store.dispatch(U())}catch(e){this.errorService.handleError(e)}}static \u0275fac=function(t){return new(t||i)(h(B),h(W))};static \u0275prov=E({token:i,factory:i.\u0275fac,providedIn:"root"})};var ie=()=>({"width.px":48,"height.px":48}),re=(i,e)=>[i,e],y=class i{name="";id=0;styles=f.accent;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["app-ui-card-quiz"]],inputs:{name:"name",id:"id",styles:"styles"},decls:8,vars:11,consts:[[1,"rounded-2xl","p-5","mx-2","my-3","w-64","min-h-60",3,"ngClass"],[1,"flex","items-center","justify-between"],["type","Label"],[1,"px-1",3,"src","svgStyle"],[3,"link"],["type","H6",3,"ngClass"]],template:function(t,o){t&1&&(r(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),a(3,"10 questions"),n(),l(4,"svg-icon",3),n(),r(5,"app-ui-link",4)(6,"app-ui-typography",5),a(7),n()()()),t&2&&(s("ngClass",o.styles.bgColor),p(4),s("src",o.styles.icon)("svgStyle",F(7,ie)),p(),T("link","/quiz/",o.name,""),p(),s("ngClass",H(8,re,o.styles.textColor,o.styles.textColor==="text-primary"?"hover:text-accent":"hover:text-warning")),p(),_(o.name))},dependencies:[L,Q,c,u],encapsulation:2})};function ne(i,e){i&1&&(r(0,"div",1)(1,"div",2),k(),r(2,"svg",3),l(3,"g",4)(4,"g",5),r(5,"g",6),l(6,"path",7)(7,"path",8),n()(),M(),r(8,"app-ui-typography"),a(9,"Loading..."),n()()())}var v=class i{show=!1;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["app-ui-spinner"]],inputs:{show:"show"},decls:1,vars:1,consts:[["role","status","class","fixed inset-0 flex items-center justify-center bg-muted text-bright bg-opacity-75 z-50",4,"ngIf"],["role","status",1,"fixed","inset-0","flex","items-center","justify-center","bg-muted","text-bright","bg-opacity-75","z-50"],[1,"absolute","-translate-x-1/2","-translate-y-1/2","top-2/4","left-1/2"],["aria-hidden","true","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-20","h-20","animate-spin","mb-5"],["id","SVGRepo_bgCarrier","stroke-width","0"],["id","SVGRepo_tracerCarrier","stroke-linecap","round","stroke-linejoin","round"],["id","SVGRepo_iconCarrier"],["d","M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z","fill","#3545E9"],["d","M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z","fill","#3545E9"]],template:function(t,o){t&1&&g(0,ne,10,0,"div",0),t&2&&s("ngIf",o.show)},dependencies:[A,c],encapsulation:2})};function se(i,e){if(i&1&&(O(0),l(1,"app-ui-card-quiz",14),j()),i&2){let t=e.$implicit,o=e.index,Y=R();p(),s("styles",Y.getCardStyle(o))("name",t.name)("id",t.id)}}var X=class i{constructor(e){this.storeService=e}categories$;isLoading$;ngOnInit(){this.categories$=this.storeService.getCategories(),this.isLoading$=this.storeService.getLoading(),this.storeService.loadCategories()}getCardStyle(e){let t=e+Math.floor(e/5),o=Object.values(w);return f[o[t%o.length]]}static \u0275fac=function(t){return new(t||i)(N(C))};static \u0275cmp=m({type:i,selectors:[["app-quizzes-catalog"]],standalone:!0,features:[q],decls:26,vars:6,consts:[[1,"absolute","inset-x-0","top","flex","flex-col","items-center","justify-between","min-h-fit","bg-primary","pb-8"],[1,"first:text-bright","flex","items-center","*:px-1","pb-10","flex-wrap","justify-center","text-center","w-3/4"],["type","H2"],["type","H3","highlightText","framed"],["link","/main",1,"2xl:absolute","left-3","max-lg:hidden"],["size","sm","type","ghost","iconState","prev"],[1,"lg:hidden","max-lg:fixed","bottom-0","w-full","flex","items-center","justify-between","p-5","rounded-t-lg","bg-primary","border-t-4","border-opacity-75","border-t-muted"],["link","/main"],["link","/quiz/Lucky quiz"],["type","accent"],[1,"flex","justify-center","flex-wrap","w-full","max-lg:mb-16"],[4,"ngFor","ngForOf"],["type","accent",1,"m-6","max-lg:hidden"],[3,"show"],[3,"styles","name","id"]],template:function(t,o){t&1&&(r(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),a(3,"Choose your"),n(),r(4,"app-ui-typography",3),a(5,"Quiz"),n(),r(6,"app-ui-typography",2),a(7,"."),n()(),r(8,"app-ui-link",4)(9,"app-ui-button",5),a(10,"Go to main page"),n()(),r(11,"div",6)(12,"app-ui-link",7)(13,"app-ui-button",5),a(14,"Go to main page"),n()(),r(15,"app-ui-link",8)(16,"app-ui-button",9),a(17,"I'm lucky"),n()()(),r(18,"div",10),g(19,se,2,3,"ng-container",11),x(20,"async"),n(),r(21,"app-ui-link",8)(22,"app-ui-button",12),a(23,"I'm lucky"),n()()(),l(24,"app-ui-spinner",13),x(25,"async")),t&2&&(p(19),s("ngForOf",I(20,2,o.categories$)),p(5),s("show",!!I(25,4,o.isLoading$)))},dependencies:[V,$,c,u,y,v,P,G,D],encapsulation:2})};export{X as QuizzesCatalogComponent};
