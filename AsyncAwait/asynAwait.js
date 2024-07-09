const one = () => Promise.resolve("one");

async function test() {
  console.log("Inside test function");
  const result = await one();
  console.log(result);
}

console.log("Before calling test function");
test();
console.log("After calling test function");
