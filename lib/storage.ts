export type Progress = { minutes:number; streak:number; corrections:number; sessions:number; lastStudy?:string };
const KEY='english-ai-tutor-progress-v1';
export function loadProgress():Progress{if(typeof window==='undefined')return{minutes:0,streak:0,corrections:0,sessions:0};try{return JSON.parse(localStorage.getItem(KEY)||'')||{minutes:0,streak:0,corrections:0,sessions:0}}catch{return{minutes:0,streak:0,corrections:0,sessions:0}}}
export function saveProgress(p:Progress){localStorage.setItem(KEY,JSON.stringify(p));}
export function saveMistake(item:{heard:string;corrected:string;why:string}){const k='english-ai-tutor-mistakes-v1';const a=JSON.parse(localStorage.getItem(k)||'[]');a.unshift({...item,at:new Date().toISOString()});localStorage.setItem(k,JSON.stringify(a.slice(0,100)));}
export function loadMistakes(){if(typeof window==='undefined')return[];try{return JSON.parse(localStorage.getItem('english-ai-tutor-mistakes-v1')||'[]')}catch{return[]}}
