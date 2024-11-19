function palindrome(str) {
  if (!str) return "string is empty";
  let length = str.length;
}
console.log(palindrome(""));

function recursivePalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] === str[str.length]) {
    return recursivePalindrome(str.substring(1, str.length - 1));
  } else {
    return false;
  }
}
recursivePalindrome("madams");
