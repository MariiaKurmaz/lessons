const numberToCalculate = 5;
let result = 1;
let doubleFactorial = 1;
for (let i = 1; i <= numberToCalculate; i = i + 1) {
  result = result * i;
  if (
    (numberToCalculate % 2 == 0 && i % 2 == 0) ||
    (numberToCalculate % 2 != 0 && i % 2 != 0)
  ) {
    doubleFactorial = doubleFactorial * i;
  }
}

console.log("facturial", numberToCalculate, "is", result);
console.log("double facturial", numberToCalculate, "is", doubleFactorial);

function addTwoNumbers(x, y) {
  return x + y;
}
const v1 = -876;
const v2 = 876;

console.log("sum of two numbers", v1, v2, "is", addTwoNumbers(v1, v2));
console.log("sum of two numbers", v1, v2, "is", addTwoNumbers(13, 0.836));
console.log("sum of two numbers", v1, v2, "is", addTwoNumbers(-2.786, -2098));