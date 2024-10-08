function findLength(str) {
  if (!str) return "string is empty";
  let count = 0;

  while (true) {
    if (str[count]) {
      count++;
    } else {
      break;
    }
  }
  return count;
}
console.log(findLength("Megha"));

function findLen(str) {
  if (!str) return "string is zero";
  let count = 0;
  while (str) {
    count += 1;
    str = str.substring(1);
  }
  return count;
}

console.log(findLen("StringLength"));

function recursiveLength(str) {
  if (str === "") return 0;
  else {
    return 1 + recursiveLength(str.substring(1));
  }
}
console.log(recursiveLength("hello"));
