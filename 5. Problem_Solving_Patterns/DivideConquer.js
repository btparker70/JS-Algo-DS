// Binary search
// divide array to find a value
// Log(n) time complexity
// take large set of data, divide into small subsets
function binarySearch(array, val) {
  let min = 0;
  let max = array.length - 1;

  while(min <= man) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if(array[middle] < val) {
      min = middle + 1;
    }
    else if (array[middle] > val) {
      max = middle - 1;
    }
    else {
      return middle;
    }
  }
  return -1;
}