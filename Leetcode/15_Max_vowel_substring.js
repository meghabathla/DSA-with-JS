var maxVowels = function (s, k) {
  const vowels = new Set[("a", "i", "o", "u", "e")]();
  let currentVowelCount = 0;
  let maxVowelCount = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      currentVowelCount++;
    }
  }
  maxVowelCount = currentVowelCount;
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) currentVowelCount++;
    if (vowels.has(s[i - k])) currentVowelCount--;
    maxVowelCount = Math.max(currentVowelCount, maxVowelCount);
  }
  return maxVowelCount;
};

const res = maxVowels("aeiou", 3);
console.log(res);
