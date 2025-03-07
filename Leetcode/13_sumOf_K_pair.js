// Input: nums = [1,2,3,4], k = 5
// Output: 2

// var maxOperations = function (nums, k) {
//   let j = 0;
//   let count = 0;

//   for (let i = 0; i <= nums.length; i++) {
//     // console.log("i", i, "j", j);
//     if (nums[i] + nums[j] === k) {
//       // console.log(nums[i], nums[j]);
//       count++;

//       j++;
//     }
//   }
//   return count;
// };

// ____________Method -2 _________________________

// var maxOperations = function (nums, k) {
//   let left = 0;
//   let right = nums.length - 1;
//   let operation = 0;
//   nums.sort((a, b) => a - b);
//   while (left < right) {
//     let sum = nums[left] + nums[right];
//     if (sum === k) {
//       operation++;
//       left++;
//       right--;
//     } else if (sum < k) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return operation;
// };

// _____________method-3______________________

var maxOperations = function (nums, k) {
  let map = new Map();
  let operations = 0;

  for (const num of nums) {
    let compliment = k - num;
    if (map.get(compliment) > 0) {
      operations++;
      map.set(compliment, map.get(compliment) - 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }
  return operations;
};

const result = maxOperations([1, 2, 3, 4], 5);
console.log(result);
