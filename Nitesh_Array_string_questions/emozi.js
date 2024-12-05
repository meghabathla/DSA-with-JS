const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};

function emojifyWord(word) {
  console.log(word);
  condition = word?.startsWith(":") && word.endsWith(":");
  console.log(condition);
  if (condition) {
    updatedWord = word.replace(/:/g, "");
    console.log(updatedWord);
    for (const emozi in hackedEmojis) {
      if (emozi === updatedWord) return hackedEmojis[emozi];
    }
    return word;
  }
}

function emojifyPhrase(phrase) {
  const regex = /:\w+:/g;
  const getEmozi = phrase.match(regex);

  if (!getEmozi) return phrase;
  const newString = getEmozi.join("");
  return emojifyWord(newString);
}

console.log(emojifyPhrase("Those shoes puke"));
