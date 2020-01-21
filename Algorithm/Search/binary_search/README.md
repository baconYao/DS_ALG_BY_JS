# Binary Search

* Binary search is a much faster form of search
* Rather than eliminating one element at a time, you can eliminate `half` of the remaining elements at a time
* Binary can only works on `sorted` arrays

# How to implement

## Divide and Conquer

* This function accepts sorted array and values
* Create a left pointer at the start of the array, and a right pointer at the end of the array
* While the left pointer comses before the right pointer:
    * Create a pointer in the middle
    * If you find the value you want, return the index
    * If the value is too small, move the left pointer up (you can move left pointer to the position of middle)
    * If the value is too large, move the right pointer doen (you can move right pointer to the position of middle)
* If you never find the value, retunr -1

# time complexity

* `Best`: O(1)
* `Avg`: O(log n)
* `Worst`: O(log n)