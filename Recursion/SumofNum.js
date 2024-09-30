function sumOfNum(num) {
  if (num == 1) {
    return num;
  }
  return num + sumOfNum(num - 1);
}
console.log(sumOfNum(5));
