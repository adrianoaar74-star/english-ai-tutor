export type TutorResult={reply:string;corrected?:string;why?:string};
const replacements:[RegExp,string,string][]=[
  [/\bI have difficulty to ([a-z]+)\b/i,'I have difficulty $1ing','Depois de “have difficulty”, normalmente usamos verbo com -ing.'],
  [/\bI have been tried to\b/i,"I've been trying to",'Para uma ação em andamento, use “have/has been + verbo-ing”.'],
  [/\byesterday I go\b/i,'yesterday I went','“Yesterday” pede passado; o passado de “go” é “went”.'],
  [/\bI buy\b/i,'I bought','O passado de “buy” é “bought”.'],
  [/\bI study English make some years\b/i,"I've been studying English for a few years",'Para algo que começou no passado e continua, “have been + -ing” é natural.'],
  [/\bI didn't understood\b/i,"I didn't understand",'Depois de “did/didn’t”, usamos a forma base do verbo.']
];
export function basicTutor(input:string):TutorResult{
 let corrected=input;let why='';
 for(const [r,rep,w] of replacements){if(r.test(corrected)){corrected=corrected.replace(r,rep);why=why||w;}}
 const changed=corrected!==input;
 const replies=[
  'That makes sense. Tell me a little more about it.',
  'Good. What happened next?',
  'Interesting. How would you describe that in more detail?',
  'Nice. Can you give me one example?',
  'I understand. What would you do differently next time?'
 ];
 return {reply:replies[Math.floor(Math.random()*replies.length)],corrected:changed?corrected:undefined,why:changed?why:undefined};
}
