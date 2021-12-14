// store the first element as the smallest value you've seen so far
// Compare this item to the next item in the array...
    // until you find a smaller number
// If a smaller number is found, designate that smaller number to
    // be the new "minimum" and continue until the end of the array
// If the "minimum" is not the value (index) you initially began with
    // swap the two values
// Repeat this with the next element until the array is sorted

// import { swap } from "../Bubble Sort/Swap"

// proper

const swap = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

const selectionSort2 = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    let smallest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallest]) {
        smallest = j
      }
    }
    if (i !== smallest) swap(arr, i, lowest);
  }
  return arr;
}
selectionSort2([4, 2, 7, 5, 2, 3, 10, 9])


// not terribly efficient
// O(n2)
// better than bubble sort ONLY when you're worried about memory
