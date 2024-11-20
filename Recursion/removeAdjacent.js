//we are trying to remove adjacent twin character from the string
// aabcc--> abc

function removeAdjDup(inputString) {
  let newString = "";
  for (let i = 0; i < inputString.length; i++) {
    if (i === inputString.length - 1 || inputString[i] !== inputString[i + 1]) {
      newString += inputString[i];
    }
  }
  return newString;
}
console.log(removeAdjDup("aabcc"));

function recRemoveAdjDup(inputString){
    let newString=''
}
