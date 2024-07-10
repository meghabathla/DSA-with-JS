function foo() {
  var a = (b = 0);
  a++;
  return a;
}
foo();
console.log(typeof a);
