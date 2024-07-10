function hoistingExample() {
  console.log(varVariable); // This will print "undefined"
  // console.log(letVariable); // This will throw a ReferenceError
  // console.log(constVariable); // This will throw a ReferenceError

  var varVariable = "I am a var variable";
  let letVariable = "I am a let variable";
  const constVariable = "I am a const variable";
}

hoistingExample();
