class Node {
  constructor(data, next = null) {
    this.node = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}
LinkedList.prototype.addInStart = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
};
