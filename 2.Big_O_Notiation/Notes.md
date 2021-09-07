1. Big O Notation is how we describe the performance of an algorithm
  - it gives usa numerical representation of this performance
  - usually, the best algorithm is the one you can get to to work. With large sets of data, algorithmic performance becomes more critial as it can save lots of time

2. Who cares?
  - it's important to have precise vocabulary to talk about how our code performs
  - helps us talk about tradeoffs between different approaches
  - it helps us find where code is crashing or pain points

3. what does better mean?
  - faster?
  - less memory-intensive?
  - more readable?

4. performance.now(); tells us how quickly something executes

5. time
  - different machine record different times
  - even the same machine will record different times

5. better way to count?
  - instead of time, we can count how many operations are required to run
  - operations: things like multiplication, addition, division
  - n * (n + 1) / 2 this is 3 operations or O(1)

6. Big O notation is how we can talk formally about how the runtime of an algorithm grows as the inputs grow

7. We say that an algorith is O(f(n)) if the number of simple operations the computer has to do is evnetually less than a constant times f(n), as n inreases
  - f(n) could be linerar (f(n) = n)
  - f(n) could be quadratic (f(n) = n^2)
  - f(n) could be constant (f(n) = 1)
  - f(n) could be something else entirely different

8. Loops are O(n) because as n grows, the number of cycles in the loop grows with it
  - nesting a loop increases it by one factor ex. O(n^2)

9. Big O shorthands
  - arithmetic operations are constant
  - variable assignment is constant
  - accessing elements in an array by index or an object by key is constant
  - in a loop the complexity is the length of the loop times the complexity of whatever happens inside of the loop

10. space complexity
  - the amount of memory that's taken up
  - most primatives (booleans, numbers, undefined, null) are constant space
  - strings require O(n) space where n is length
  - reference types are generally O(n) where n is length of an array or number of keys in an object

11. what are logs?
  - log2(8) = 3 .
    - 2 to the 'what' power equals 8?
    - 2^3 = 8
  - log2(value) = exponent ==> 2^exponent = value

12. who cares?
  - certian searching algorithms have logarithmic time complexity
  - efficient sorting algorithms involve logarithms
  - recursion sometimes involves logarithmic space complexity

13. recap
  - to analyze the performance of an algorith, we use big O notation
  - big O notation can give us a high level of understanding of the time or space compelxcity of an algorithm
  - big O doesn't care about the percirion, only about general trends (linear, quadratic, constnat)
  - the time or space complexity depends only on the algo, not the hardware used to run it