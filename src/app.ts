class TreeNode {
  value: any;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root: TreeNode | null;
  constructor() {
    this.root = null;
  }

  insert(value: any) {
    if (!this.root) {
      this.root = new TreeNode(value);
      return this;
    }

    return this.set(this.root, value);
  }

  find(value: any) {
    if (!this.root) return null;

    return this.get(this.root, value);
  }

  state(node: TreeNode | null, value: any) {
    if (value === node.value) return "EQUAL";
    if (value > node.value) return "RIGHT";
    if (value < node.value) return "LEFT";
    return null;
  }

  get(node: TreeNode | null, value: any) {
    if (!node) return null;

    switch (this.state(node, value)) {
      case "EQUAL":
        return node;
      case "RIGHT":
        return this.get(node.right, value);
      case "LEFT":
        return this.get(node.left, value);
      default:
        return null;
    }
  }

  set(node: TreeNode | null, value: any) {
    switch (this.state(node, value)) {
      case "EQUAL":
        return null;
      case "RIGHT": {
        if (!node.right) {
          node.right = new TreeNode(value);
          return this;
        }

        return this.set(node.right, value);
      }
      case "LEFT": {
        if (!node.left) {
          node.left = new TreeNode(value);
          return this;
        }

        return this.set(node.left, value);
      }
      default:
        return null;
    }
  }

  // 전위 탐색
  DFS_PreOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node: TreeNode | null, visited: number[]) {
      visited.push(node.value);

      if (node.left) {
        traverse(node.left, visited);
      }

      if (node.right) {
        traverse(node.right, visited);
      }
    }

    traverse(current, visited);

    return visited;
  }

  // 후위 탐색
  DFS_PostOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node: TreeNode | null, visited: number[]) {
      if (node.left) {
        traverse(node.left, visited);
      }

      if (node.right) {
        traverse(node.right, visited);
      }

      visited.push(node.value);
    }

    traverse(current, visited);

    return visited;
  }

  // 정위 탐색
  DFS_InOrder() {
    let visited = [];
    let current = this.root;

    function traverse(node: TreeNode | null, visited: number[]) {
      if (node.left) {
        traverse(node.left, visited);
      }

      visited.push(node.value);

      if (node.right) {
        traverse(node.right, visited);
      }
    }

    traverse(current, visited);

    return visited;
  }
}

function breadthFirstSearch(node: TreeNode) {
  let queue = [node];
  let visited = [];

  while (queue.length !== 0) {
    const dequeueNode = queue.shift();
    visited.push(dequeueNode.value);

    if (dequeueNode.left) {
      queue.push(dequeueNode.left);
    }

    if (dequeueNode.right) {
      queue.push(dequeueNode.right);
    }
  }

  return visited;
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);
console.log(tree.DFS_InOrder());
