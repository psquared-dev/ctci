class BTNode {
  constructor(data, left = null, right = null, parent = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.parent = null;
  }

  toString() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  addNode(data) {
    if (this.root === null) {
      this.root = new BTNode(data);
      return this;
    }

    let prev = null;
    let curr = this.root;

    while (curr) {
      if (data < curr.data) {
        prev = curr;
        curr = curr.left;
      } else if (data > curr.data) {
        prev = curr;
        curr = curr.right;
      }
    }

    const newNode = new BTNode(data);
    newNode.parent = prev;

    if (data < prev.data) {
      prev.left = newNode;
    } else {
      prev.right = newNode;
    }

    return this;
  }

  fromArray(arr) {
    arr.forEach((el, idx) => {
      this.addNode(el);
    });
  }

  find(data) {
    if (this.root === null) {
      return this;
    }

    let curr = this.root;

    while (curr) {
      if (curr.data === data) {
        return curr;
      }

      if (data < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }

    return null;
  }

  findMin(root = null) {
    if (root === null) {
      root = this.root;
    }

    let prev = null;
    let curr = root;

    while (curr) {
      prev = curr;
      curr = curr.left;
    }

    return prev;
  }

  findSuccessor(root) {
    // fn is called with a non-existing root
    if (root === null) {
      throw new Error("No such node exist.");
    }

    // fn is called without the root
    if (root === undefined) {
      root = this.root;
    }

    //  node has a right child
    if (root.right) {
      return this.findMin(root.right);
    }

    // node doesn't have a right child and
    // it is the left child of the parent
    if (root.parent.left === root) {
      return root.parent;
    }

    // node doesn't have a right child and
    // and it is the right child of the parent
    let curr = root;
    let ancestor;

    while (1) {
      ancestor = curr.parent;
      if (ancestor == null) {
        return null;
      }

      if (ancestor.data > root.data) {
        return ancestor;
      }

      curr = curr.parent;
    }
  }
}

const bst1 = new BST();
// console.log(bst1);
// bst1.fromArray([15, 5, 21, 1, 9, 20, 25]);
bst1.fromArray([44, 17, 88, 8, 32, 65, 97, 28, 54, 82, 93, 29, 76, 80]);
// console.log(bst1);
// console.log(bst1.findMin(bst1.find(21)));
console.log(bst1.findSuccessor(bst1.find(80)));
