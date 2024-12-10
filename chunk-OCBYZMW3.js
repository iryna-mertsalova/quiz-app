import{b as _}from"./chunk-NA6WQYLY.js";import{a as pe,b as le}from"./chunk-PGV5YZNV.js";import"./chunk-WSW2UNB5.js";import{$ as o,Ba as K,C as j,Da as Y,Fa as J,Ga as X,Ha as ee,I as m,Ia as te,Ja as ie,Ka as ne,L as R,La as oe,M as G,Ma as re,Na as ae,Oa as f,Pa as w,Qa as se,R as h,V as a,W as y,Y as v,Z as p,_ as n,aa as l,ba as I,ca as O,da as L,e as g,ea as u,fa as b,ga as F,h as z,ha as s,ia as d,j as D,ja as S,k as A,ka as H,na as C,oa as x,p as B,ta as k,ua as V,va as U,wa as Z}from"./chunk-65VRKMZN.js";var P=class r{item={page:"",text:"",title:"",link:""};getData(t){switch(t){case"Go to catalog":case"Quizzes catalog":case`Go to catalog

`:this.item.page="quizzes catalog",this.item.link="quizzes-catalog";break;case"":this.item.page="main page",this.item.link="main";break;default:this.item.page=t.toLowerCase(),this.item.link=t.toLowerCase();break}return t.toLowerCase().includes("finish")?this.item={link:"statistics",page:"statistics",title:"Finish quiz",text:"To get your quiz result, please, confirm this action and go to the page with the conclusion."}:(this.item.title="Leave quiz",this.item.text="Are you sure you want to exit and cancel the quiz? Your answers will not be saved."),this.item}static \u0275fac=function(i){return new(i||r)};static \u0275prov=j({token:r,factory:r.\u0275fac,providedIn:"root"})};var q=class r{text="";control;static \u0275fac=function(i){return new(i||r)};static \u0275cmp=m({type:r,selectors:[["app-ui-radio-button"]],inputs:{text:"text",control:"control"},decls:5,vars:7,consts:[[1,"radio"],["name","radio","type","radio",3,"id","value","formControl"],[1,"radio__label",3,"for"]],template:function(i,e){i&1&&(n(0,"span",0),l(1,"input",1),n(2,"label",2)(3,"app-ui-typography"),s(4),o()()()),i&2&&(a(),F("id","radio-",e.text,""),p("value",e.text)("formControl",e.control),a(),F("for","radio-",e.text,""),a(2),d(e.text))},dependencies:[X,oe,ee,re,f],styles:['.radio[_ngcontent-%COMP%]{align-items:center;display:flex;margin:10px}.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover{cursor:pointer}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{opacity:0;position:absolute}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + .radio__label[_ngcontent-%COMP%]{display:flex}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + .radio__label[_ngcontent-%COMP%]:before{background:#fff;border:2px solid #DBE2EA;border-radius:100%;content:"";display:inline-block;height:1.4em;margin-right:10px;text-align:center;transition:all .25s ease;width:1.4em}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + .radio__label[_ngcontent-%COMP%]{color:#fff}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + .radio__label[_ngcontent-%COMP%]:before{background-color:#e23d69;border-color:#e23d69;box-shadow:inset 0 0 0 4px #fff}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:focus + .radio__label[_ngcontent-%COMP%]{color:#fff}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:focus + .radio__label[_ngcontent-%COMP%]:before{border-color:#e23d69;outline:none}']})};function he(r,t){if(r&1&&(I(0),l(1,"app-ui-radio-button",2),O()),r&2){let i=t.$implicit,e=b();a(),p("text",i)("control",e.control)}}var Q=class r{options=[];control;value=null;static \u0275fac=function(i){return new(i||r)};static \u0275cmp=m({type:r,selectors:[["app-ui-radio-group"]],inputs:{options:"options",control:"control"},decls:2,vars:1,consts:[[1,"radio-group"],[4,"ngFor","ngForOf"],[3,"text","control"]],template:function(i,e){i&1&&(n(0,"div",0),v(1,he,2,2,"ng-container",1),o()),i&2&&(a(),p("ngForOf",e.options))},dependencies:[k,q],encapsulation:2})};function Ce(r,t){if(r&1&&(I(0),l(1,"svg-icon",15),O()),r&2){let i=t.$implicit;a(),p("src",i)}}var $=class r{item={question:"",type:!1,difficulty:"",category:"",correct_answer:"",incorrect_answers:[]};options=new Array(4);id=0;next=new h;prev=new h;getSelectedAnswer=new h;images=["avatars/Profile-1.svg","avatars/Profile-2.svg","avatars/Profile.svg"];formControl=new ie;size=_;get selectedAnswer(){return this.getSelectedAnswer.emit(this.formControl.value),this.formControl.value}handlePrev(){this.prev.emit(),this.formControl.reset()}handleNext(){this.next.emit(),this.formControl.reset()}getFormattedText(){let t=this.item.question.length<=20,i=this.item.question.indexOf(" ",this.item.question.indexOf(" ")+2),e=this.item.question.lastIndexOf(t?"?":" ");return{start:this.item.question.slice(0,i),middle:this.item.question.slice(i,e),end:this.item.question.slice(e)}}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=m({type:r,selectors:[["app-ui-question-item"]],inputs:{item:"item",options:"options",id:"id"},outputs:{next:"next",prev:"prev",getSelectedAnswer:"getSelectedAnswer"},decls:23,vars:11,consts:[[1,"bg-success","px-7","py-10","rounded-3xl","flex","flex-col","items-center","justify-between","lg:min-h-[550px]"],[1,"w-full","flex","items-start","justify-between"],[1,"flex","items-center"],["type","H5","highlightText","framed","highlightColor","bg-warning"],["type","P1",1,"text-bright","ml-2"],[1,"flex"],[4,"ngFor","ngForOf"],[1,"w-full","flex","text-bright","items-center","justify-start","flex-wrap","*:mr-2","py-6"],["type","H4",1,"mr-2"],["type","H4","highlightText","framed","highlightColor","bg-error"],["type","H4"],[3,"control","options"],[1,"flex","items-center","justify-between","w-full","pt-10"],["type","ghost","iconState","prev",3,"click","disabled"],["type","accent","iconState","next",3,"click","disabled"],["svgClass","lg:w-20 lg:h-20 max-lg:w-16 max-lg:h-16 object-cover",3,"src"]],template:function(i,e){i&1&&(n(0,"div",0)(1,"div",1)(2,"span",2)(3,"app-ui-typography",3),s(4),o(),n(5,"app-ui-typography",4),s(6),o()(),n(7,"span",5),v(8,Ce,2,1,"ng-container",6),o()(),n(9,"span",7)(10,"app-ui-typography",8),s(11),o(),n(12,"app-ui-typography",9),s(13),o(),n(14,"app-ui-typography",10),s(15),o()(),n(16,"form"),l(17,"app-ui-radio-group",11),o(),n(18,"div",12)(19,"app-ui-button",13),u("click",function(){return e.handlePrev()}),s(20,"Prev question"),o(),n(21,"app-ui-button",14),u("click",function(){return e.handleNext()}),s(22),o()()()),i&2&&(a(4),d(e.id),a(2),S("/",e.size,""),a(2),p("ngForOf",e.images),a(3),d(e.getFormattedText().start),a(2),d(e.getFormattedText().middle),a(2),d(e.getFormattedText().end),a(2),p("control",e.formControl)("options",e.options),a(2),p("disabled",e.id==1),a(2),p("disabled",e.selectedAnswer==null),a(),S(" ",e.id==e.size?"Finish":"Next question"," "))},dependencies:[k,J,ne,te,w,f,Q],encapsulation:2})};var T=class r{confirm=new h;data={page:"",link:"",text:"",title:""};onConfirm(){this.confirm.emit(!0)}onCancel(){this.confirm.emit(!1)}static \u0275fac=function(i){return new(i||r)};static \u0275cmp=m({type:r,selectors:[["app-ui-modal-window"]],inputs:{data:"data"},outputs:{confirm:"confirm"},decls:16,vars:3,consts:[["aria-labelledby","modal-title","role","dialog","aria-modal","true",1,"relative","z-10"],["aria-hidden","true",1,"fixed","inset-0","bg-muted/75","transition-opacity"],[1,"fixed","inset-x-0","top-1/4","z-10","w-screen","overflow-y-auto"],[1,"flex","min-h-full","items-end","justify-center","p-4","text-center","sm:items-center","sm:p-0"],[1,"relative","transform","overflow-hidden","rounded-xl","border-accent","border-4","bg-bright","text-left","shadow-xl","transition-all","lg:max-w-lg","max-md:max-w-sm","p-10","flex","flex-col","items-center"],[1,"flex","flex-col","items-center","text-center","w-full","*:py-1.5"],["type","H6"],["type","P1"],[1,"flex","max-md:flex-col","items-center","*:p-0.5"],["type","accent",3,"click"],["type","ghost",1,"*:text-accent",3,"click"]],template:function(i,e){i&1&&(n(0,"div",0),l(1,"div",1),n(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"app-ui-typography",6),s(7),o(),n(8,"app-ui-typography",7),s(9),o(),l(10,"div"),o(),n(11,"div",8)(12,"app-ui-button",9),u("click",function(){return e.onCancel()}),s(13,"Back to quiz"),o(),n(14,"app-ui-button",10),u("click",function(){return e.onConfirm()}),s(15),o()()()()()()),i&2&&(a(7),d(e.data.title),a(2),d(e.data.text),a(6),S("Go to ",e.data.page,""))},dependencies:[w,f],encapsulation:2})};function _e(r,t){if(r&1){let i=L();n(0,"app-ui-modal-window",12),C(1,"async"),u("confirm",function(c){R(i);let W=b();return G(W.handleModalResponse(c))}),o()}if(r&2){let i=b();p("data",x(1,1,i.modalWindowData$))}}var ce=class r{constructor(t,i,e,c){this.activeRoute=t;this.router=i;this.storeService=e;this.modalService=c}quiz="";questions$;isLoading$;currentIndex$=new g(0);currentQuestion$;answers=new Array(_);modalWindowState$=new g(!1);modalWindowChoice$=new g(!1);modalWindowData$=new g({page:"",title:"",text:"",link:""});canDeactivate(){this.currentIndex$.value==_&&(this.modalWindowData$=new g(this.modalService.getData("Finish")));let t=event?.target;return this.modalWindowData$=new g(this.modalService.getData(t.textContent)),this.modalWindowState$.next(!0),this.modalWindowState$.value&&this.modalWindowChoice$.value?z(!0):z(!1)}handleModalResponse(t){t?(this.modalWindowChoice$.next(!0),this.router.navigateByUrl(this.modalWindowData$.value.link)):this.modalWindowChoice$.next(!1),this.modalWindowState$.next(!1)}get options(){return this.currentQuestion$.pipe(B(1),D(t=>[...t.incorrect_answers,t.correct_answer].sort().reverse()))}get id(){return this.currentIndex$.value+1}ngOnInit(){this.quiz=this.activeRoute.snapshot.params.id,this.questions$=this.storeService.getQuestions(),this.isLoading$=this.storeService.getLoadingQuestions(),this.storeService.loadQuestions(Number.parseInt(this.quiz)),this.currentQuestion$=A([this.questions$,this.currentIndex$]).pipe(D(([t,i])=>t?.[i]||{question:"",type:!1,difficulty:"",category:"",correct_answer:"",incorrect_answers:[]}))}nextQuestion(){let t=this.currentIndex$.value;t<_-1?this.currentIndex$.next(t+1):this.router.navigateByUrl(this.modalWindowData$.value.link)}prevQuestion(){let t=this.currentIndex$.value;t>0&&this.currentIndex$.next(t-1)}setSelectedAnswer(t){this.answers[this.currentIndex$.value]=t}static \u0275fac=function(i){return new(i||r)(y(K),y(Y),y(pe),y(P))};static \u0275cmp=m({type:r,selectors:[["app-quiz"]],inputs:{quiz:"quiz"},standalone:!0,features:[H],decls:23,vars:13,consts:[[1,"absolute","inset-x-0","top","flex","flex-col","items-center","justify-between","min-h-fit","w-full","bg-primary","pb-8"],[1,"first:text-bright","flex","items-center","*:p-1.5","pb-3","flex-wrap","justify-center","text-center","w-3/4"],["type","H2"],["type","H3"],["type","H2","highlightText","ellipse"],["type","P1",1,"text-bright","lg:w-3/12","max-md:w-9/12","pb-5","text-center","flex","justify-center"],["link","/quizzes-catalog",1,"mb-4","lg:hidden"],["size","md","type","accent","iconState","prev"],[1,"lg:w-1/2","md:w-2/3","max-md:w-10/12",3,"next","prev","getSelectedAnswer","id","item","options"],["link","/quizzes-catalog",1,"lg:absolute","max-lg:hidden","left-3"],[3,"show"],[3,"data","confirm",4,"ngIf"],[3,"confirm","data"]],template:function(i,e){i&1&&(n(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),s(3,"Emoji Bands "),o(),n(4,"app-ui-typography",3),s(5,"Quiz"),o(),n(6,"app-ui-typography",4),s(7,"."),o()(),n(8,"app-ui-typography",5),s(9,"Can you decipher these emoji clues to answer these music-related questions?"),o(),n(10,"app-ui-link",6)(11,"app-ui-button",7),s(12,"Go to catalog"),o()(),n(13,"app-ui-question-item",8),C(14,"async"),C(15,"async"),u("next",function(){return e.nextQuestion()})("prev",function(){return e.prevQuestion()})("getSelectedAnswer",function(W){return e.setSelectedAnswer(W)}),o(),n(16,"app-ui-link",9)(17,"app-ui-button",7),s(18,"Go to catalog"),o()()(),l(19,"app-ui-spinner",10),C(20,"async"),v(21,_e,2,3,"app-ui-modal-window",11),C(22,"async")),i&2&&(a(13),p("id",e.id)("item",x(14,5,e.currentQuestion$))("options",x(15,7,e.options)),a(6),p("show",!!x(20,9,e.isLoading$)),a(2),p("ngIf",x(22,11,e.modalWindowState$)))},dependencies:[ae,w,f,se,le,$,T,Z,V,U],encapsulation:2})};export{ce as QuestionComponent};