# Merge Sort

* It's a combination of two things - merging and sorting
* Exploits the fact that array of 0 or 1 element are always sorted
* Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up an newly sorted array

```bash
            [8, 3, 5, 4, 7, 6, 1, 2]

        [8, 3, 5, 4]        [7, 6, 1, 2]

    [8, 3]      [5, 4]   [7, 6]      [1, 2]

   [8]  [3]    [5]  [4] [7]  [6]    [1]  [2]

    [3, 8]      [4, 5]   [6, 7]      [1, 2]

        [3, 4, 5, 8]         [1, 2, 6, 7]

            [1, 2, 3, 4, 5, 6, 7, 8]
```

# How to implement

### This is loop method

* Create an empty array, take a look at the smallest values in each input array
* While there are still values we haven't looked at...
    * If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    * If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    * Once we exhaust one array, push in all remaining values from the other array

### This is recursive method

* Break up the array into halves until you have arrays that are empty or have one element
* Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
* Once the array has been merged back together, return the mergerd (and sorted) array

# time complexity
