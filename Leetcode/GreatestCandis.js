// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]

function GreatestCandy(array, extraCandies) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    const condition = array[i] + extraCandies >= Math.max(...array);
    if (condition) {
      newArr.push(true);
    } else {
      newArr.push(false);
    }
  }
  return newArr;
}

const res = GreatestCandy([2, 3, 5, 1, 3], 3);
console.log(res);
