// write a function called productofarray whoch takes in an array
// of numbers and returns the product of them all


// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// 1 *= productOfArray([2, 3]) => 2 *= productOfArray([3]) => 3

function productOfArray(arr) {
  if(arr.length === 1) return arr[0];
  return arr[0] *= productOfArray(arr.slice(1));
}