Section 5 notes

steps to improve
  - devise a plan for solving problems
  - master common problem solving patterns

There are common patterns that apply to many types of problems
  - frequency counters
  - multiple pointers
  - slinding window
  - divide and conquer
  - dynamic programming
  - greedy algorithms
  - backtracking

Frequency counters
  - this pattern uses objects or sets to collect values/frequencies of values
  - this can often avoid the need for nested loops or O(n^2) operations with arrays/strings
  - this pattern is great for problems like:
    - compare 2 strings, arrays or numbers for matching values, etc

Multiple Pointers
  - Creating pointers or values that correspond to an index or position and move towards the beginning, end of middle based on a certain condition
  - very efficient for solving problems with minimal space complexity as well
  - if we have something like an array, a string, singly-linked list or doubly-linked list
    - use 2 references(like i and j) and meet in the middle somewhere

Sliding Window
 -  this pattern involves creatind a window which can either be an array or number from one position to another
 -  depending ona  certain condition, window either increases or closes (and a new window is created)
 -  useful for keeping track of a subset of data in an array/string

Divide and Conquer
  - This pattern involves dividing a data set into smaller cunks and then repeating a process with a subset of data
  - this pattern can tremendously decrease time complexity
  - binary search trees
  - take an array, list etc
    - instead of starting from left to right, divide it into pieces/chunks
