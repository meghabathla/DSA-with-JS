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
