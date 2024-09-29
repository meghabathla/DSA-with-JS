class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(data) {
    this.queue.push(data);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "queue is empty";
    } else {
      return this.queue.shift();
    }
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  peek() {
    if (this.isEmpty()) {
      return "queue is empty";
    } else {
      return this.queue[0];
    }
  }
  size() {
    return this.queue.length;
  }
  clear() {
    return (this.queue = []);
  }
  reverse() {
    return this.queue.reverse();
  }
  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "\n";
    }
    return str;
  }
}

const result = new Queue();
result.enqueue(90);
result.enqueue(76);
result.enqueue(34);
result.enqueue(23);
console.log(result.isEmpty());
console.log(result.printQueue());
console.log(result.peek());
console.log(result.size());
console.log(result.dequeue());
console.log(result.reverse());
console.log(result.printQueue());
