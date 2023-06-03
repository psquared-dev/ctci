class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  toString() {
    return this.data;
  }
}

function BTFromArr(arr) {
  if (arr.length === 3) {
    return new Node(arr[1], new Node(arr[0]), new Node(arr[2]));
  }

  if (arr.length === 2) {
    return new Node(arr[1], new Node(arr[0]), null);
  }

  const mid = Math.floor((arr.length - 1) / 2);

  const parent = new Node(arr[mid]);
  parent.left = BTFromArr(arr.slice(0, mid));
  parent.right = BTFromArr(arr.slice(mid + 1));

  return parent;
}

const a = [1, 5, 9, 15, 20, 21];
console.log(BTFromArr(a));
