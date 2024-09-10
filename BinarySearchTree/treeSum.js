//breadth first search

const treeSumBFS = (root) => {
  if (root === null) return 0;

  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    sum += node.key;

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
};

//Depth First Search

const treeSumDFS = (root) => {
  if (root === null) return 0;
  return root.key + treeSumDFS(root.left) + treeSumDFS(root.right);
};
