// classic recursion function
// 4!
// this is 4x3x2x1; 4*3*2*1
// you could do this with a for loop
function factorialLoop(num){
  let total = 1;
  for(let i = num; i > 0; i--){
    total *= i
  }
  return total;
}

// here's the same thing recursively
function factorial(num) {
  if(num === 1) return 1
  return num * factorial(num - 1)
}
// 4 * factorial(3)
        // 3 * factorial(2)
                // 2 * 1
