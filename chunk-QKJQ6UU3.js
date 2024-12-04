import{$ as n,B as E,Ca as R,Ga as D,Ha as A,I as d,Ia as H,Ja as G,Ka as j,L as k,La as B,M,Ma as W,Na as V,Oa as U,Pa as J,Qa as c,R as g,Ra as x,Sa as L,V as o,W as P,Y as f,Z as p,_ as i,aa as h,ba as C,ca as _,da as T,ea as m,fa as O,ga as I,ha as a,ia as l,ja as F,ka as Q,la as N,ua as y,xa as z}from"./chunk-PYBQFT6S.js";var $=[{id:1,question:"What is the capital of France?",answers:["Berlin","Madrid","Paris","Rome"]},{id:2,question:"Which language is primarily spoken in Brazil?",answers:["Spanish","Portuguese","English","French"]},{id:3,question:"What is the largest planet in our solar system?",answers:["Earth","Mars","Jupiter","Saturn"]},{id:4,question:"What is the chemical symbol for water?",answers:["O2","H2O","CO2","H2"]},{id:5,question:"Which element has the atomic number 1?",answers:["Helium","Oxygen","Hydrogen","Carbon"]},{id:6,question:"Who wrote `Hamlet`?",answers:["Charles Dickens","William Shakespeare","Jane Austen","Mark Twain"]},{id:7,question:"What is the speed of light?",answers:["300,000 km/s","150,000 km/s","500,000 km/s","1,000,000 km/s"]},{id:8,question:"Which country is known as the Land of the Rising Sun?",answers:["China","Japan","South Korea","Thailand"]},{id:9,question:"What is the boiling point of water at sea level?",answers:["100\xB0C","90\xB0C","110\xB0C","120\xB0C"]},{id:10,question:"In which year did the Titanic sink?",answers:["1912","1905","1923","1898"]}];var v=class s{text="";isChecked=!1;onChange=new g;handleChange(){this.isChecked=!0,this.onChange.emit(this.text)}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=d({type:s,selectors:[["app-ui-radio-button"]],inputs:{text:"text",isChecked:"isChecked"},outputs:{onChange:"onChange"},decls:5,vars:5,consts:[[1,"radio",3,"click"],["name","radio","type","radio",3,"id"],[1,"radio__label",3,"for"]],template:function(t,e){t&1&&(i(0,"span",0),m("click",function(){return e.handleChange()}),h(1,"input",1),i(2,"label",2)(3,"app-ui-typography"),a(4),n()()()),t&2&&(o(),I("id","radio-",e.text,""),o(),I("for","radio-",e.text,""),o(2),l(e.text))},dependencies:[c],styles:['.radio[_ngcontent-%COMP%]{align-items:center;display:flex;margin:10px}.radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:hover{cursor:pointer}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{opacity:0;position:absolute}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + .radio__label[_ngcontent-%COMP%]{display:flex}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] + .radio__label[_ngcontent-%COMP%]:before{background:#fff;border:2px solid #DBE2EA;border-radius:100%;content:"";display:inline-block;height:1.4em;margin-right:10px;text-align:center;transition:all .25s ease;width:1.4em}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + .radio__label[_ngcontent-%COMP%]{color:#fff}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + .radio__label[_ngcontent-%COMP%]:before{background-color:#e23d69;border-color:#e23d69;box-shadow:inset 0 0 0 4px #fff}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:focus + .radio__label[_ngcontent-%COMP%]{color:#fff}.radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:focus + .radio__label[_ngcontent-%COMP%]:before{border-color:#e23d69;outline:none}']})};function te(s,r){if(s&1){let t=T();C(0),i(1,"app-ui-radio-button",2),m("change",function(){let u=k(t).$implicit,X=O();return M(X.selectOption(u))}),n(),_()}if(s&2){let t=r.$implicit,e=O();o(),p("text",t)("isChecked",e.value===t)}}var b=class s{options=[];value=null;onChange=()=>{};onTouched=()=>{};selectOption(r){this.writeValue(r),this.onChange(r),this.onTouched()}writeValue(r){this.value=r}registerOnChange(r){this.onChange=r}registerOnTouched(r){this.onTouched=r}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=d({type:s,selectors:[["app-ui-radio-group"]],inputs:{options:"options"},features:[Q([{provide:A,useExisting:E(()=>s),multi:!0}])],decls:2,vars:1,consts:[[1,"radio-group"],[4,"ngFor","ngForOf"],[3,"change","text","isChecked"]],template:function(t,e){t&1&&(i(0,"div",0),f(1,te,2,2,"ng-container",1),n()),t&2&&(o(),p("ngForOf",e.options))},dependencies:[y,v],encapsulation:2})};function oe(s,r){if(s&1&&(C(0),h(1,"svg-icon",20),_()),s&2){let t=r.$implicit;o(),p("src",t)}}var w=class s{item={id:0,question:"",answers:[]};next=new g;prev=new g;images=["avatars/Profile-1.svg","avatars/Profile-2.svg","avatars/Profile.svg"];form=new j({selectedOption:new B(null)});get selectedAnswer(){return this.form.get("selectedOption")?.value}handlePrev(){this.prev.emit(),this.form.reset()}handleNext(){this.next.emit(),this.form.reset()}getFormattedText(){let r=this.item.question.length<=20,t=this.item.question.indexOf(" ",this.item.question.indexOf(" ")+2),e=this.item.question.lastIndexOf(r?"?":" ");return{start:this.item.question.slice(0,t),middle:this.item.question.slice(t,e),end:this.item.question.slice(e)}}static \u0275fac=function(t){return new(t||s)};static \u0275cmp=d({type:s,selectors:[["app-ui-question-item"]],inputs:{item:"item"},outputs:{next:"next",prev:"prev"},decls:30,vars:13,consts:[[1,"bg-success","px-7","py-10","rounded-3xl","flex","flex-col","items-center","justify-between","lg:min-h-[550px]"],[1,"w-full","flex","items-start","justify-between"],[1,"flex","items-center"],["type","H5","highlightText","framed","highlightColor","bg-warning"],["type","P1",1,"text-bright","ml-2"],[1,"flex"],[4,"ngFor","ngForOf"],[1,"w-full","lg:flex","max-lg:hidden","text-bright","items-center","justify-start","flex-wrap","*:mb-2","*:mr-1","py-6"],["type","H4",1,"mr-2"],["type","H4","highlightText","framed","highlightColor","bg-error"],["type","H4"],[1,"lg:hidden","max-lg:flex","text-bright","items-center","justify-center","flex-wrap","py-6"],["type","H5",1,"mr-2"],["type","H5","highlightText","framed","highlightColor","bg-error"],["type","H5",1,"ml-2"],[3,"formGroup"],["formControlName","selectedOption",3,"options"],[1,"flex","items-center","justify-between","w-full","pt-10"],["type","ghost","iconState","prev",3,"click","disabled"],["type","accent","iconState","next",3,"click","disabled"],["svgClass","lg:w-20 lg:h-20 max-lg:w-16 max-lg:h-16 object-cover",3,"src"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"div",1)(2,"span",2)(3,"app-ui-typography",3),a(4),n(),i(5,"app-ui-typography",4),a(6,"/10"),n()(),i(7,"span",5),f(8,oe,2,1,"ng-container",6),n()(),i(9,"span",7)(10,"app-ui-typography",8),a(11),n(),i(12,"app-ui-typography",9),a(13),n(),i(14,"app-ui-typography",10),a(15),n()(),i(16,"span",11)(17,"app-ui-typography",12),a(18),n(),i(19,"app-ui-typography",13),a(20),n(),i(21,"app-ui-typography",14),a(22),n()(),i(23,"form",15),h(24,"app-ui-radio-group",16),n(),i(25,"div",17)(26,"app-ui-button",18),m("click",function(){return e.handlePrev()}),a(27,"Prev question"),n(),i(28,"app-ui-button",19),m("click",function(){return e.handleNext()}),a(29),n()()()),t&2&&(o(4),l(e.item.id),o(4),p("ngForOf",e.images),o(3),l(e.getFormattedText().start),o(2),l(e.getFormattedText().middle),o(2),l(e.getFormattedText().end),o(3),l(e.getFormattedText().start),o(2),l(e.getFormattedText().middle),o(2),l(e.getFormattedText().end),o(),p("formGroup",e.form),o(),p("options",e.item.answers),o(2),p("disabled",e.item.id==1),o(2),p("disabled",e.selectedAnswer==null),o(),F(" ",e.item.id==10?"Finish":"Next question"," "))},dependencies:[y,D,W,H,G,V,U,x,c,b],encapsulation:2})};var Z=class s{constructor(r){this.route=r}quiz="";quiz_data=$;currentIndex=0;nextQuestion(){this.currentIndex<this.quiz_data.length-1&&this.currentIndex++}prevQuestion(){this.currentIndex>0&&this.currentIndex--}ngOnInit(){this.quiz=this.route.snapshot.params.name}static \u0275fac=function(t){return new(t||s)(P(R))};static \u0275cmp=d({type:s,selectors:[["app-quiz"]],inputs:{quiz:"quiz"},standalone:!0,features:[N],decls:17,vars:2,consts:[[1,"absolute","inset-x-0","top","flex","flex-col","items-center","justify-between","min-h-fit","w-full","bg-primary","pb-8"],[1,"first:text-bright","flex","items-center","*:px-1","pb-3","flex-wrap","justify-center","text-center","w-3/4"],["type","H2"],["type","H3"],["type","H2","highlightText","ellipse"],["type","P1",1,"text-bright","lg:w-3/12","max-md:w-9/12","pb-5","text-center","flex","justify-center"],["link","/quizzes-catalog",1,"mb-4","lg:hidden"],["size","md","type","accent","iconState","prev"],[1,"lg:w-1/2","md:w-2/3","max-md:w-10/12",3,"next","prev","id","item"],["link","/main",1,"lg:absolute","max-lg:hidden","left-3"]],template:function(t,e){t&1&&(i(0,"div",0)(1,"div",1)(2,"app-ui-typography",2),a(3,"Emoji Bands "),n(),i(4,"app-ui-typography",3),a(5,"Quiz"),n(),i(6,"app-ui-typography",4),a(7,"."),n()(),i(8,"app-ui-typography",5),a(9,"Can you decipher these emoji clues to answer these music-related questions?"),n(),i(10,"app-ui-link",6)(11,"app-ui-button",7),a(12,"Go to catalog"),n()(),i(13,"app-ui-question-item",8),m("next",function(){return e.nextQuestion()})("prev",function(){return e.prevQuestion()}),n(),i(14,"app-ui-link",9)(15,"app-ui-button",7),a(16,"Go to catalog"),n()()()),t&2&&(o(13),p("id",e.quiz_data[e.currentIndex].id)("item",e.quiz_data[e.currentIndex]))},dependencies:[J,x,c,L,w,z],encapsulation:2})};export{Z as QuizComponent};
