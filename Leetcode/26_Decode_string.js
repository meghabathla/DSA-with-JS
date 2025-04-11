var decodeString = function (s) {
  let stack = [];
  let currentNum = 0;
  let currentString = "";
  for (const char of s) {
    if (char >= "0" && char <= "9") {
      currentNum = currentNum * 10 + (char - "0");
    } else if (char === "[") {
      stack.push(currentNum);
      stack.push(currentString);
      currentNum = 0;
      currentString = "";
    } else if (char === "]") {
      let prevString = stack.pop();
      let repeatTime = stack.pop();
      currentString = prevString + currentString.repeat(repeatTime);
    } else {
      currentString += char;
    }
  }
  return currentString;
};

const result = decodeString("3[a]2[bc]");
console.log(result);
