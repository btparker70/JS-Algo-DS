// const str = 'nnhsuieaero';
// const sub = 'summer';

// const permutationSubstring = (str, sub) => {
//   let subMap = {};
//   let subMapCopy = {};
//   let counter = 0;
//   let counterCopy = 0;

//   for (let char of sub) {
//     if (subMap[char]) {
//       subMap[char]++;
//       counter++;
//     }
//     else {
//       subMap[char] = 1;
//       counter++;
//     }
//   }

//   subMapCopy = subMap;
//   counterCopy = counter;

//   for (let char of str) {
//     console.log(counterCopy)
//     if (counterCopy === 0) return true;
//     if (char in subMapCopy) {
//       if (subMapCopy[char] !== 0) {
//         subMapCopy[char]--;
//         counterCopy--;
//       }
//     }
//     else {
//       subMapCopy = subMap;
//       counterCopy = counter;
//     }
//   }
//   return false;
// }


const str = 'ntnAtsuiPlwuan';
const sub = 'Austin'

var permutationSubstring = function (str, sub) {
  let arr = sub.split("");
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    for (let j = 0; j < arr.length; j++) {
      if (!arr.includes(char)) {
        console.log('2: char: ' + char, 'str[j]: ' + str[j])
        arr = sub.split("")
      }
      if (arr[j] === char) {
        console.log(arr[j])
        arr.splice(j, 1);
        console.log('1: char: ' + char, 'arr[j]: ' + arr[j], arr)
      }
      if (arr.length === 0) {
        return true;
      }

    }
  }
  return false;
};

permutationSubstring(str, sub);