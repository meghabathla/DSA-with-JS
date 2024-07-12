class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

//insert at the beginning
LinkedList.prototype.insertAtBeginning = function (data) {
  const newNode = new Node(data);
  //const newNode = new Node(data, this.head.next) when list is not empty and inserting in the beginning
  this.head = newNode;
};

//insert at the end
LinkedList.prototype.insertAtEnd = function (data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;
  while (last.next) {
    last = last.next;
  }
  last.next = newNode;
};

//insert at the given position
LinkedList.prototype.insertAtBetween = function (prevNode, data) {
  let current = this.head;

  while (current && current.data !== prevNode) {
    current = current.next;
  }
  if (!current) {
    console.log("The prev node is not found");
    return;
  }
  const newNode = new Node(data, current.next);
  current.next = newNode;
};

//delete the first node
LinkedList.prototype.deleteFirstNode = function () {
  if (this.head) this.head = this.head.next;
};

//delete the last node(second-last node)
LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) return; // case 1- if list is empty

  let current = this.head;

  if (!current.next) {
    // case 2- in case only head/one node in list
    current.next = null;
    return;
  }
  //case-3 when list have many nodes
  let secondLast = this.head;

  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

//delete the given node
LinkedList.prototype.deleteGivenNode = function (key) {
  if (!this.head) {
    console.log("List is empty");
    return;
  }
  if (this.head.data == key) {
    this.head = this.head.next;
  }
  let current = this.head;
  while (current.next == key) {
    current.next = current.next.next;
  }
};

//print the linkedList
LinkedList.prototype.printLinkedList = function () {
  let current = this.head;
  if (!current) {
    console.log("LinkedList is empty");
    return;
  }
  while (current) {
    console.log(current.data);
    current = current.next;
  }
};

const linkedlist = new LinkedList();

linkedlist.insertAtBeginning(40);
linkedlist.insertAtEnd(89);
linkedlist.insertAtEnd(45);
linkedlist.insertAtEnd(60);
linkedlist.insertAtEnd(99);

linkedlist.insertAtBetween(60, 30);

linkedlist.deleteFirstNode();
linkedlist.deleteLastNode();
linkedlist.deleteGivenNode(60);

linkedlist.printLinkedList();
