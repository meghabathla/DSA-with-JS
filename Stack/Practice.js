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
    if (this.stack > 0) return true;
    else {
      return false;
    }
    // return stack.length===0
  }
  size() {
    return this.stack.length;
  }
  destroy() {
    this.stack = [];
  }
  findElement(val) {
    return this.stack.includes(val);
  }
  reverse() {
    return this.stack.reverse();
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.stack.length; i++) {
      str += this.stack[i] + "\n";
    }
    return str;
  }
}

const result = new Stack();
result.push(40);
result.push(89);
result.push(34);
result.push(83);
console.log(result.printStack());
console.log(result.reverse());
console.log(result.findElement(89));
console.log(result.peek());
console.log(result.size());
console.log(result.isEmpty());
