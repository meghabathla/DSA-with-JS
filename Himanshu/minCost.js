/**3560. Find Minimum Log Transportation Cost
 * @param {number} n
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minCuttingCost = function (n, m, k) {
  let totalCost = 0;
  if (n < k && m < k) {
    return totalCost;
  } else {
    var maxLog = Math.max(n, m);
    totalCost = (maxLog - k) * k;
    return totalCost;
  }
};
