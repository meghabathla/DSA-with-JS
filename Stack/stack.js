class Stack {
  constructor() {
    this.stack = [];
  }

  push(data) {
    this.stack.push(data);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  destory() {
    this.stack = [];
  }

  contains(data) {
    return this.stack.includes(data);
  }

  reverse() {
    return this.stack.reverse;
  }

  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str; // don't print/console in function
  }

  toString() {
    return this.stack.join();
  }

  toArray() {
    return [...this.stack];
  }

  clone() {
    const newStack = new Stack();
    newStack.stack = [...this.stack];
    return newStack;
  }
}

//usage example

let myStack = new Stack();

myStack.push(8);
myStack.Insert(44);

myStack.push(6);
myStack.push(7);
myStack.push(4);
myStack.pop();

console.log(myStack.printStack());
console.log(myStack.toArray());
console.log(myStack.clone());

const cloneStack = myStack.clone();
console.log(cloneStack.printStack());
