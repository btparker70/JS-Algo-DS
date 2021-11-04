function palindrome(str){
  if(str.length === 1 || str.length === 0) return true
  if(str[0] !== str[str.length - 1]) return false
  return palindrome(str.slice(1, -1))
  }
  
  
  // escape/base terminates the fucntion
  // recursive statement
  
  palindrome('abcdefg');
  palindrome('racecar');