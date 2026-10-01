function findMissing(list) {
  let diff = (list[list.length - 1] - list[0]) / list.length;
  
  let value = list[0];
  for (let i = 0; i < list.length; i++) {
    if (list[i] != value)
      return value;
    value += diff;
  }
  
  return 0;
}
