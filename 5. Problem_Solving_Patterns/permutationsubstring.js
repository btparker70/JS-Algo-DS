const permutationSubstring = (str, sub) => {
  let subMap = {};
  let subMapCopy = {};
  // if the char is already in the object +1 if not set to 1
  for (let char of sub) {
    if (subMap[char]) subMap[char]++;
    else subMap[char] = 1;
  }

  // if the char of str is found in subMap
  // -1 from subMap, move to the next char and see if it's in obj
  // if not reset the copy
  subMapCopy = subMap
  for (let char of str) {
    if (str[char] in subMap) subMap[char]--
  }
}