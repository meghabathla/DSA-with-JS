function reverseWord(s) {
  let length = s.length;
  //   console.log(length);
  let word = "";
  let result = [];

  for (i = 0; i < length; i++) {
    // console.log(i);
    if (s[i] !== " ") {
      word += s[i];
      console.log(word);
    }
    if (word.length > 0 && (s[i] === " " || i === length - 1)) {
      result.unshift(word);
      console.log("word", word);
      //   console.log("joining the words", result);
      word = "";
    }
  }
  return result.join("|");
}

const result = reverseWord("the sky is blue");
console.log(result);
