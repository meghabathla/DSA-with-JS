// [Q2] Find a common value between two arrays ?
// Input: [1,3,4,5,2,1] & [7,4,3,5,3,1]
// Output: [1,3]

function findCommonValues(arr1, arr2) {
  const newArray = [];
  const condition = arr1.find(...arr2);

  console.log(condition);
}
const result = findCommonValues([1, 3, 4, 5, 2, 1], [7, 4, 3, 5, 3, 1]);
console.log(result);
