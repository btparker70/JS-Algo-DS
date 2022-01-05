const merge = (inputArr1, inputArr2) => {
  let arr = [];
  let i = 0;
  let j = 0;

  while(i < inputArr1.length && j < inputArr2.length) {
    if (inputArr1[i] < inputArr2[j]) {
      arr.push(inputArr1[i]);
      i++
    } else {
      arr.push(inputArr2[j]);
      j++
    }
  }
  while (i < inputArr1.length) {
    arr.push(inputArr1[i]);
    i++
  }
  while (j < inputArr2.length) {
    arr.push(inputArr2[j]);
    j++
  }
  return arr;
}

const mergeSort = (arr) => {
  if(arr.length <=1) return arr;
  const mid = Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([1, 10, 50, 2, 14, 99, 100])

