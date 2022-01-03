// Insertion sort:
// builds up the sort by gradually creating a large left half
// which is always sorted
// where do we place the () element
// [5, (3), 4, 1, 2]
// [3, 5, (4), 1, 2]
// [3, 4, 5, (1), 2]
// [1, 3, 4, 5, (2)]
// [1, 2, 3, 4, 5]
// take the () element and compare it to the previous element
// if prev element is large, go to next previous
// if prev element is smaller, insert next to it

// start by picking the 2nd element in the array
// compare it to the one before it
// swap if needed
// continue to next element

// O(n^2) worst case
// O(n) best case. good if mostly sorted. good for incoming data

function insertionSort(inputArr) {
  let n = inputArr.length;
      for (let i = 1; i < n; i++) {
          // Choosing the first element in our unsorted subarray
          let current = inputArr[i];
          // The last element of our sorted subarray
          let j = i-1; 
          while ((j > -1) && (current < inputArr[j])) {
              inputArr[j+1] = inputArr[j];
              j--;
          }
          inputArr[j+1] = current;
      }
  return inputArr;
}

insertionSort([3, 44, 1, 7, 32, 22, 15, 65])