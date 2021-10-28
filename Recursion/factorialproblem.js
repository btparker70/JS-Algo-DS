// write a function factorial which accepts a number and returns
// the factorial of that number.
// a factorial is the product of an integer and all the itnergers below it
// facotial zero is always 1

//factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040

function factorial(integer){
  if(integer === 0) return 1;
  return integer *= factorial(integer - 1);
}

factorial(4);

// 4 *= factorial(3) => 3 *= factorial(2) => 2 *= factorial(1)