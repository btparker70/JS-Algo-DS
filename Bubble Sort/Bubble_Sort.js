import { swap } from "./Swap";

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const bubbleSort = (arr) => {
  do {
    let swapped = false;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        swap(arr, arr[i], arr[i - 1]);
        swapped = true;
      }
    }
  } while (swapped);
  console.log(arr);
};
bubbleSort([5, 3, 4, 6, 7, 5, 4, 2, 2, 4, 5, 1, 2]);

// 
const bubbleSort2 = (arr) => {
  var noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
};

// ES2015

const bubbleSort3 = (arr) => {
  let swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      swap(arr, j, j + 1);
    }
  }
  return arr;
};


// complexity
// average O(n2)
// best O(n)
// worst