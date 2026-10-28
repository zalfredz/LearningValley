export const defaultSpots=[{id:'buku',name:'Sudut baca',icon:'📖',col:32,row:6},{id:'kebun',name:'Kebun',icon:'🌱',col:5,row:10}];
export function defaultAreaContains(spotId:string,col:number,row:number){if(spotId==='kebun')return col>=2&&col<=8&&row>=7&&row<=13;if(spotId==='buku')return col>=30&&col<=35&&row>=4&&row<=8;const spot=defaultSpots.find(s=>s.id===spotId);return !!spot&&Math.abs(col-spot.col)<=1&&Math.abs(row-(spot.id==='meja_bundar'?spot.row-4:spot.row))<=1}
export function translateArea(cells:Set<number>,dx:number,dy:number){const result=new Set<number>();for(const cell of cells){const col=cell%48+dx,row=Math.floor(cell/48)+dy;if(col<0||col>=48||row<0||row>=32)return null;result.add(row*48+col)}return result}

export function entryForSpot<T extends {id:string,col:number,row:number}>(spot:T){return {col:spot.col,row:spot.id==='meja_bundar'?spot.row-4:spot.row}}
