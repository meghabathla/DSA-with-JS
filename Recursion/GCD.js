/* find GCD of two numbers
input 42 & 18
output 6
42 divided by- 1,2,3,6,7,14,21,42
18 divide by- 1,2,3,6,9,18
*/

function findGCD(num1, num2) {
  if (num1 == num2) {
    return num1;
  }
  if (num1 > num2) {
    return findGCD(num1 - num2, num2);
  }
  if (num2 > num1) {
    return findGCD(num2 - num1, num1);
  }
}

console.log(findGCD(42, 18));
