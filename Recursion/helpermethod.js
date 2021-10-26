// helper method recursion
// we have 2 function
// outer function that isnt recursive
// and inside we have a recursive function
function collectOdds(arr){
  let result = [];

  function helper(helperInput) {
    if(helperInput.length === 0) {
      return;
    }

    if(helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }

  helper(arr)

  return result;
}
collectOdds([1, 2, 3, 4, 5, 6])
// we do it like this because if we tried to define result within helper
// it would get redefined to an empty array every time