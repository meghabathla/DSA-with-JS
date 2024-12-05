/*  Santas Emoji Hack!

During Christmas, Santa wants to ban negative emojis, so when people
use negative emoji shortcodes, he wants positive emojis to appear instead.

In other words, :angry: should result in 🎁 instead of 😠.


*/
const inputPhrase = document.getElementById("input");
const button = document.getElementById("button");
const output = document.getElementById("show_emoji");

const hackedEmojis = {
  angry: "🎁", // 😠
  thumbsdown: "👏", // 👎
  man_facepalming: "🎅", // 🤦‍♂️
  cry: "‍😄", // 😭
  puke: "🤩", // 🤮
};

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, check if it exists in the hackedEmojis object, 
and replace it with the corresponding emoji. If not, return the original word.


Example input: ":cry:"
Example output: ‍😄

*/
const EmojiObject = {
  "😠": "🎁",
  "👎": "👏",
  "🤦‍♂️": "🎅",
  "😭": "‍😄",
  "🤮": "🤩",
};

function emojifyWord(word) {
  //:angry:
  console.log(word);
  let condition = word.startsWith(":") && word.endsWith(":");
  if (condition) {
    let updatedWord = word.replace(/:/g, "");
    if (hackedEmojis[updatedWord]) {
      return hackedEmojis[updatedWord];
    }
  } else if (EmojiObject[word]) {
    //"😠"
    return EmojiObject[word];
  }
  return word;
}

// console.log(emojifyWord(":angry:"));

/* 2. Write a function to find any emoji shortcodes in a phrase.
Use your emojify function from the previous exercise!

Example input: "Just read your article :thumbsdown:"
Example output: "Just read your article 👏"
*/

function emojifyPhrase(phrase) {
  const regex = /:\w+:/g;
  const matched = phrase.match(regex); //null
  if (!matched) return emojifyWord(phrase);
  const emoji = matched.join("");
  return emojifyWord(emoji);
}

// console.log(emojifyPhrase("Those shoes :puke:"));

button.addEventListener("click", (e) => {
  e.preventDefault();
  output.innerHTML = emojifyPhrase(inputPhrase.value);
});

// Stretch goal: don't just replace the shortcodes, but also
// any emojis are added directly to the text.
