function primeFactors(n){
  let primes = [];
  while (n > 1) {
    let divisor = 2;
    while (primes.find(x => (x != divisor) && (x % divisor == 0))
           || n % divisor != 0)
      divisor++;
    
    primes.push(divisor);
    n /= divisor;
  }
  
  let output = [];
  let count = 1;
  for (let i = 0; i < primes.length; i++) {
    if (i == primes.length - 1 || primes[i] != primes[i + 1]) {
      output.push(`(${primes[i]}${count == 1 ? "" : "**" + count})`)
      count = 1;
    } else {
      count++;
    }
  }
  
  return output.join("");
}
