function capitalizeFirst (arrayOfStrings) {
  let upperCaseArr = []
 for(let i = -1; i <= arrayOfStrings.length ;i++) {
  upperCaseArr.push(arrayOfStrings[0].charAt(0).toUpperCase() + arrayOfStrings[0].slice(1));
  arrayOfStrings.shift()
 }
  return upperCaseArr
}

capitalizeFirst(['car','taco','banana'])

//solution

function capitalizeWords(array) {
  if(array.length === 1) return [array[0].toUpperCase()];

  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}