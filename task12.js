function longest(arr, n) {
  arr = arr.map((x, i) => [x, i]);
  arr.sort(
    (a, b) => (b[0].length - a[0].length) || (a[1] - b[1])
  );
  
  return arr[n - 1][0];
}
