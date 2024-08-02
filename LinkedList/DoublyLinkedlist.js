class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

//Insert at the beginning
DoublyLinkedList.prototype.insertInBeginning = function (data) {
  const newNode = new Node(data, this.head, null);

  if (this.head !== null) {
    this.head.prev = newNode;
  }
  this.head = newNode;
  if (this.tail === null) {
    this.tail = newNode;
  }
};

//insert at the end
DoublyLinkedList.prototype.insertAtTheEnd = function (data) {
  const newNode = new Node(data, null, this.tail);
  if (this.tail !== null) {
    this.tail.next = newNode;
  }
  this.tail = newNode;
  if (this.head === null) {
    this.head = newNode;
  }
};

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
