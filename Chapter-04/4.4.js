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

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findHeight(root = null) {
    if (root === null) {
      root = this.root;
    }

    function helper(root) {
      if (root === null) {
        return -1;
      }

      const lHeight = helper(root.left);
      const rHeight = helper(root.right);

      //   console.log({ data: root.data, lHeight, rHeight });

      return 1 + Math.max(lHeight, rHeight);
    }

    return helper(root);
  }

  isBalanced(root = null) {
    if (root === null) {
      root = this.root;
    }

    function helper(root) {
      if (root === null) {
        return -1;
      }

      const lHeight = helper(root.left);

      if (lHeight === Infinity) {
        return Infinity;
      }

      const rHeight = helper(root.right);

      if (rHeight === Infinity) {
        return Infinity;
      }

      //   console.log({ data: root.data, lHeight, rHeight });

      if (Math.abs(lHeight - rHeight > 1)) {
        return Infinity;
      }

      return 1 + Math.max(lHeight, rHeight);
    }

    return helper(root) === Infinity ? false : true;
  }

  isBST(root = null) {
    if (root === null) {
      root = this.root;
    }

    function helper(root) {
      if (root) {
        console.log(root.data);
        if (root.left) {
          return root.left < root.data ? true : Infinity;
        }
      }

      const left = helper(root.left);

      if (left === Infinity) {
        return Infinity;
      }

      const right = helper(root.right);

      if (right === Infinity) {
        return Infinity;
      }
    }

    return helper(root) === Infinity ? true : false;
  }

  toString() {
    return this.root;
  }
}

let bt = new BinaryTree();
bt.root = new BTNode(15, new BTNode(16), new BTNode(21));

bt.root.left.left = new BTNode(1);
bt.root.left.right = new BTNode(9);
// bt.root.left.left.left = new BTNode(10);
// bt.root.left.left.left.left = new BTNode(20);

bt.root.right.left = new BTNode(20);
bt.root.right.right = new BTNode(25);

// console.log(bt.root.left.left);

console.log(bt.findHeight());
console.log(bt.isBalanced());
