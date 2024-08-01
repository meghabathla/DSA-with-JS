class BTSNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = nul;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new BTSNode(key);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    //node = root node
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  //in order successor
  delete(key) {
    this.root = this.deleteNode(this.root, key);
  }
  deleteNode(node, key) {
    if (node == null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.deleteNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.deleteNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        let tempNode = this.findMinNode(node.right);
        node.key = tempNode.key;
        node.right = this.deleteNode(node.right, tempNode.key);
      }
    }
    return node;
  }
  findMinNode(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }
  findMaxNode(node) {
    while (node.right) {
      node = node.right;
    }
    return node;
  }
  inorderTraversal() {
    const result = [];
    this.order(this.root, result);
  }
}
