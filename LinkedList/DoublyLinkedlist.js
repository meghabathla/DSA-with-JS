class Node {
  constructor(data, prev = null, next = null) {
    this.prev = prev;
    this.data = data;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
//insert at the begining
DoublyLinkedList.prototype.insertInBeginning = function (data) {
  const newNode = new Node(null, data, this.head);
  if (this.head !== null) {
    thiss.head.prev = newNode;
  }
  this.head = newNode;
  if (this.head === null) {
    this.head = newNode;
  }
};

// insert at the End
DoublyLinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(this.tail, data, null);

  if (this.tail !== null) {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  if (this.tail === null) {
    this.tail = null;
  }
};

//insert in between
DoublyLinkedList.prototype.insertInBetween = function (prevNode, data) {
  if (prevNode === null) {
    return `Invalid prev Node`;
  }

  const newNode = new Node(prevNode, data, prevNode.next);
  if (prevNode !== null) {
    prevNode.next.prev = newNode;
  }
  prevNode.next = newNode;

  if (newNode == tail) {
    this.tail = newNode;
  }
};

DoublyLinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) {
    return `Nothing to delete`;
  }
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.head = this.head.next;
    this.head.prev = null;
  }
};

DoublyLinkedList.prototype.deleteLastNode = function () {
  if (!this.tail) {
    console.log(`Linkedlist is empty`);
    return;
  }

  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    this.tail = this.tail.prev;
    this.tail.next = null;
  }
};

DoublyLinkedList.prototype.reverse = function () {
  let current = this.head;
  let temp = null;
  while (current) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev;
  }

  if (temp != null) {
    this.tail = this.head;
    this.head = temp.prev;
  }
};
