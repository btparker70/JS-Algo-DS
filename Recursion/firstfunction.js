// 2 parts of a recursive function
// invoking same function over and over
// and it has to have a base case/stopping point
// different input/recursive call (invocation with differen data)

function countDown(num) {
  if(num <= 0) {
    console.log('All done');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);
// 5
// 4
// 3
// 2
// 1
// All done