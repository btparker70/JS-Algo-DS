1. Recursion is a way of thinking about solving a problem
  - taking one problem, doing it over and over, on a smaller piece
  - or some changing piece until you get to the base case
2. What is recursion?
  - a process ( a function in our case) that calls itself
  - ends at the base case / end point
3. Why use recursion?
  - it's everywhere
  - JSON.parse/JSON.stringify is recursive function
  - document.getElementByID and DOM traversal algorithms
    - dom is the nested trees of divs/window
  - object traversal
  - we will see it with more complex data structures
4. What happens when a recursive function is called?
  - there is a built in data structure that managers what happens when functions are invoked
    - the call stack is what controls this
    - stack is a data structure
    - function is placed on the top of the stack
    - when JS sees the return keywork the compiler removes (pop) the top of the call stack
    - as functions are invoked they are added to the top of the stack, then removed/popped off when they are done
    - recursion works with the call stack a lot
    - it keep spushing new function/the same function over and over on the call stack
5. problems
  - sometimes you dont have a base case and it never ends
  - your base case is wrong
  - exceede call stack size (stack overflow!)
  - forgetting to retunr or returning the wrong thing!
6. pure recusion tips
  - for arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them
  - remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
  - to make copies of objects use Object.assign, or the spread operator