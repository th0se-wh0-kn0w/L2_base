function wave(str){
  str = str.split("");
  
  let result = [];
  let prev = -1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " ")
      continue;
    
    if (prev != -1)
      str[prev] = str[prev].toLowerCase();
    str[i] = str[i].toUpperCase();
    prev = i;
    
    result.push(str.join(""));
  }
  
  return result;
}
