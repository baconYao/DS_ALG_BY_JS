// Create a function that merge two sorted arrays:
// merge_sorted_arrays([0,3,4,31], [4,6,30])
// [0, 3, 4, 4, 6, 30, 31]

'use strict';

function merge_sorted_arrays(arr1, arr2) {
  if(!Array.isArray(arr1) || !Array.isArray(arr2) ) {
    return "Input is invalid"
  }

  if(arr1.length == 0) {
    return arr2;
  } else if(arr2.length == 0) {
    return arr1;
  }

  const mergedArray = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1, j =1;

  while(array1Item || array2Item) {
    if(array2Item === undefined || array1Item <= array2Item) {
      mergedArray.push(array1Item);
      array1Item = arr1[i++];
    } else {
      mergedArray.push(array2Item);
      array2Item = arr2[j++];
    }
  }

  return mergedArray;
}

var res = merge_sorted_arrays([0,3,4,31], [4,6,30,39]);
console.log(res);
