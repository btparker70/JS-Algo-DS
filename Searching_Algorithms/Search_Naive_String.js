const naiveStringSearch = (str, pattern) => {
  let counter = 0;
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === pattern[j]) {
      if (j === pattern.length - 1) {
        counter++;
      }
      j++;
    } else {
      j = 0;
    }
  }
  return counter;
};

naiveStringSearch("bbqhello bbq baby", "bbq")