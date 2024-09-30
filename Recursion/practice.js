const findVowelRecurssion = (string, stringLength) => {
  if (stringLength === 1) return isVowel();

  findVowelRecurssion(string, stringLength - 1);
};
