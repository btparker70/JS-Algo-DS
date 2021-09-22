// function that accepts a sorted array of integers
// find the first pair where the sum is 0
// return an array that includes both values that sum to 0
// or undefined if a pair doesn't exist.

// naive version
// this is time complexity O(n^2) and space complexity O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.lengt; i++) {
    for (let j = i + 1; j<arr.length; j++) {
      if(arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-2, -1, 0, 1, 2]);

