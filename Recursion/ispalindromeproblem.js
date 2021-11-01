// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false



function isPalindrome(str){
  if(str[0] !== str[str.length - 1]) return false;
  if(str.length === 1 || 0) return true;
  return isPalindrome(str.slice(1,-1))
}

console.log(isPalindrome('tacocat'));
console.log(isPalindrome('abcdefg'))

// isPalindrome Solution

function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false;
}