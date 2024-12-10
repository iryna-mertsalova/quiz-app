import{b as C}from"./chunk-NA6WQYLY.js";import{a as ae,b as se}from"./chunk-PGV5YZNV.js";import"./chunk-WSW2UNB5.js";import{$ as o,Ba as U,Da as Z,Fa as K,Ga as Y,Ha as J,I as m,Ia as X,Ja as ee,Ka as te,L as B,La as ne,M as j,Ma as ie,Na as oe,Oa as u,Pa as _,Qa as re,R as g,V as r,W as w,Y as v,Z as p,_ as i,aa as l,ba as b,ca as S,da as W,e as x,ea as d,fa as I,ga as D,h as k,ha as s,ia as f,j as F,ja as N,k as z,ka as G,na as h,oa as y,p as R,ta as M,ua as H,va as L,wa as V}from"./chunk-65VRKMZN.js";var O=class a{text="";control;static \u0275fac=function(t){return new(t||a)};static \u0275cmp=m({type:a,selectors:[["app-ui-radio-button"]],inputs:{text:"text",control:"control"},decls:5,vars:7,consts:[[1,"radio"],["name","radio","type","radio",3,"id","value","formControl"],[1,"radio__label",3,"for"]],template:function(t,e){t&1&&(i(0,"span",0),l(1,"input",1),i(2,"label",2)(3,"app-ui-typography"),s(4),o()()()),t&2&&(r(),D("id","radio-",e.text,""),p("value",e.text)("formControl",e.control),r(),D("for","radio-",e.text,""),r(2),f(e.text))},dependencies:[Y,ne,J,ie,u],styles:['.radio[_ngcontent-%COMP%]{align-items:center;display:flex;margin:10px}.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover{cursor:pointer}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{opacity:0;position:absolute}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + .radio__label[_ngcontent-%COMP%]{display:flex}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + .radio__label[_ngcontent-%COMP%]:before{background:#fff;border:2px solid #DBE2EA;border-radius:100%;content:"";display:inline-block;height:1.4em;margin-right:10px;text-align:center;transition:all .25s ease;width:1.4em}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + .radio__label[_ngcontent-%COMP%]{color:#fff}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + .radio__label[_ngcontent-%COMP%]:before{background-color:#e23d69;border-color:#e23d69;box-shadow:inset 0 0 0 4px #fff}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:focus + .radio__label[_ngcontent-%COMP%]{color:#fff}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:focus + .radio__label[_ngcontent-%COMP%]:before{border-color:#e23d69;outline:none}']})};function ue(a,n){if(a&1&&(b(0),l(1,"app-ui-radio-button",2),S()),a&2){let t=n.$implicit,e=I();r(),p("text",t)("control",e.control)}}var q=class a{options=[];control;value=null;static \u0275fac=function(t){return new(t||a)};static \u0275cmp=m({type:a,selectors:[["app-ui-radio-group"]],inputs:{options:"options",control:"control"},decls:2,vars:1,consts:[[1,"radio-group"],[4,"ngFor","ngForOf"],[3,"text","control"]],template:function(t,e){t&1&&(i(0,"div",0),v(1,ue,2,2,"ng-container",1),o()),t&2&&(r(),p("ngForOf",e.options))},dependencies:[M,O],encapsulation:2})};function ge(a,n){if(a&1&&(b(0),l(1,"svg-icon",15),S()),a&2){let t=n.$implicit;r(),p("src",t)}}var Q=class a{item={question:"",type:!1,difficulty:"",category:"",correct_answer:"",incorrect_answers:[]};options=new Array(4);id=0;next=new g;prev=new g;getSelectedAnswer=new g;images=["avatars/Profile-1.svg","avatars/Profile-2.svg","avatars/Profile.svg"];formControl=new ee;size=C;get selectedAnswer(){return this.getSelectedAnswer.emit(this.formControl.value),this.formControl.value}handlePrev(){this.prev.emit(),this.formControl.reset()}handleNext(){this.next.emit(),this.formControl.reset()}getFormattedText(){let n=this.item.question.length<=20,t=this.item.question.indexOf(" ",this.item.question.indexOf(" ")+2),e=this.item.question.lastIndexOf(n?"?":" ");return{start:this.item.question.slice(0,t),middle:this.item.question.slice(t,e),end:this.item.question.slice(e)}}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=m({type:a,selectors:[["app-ui-question-item"]],inputs:{item:"item",options:"options",id:"id"},outputs:{next:"next",prev:"prev",getSelectedAnswer:"getSelectedAnswer"},decls:23,vars:11,consts:[[1,"bg-success","px-7","py-10","rounded-3xl","flex","flex-col","items-center","justify-between","lg:min-h-[550px]"],[1,"w-full","flex","items-start","justify-between"],[1,"flex","items-center"],["type","H5","highlightText","framed","highlightColor","bg-warning"],["type","P1",1,"text-bright","ml-2"],[1,"flex"],[4,"ngFor","ngForOf"],[1,"w-full","flex","text-bright","items-center","justify-start","flex-wrap","*:mr-2","py-6"],["type","H4",1,"mr-2"],["type","H4","highlightText","framed","highlightColor","bg-error"],["type","H4"],[3,"control","options"],[1,"flex","items-center","justify-between","w-full","pt-10"],["type","ghost","iconState","prev",3,"click","disabled"],["type","accent","iconState","next",3,"click","disabled"],["svgClass","lg:w-20 lg:h-20 max-lg:w-16 max-lg:h-16 object-cover",3,"src"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"div",1)(2,"span",2)(3,"app-ui-typography",3),s(4),o(),i(5,"app-ui-typography",4),s(6),o()(),i(7,"span",5),v(8,ge,2,1,"ng-container",6),o()(),i(9,"span",7)(10,"app-ui-typography",8),s(11),o(),i(12,"app-ui-typography",9),s(13),o(),i(14,"app-ui-typography",10),s(15),o()(),i(16,"form"),l(17,"app-ui-radio-group",11),o(),i(18,"div",12)(19,"app-ui-button",13),d("click",function(){return e.handlePrev()}),s(20,"Prev question"),o(),i(21,"app-ui-button",14),d("click",function(){return e.handleNext()}),s(22),o()()()),t&2&&(r(4),f(e.id),r(2),N("/",e.size,""),r(2),p("ngForOf",e.images),r(3),f(e.getFormattedText().start),r(2),f(e.getFormattedText().middle),r(2),f(e.getFormattedText().end),r(2),p("control",e.formControl)("options",e.options),r(2),p("disabled",e.id==1),r(2),p("disabled",e.selectedAnswer==null),r(),N(" ",e.id==e.size?"Finish":"Next question"," "))},dependencies:[M,K,te,X,_,u,q],encapsulation:2})};var T=class a{confirm=new g;onConfirm(){this.confirm.emit(!0)}onCancel(){this.confirm.emit(!1)}static \u0275fac=function(t){return new(t||a)};static \u0275cmp=m({type:a,selectors:[["app-ui-modal-window"]],outputs:{confirm:"confirm"},decls:16,vars:0,consts:[["aria-labelledby","modal-title","role","dialog","aria-modal","true",1,"relative","z-10"],["aria-hidden","true",1,"fixed","inset-0","bg-muted/75","transition-opacity"],[1,"fixed","inset-x-0","top-1/4","z-10","w-screen","overflow-y-auto"],[1,"flex","min-h-full","items-end","justify-center","p-4","text-center","sm:items-center","sm:p-0"],[1,"relative","transform","overflow-hidden","rounded-xl","border-accent","border-4","bg-bright","text-left","shadow-xl","transition-all","lg:max-w-lg","max-md:max-w-sm","p-10","flex","flex-col","items-center"],[1,"flex","flex-col","items-center","text-center","w-full","*:py-1.5"],["type","H6"],["type","P1"],[1,"flex","max-md:flex-col","items-center","*:p-0.5"],["type","accent",3,"click"],["type","ghost",1,"*:text-accent",3,"click"]],template:function(t,e){t&1&&(i(0,"div",0),l(1,"div",1),i(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"app-ui-typography",6),s(7,"Leave quiz"),o(),i(8,"app-ui-typography",7),s(9,"Are you sure you want to exit and cancel the quiz? Your answers will not be saved."),o(),l(10,"div"),o(),i(11,"div",8)(12,"app-ui-button",9),d("click",function(){return e.onCancel()}),s(13,"Back to quiz"),o(),i(14,"app-ui-button",10),d("click",function(){return e.onConfirm()}),s(15,"Go on main page"),o()()()()()())},dependencies:[_,u],encapsulation:2})};function he(a,n){if(a&1){let t=W();i(0,"app-ui-modal-window",12),d("confirm",function(c){B(t);let $=I();return j($.handleModalResponse(c))}),o()}}var me=class a{constructor(n,t,e){this.activeRoute=n;this.router=t;this.storeService=e}quiz="";questions$;isLoading$;currentIndex$=new x(0);currentQuestion$;answers=new Array(C);modalWindowState$=new x(!1);modalWindowChoice$=new x(!1);canDeactivate(){return this.modalWindowState$.next(!0),this.modalWindowState$.value&&this.modalWindowChoice$.value?k(!0):k(!1)}handleModalResponse(n){n?(this.modalWindowChoice$.next(!0),this.router.navigateByUrl("main")):this.modalWindowChoice$.next(!1),this.modalWindowState$.next(!1)}get options(){return this.currentQuestion$.pipe(R(1),F(n=>[...n.incorrect_answers,n.correct_answer].sort().reverse()))}get id(){return this.currentIndex$.value+1}ngOnInit(){this.quiz=this.activeRoute.snapshot.params.id,this.questions$=this.storeService.getQuestions(),this.isLoading$=this.storeService.getLoadingQuestions(),this.storeService.loadQuestions(Number.parseInt(this.quiz)),this.currentQuestion$=z([this.questions$,this.currentIndex$]).pipe(F(([n,t])=>n?.[t]||{question:"",type:!1,difficulty:"",category:"",correct_answer:"",incorrect_answers:[]}))}nextQuestion(){let n=this.currentIndex$.value;n<C-1&&this.currentIndex$.next(n+1)}prevQuestion(){let n=this.currentIndex$.value;n>0&&this.currentIndex$.next(n-1)}setSelectedAnswer(n){this.answers[this.currentIndex$.value]=n}static \u0275fac=function(t){return new(t||a)(w(U),w(Z),w(ae))};static \u0275cmp=m({type:a,selectors:[["app-quiz"]],inputs:{quiz:"quiz"},standalone:!0,features:[G],decls:23,vars:13,consts:[[1,"absolute","inset-x-0","top","flex","flex-col","items-center","justify-between","min-h-fit","w-full","bg-primary","pb-8"],[1,"first:text-bright","flex","items-center","*:p-1.5","pb-3","flex-wrap","justify-center","text-center","w-3/4"],["type","H2"],["type","H3"],["type","H2","highlightText","ellipse"],["type","P1",1,"text-bright","lg:w-3/12","max-md:w-9/12","pb-5","text-center","flex","justify-center"],["link","/quizzes-catalog",1,"mb-4","lg:hidden"],["size","md","type","accent","iconState","prev"],[1,"lg:w-1/2","md:w-2/3","max-md:w-10/12",3,"next","prev","getSelectedAnswer","id","item","options"],["link","/quizzes-catalog",1,"lg:absolute","max-lg:hidden","left-3"],[3,"show"],[3,"confirm",4,"ngIf"],[3,"confirm"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),s(3,"Emoji Bands "),o(),i(4,"app-ui-typography",3),s(5,"Quiz"),o(),i(6,"app-ui-typography",4),s(7,"."),o()(),i(8,"app-ui-typography",5),s(9,"Can you decipher these emoji clues to answer these music-related questions?"),o(),i(10,"app-ui-link",6)(11,"app-ui-button",7),s(12,"Go to catalog"),o()(),i(13,"app-ui-question-item",8),h(14,"async"),h(15,"async"),d("next",function(){return e.nextQuestion()})("prev",function(){return e.prevQuestion()})("getSelectedAnswer",function($){return e.setSelectedAnswer($)}),o(),i(16,"app-ui-link",9)(17,"app-ui-button",7),s(18,"Go to catalog"),o()()(),l(19,"app-ui-spinner",10),h(20,"async"),v(21,he,1,0,"app-ui-modal-window",11),h(22,"async")),t&2&&(r(13),p("id",e.id)("item",y(14,5,e.currentQuestion$))("options",y(15,7,e.options)),r(6),p("show",!!y(20,9,e.isLoading$)),r(2),p("ngIf",y(22,11,e.modalWindowState$)))},dependencies:[oe,_,u,re,se,Q,T,V,H,L],encapsulation:2})};export{me as QuestionComponent};