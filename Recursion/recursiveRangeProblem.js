// sum the numbers in the range

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55 

function recursiveRange(range){
  if(range === 1) return 1;
  return range += recursiveRange(range - 1);
}

console.log(recursiveRange(6))