function calculator(a, b) {
  let GCD = a % b;
  while (GCD != 0) {
    a = b;
    b = GCD;
    GCD = a % b;
  }
  return b;
}
console.log(calculator(15, 5));
console.log(calculator(2154, 458));


// VERSION 2
function gcd(a, b) {
  if (b === 0){
    return a;
  } 
  return gcd(b, a % b);
}

console.log(gcd(15, 5)); 
console.log(gcd(2154, 458)); 
