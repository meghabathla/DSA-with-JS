/*
arr= [3,4,5,6,3,1]
find =3
currIndex= 0;
output= 2
if not found =-1
*/

//iterative approach
const array = [1, 2, 23, 45, 3, 2, 4, 5];

function firstOcc(arr, findMe, currIndex) {
  while (currIndex < arr.length) {
    if (arr[currIndex] === findMe) {
      return currIndex;
    }

    currIndex += 1;
  }
  return -1;
}

console.log(firstOcc(array, 2, 0));

function recursiveFisrtOcc(arr, findMe, currIndex) {
  if (arr.length == currIndex) {
    return -1;
  }
  if (arr[currIndex] == findMe) {
    return currIndex;
  }
  return recursiveFisrtOcc(arr, findMe, currIndex + 1);
}

console.log(recursiveFisrtOcc(array, 2, 0));
