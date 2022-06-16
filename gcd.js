const GCD = (a, b) => b == 0 ? a : GCD(b, a % b);

console.log(GCD(5, 10));
