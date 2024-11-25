const swapArray = (array) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    left++;
    right--;
  }
  return array;
};
const result = swapArray([1, 4, 56, 7, 78, 8]);
console.log(result);
