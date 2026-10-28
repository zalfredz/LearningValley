export type FocusSnapshot={userId:string,mode:'focus'|'break',seconds:number,running:boolean,endAt:number,spot:string|null,map:string};
export function restoreSnapshot(s:FocusSnapshot|null,userId:string,now:number,spotAvailable:boolean){
 if(!s||s.userId!==userId||!['focus','break'].includes(s.mode)||!Number.isFinite(s.seconds)||s.seconds<0||s.seconds>1500||typeof s.running!=='boolean'||!Number.isFinite(s.endAt)||typeof s.map!=='string'||(s.spot!==null&&typeof s.spot!=='string'))return null;
 const seconds=s.running?Math.max(0,Math.ceil((s.endAt-now)/1000)):Math.ceil(s.seconds);
 return {...s,seconds,running:s.running&&seconds>0,completed:s.running&&seconds===0,spot:s.spot&&spotAvailable?s.spot:null,spotLost:!!s.spot&&!spotAvailable};
}
