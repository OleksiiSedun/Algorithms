const GCD = (a, b) => b == 0 ? a : GCD(b, a % b);
const LCM = (a, b) => a * b / GCD(a, b);

console.log(LCM(5, 10));
