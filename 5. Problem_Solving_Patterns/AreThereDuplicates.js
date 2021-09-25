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