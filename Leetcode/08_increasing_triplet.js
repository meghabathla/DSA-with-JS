var increasingTriplet = function (nums) {
  let firstSmall = Infinity;
  let secondSmall = Infinity;
  let thirdSmall = Infinity;
  for (const num of nums) {
    console.log(num);
    if (num <= firstSmall) {
      firstSmall = num;
    } else if (num <= secondSmall) {
      secondSmall = num;
    } else {
      return true;
    }
  }
  return false;
};

console.log(increasingTriplet([2, 1, 5, 0, 4, 6]));
