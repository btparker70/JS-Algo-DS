// compare 2 arrays. 2nd array returns true if it contains the squares of the first
// naive
// this is a nested loop and runs O(n^2)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2)
    arr2.splice(correctIndex, 1)
  }
  return true;
}

// improved
function same2(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1 ) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2 ) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)){
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true;
}

// here we use 2 objects to count the frequency of individual values in the arrays
// [1, 2, 2, 3] = {1: 1, 2: 2, 3: 1}
// then it checks the 2nd object to see if there's a square
// if there is a square for that number, check if there's the correct amount of squares in the 2nd object
// this is O(n)

