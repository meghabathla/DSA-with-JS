var longestOnes = function (nums, k) {
  let left = 0;
  let maxlength = 0;
  let zeroCount = 0;
  for (let rigth = 0; rigth < nums.length; rigth++) {
    if (nums[rigth] === 0) {
      zeroCount++;
    }
    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }
    maxlength = Math.max(maxlength, rigth - left + 1); // (0, 1 ); (1, 1-0 +1); (2, 2-0+1 ); (3, 3 -0 +1 ); (4, 4 -1 +1); ()
  }
  return maxlength;
};

const result = longestOnes(
  [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
  3
);
console.log(result);
