class ThreeStack {
  constructor() {
    this.items = [];
    //  start index
    this.index = [0, 1, 2];
  }

  push(stack, data) {
    const idx = this.index[stack];
    this.items[idx] = data;
    this.index[stack] += 3;
  }

  pop(stack) {
    const idx = this.index[stack] - 3;
    const item = this.items[idx];
    const diff = this.index[stack] - 3;
    if (diff < 0) {
      this.index[stack] = stack;
    }

    return item;
  }
}

const s1 = new ThreeStack();

s1.push(0, 1);
s1.push(1, 11);
s1.push(2, 112);
s1.push(0, 2);
s1.push(1, 12);
s1.push(2, 354);
s1.push(2, 999);
s1.push(2, 100);

console.log(s1.pop(2));
console.log(s1.pop(2));
console.log(s1.pop(2));

console.log(s1);
