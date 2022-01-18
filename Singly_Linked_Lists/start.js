// takes a piece of data: the value
// references the next node: next

class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    var newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
}

// var first = new Node('Hi')
// first.next = new Node('Hi There!')
// first.next.next = new Node("Howdy")
// first.next.next.next = new Node("Bojour")

const list = new SinglyLinkedList