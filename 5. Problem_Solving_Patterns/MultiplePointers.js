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

// refacotred solution
function sumZeroRefactored(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if(sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// this refactored function works its way from the outside in
// that is, it starts from 0 and the last idex
// and compares them. if they dont sum  to 0
// it brings in the indicies until it finds a match
// time complexity O(n) space complexity O(1)