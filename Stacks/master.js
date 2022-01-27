class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    const temp = this.first
    if (this.size === 1) {
      this.first = null, this.last = null;
    } 
    this.first = this.first.next;
    this.size--;
    return temp.val
  }
}
const stack = new Stack;
stack.push(1)
stack.push('a')