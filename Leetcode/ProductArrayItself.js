// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

var productExceptSelf = function (nums) {
  let length = nums.length;
  let left = new Array(length).fill(1);
  let right = new Array(length).fill(1);
  let answer = new Array(length);

  for (let i = 1; i < length; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }
  console.log(left);

  for (let i = length - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }
  console.log(right);

  for (let i = 0; i < length; i++) {
    answer[i] = left[i] * right[i];
  }
  return answer;
};
const answer = productExceptSelf([1, 2, 3, 4]);
console.log(answer);
