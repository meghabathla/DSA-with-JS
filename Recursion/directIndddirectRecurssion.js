//DirectRecurssion

const printNumber = (min, max) => {
  if (min > max) return;
  printNumber(min + 1, max);
  console.log(min);
};
printNumber(1, 5);

console.log(`--------`);
const printNum = (min, max) => {
  if (min > max) return;
  console.log(min);
  printNum(min + 1, max);
};
printNum(1, 5);
console.log(`--------`);
//Indirect Recurssion

const print = (min, max) => {
  if (min > max) return;

  console.log(min);
  min = min + 1;
  logic(min, max);
};
function logic(min, max) {
  if (min > max) return;
  print(min, max);
}

print(2, 9);
