var moveZeroes = function (nums) {
  let writeIndex = 0;

  for (let readIndex = 0; readIndex < nums.length; readIndex++) {
    if (nums[readIndex] !== 0) {
      nums[writeIndex] = nums[readIndex];
      console.log(writeIndex);
      writeIndex++;
    }
  }
  for (; writeIndex < nums.length; writeIndex++) {
    nums[writeIndex] = 0;
  }
  return nums;
};

const result = moveZeroes([0, 1, 0, 3, 12]);
console.log(result);
