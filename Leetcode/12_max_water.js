var maxArea = function (height) {
  let maxWaterArea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let currentheight = Math.min(height[left], height[right]);
    let currentWidth = right - left;
    let currentArea = currentheight * currentWidth;
    maxWaterArea = Math.max(currentArea, maxWaterArea);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWaterArea;
};

const result = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(result);
