class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }

  toString() {
    return this.data;
  }
}

class Stack {
  constructor(node = null) {
    this.head = node;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.head.data;
    this.head = this.head.next;
    return item;
  }

  isEmpty() {
    return this.head === null ? true : false;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.head.data;
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
}

const s1 = new Stack();
console.log(s1.isEmpty());

s1.push(10);
s1.push(20);
s1.push(30);
s1.push(40);

console.log(s1.pop());
console.log(s1.pop());
console.log(s1.pop());

console.log(s1.peek());

console.log(s1.toArray());
