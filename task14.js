function isCircleSorted( arr ){
  let beginFrom = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      beginFrom = i;
      break;
    }
  }
  
  if (beginFrom == -1)
    return true;
  
  let prev = arr[beginFrom];
  for (let i = 0; i < arr.length; i++) {
    let value = arr[(i + beginFrom) % arr.length];
    if (prev > value)
      return false;
    prev = value;
  }
  
  return true;
  // ...
}
