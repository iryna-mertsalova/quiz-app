import{a as _,b as L}from"./chunk-BY32QOU4.js";import"./chunk-34FWA6FB.js";import{$ as m,G as c,Ia as F,Sa as M,U as p,Ua as d,V as v,Va as Q,Wa as g,X as x,Y as s,Z as o,_ as i,aa as S,ba as h,ea as z,fa as I,ja as r,ka as E,ma as k,na as w,oa as q,pa as y,qa as f,ua as N,va as O,xa as R,ya as T}from"./chunk-2QGQKPY5.js";import"./chunk-AIZVJUQQ.js";var b=(l=>(l.SUCCESS="success",l.ERROR="error",l.ACCENT="accent",l.BRIGHT="bright",l.WARNING="warning",l))(b||{}),u={accent:{icon:"avatars/Profile-1.svg",bgColor:"bg-accent",textColor:"text-bright"},bright:{icon:"avatars/Profile.svg",bgColor:"bg-bright",textColor:"text-primary"},error:{icon:"avatars/Profile-2.svg",bgColor:"bg-error",textColor:"text-bright"},success:{icon:"avatars/Profile-3.svg",bgColor:"bg-success",textColor:"text-bright"},warning:{icon:"avatars/Profile-2.svg",bgColor:"bg-warning",textColor:"text-primary"}};var H=()=>({"width.px":48,"height.px":48}),U=(a,n)=>[a,n],C=class a{name="";id=0;styles=u.accent;static \u0275fac=function(e){return new(e||a)};static \u0275cmp=c({type:a,selectors:[["app-ui-card-quiz"]],inputs:{name:"name",id:"id",styles:"styles"},decls:8,vars:11,consts:[[1,"rounded-2xl","p-5","mx-2","my-3","w-64","min-h-60",3,"ngClass"],[1,"flex","items-center","justify-between"],["type","Label"],[1,"px-1",3,"src","svgStyle"],[3,"link"],["type","H6",3,"ngClass"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),r(3,"10 questions"),i(),m(4,"svg-icon",3),i(),o(5,"app-ui-link",4)(6,"app-ui-typography",5),r(7),i()()()),e&2&&(s("ngClass",t.styles.bgColor),p(4),s("src",t.styles.icon)("svgStyle",w(7,H)),p(),I("link","/quiz/",t.id,""),p(),s("ngClass",q(8,U,t.styles.textColor,t.styles.textColor==="text-primary"?"hover:text-accent":"hover:text-warning")),p(),E(t.name))},dependencies:[N,F,d,g],encapsulation:2})};function K(a,n){if(a&1&&(S(0),m(1,"app-ui-card-quiz",15),h()),a&2){let e=n.$implicit,t=n.index,j=z();p(),s("styles",j.getCardStyle(t))("name",e.name)("id",e.id)}}var P=class a{constructor(n){this.storeService=n}categories$;isLoading$;ngOnInit(){this.categories$=this.storeService.getCategories(),this.isLoading$=this.storeService.getLoadingCategories(),this.storeService.loadCategories()}getCardStyle(n){let e=n+Math.floor(n/5),t=Object.values(b);return u[t[e%t.length]]}static \u0275fac=function(e){return new(e||a)(v(_))};static \u0275cmp=c({type:a,selectors:[["app-quizzes-catalog"]],standalone:!0,features:[k],decls:26,vars:6,consts:[[1,"absolute","inset-x-0","top","flex","flex-col","items-center","justify-between","min-h-fit","bg-primary","pb-8"],[1,"first:text-bright","flex","items-center","*:p-1.5","pb-10","flex-wrap","justify-center","text-center","w-3/4"],["type","H2"],["type","H3","highlightText","framed"],["link","/main",1,"lg:absolute","left-3","max-lg:hidden"],["size","sm","type","ghost","iconState","prev"],[1,"lg:hidden","max-lg:fixed","bottom-0","w-full","flex","items-center","justify-between","p-5","rounded-t-lg","bg-primary","border-t-4","border-opacity-75","border-t-muted"],["link","/main"],["link","/quiz/Lucky quiz"],["type","accent"],[1,"flex","justify-center","flex-wrap","w-full","max-lg:mb-16"],[4,"ngFor","ngForOf"],["link","/quiz/0"],["type","accent",1,"m-6","max-lg:hidden"],[3,"show"],[3,"styles","name","id"]],template:function(e,t){e&1&&(o(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),r(3,"Choose your"),i(),o(4,"app-ui-typography",3),r(5,"Quiz"),i(),o(6,"app-ui-typography",2),r(7,"."),i()(),o(8,"app-ui-link",4)(9,"app-ui-button",5),r(10,"Go to main page"),i()(),o(11,"div",6)(12,"app-ui-link",7)(13,"app-ui-button",5),r(14,"Go to main page"),i()(),o(15,"app-ui-link",8)(16,"app-ui-button",9),r(17,"I'm lucky"),i()()(),o(18,"div",10),x(19,K,2,3,"ng-container",11),y(20,"async"),i(),o(21,"app-ui-link",12)(22,"app-ui-button",13),r(23,"I'm lucky"),i()()(),m(24,"app-ui-spinner",14),y(25,"async")),e&2&&(p(19),s("ngForOf",f(20,2,t.categories$)),p(5),s("show",!!f(25,4,t.isLoading$)))},dependencies:[M,Q,d,g,C,L,T,O,R],encapsulation:2})};export{P as QuizzesCatalogComponent};
