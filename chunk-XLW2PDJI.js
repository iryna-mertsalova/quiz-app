import{A as F,B as j,D as T,E as D,J as P,K as Q,L as u,M as H,N as d,a as b,b as v,c as x,d as h,e as S,f as I,g as m,i as s,j as z,k as E,l as p,m as n,n as r,o as c,p as w,q as O,s as k,t as R,u as a,v as q,w as M,x as N,y as _}from"./chunk-J5XQNO5I.js";var y=(l=>(l.SUCCESS="success",l.ERROR="error",l.ACCENT="accent",l.BRIGHT="bright",l.WARNING="warning",l))(y||{}),g={accent:{icon:"avatars/Profile-1.svg",bgColor:"bg-accent",textColor:"text-bright"},bright:{icon:"avatars/Profile.svg",bgColor:"bg-bright",textColor:"text-primary"},error:{icon:"avatars/Profile-2.svg",bgColor:"bg-error",textColor:"text-bright"},success:{icon:"avatars/Profile-3.svg",bgColor:"bg-success",textColor:"text-bright"},warning:{icon:"avatars/Profile-2.svg",bgColor:"bg-warning",textColor:"text-primary"}};var C=class i{constructor(e){this.http=e}API_URL="https://opentdb.com/api_category.php";get(){return this.http.get(this.API_URL).pipe(x(e=>e.trivia_categories.slice(0,10)),h(e=>v(()=>new Error("Failed to load data."))))}static \u0275fac=function(t){return new(t||i)(I(D))};static \u0275prov=S({token:i,factory:i.\u0275fac,providedIn:"root"})};var $=()=>({"width.px":48,"height.px":48}),J=(i,e)=>[i,e],f=class i{name="";id=0;styles=g.accent;static \u0275fac=function(t){return new(t||i)};static \u0275cmp=m({type:i,selectors:[["app-ui-card-quiz"]],inputs:{name:"name",id:"id",styles:"styles"},decls:8,vars:11,consts:[[1,"rounded-2xl","p-5","mx-2","my-3","w-64","min-h-60",3,"ngClass"],[1,"flex","items-center","justify-between"],["type","Label"],[1,"px-1",3,"src","svgStyle"],[3,"link"],["type","H6",3,"ngClass"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),a(3,"10 questions"),r(),c(4,"svg-icon",3),r(),n(5,"app-ui-link",4)(6,"app-ui-typography",5),a(7),r()()()),t&2&&(p("ngClass",o.styles.bgColor),s(4),p("src",o.styles.icon)("svgStyle",N(7,$)),s(),R("link","/quiz/",o.id,""),s(),p("ngClass",_(8,J,o.styles.textColor,o.styles.textColor==="text-primary"?"hover:text-accent":"hover:text-warning")),s(),q(o.name))},dependencies:[F,P,u,d],encapsulation:2})};function Y(i,e){if(i&1&&(w(0),c(1,"app-ui-card-quiz",12),O()),i&2){let t=e.$implicit,o=e.index,L=k();s(),p("styles",L.getCardStyle(o))("name",t.name)("id",t.id)}}var G=class i{constructor(e){this.categoriesService=e}quizzesCatalog=[];subscription=new b;ngOnInit(){this.subscription=this.categoriesService.get().subscribe(e=>this.quizzesCatalog=e,e=>alert(e))}getCardStyle(e){let t=e+Math.floor(e/5),o=Object.values(y);return g[o[t%o.length]]}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(t){return new(t||i)(z(C))};static \u0275cmp=m({type:i,selectors:[["app-quizzes-catalog"]],standalone:!0,features:[M],decls:21,vars:1,consts:[[1,"absolute","inset-x-0","top","flex","flex-col","items-center","justify-between","min-h-fit","bg-primary","pb-8"],[1,"first:text-bright","flex","items-center","*:px-1","pb-10","flex-wrap","justify-center","text-center","w-3/4"],["type","H2"],["type","H3","highlightText","framed"],["link","/main",1,"max-2xl:absolute","left-3","max-lg:hidden"],["size","sm","type","ghost","iconState","prev"],[1,"lg:hidden","max-lg:fixed","bottom-0","w-full","flex","items-center","justify-between","p-5","rounded-t-lg","bg-primary","border-t-4","border-opacity-75","border-t-muted"],["link","/main"],["type","accent",1,""],[1,"flex","justify-center","flex-wrap","w-full"],[4,"ngFor","ngForOf"],["type","accent",1,"m-6"],[3,"styles","name","id"]],template:function(t,o){t&1&&(n(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),a(3,"Choose your"),r(),n(4,"app-ui-typography",3),a(5,"Quiz"),r(),n(6,"app-ui-typography",2),a(7,"."),r()(),n(8,"app-ui-link",4)(9,"app-ui-button",5),a(10,"Go to main page"),r()(),n(11,"div",6)(12,"app-ui-link",7)(13,"app-ui-button",5),a(14,"Go to main page"),r()(),n(15,"app-ui-button",8),a(16,"I'm lucky"),r()(),n(17,"div",9),E(18,Y,2,3,"ng-container",10),r(),n(19,"app-ui-button",11),a(20,"I'm lucky"),r()()),t&2&&(s(18),p("ngForOf",o.quizzesCatalog))},dependencies:[Q,H,u,d,f,T,j],encapsulation:2})};export{G as QuizzesCatalogComponent};
