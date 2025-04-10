// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)

/*
length
FM1 and FM2
FM-> keys compare size
have same charcters
values-> Array -> sort
array -> string -> compare
*/
var closeStrings = function (word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  const frequencyMap1 = new Map();
  const frequencyMap2 = new Map();

  for (const char of word1) {
    frequencyMap1.set(char, (frequencyMap1.get(char) || 0) + 1);
  }
  for (const char of word2) {
    frequencyMap2.set(char, (frequencyMap2.get(char) || 0) + 1);
  }

  const charcters1 = new Set(frequencyMap1.keys());
  const charcters2 = new Set(frequencyMap2.keys());
  if (charcters1.size !== charcters2.size) {
    return false;
  }
  const haveSameCharacters = [...charcters1].every((char) =>
    charcters2.has(char)
  );
  if (!haveSameCharacters) {
    return false;
  }
  const sortedFrequency1 = Array.from(frequencyMap1.values()).sort(
    (a, b) => a - b
  );
  const sortedFrequency2 = Array.from(frequencyMap2.values()).sort(
    (a, b) => a - b
  );
  const areFrequencyIdentical =
    sortedFrequency1.join(",") === sortedFrequency2.join(",");
  if (!areFrequencyIdentical) {
    return false;
  }
  return true;
};

const result = closeStrings("cabbba", "abbccc");
console.log(result);
