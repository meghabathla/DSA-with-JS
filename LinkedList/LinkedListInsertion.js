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
    current = null;
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
  //list is empty
  if (!this.head) {
    console.log("List is empty");
    return;
  }
  //key found in head
  if (this.head.data == key) {
    this.head = this.head.next;
    return;
  }

  let current = this.head;
  while (current.next !== null) {
    if (current.next.data === key) {
      current.next = current.next.next;
      return;
    }
    current = current.next;
  }
  console.log("No node found with Key");
};

//Search the node
LinkedList.prototype.search = function (key) {
  let current = this.head;
  while (current) {
    if (current.data === key) {
      return true;
    }
    current = current.next;
  }
  return false;
};

//traversal the list
LinkedList.prototype.traverse = function () {
  let listValue = [];
  let current = this.head;

  while (current) {
    listValue.push(current.data);
    current = current.next;
  }
  console.log(listValue.join("->"));
};

//Reverse the linkedList
LinkedList.prototype.reverse = function () {
  let current = this.head;
  let next = null;
  let prev = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  this.head = prev;
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

linkedlist.printLinkedList();
console.log(`new print`);

linkedlist.deleteFirstNode();
linkedlist.deleteLastNode();
linkedlist.deleteGivenNode(60);

linkedlist.printLinkedList();

console.log(linkedlist.search(45));
linkedlist.traverse();
linkedlist.reverse();

linkedlist.printLinkedList();
