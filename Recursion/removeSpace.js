// remove the tags and space from a string include /t and " " from string

function removeTAS(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char !== " " && char !== "/t") {
      result += char;
    }
  }
  return result;
}
console.log(removeTAS("My name is Megha Bathla"));

function recursionTAS(str) {
  if (str.length === 0) {
    return "";
  }
  let fisrtChar = str[0];
  let restOfString = str.slice(1);

  if (fisrtChar === " " || fisrtChar === "/t") {
    return recursionTAS(restOfString);
  }
  return fisrtChar + recursionTAS(restOfString);
}

console.log(recursionTAS("My name is Megha"));
