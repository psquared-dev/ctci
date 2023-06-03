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
      let fast = curr;

      while (fast.next !== null) {
        if (fast.next.data == curr.data) {
          fast.next = fast.next.next;
        } else {
          fast = fast.next;
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
    let fast = curr;
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

  sum(list2) {
    const getDigit = (ptr) => {
      return ptr ? ptr.data : 0;
    };

    let ptr1 = this.head;
    let ptr2 = list2.head;
    let carry = 0;
    let result = 0;
    let pos = 0;
    const resultList = new LL();

    while (ptr1 || ptr2) {
      let s = getDigit(ptr1) + getDigit(ptr2) + carry;

      resultList.prepend(s % 10);

      carry = Math.floor(s / 10);
      result = Math.pow(10, pos++) * (s % 10) + result;

      if (ptr1) {
        ptr1 = ptr1.next;
      }

      if (ptr2) {
        ptr2 = ptr2.next;
      }
    }

    if (carry) {
      result = Math.pow(10, pos++) * (carry % 10) + result;
      resultList.prepend(carry);
    }

    return [result, resultList.toArray()];
  }

  findMid() {
    if (this.head == false) {
      return true;
    }

    let curr = this.head;
    let mid = curr;

    while (curr.next) {
      mid = mid.next;
      curr = curr.next;
      if (curr.next) {
        curr = curr.next;
      }
    }

    return mid;
  }

  isPalindrome() {
    if (this.head == false) {
      return true;
    }

    let mid = this.findMid();
    let midCopy = mid;

    const newList = new LL();

    while (midCopy) {
      newList.prepend(midCopy.data);
      midCopy = midCopy.next;
    }

    // console.log(mid);
    // console.log(newList.toArray());

    let curr = this.head;
    let newCurr = newList.head;

    while (curr !== mid) {
      if (curr.data !== newCurr.data) {
        return false;
      }

      curr = curr.next;
      newCurr = newCurr.next;
    }

    return true;
  }

  getKthNode(pos) {
    let curr = this.head;
    let count = 0;

    while (count !== pos) {
      curr = curr.next;
      count++;
    }

    return curr;
  }

  findIntersection(list) {
    let doIntersect = false;

    // console.log(this.kthLast(1));
    // console.log(list.kthLast(1));

    doIntersect = this.kthLast(1) === list.kthLast(1);

    if (doIntersect === false) {
      return null;
    }

    const len1 = this.length;
    const len2 = list.length;

    // console.log({ len1, len2 });

    const toSkip = Math.abs(len1 - len2);

    const longer = this.length > list.length ? this : list;
    const shorter = this.length < list.length ? this : list;

    let ptr1 = longer.getKthNode(toSkip);
    let ptr2 = shorter.head;

    while (ptr1 !== ptr2) {
      ptr1 = ptr1.next;
      ptr2 = ptr2.next;
    }

    return ptr1;
  }

  hasCycle() {
    if (this.head === null) {
      return this;
    }

    let slow = this.head;
    let fast = slow.next;

    while (fast.next) {
      if (slow === fast) {
        return true;
      }

      slow = slow.next;
      fast = fast.next;
      if (fast.next) {
        fast = fast.next;
      }
    }

    return false;
  }
}

const l1 = new LL();
l1.append(1);
l1.append(2);
l1.append(3);
l1.append(4);
l1.append(5);
l1.append(6);
l1.append(7);

console.log(l1.getKthNode(6));

l1.getKthNode(6).next = l1.head.next.next;

console.log(l1.getKthNode(6));

// console.log(l1.toArray());

console.log(l1.hasCycle());
