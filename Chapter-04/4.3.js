const LL = require("../chapter-02/LinkedList");

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

const root = new BTNode(15, new BTNode(5), new BTNode(21));

root.left.left = new BTNode(1);
root.left.right = new BTNode(9);

root.right.left = new BTNode(20);
root.right.right = new BTNode(25);

// console.log(root);

const listOfDepths = [];

function findListDepths(root) {
  function helper(root, level) {
    if (root !== null) {
      if (listOfDepths[level] === undefined) {
        listOfDepths[level] = new LL();
        listOfDepths[level].append(root.data);
      } else {
        listOfDepths[level].append(root.data);
      }

      helper(root.left, level + 1);
      helper(root.right, level + 1);
    }
  }

  helper(root, 0);
}

findListDepths(root);

for (const list of listOfDepths) {
  console.log(list.toArray());
}
