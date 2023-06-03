class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }

  toString() {
    return this.data;
  }
}

class Queue {
  constructor(node = null) {
    this.head = node;
    this.tail = null;
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

  enqueue(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    return this;
  }

  dequeue(data) {
    if (this.isEmpty()) {
      return null;
    }

    const item = this.head.data;
    this.head = this.head.next;
    return item;
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

  toString() {
    return this.toArray();
  }
}

module.exports = Queue;

// const q1 = new Queue();
// console.log(q1.isEmpty());

// q1.enqueue(10);
// q1.enqueue(20);
// q1.enqueue(30);
// q1.enqueue(40);

// // console.log(q1.peek());

// console.log(q1.dequeue());
// console.log(q1.dequeue());
// console.log(q1.dequeue());
// console.log(q1.dequeue());

// console.log(q1.toString());
