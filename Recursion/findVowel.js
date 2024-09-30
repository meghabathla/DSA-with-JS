const findVowelIteration = (chararcter) => {
  let lowerChar = chararcter.toLowerCase();
  let vowels = "aieou";

  if (vowels.indexOf(lowerChar) !== -1) {
    return true;
  } else {
    return false;
  }
};

// function countVowels(string) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (findVowelIteration(string[i])) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("Hello"));

//find vowel in iteration

const recurssiveCountVowels = (string, stringLength) => {
  if (stringLength == 1) {
    console.log(Number(findVowelIteration(string[0])));
    return Number(findVowelIteration(string[0]));
  }

  let result =
    recurssiveCountVowels(string, stringLength - 1) +
    findVowelIteration(string[stringLength - 1]);
  console.log(`count after checking count`, result);
  return result;
};

const myString = "hello";
console.log(recurssiveCountVowels(myString, myString.length));
