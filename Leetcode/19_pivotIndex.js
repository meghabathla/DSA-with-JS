var pivotIndex = function (nums) {
  const totalSum = nums.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < nums.length; i++) {
    rightSum = totalSum - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

const result = pivotIndex([1, 7, 3, 6, 5, 6]);
console.log(result);
