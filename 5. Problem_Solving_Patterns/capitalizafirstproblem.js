function capitalizeFirst (arrayOfStrings) {
  let upperCaseArr = []
 for(let i = -1; i <= arrayOfStrings.length ;i++) {
upperCaseArr.push(arrayOfStrings[0].charAt(0).toUpperCase() + arrayOfStrings[0].slice(1));

arrayOfStrings.shift()
 }
  return upperCaseArr
}

capitalizeFirst(['car','taco','banana'])