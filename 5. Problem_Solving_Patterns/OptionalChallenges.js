// check if 2 numbers have the same digits any order

function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }


// check if list of arguments has duplicates
// ex (1, 2, 3, 3)

function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  let collection = {};
  for (let val in arguments) {
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
      if(collection[key] !== 1) {
          return true
      }
  }
  return false
}

// given an array and a target, find if any pairs averaged
// equaal the target [1, 2, 3], 2.5

function averagePair(arr, target){
    // add whatever parameters you deem necessary - good luck!
    let left = 0;
    let right = arr.length - 1;
    
    if (arr.length === 0 ) return false;
    
    while (left < right) {
        let average = (arr[left] + arr[right]) / 2;
        if (average === target) {
            return true;
        } else if (average > target) {
            right--;
        } else {
            left++;
        }
    }
    return false;
  }

  // function takes 2 strings
  // sees if the chars in str1 can fit in order in str2
function isSubsequence(str1, str2) {
    let pointer = 0;
    
    for (let char in str2) {
        if (str2[char] === str1[pointer]) {
            pointer++;
        }
        if (pointer === str1.length) {
            return true
        }
    }
    return false;
}