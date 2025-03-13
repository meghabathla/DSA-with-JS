let typedTextSpan = document.querySelector(".typed-text");

let consor = document.querySelector(".cursor");
const words = ["Love", "Jhakaas", "mast", "dhinchak", "Weird"];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 600;

let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (words.length) {
    setTimeout(type, newLetterDelay);
  }
});

function type() {
  if (charIndex < words[index].length) {
    typedTextSpan.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay); //
  } else {
    console.log(charIndex);
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    index++;
    if (index >= words.length) {
      index = 0;
    }
    setTimeout(type, typingDelay + 1500); // now we will start typing new word
  }
}
