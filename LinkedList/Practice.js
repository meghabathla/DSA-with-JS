//Create a node

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

//create a linkedList

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.insertInBeginning = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};
LinkedList.prototype.insertAtEnd = function (data) {
  if (!this.head) {
    const newNode = new Node(data);
    this.head = newNode;
  }
  let current = this.head;

  while (current) {
    if (current.next === null) {
      const newNode = new Node(data);
      current.next = newNode;
    }
    current = current.next;
  }
};

LinkedList.prototype.insertInBetween = function (prevNode, data) {
  let current = this.head;

  while (current.data !== prevNode) {
    current = current.next;
  }
  if (!prevNode) {
    return `node is not found`;
  }

  const newNode = new Node(data, current.next);
  current.next = newNode;
};

LinkedList.prototype.search = function (key) {
  if (!this.head) {
    return `list is empty`;
  }
  let current = this.head;

  while (current) {
    if (current.data === key) {
      return `true`;
    }
    current = current.next;
  }
  return `false`;
};

LinkedList.prototype.traverse = function () {
  if (!this.head) {
    return ` list is empty`;
  }

  let current = this.head;
  while (current) {
    list.push(current.data);
    current = current.next;
  }
  return list;
};

LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return ` list is empty`;
  }

  this.head = this.head.next;
};

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return ` list is empty`;
  }
  let current = this.head;
  if (current.next == null) {
    this.head = null;
  }
  let secondLast = this.head.next.next;
  while (secondLast) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

LinkedList.prototype.reverse = function () {
  if (!this.head) {
    return ` list is empty`;
  }
  let current = this.head;
  let next = null;
  let prev = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = null;
};

const linkedList = new LinkedList();

//doublyLinkedlist

class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {}
}
