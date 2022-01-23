class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this
  }
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    if (!this.head) return !!this.push(val);
    const newNode = new Node(val);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return newNode;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter, current;
    if (index < this.length/2) {
      current = this.head;
      counter = 0;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
      return current;
    } else {
      current = this.tail;
      counter = this.length - 1;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
      return current;
    }
  }
  set(index, val) {
    let targetNode = this.get(index);
    if (targetNode) { 
      targetNode.val = val;
      return true;
    } return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    const newNode = new Node(val);
    let previousNode = this.get(index - 1);
    let nextNode = previousNode.next;

    previousNode.next = newNode, newNode.prev = previousNode;
    newNode.next = nextNode, nextNode.prev = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return this.pop();
    if (index === 0) return this.shift();

    const targetNode = this.get(index);
    const previousNode = targetNode.prev;
    const nextNode = targetNode.next;
    targetNode.prev = null, targetNode.next = null;
    previousNode.next = nextNode, nextNode.prev = previousNode;
    this.length--;
    return targetNode;
  }
}

const list = new DoublyLinkedList;