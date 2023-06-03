class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }

  toString() {
    return this.data;
  }
}

class LL {
  constructor(node = null) {
    this.head = node;
  }

  toArray() {
    const result = [];
    let curr = this.head;

    while (curr !== null) {
      result.push(curr.data);
      curr = curr.next;
    }

    return result;
  }

  append(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return this;
    }

    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = new Node(data);
    return this;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  delete(data) {
    if (this.head === null) {
      return this;
    }

    while (this.head && this.head.data === data) {
      this.head = this.head.next;
    }

    let prev = null;
    let curr = this.head;

    if (curr === null) {
      return this;
    }

    while (curr.next !== null) {
      if (curr.data === data) {
        prev.next = curr.next;
      } else {
        prev = curr;
      }
      curr = curr.next;
    }

    if (curr.data === data) {
      prev.next = null;
    }

    return this;
  }

  //  Solution 1
  //   removeDupe() {
  //     const dupeCount = new Set();

  //     let prev = null;
  //     let curr = this.head;

  //     while (curr !== null) {
  //       if (dupeCount.has(curr.data) === false) {
  //         dupeCount.add(curr.data);
  //         prev = curr;
  //       } else {
  //         prev.next = curr.next;
  //       }
  //       curr = curr.next;
  //     }

  //     return this;
  //   }

  // Solution

  removeDupe() {
    if (this.head === null) {
      return this;
    }

    let curr = this.head;

    while (curr.next !== null) {
      let runner = curr;

      while (runner.next !== null) {
        if (runner.next.data == curr.data) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }

      curr = curr.next;
    }

    return this;
  }

  get length() {
    return this.toArray().length;
  }

  kthLast(position) {
    // if (position > this.length) {
    //   throw new Error("Invalid position");
    // }

    if (this.head === null) {
      return this;
    }

    let curr = this.head;
    let runner = curr;
    let k = position;

    while (k > 0) {
      runner = runner.next;
      k -= 1;
    }

    while (runner !== null) {
      runner = runner.next;
      curr = curr.next;
    }

    return curr;
  }

  deleteMiddle(node) {
    if (node.next === null) {
      return false;
    }

    const next = node.next;
    node.data = next.data;
    node.next = next.next;
    return true;
  }

  partition(data) {
    if (this.head === null) {
      return this;
    }

    const listCopy = structuredClone(this);
    Object.setPrototypeOf(listCopy, this.__proto__);
    const result = new LL();

    while (listCopy.head && listCopy.head.data < data) {
      result.append(listCopy.head.data);
      listCopy.head = listCopy.head.next;
    }

    let curr = listCopy.head;

    while (curr.next !== null) {
      if (curr.next.data < data) {
        result.append(curr.next.data);
        curr.next = curr.next.next;
      } else {
        curr = curr.next;
      }
    }

    let tail = result.head;

    while (tail.next !== null) {
      tail = tail.next;
    }

    tail.next = listCopy.head;

    return result;
  }
}

const l1 = new LL();
console.log(l1.toArray());
l1.append(3);
l1.append(5);
l1.append(8);
l1.append(5);
l1.append(10);
l1.append(2);
l1.append(1);

console.log(l1.toArray());
console.log(l1.partition(5).toArray());
