function expandedForm(num) {
  let digits = Math.floor(Math.log10(num));
  
  let result = [];
  for (let i = digits; i >= 0; i--) {
    let radix = 10**i;
    let value = Math.floor((num % (radix * 10)) / radix) * radix;
    if (value == 0)
      continue;
    result.push(value);
  }
  
  return result.join(" + ");
}
