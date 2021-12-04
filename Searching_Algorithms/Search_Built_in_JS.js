// the native javascript sort method allows for a comparator function
// so that we can tell it how to sort. It takes a and b and we tell it the sort order on the return value

function numberCompare(num1, num2) {
  console.log(num1, num2, (num1-num2))
  return num1 - num2;
}

[ 6, 4, 15, 10].sort(numberCompare);
// [4, 6, 10, 15]

function compareByLen(str1, str2) {
  console.log(str1, str2, (str1-str2))
  return str1 - str2;
}

["blue", "yellow", "orange", "turquoise"].sort(compareByLen);

// these sort comparator functions basically evaluate if it's positive or negative
// if it's positive, they swap places. Negative they don't move.