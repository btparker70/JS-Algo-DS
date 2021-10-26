// just like helpermethod file
// this is purely recusive
function collectOddValues(arr) {
  let newArr = [];
  // is it empty?
  if(arr.length === 0) {
    return newArr;
  }
  // is it odd?
  if(arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
// [1].concat(collectOddValues([2, 3, 4, 5]))
// new arr is empty because 2 is not odd
// [].concat(collectOddValues([3, 4, 5]))
// [3].concat(collectOddValues([4, 5]))
// [].concat(collectOddValues([5]))
// [5].concat(collectOddValues([]))
// the array is empty so we return newArr
// returns [] and concats with previous returns [5]
// [].concat([5]) which returns [5]
// [3].concat([5]) which returns [3, 5]
// [].concat([3, 5])  which returns [3, 5]
// [1].concat([3, 5])  which returns [1, 3, 5]
// we are concat all the arrays at the end of the function