class BST {
  constructor(key) {
    this.key = key;
    this.left = left;
    this.right = right;
  }
}

const depthFirstTraversal = () => {
  if (root === null) {
    return `tree is empty`;
  }
  const values = [];

  const stack = [root];
  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);
  }
  if (node.right !== null) {
    stack.push(node.right);
  }
  if (node.left !== null) {
    stack.push(node.left);
  }
  return values;
};
// NODE=A,B,D,E,C,F
//VALUE =A,B
//STACK=F

const recursiveDepthFirstTraversal = (root) => {
  if (root === null) {
    return "tree is empty";
  }
  const leftVal = recursiveDepthFirstTraversal(root.left);
  const rightVal = recursiveDepthFirstTraversal(root.right);

  //return [root.key, leftVal, rightVal];
  // [a,[b,c,d],[e,f,g]]
  return [root.key, ...leftVal, ...rightVal];
};
