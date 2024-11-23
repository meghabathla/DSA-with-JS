// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// Example 2:

// Input: flowerbed = [1,0,0,0,1], n = 2, [0,0,0,1,0,1],
// Output: false

function canflowerPlanted(flowerbed, n) {
  const flowerbedLength = flowerbed.length;

  for (let i = 0; i < flowerbedLength; i++) {
    if (flowerbed[i] === 0) {
      if (i === 0) {
        if (flowerbed[i + 1] === 0 || n === 1) {
          n = n - 1;
          flowerbed[i] = 1;
        }
      } else if (i === flowerbedLength - 1) {
        if (i === 0) {
          n = n - 1;
          flowerbed[i] = 1;
        }
      } else {
        if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
          n = n - 1;
          flowerbed[i] = 1;
        }
      }
    }
  }
  return n <= 0;
}

const res = canflowerPlanted([1, 0, 0, 0, 0, 1], 1);
console.log(res);
