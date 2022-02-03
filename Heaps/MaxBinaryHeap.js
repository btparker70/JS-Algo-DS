class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  insert(element) {
    this.values.push();
    this.bubbleUp();

    let last = this.values.at(-1);
    let parent = Math.floor((this.values.at(-1) - 1) / 2);
    while(val > parent) {
      const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
      };
      swap(this.values, last, parent)
    }
  }
  bubbleUp(){
    let index = this.values.length - 1;
    const element = this.values[index];
    while(index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if(element <= parent) break;
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55)