// Input: s = "the sky is blue"
// Output: "blue is sky the"
//else if (word.length > 0) { If the current character is a space (s[i] === " ") and word is not empty, then:
var reverseWords = function (s) {
  s = s.trim();
  let result = [];
  let length = s.length;
  let word = "";
  for (let i = 0; i < length; i++) {
    if (s[i] !== " ") {
      word += s[i];
    } else if (word.length > 0) {
      result.unshift(word);
      word = "";
    }
  }
  if (word.length > 0) {
    result.unshift(word);
  }
  return result.join(" ");
};
const res = reverseWords("the sky is blue");
console.log(res);
