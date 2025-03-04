var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const unique1 = [...set1].filter((x) => !nums2.includes(x));
  const unique2 = [...set2].filter((x) => !nums1.includes(x));

  return [unique1, unique2];
};

const result = findDifference([1, 2, 3], [2, 4, 6]);
console.log(result);
