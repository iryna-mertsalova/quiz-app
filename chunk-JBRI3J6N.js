import{A as n,C as p}from"./chunk-MW7PFOO7.js";import{a as m,b as l}from"./chunk-AIZVJUQQ.js";var b={CATEGORY_URL:"https://opentdb.com/api_category.php",QUESTION_URL:"https://opentdb.com/api.php?amount=10&"},c=10,r={CHART:"chart",QUIZ_RESULT:"quiz-result"},g=60;function i(e){return new DOMParser().parseFromString(e,"text/html").documentElement.textContent||e}function Q(e){return l(m({},e),{question:i(e.question),category:i(e.category),correct_answer:i(e.correct_answer),incorrect_answers:e.incorrect_answers.map(i)})}var u={quizzesCount:67,questionsCount:{total:670,right:600,wrong:70},time:675},x=["Quizzes were played","Questions have been answered","Time of answering quizzes"];var a=class e{getFromStorage(o,t){try{let s=localStorage.getItem(o);return s?JSON.parse(s):t}catch{return t}}saveToStorage(o,t){localStorage.setItem(o,JSON.stringify(t))}static \u0275fac=function(t){return new(t||e)};static \u0275prov=n({token:e,factory:e.\u0275fac,providedIn:"root"})};var S=class e{constructor(o){this.storage=o}getQuizResult(){return this.storage.getFromStorage(r.QUIZ_RESULT,null)}getStatisticData(){return this.storage.getFromStorage(r.CHART,u)}initDefaultStatistic(){localStorage.getItem(r.CHART)||this.storage.saveToStorage(r.CHART,u)}initScore(o,t){let s=0;return o.subscribe(d=>{d.forEach((T,f)=>{i(T.correct_answer)===t[f]&&s++})}).unsubscribe(),s}initResult(o){this.storage.saveToStorage(r.QUIZ_RESULT,o);let t=this.getStatisticData();t.quizzesCount++,t.questionsCount.total+=c,t.questionsCount.right=t.questionsCount.right+o.score,t.questionsCount.wrong=t.questionsCount.wrong+(c-o.score),t.time+=+(o.seconds/g).toFixed(1),this.storage.saveToStorage(r.CHART,t)}static \u0275fac=function(t){return new(t||e)(p(a))};static \u0275prov=n({token:e,factory:e.\u0275fac,providedIn:"root"})};export{b as a,c as b,Q as c,x as d,S as e};
