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

merge([1, 10, 50], [2, 14, 99, 100])