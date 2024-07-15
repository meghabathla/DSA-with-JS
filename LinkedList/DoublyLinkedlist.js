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

DoublyLinkedList.prototype.insertInBeginning = function (data) {
  const newNode = new Node(data);
};
