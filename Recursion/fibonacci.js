// Iterative approach

function fabonacci(num) {
  let n0 = 0;
  let n1 = 1;
  for (i = 0; i < num; i++) {
    let temp = n0 + n1;
    n0 = n1;
    n1 = temp;
  }
  return n0;
}

console.log(fabonacci(5));

function recurssivefabonacci(val) {
  if (val <= 1) {
    return val;
  }
  return recurssivefabonacci(val - 2) + recurssivefabonacci(val - 1);
}

console.log(recurssivefabonacci(5));
