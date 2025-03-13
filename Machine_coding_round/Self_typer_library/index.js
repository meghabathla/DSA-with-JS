const textSpan = document.querySelector(".typed-text");

let cursor = document.querySelector(".cursor");
const words = ["Love", "Jhakaas", "mast", "dhinchak", "Weird"];
const typeDelay = 400;
const erasingDelay = 400;
const newCharacterDelay = 600;
let charIndex = 0;
let index = 0;

document.addEventListener("DOMContentLoaded", () => {
  if (words) {
    setTimeout(typing, typeDelay);
  }
});

function typing() {
  if (charIndex < words[index].length) {
    console.log(charIndex < words[index].length);
    textSpan.textContent += words[index].charAt(charIndex);
    charIndex++;
    setTimeout(typing, typeDelay);
  } else {
    setTimeout(erasing, erasingDelay);
  }
}

function erasing() {
  if (charIndex >= 0) {
    textSpan.textContent = words[index].substring(0, charIndex);
    charIndex--;
    setTimeout(erasing, erasingDelay);
  } else {
    index++;
    setTimeout(typing, typeDelay);
    if (index === words.length) {
      index = 0;
    }
  }
}
