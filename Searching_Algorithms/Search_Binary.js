// Binary Search
// faster than linear
// eliminate half the array at a time
// sorted arrays only
const binarySearch2 = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let pointer = Math.floor((left + right) / 2);
  while (arr[pointer] !== val && left <= right) {
    if (arr[pointer] < val) left = pointer + 1;
    else right = pointer - 1;
    pointer = Math.floor((right + left) / 2);
  }
  return arr[pointer] === val ? pointer : -1;
};
