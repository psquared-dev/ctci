class BTNode {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  toString() {
    return this.data;
  }
}

const root = new BTNode(3, new BTNode(6), new BTNode(8));

root.left.left = new BTNode(2);
root.left.right = new BTNode(11, new BTNode(9), new BTNode(5));

// root.left.right.left = new BTNode(9);
// root.left.right.right = new BTNode(5);

root.right.right = new BTNode(13);
root.right.right.left = new BTNode(25);

console.log(root);

function lca(root, p, q) {
  if (root === null) {
    return null;
  }

  if (root.data === p || root.data === q) {
    return root.data;
  }

  const left = lca(root.left, p, q);
  const right = lca(root.right, p, q);

  if (left && right) {
    return root.data;
  }

  return left === null ? right : left;
}

console.log(lca(root, 9, 5));
