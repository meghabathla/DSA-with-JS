// reverse a string --- iterartive

function reverseString(string) {
  let reverse = "";
  let length = string.length - 1;
  while (length >= 0) {
    reverse = reverse + string[length];
    length = length - 1;
  }
  return reverse;
}

console.log(reverseString("Hello-world"));

const recursiveReverseString = (string) => {
  console.log(string);
  if (string === "") {
    return string;
  }

  let reversePart = recursiveReverseString(
    string.substring(0, string.length - 1)
  );
  let result = string[string.length - 1] + reversePart;
  console.log(
    `Reversing: last char: ${
      string[string.length - 1]
    } added in front of ${reversePart} to form  result ${result}`
  );
  return result;
};

console.log(recursiveReverseString("hello"));

//string[string.length - 1] for position of reverse character
//recursiveReverseString(string.substring(0, string.length - 1)); for recurssive value
