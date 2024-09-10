class BST {
  constructor(key) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}
class BinarySearchTreeNode {
  constructor() {
    this.root = null;
  }

  inOrderTraversal() {
    const result = [];
    this.inOrder(this.root, result);
    return result;
  }
  inOrder() {
    if (node !== null) {
      this.inOrder(node.left, result); // how this line pushing left node in result array?
      result.push(result);
      this.inOrder(node.right, result);
    }
  }
}
