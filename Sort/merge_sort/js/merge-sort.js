function myMergeSort(arr1, arr2) {
  /* 
  * Args:
  *      arr1 {array}: an array is disorder
  *      arr2 {array}: an array is disorder
  * Return:
  *      a sorted and ascending array
  */

  const mergedArray = [];
  var i = 0, j = 0;
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while(i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++
  }

  while(j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++
  }

  return mergedArray;
}

console.log(myMergeSort([1, 10, 50], [2, 14, 99, 100]));
console.log(myMergeSort([], [2, 14, 99, 100]));