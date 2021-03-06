class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode; 
      return this;
    }
    let current = this.root;
    while(true) {
      if(val === current.val) return undefined
      if(val < current.val) {
        if(current.left === null) {
          current.left = newNode;
          return this;
        } current = current.left;
      } else {
        if(current.right === null) {
          current.right = newNode;
          return this;
        } current = current.right;
      }
    }
  }
  find(val) {
    if(this.root === null) return false;
    let current = this.root;
    while(true) {
      if(val === current.val) return true
      if(val < current.val) {
        if(current.left === null || val > current.left) return false;
        current = current.left;
      } else {
        if(current.right === null || val > current.right) return false;
        current = current.right;
      }
    }
  }
  breadthFirstSearch() {
    let queue = [];
    let data = [];
    let node = this.root
    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      data.push(node.val);
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    return data;
  }
  depthFirstSearchPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);

    return data;
  }
  depthFirstSearchPostOrder() {
    let data = [];
    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node);
    }
    traverse(this.root);

    return data;
  }
  depthFirstSearchInOrder() {
    let data = [];
    function traverse(node) {
      node.left && traverse(node.left);
      data.push(node);
     node.right && traverse(node.right);
      
    }
    traverse(this.root);

    return data;
  }
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)