// anagrams
// given 2 strings, check if 2nd strng is an anagram
// ex. apple - papel // true

function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if (str1.length !== str2.length) {
      return false;
  }
  // create object to store the value and frequency that the letters occur in both strings
  let frequencyCounter = {};

  // store the them into the object here
for (let i = 0; i < str1.length; i++) {
  let letter = str1[i];
  frequencyCounter[letter] ? frequencyCounter[letter] += 1 : frequencyCounter[letter] = 1;
}

// compare if the index in the 2nd string is in the frequencycounter
// and remove 1 from the value if it is there
for (let i = 0; i < str2.length; i++) {
  let letter = str2[i];
  if(!frequencyCounter[letter]) {
    return false
  } else {
    frequencyCounter[letter] -= 1;
  }
}
  return true;
}

validAnagram('anagram', 'nagaram');