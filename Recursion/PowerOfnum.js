function powerOfNumber(num, power) {
  if (power === 0) {
    return 1;
  }
  return num * powerOfNumber(num, power - 1);
}

console.log(powerOfNumber(2, 5));
