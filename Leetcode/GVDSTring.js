function FindGCDString(str1, str2) {
  if (str1 + str2 !== str2 + str1) {
    return;
  }
  function gcd(a, b) {
    if (b.length === 0) {
      return a;
    }
    return gcd(b, a.slice(0, a.length % b.length));
  }
  return gcd(str1, str2);
}
const result = FindGCDString("ABCABCABC", "ABCABC");
console.log(result);

// function GCDTwoString(str1, str2) {
//   let result = str1.slice(0, str1.length % str2.length);
//   console.log(str1.length % str2.length);
//   console.log(result);
// }

// GCDTwoString("ABCABCABC", "ABCABC");

// // handle the base case
// if (str1 + str2 !== str2 + str1) return '';
// let a = str1.length
// let b = str2.length

// // loop (divide) until you find the
// // highest common factor (length of string)
// // like we did in maths
// while (b) {
//     let temp = b
//     b = a % b
//     a = temp
// }
// return str1.substring(0, a)
