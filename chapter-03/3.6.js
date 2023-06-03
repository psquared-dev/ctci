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

class AnimalShelter {
  constructor() {
    this.dogs = new Queue();
    this.cats = new Queue();
  }

  xenqueue(animal) {
    if (animal.type === "dog") {
      this.dogs.enqueue(animal);
    } else {
      this.cats.enqueue(animal);
    }
  }

  dequeueAny() {
    const dog = this.dogs.peek();
    const cat = this.cats.peek();

    if (dog.id < cat.id) {
      return this.dogs.dequeue();
    } else {
      return this.cats.dequeue();
    }
  }

  dequeueDog() {
    return this.dogs.dequeue();
  }

  dequeueCat() {
    return this.cats.dequeue();
  }

  toString() {
    return {
      dogs: this.dogs.toArray(),
      cats: this.cats.toArray(),
    };
  }
}

const as = new AnimalShelter();
console.log(as);

as.xenqueue({ id: 1, type: "cat", name: "aa" });
as.xenqueue({ id: 2, type: "dog", name: "bb" });
as.xenqueue({ id: 3, type: "dog", name: "cc" });
as.xenqueue({ id: 4, type: "cat", name: "eee" });

// console.log(as.dequeueCat());
// console.log(as.dequeueCat());
// console.log(as.dequeueDog());
// console.log(as.dequeueDog());

console.log(as.dequeueAny());
console.log(as.dequeueAny());

console.log(as.toString());
