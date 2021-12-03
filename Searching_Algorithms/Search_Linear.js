// Linear search

const linearSearch = (arr, val) => {
  for ( i in arr ) {
    if ( arr[i] === val ) return i
  }
  return -1
}

// O(1) best case
// O(n) average case
// O(n) worst case