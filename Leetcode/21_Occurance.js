var uniqueOccurrences = function (arr) {
  const countMap = new Map();
  for (const num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  const countSet = new Set();
  for (const count of countMap.values()) {
    if (countSet.has(count)) {
      return false;
    }
    countSet.add(count);
  }
  return true;
};

const result = uniqueOccurrences([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]);
console.log(result);
