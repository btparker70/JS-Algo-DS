function sumRange(num) {
  if(num === 1) return 1;
  return num + sumRange(num-1);
}

sumRange(3)
  // returns 3 + sumRange(2) which...
                    // returns 2 + sumRange(1) which...
                                    // returns 1 the base case
// these all have an actual value so the call stack walks backwards
// 3 + sumRange(2)
          // 2 + 1 then...
// 3 + 3 then...
// 6

// THE FUNCTIONS ARE WAITING TO GET THE VALUE FROM OTHER FUNCTIONS 