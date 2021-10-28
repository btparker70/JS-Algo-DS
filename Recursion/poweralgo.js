// this function accepts a base and exponent. 
// function should return the power of the bsae to the xponent. 
// this function should mimint he functionality of Math.pow()

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(base, exponent){
  if(exponent === 0) return 1;
return base *= power(base, (exponent - 1));
}
power(2, 4)

// 2 *= power(2, 3) => 2 *= power(2, 2) => 2 *= power(2, 1) => 2 *= 1
// 2 *= power(2, 3) => 2 *= power(2, 2) => 2 *= power(2, 1) => 2
// 2 *= power(2, 3) => 2 *= power(2, 2) => 2 *= 2
// 2 *= power(2, 3) => 2 *= 2 *= 2
// 2 *= 2 *= 2 *= 2
// same as 2^4