console.log("Script start");

setTimeout(function () {
  console.log("setTimeout");
}, 0);

new Promise((resolve, reject) => {
  console.log("Promise constructor");
  resolve("Promise resolved");
}).then(function (res) {
  console.log(res);
});

async function asyncFunc() {
  console.log("asyncFunc start");
  await new Promise((resolve) => {
    console.log("Promise inside asyncFunc");
    resolve("Async/await resolved");
  });
  console.log("asyncFunc end");
}
asyncFunc();

console.log("Script end ");
