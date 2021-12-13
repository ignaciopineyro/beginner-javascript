function calculateBill(billAmount, taxRate = 0.21) {
  console.log(`Calculating bill:`);
  const total = billAmount * (1 + taxRate);
  return total;
}

const myOrder = 45.6;
const herOrder = 68.1;

const myTotal = calculateBill(100, 21);
const myTotal2 = calculateBill(500, undefined);
const myTotal3 = calculateBill(myOrder + herOrder);
console.log(`Your total is $${myTotal}`);
console.log(`Your total 2 is $${myTotal2}`);
console.log(`Your total 3 is $${myTotal3}`);
