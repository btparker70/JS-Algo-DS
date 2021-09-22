// countUniqueValues
// function which accepts sorted array
// counts the unique values in the array
// every time i finds a new value, increase counter by 1
function countUniqueValues(arr) {
  let counter = 0;
  for(let i = 0; i<arr.length; i++) {
    if(i === 0 && arr[0] && counter === 0) {
      counter++;
    };
    if(i > 0) {
      if(arr[i-1] !== arr[i]) {
        counter++;
      }
    }
  }
  console.log(counter)
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); //7

// solution given:
function countUniqueValues2(arr) {
  var i = 0;
  for (var j = 1; j <arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[1] = arr[j];
    }
  }
  return i + 1;
}