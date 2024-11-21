var mergeAlternately = function (word1, word2) {
  let merge = "";
  let i = 0;
  let j = 0;
  while (i < word1.length && word2.length > 0) {
    merge += word1[i];
    merge += word2[j];
    i++;
    j++;
  }
  while (i < word1.length) {
    merge += word1[i];
    i++;
  }
  while (j < word2.length) {
    merge += word2[j];
    j++;
  }
  return merge;
};
const result = mergeAlternately("abc", "pqr");
console.log(result);

//way-2
// var mergeAlternately = function(word1, word2) {
//     let merge = "" ;
//     let i = 0;
//     let j =0;
//     let length = word1.length> word2.length ? word1.length : word2.length
//  for(i = 0 ; i< length ; i++) {
//      if(i <  word1.length){
//          merge += word1[i];
//      } if(i < word2.length){
//          merge += word2[i];
//      }

//     }

//     return merge
//  };
