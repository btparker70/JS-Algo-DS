// take an array
// find the largest sum of a consecutive set of indicies
// ex [1, 2, 3, 4, 5, 6, 7] n = 3. [5, 6, 7] is the largest
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// in this solution, you sum the first section based on num
// then you remove the 1st index and add one to the end
// if it's larger than the previous temp sum
// this is your new max sum