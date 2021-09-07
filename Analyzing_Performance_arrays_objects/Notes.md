1. Objects are unordered data structures stored in key-pairs
2. When to use objects?
  - when order doesn't matter
  - when you need fast access/insertion/removal
3. Big O of Objects
  - insertion O(1)
  - removal O(1)
  - searching O(n)
  - access O(1)
4. Big O of Objects Methods
  - object.keys O(n)
  - object.values  O(n)
  - object.entries  O(n)
  - hasOwnProperty  O(1)
5. When to use arrays
  - when you need order
  - when you need fast access/insetion and removal
  - best to add/remove to the end (push/pop)
6. Big O of Arrays
  - insetion it depends
  - removal it depends
  - searching O(n)
  - access  O(1)
7. Adding
  - adding to the beginning of an array means you need to reindex the entries after, which is O(n)
8. Indexing
  - array indecies are known, so finding them is O(1)