A heap is a tree strucutre but it has different rules
MaxBinaryHeap - all parent nodes are always larger than child nodes
MinBinaryHeap - all parent nodes are always smaller than child nodes

Each node has at most 2 children but there is no order to left and right
left is added first
      41                                               1
  39      33                                      2          3
18  27  12                                     17    19    36    7
                                            25   100

Binary Heaps are used to implement Priority Queues, which are
very commonly used data structures

They are also used quiet a bit, with graph treversal algorithms

You can represent this in an array
For any index of array n...
the left child is stored at 2n + 1
the right child is at 2n + 2

for any child node at index n...
its parent is at index (n-1)/2 floored