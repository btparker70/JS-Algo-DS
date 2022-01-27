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
}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)