// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// 1, 1, 2, 3, 5, 8, 13, 21
// we wnat the function to run recursively as many times as n
// it should always start with 1
// 1, 1, 2, 3, 5, 8, 13, 21
// 1 fib(n) => 
// (x - 1) + x
// 1 + 1

function fib(n){
  if(n <= 2) return 1;
  return fib(n-1) + fib(n-2)
}
