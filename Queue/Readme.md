### Queue Implementation in JavaScript

Queue works in a very similar way to the stacks but elements follow a different pattern for add & remove the elements.

Queue always follow FIFO pattern.

## Usage Of Queues

⦿ Background Tasks

⦿ Printing/Task Processing

## What is Circular Queue & Why is it important?

A circluar queue is a linear data structure tht treats the end of the queue as connected to the beginning of the queue, forming a circle.

It is useful for situations where fixed size storage is needed, this is also known as Circular/Ring Buffer

```js
class Queue {
  constructor() {
    this.queue = [];
  }

  // this method will add the value at the last
  enqueue(data) {
    this.queue.push(data);
  }

  // this method will remove the value from first
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }

  clear() {
    this.queue = [];
  }

  printQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++) {
      str += this.queue[i] + "\n";
    }
    return str;
  }
}

//usage Example

const myqueue = new Queue();

myqueue.enqueue(3);
myqueue.enqueue(9);
myqueue.enqueue(7);
myqueue.enqueue(6);

myqueue.dequeue();
console.log(myqueue.printQueue());
```
