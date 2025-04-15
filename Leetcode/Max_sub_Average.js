//sliding window technique

var findMaxAverage = function (nums, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    //i = 2, sum = 18
    sum += nums[i];
  }
  let maxSum = sum; //18
  for (let i = k; i < nums.length; i++) {
    // k = 3
    //i=3, i=4
    sum = sum - nums[i - k] + nums[i]; // sum = 18 - 1 + 6 ==> 21,  sum = 23 - 12 + 3  ==> ,
    maxSum = Math.max(maxSum, sum); // maxSum = 23
  }
  return maxSum / k;
};

const result = findMaxAverage([1, 12, 5, 6, 50, 3, 30], 3);
console.log(result);
