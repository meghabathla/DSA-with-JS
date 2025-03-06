let grid = [
  [3, 1, 2, 2],
  [1, 4, 4, 5],
  [2, 4, 2, 2],
  [2, 4, 2, 2],
];

var equalPairs = function (grid) {
  const n = grid.length;
  const rowMap = new Map();
  for (let i = 0; i < n; i++) {
    const rowStr = grid[i].join(",");
    rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
  }
  let count = 0;
  for (let j = 0; j < n; j++) {
    let colArr = [];
    for (let i = 0; i < n; i++) {
      colArr.push(grid[i][j]);
    }
    const colStr = colArr.join(",");
    if (rowMap.has(colStr)) {
      count += rowMap.get(colStr);
    }
  }
  return count;
};
const result = equalPairs(grid);
console.log(result);

// let cols = [];

// let rows = [];

// for (let j = 0; j < grid.length; j++) {
//   for (let i = 0; i < grid.length; i++) {
//     cols.push(grid[i][j]);
//   }
// }
// for (let i = 0; i < grid.length; i++) {
//   for (let j = 0; j < grid.length; j++) {
//     rows.push(grid[i][j]);
//   }
// }
// console.log(cols);
// console.log(rows);
