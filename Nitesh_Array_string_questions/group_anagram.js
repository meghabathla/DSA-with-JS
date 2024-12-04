// [Q1] String Manipulation: Group Anagrams ?
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

// const array = ["y", "s", "h", "k", "a"];
// const res = array.sort();
// const str = "hello";
// const result = str.split("").join("");
// console.log(result);

function checkAnagram(arr) {
  const grouped = {};
  arr.forEach((str) => {
    const key = str.split("").sort().join("");
    if (!grouped[key]) {
      grouped[key] = [];
    }
    grouped[key].push(str);
  });
  return Object.values(grouped);
}

const anagram = checkAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log(anagram);

// const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const map1 = new Map();

// input.forEach((element) => {
//   const key = element.split("").sort().join("");
//   if (!map1.has(key)) {
//     map1.set(key, []);
//   }
//   map1.get(key).push(element);
// });

// const output = Array.from(map1.values());

// console.log({ output });
