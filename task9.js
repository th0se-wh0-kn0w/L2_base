function solution(str){
   return [...[...str.matchAll(/..?/g)].map(x => x[0].padEnd(2, "_"))];
}
