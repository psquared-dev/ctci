class Project {
  constructor(name) {
    this.children = [];
    this.map = {};
    this.dependencies = 0;
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getDependencies() {
    return this.dependencies;
  }

  incrementDependencies() {
    this.dependencies++;
  }

  decrementDependencies() {
    this.dependencies--;
  }

  getChildren() {
    return this.children;
  }

  addNeighbor(project) {
    if (!this.map[project.getName()]) {
      this.map[project.getName()] = project;
      this.children.push(project);
      project.incrementDependencies();
    }
  }

  toString() {
    return this.getName();
  }
}

class Graph {
  constructor() {
    //  projects
    this.nodes = [];
    this.map = {};
  }

  /**
   *
   * @param {string} projectName
   * @returns {Project}
   */

  getOrCreate(projectName) {
    if (!this.map[projectName]) {
      const project = new Project(projectName);
      this.nodes.push(project);
      this.map[projectName] = project;
    }

    return this.map[projectName];
  }

  addEdge(project1, project2) {
    const start = this.getOrCreate(project1);
    const end = this.getOrCreate(project2);
    start.addNeighbor(end);
  }
}

function addZeroDep(projects, order, offset) {
  for (const project of projects) {
    // console.log(graph.map[project]);
    if (project.dependencies === 0) {
      order[offset] = project;
      offset++;
    }
  }

  return offset;
}

function buildOrder(projects, dependencies) {
  const graph = new Graph();
  for (const project of projects) {
    graph.getOrCreate(project);
  }

  for (const dependency of dependencies) {
    graph.addEdge(dependency[0], dependency[1]);
  }

  // Final order to be stored here
  const order = [];

  let endOfList;

  console.dir(graph);

  endOfList = addZeroDep(graph.nodes, order, 0);

  //   console.log(order);

  let curr = 0;

  while (curr < order.length) {
    const project = order[curr];

    if (project === undefined) {
      console.log("Build fail.");
      return null;
    }

    curr++;

    const children = project.getChildren();

    for (const child of children) {
      child.decrementDependencies();
    }

    endOfList = addZeroDep(children, order, endOfList);
  }

  let output = "";

  order.forEach((project) => {
    output += `${project.getName()} `;
  });

  console.log(output);
}

// const projects = ["a", "b", "c", "d", "e", "f"];
// const dependencies = [
//   ["a", "d"],
//   ["f", "b"],
//   ["b", "d"],
//   ["f", "a"],
//   ["d", "c"],
// ];

const projects = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const dependencies = [
  ["a", "b"],
  ["b", "c"],
  ["a", "c"],
  ["a", "c"],
  ["d", "e"],
  ["b", "d"],
  ["e", "f"],
  ["a", "f"],
  ["h", "i"],
  ["h", "j"],
  ["i", "j"],
  ["g", "j"],
];

buildOrder(projects, dependencies);
