const Queue = require("../chapter-03/Queue");

class Graph {
  constructor(order, isDirected = false) {
    this.vertices = order;
    this.edges = 0;
    this.adj = [];
    this.isDirected = isDirected;

    for (let index = 0; index < this.vertices; index++) {
      this.adj[index] = [];
    }
  }

  addEdge(startVertex, endVertex) {
    this.adj[startVertex].push(endVertex);
    this.edges++;
    if (this.isDirected === false) {
      this.adj[endVertex].push(startVertex);
      this.edges++;
    }
  }

  show() {
    let out = "";

    for (let i = 0; i < this.adj.length; i++) {
      out += `${i} -> `;
      for (let j = 0; j < this.adj[i].length; j++) {
        out += `${this.adj[i][j]} `;
      }
      out += `\n`;
    }

    return out;
  }

  bfs(startVertex) {
    const visited = [];
    const output = [];

    const q = new Queue();
    q.enqueue(startVertex);

    visited[startVertex] = true;

    while (q.isEmpty() === false) {
      const item = q.dequeue();
      output.push(item);
      for (const vertex of this.adj[item]) {
        if (!visited[vertex]) {
          q.enqueue(vertex);
          visited[vertex] = true;
        }
      }
    }

    return output;
  }

  routeExists(startVertex, endVertex) {
    const visited = [];

    const q = new Queue();
    q.enqueue(startVertex);

    visited[startVertex] = true;

    while (q.isEmpty() === false) {
      const item = q.dequeue();
      for (const vertex of this.adj[item]) {
        if (!visited[vertex]) {
          q.enqueue(vertex);
          visited[vertex] = true;

          if (vertex === endVertex) {
            return true;
          }
        }
      }
    }

    return false;
  }
}

const g1 = new Graph(8, (isDirected = true));

g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(0, 3);

g1.addEdge(1, 4);
g1.addEdge(2, 4);
g1.addEdge(2, 5);

g1.addEdge(3, 5);

g1.addEdge(4, 6);
g1.addEdge(5, 6);

console.log(g1.show());
console.log(g1.bfs(0));

console.log(g1.routeExists(0, 7));
