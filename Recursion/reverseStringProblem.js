// write a recursive function that takes a string
// and returns the string in reverse

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'


function reverse(str){
  if (str.length === 1) return str[0];
  return str.slice(-1) + reverse(str.substring(0, str.length - 1));
}

console.log(reverse('abc'))

// Reverse Solution

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}