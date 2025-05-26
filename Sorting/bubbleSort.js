function bubbleSort(arr) {
  let isSwap;
  let n = arr.length;
  do {
    isSwap = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] && arr[i + 1] && arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwap = true;
      }
    }
    n--;
    console.log(arr);
  } while (isSwap);
  return arr;
}

const result = bubbleSort([4, 2, 1, 3]);
console.log(result); // [2,1,3,4]
