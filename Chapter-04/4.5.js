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

    function helper(root, min, max) {
      if (root === null) {
        return true;
      }

      // console.log(root.data);
      if (min > root.data || root.data > max) {
        return false;
      }

      return (
        helper(root.left, min, root.data) && helper(root.right, root.data, max)
      );
    }

    return helper(root, -Infinity, Infinity);
  }

  toString() {
    return this.root;
  }
}

let bt = new BinaryTree();
// bt.root = new BTNode(15, new BTNode(5), new BTNode(21));

// bt.root.left.left = new BTNode(1);
// bt.root.left.right = new BTNode(9);
// bt.root.left.left.left = new BTNode(10);
// bt.root.left.left.left.left = new BTNode(20);

// bt.root.right.left = new BTNode(20);
// bt.root.right.right = new BTNode(25);

bt.root = new BTNode(5, new BTNode(1), new BTNode(8));
bt.root.right.left = new BTNode(6);
bt.root.right.right = new BTNode(8);

console.log(bt);

// console.log(bt.root.left.left);

// console.log(bt.findHeight());
// console.log(bt.isBalanced());
console.log(bt.isBST());
