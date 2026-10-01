function hasTwoCubeSums(n) {
  let count = 0;
  let cbRt = Math.ceil(n ** (1/3));
  for (let i = 1; i <= cbRt; i++) {
    for (let j = i + 1; j <= cbRt; j++) {
      if (i**3 + j**3 == n && (++count == 2)) {
        return true;
      }
    }
  }
  
  return false;
}
