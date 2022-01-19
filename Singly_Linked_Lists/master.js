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
  traverse() {
    let current = this.head;
    while(current) {
      current = current.next;
    }
  }
  pop() {
    if(!this.head) return undefined;
    let current = this.head
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
      console.log(newTail)
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if(!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if(this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    
    this.length++;
    return this
  }
}

// var first = new Node('Hi')
// first.next = new Node('Hi There!')
// first.next.next = new Node("Howdy")
// first.next.next.next = new Node("Bojour")

const list = new SinglyLinkedList