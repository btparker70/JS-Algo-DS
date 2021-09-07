// function that sums a list of numbers starting from 1
function addUpTo(n) {
  let total = 0;
  for (i = 1; i <=n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);