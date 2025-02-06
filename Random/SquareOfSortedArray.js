const sortedSquares = function (nums) {
  const newArray = [];
  nums.forEach((number) => {
    newArray.push(number * number);
  });
  return newArray.sort((a, b) => a - b);
};

const result = sortedSquares([-4, -1, 0, 3, 10]);
console.log(result);
const res = sortedSquares([-7, -3, 2, 3, 11]);
console.log(res);
