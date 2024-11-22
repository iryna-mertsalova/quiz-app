import{e as V,i as $}from"./chunk-54R2BTLA.js";import{$ as R,B as w,F as l,I as z,J as E,P as p,Q as k,S as g,T as s,U as o,V as r,W as m,X as M,Y as N,_ as O,aa as a,ba as T,ca as j,da as _,ea as F,fa as v,ga as x,ka as G,la as L,ma as q,na as A,oa as D,ua as P,va as Q,wa as c,xa as H,ya as u,z as I}from"./chunk-S6C7SKHX.js";var S=(d=>(d.SUCCESS="success",d.ERROR="error",d.ACCENT="accent",d.BRIGHT="bright",d.WARNING="warning",d))(S||{}),f={accent:{icon:"avatars/Profile-1.svg",bgColor:"bg-accent",textColor:"text-bright"},bright:{icon:"avatars/Profile.svg",bgColor:"bg-bright",textColor:"text-primary"},error:{icon:"avatars/Profile-2.svg",bgColor:"bg-error",textColor:"text-bright"},success:{icon:"avatars/Profile-3.svg",bgColor:"bg-success",textColor:"text-bright"},warning:{icon:"avatars/Profile-2.svg",bgColor:"bg-warning",textColor:"text-primary"}};var C=class i{constructor(e){this.store=e}getCategories(){return this.store.select(e=>e.categories.categories)}getLoading(){return this.store.select(e=>e.categories.loading)}loadCategories(){this.store.dispatch($())}static \u0275fac=function(t){return new(t||i)(w(V))};static \u0275prov=I({token:i,factory:i.\u0275fac,providedIn:"root"})};var Y=()=>({"width.px":48,"height.px":48}),ee=(i,e)=>[i,e],y=class i{name="";id=0;styles=f.accent;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=l({type:i,selectors:[["app-ui-card-quiz"]],inputs:{name:"name",id:"id",styles:"styles"},decls:8,vars:11,consts:[[1,"rounded-2xl","p-5","mx-2","my-3","w-64","min-h-60",3,"ngClass"],[1,"flex","items-center","justify-between"],["type","Label"],[1,"px-1",3,"src","svgStyle"],[3,"link"],["type","H6",3,"ngClass"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),a(3,"10 questions"),r(),m(4,"svg-icon",3),r(),o(5,"app-ui-link",4)(6,"app-ui-typography",5),a(7),r()()()),t&2&&(s("ngClass",n.styles.bgColor),p(4),s("src",n.styles.icon)("svgStyle",_(7,Y)),p(),R("link","/quiz/",n.id,""),p(),s("ngClass",F(8,ee,n.styles.textColor,n.styles.textColor==="text-primary"?"hover:text-accent":"hover:text-warning")),p(),T(n.name))},dependencies:[G,P,c,u],encapsulation:2})};function ie(i,e){i&1&&(o(0,"div",1)(1,"div",2),z(),o(2,"svg",3),m(3,"g",4)(4,"g",5),o(5,"g",6),m(6,"path",7)(7,"path",8),r()(),E(),o(8,"app-ui-typography"),a(9,"Loading..."),r()()())}var b=class i{show=!1;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=l({type:i,selectors:[["app-ui-spinner"]],inputs:{show:"show"},decls:1,vars:1,consts:[["role","status","class","fixed inset-0 flex items-center justify-center bg-muted text-bright bg-opacity-75 z-50",4,"ngIf"],["role","status",1,"fixed","inset-0","flex","items-center","justify-center","bg-muted","text-bright","bg-opacity-75","z-50"],[1,"absolute","-translate-x-1/2","-translate-y-1/2","top-2/4","left-1/2"],["aria-hidden","true","viewBox","0 0 24 24","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-20","h-20","animate-spin","mb-5"],["id","SVGRepo_bgCarrier","stroke-width","0"],["id","SVGRepo_tracerCarrier","stroke-linecap","round","stroke-linejoin","round"],["id","SVGRepo_iconCarrier"],["d","M12 22C17.5228 22 22 17.5228 22 12H19C19 15.866 15.866 19 12 19V22Z","fill","#3545E9"],["d","M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z","fill","#3545E9"]],template:function(t,n){t&1&&g(0,ie,10,0,"div",0),t&2&&s("ngIf",n.show)},dependencies:[q,c],encapsulation:2})};function ne(i,e){if(i&1&&(M(0),m(1,"app-ui-card-quiz",13),N()),i&2){let t=e.$implicit,n=e.index,K=O();p(),s("styles",K.getCardStyle(n))("name",t.name)("id",t.id)}}var Z=class i{constructor(e){this.storeService=e}categories$;isLoading$;ngOnInit(){this.categories$=this.storeService.getCategories(),this.isLoading$=this.storeService.getLoading(),this.storeService.loadCategories()}getCardStyle(e){let t=e+Math.floor(e/5),n=Object.values(S);return f[n[t%n.length]]}static \u0275fac=function(t){return new(t||i)(k(C))};static \u0275cmp=l({type:i,selectors:[["app-quizzes-catalog"]],standalone:!0,features:[j],decls:24,vars:6,consts:[[1,"absolute","inset-x-0","top","flex","flex-col","items-center","justify-between","min-h-fit","bg-primary","pb-8"],[1,"first:text-bright","flex","items-center","*:px-1","pb-10","flex-wrap","justify-center","text-center","w-3/4"],["type","H2"],["type","H3","highlightText","framed"],["link","/main",1,"2xl:absolute","left-3","max-lg:hidden"],["size","sm","type","ghost","iconState","prev"],[1,"lg:hidden","max-lg:fixed","bottom-0","w-full","flex","items-center","justify-between","p-5","rounded-t-lg","bg-primary","border-t-4","border-opacity-75","border-t-muted"],["link","/main"],["type","accent",1,""],[1,"flex","justify-center","flex-wrap","w-full","max-lg:mb-16"],[4,"ngFor","ngForOf"],["type","accent",1,"m-6","max-lg:hidden"],[3,"show"],[3,"styles","name","id"]],template:function(t,n){t&1&&(o(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),a(3,"Choose your"),r(),o(4,"app-ui-typography",3),a(5,"Quiz"),r(),o(6,"app-ui-typography",2),a(7,"."),r()(),o(8,"app-ui-link",4)(9,"app-ui-button",5),a(10,"Go to main page"),r()(),o(11,"div",6)(12,"app-ui-link",7)(13,"app-ui-button",5),a(14,"Go to main page"),r()(),o(15,"app-ui-button",8),a(16,"I'm lucky"),r()(),o(17,"div",9),g(18,ne,2,3,"ng-container",10),v(19,"async"),r(),o(20,"app-ui-button",11),a(21,"I'm lucky"),r()(),m(22,"app-ui-spinner",12),v(23,"async")),t&2&&(p(18),s("ngForOf",x(19,2,n.categories$)),p(4),s("show",x(23,4,n.isLoading$)||!1))},dependencies:[Q,H,c,u,y,b,D,L,A],encapsulation:2})};export{Z as QuizzesCatalogComponent};
