# Insertion Sort

Builds up the sort by gradually creating a larger left half which is always sorted

```javascript
// s: sorted sequence
// t: target which will be insert into sorted array

 s  t
[5, 3, 4, 1, 2]
 s  s  t
[3, 5, 4, 1, 2]
 s  s  s  t
[3, 4, 5, 1, 2]
 s  s  s  s  t
[1, 3, 4, 5, 2]
 s  s  s  s  s
[1, 2, 3, 4, 5]
```

# How to implement it

* Start by picking the second element in the array
* Now compare the second element with the one before it and swap if necessary
* Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e the left side) to place the element in the correct place.
* Repeat until the array is sorted

# time complexity
