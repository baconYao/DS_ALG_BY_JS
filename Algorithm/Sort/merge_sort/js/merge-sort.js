function mergeTwoArray(arr1, arr2) {
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

function mergeSort(arr) {
  /* 
  * Using recursive method to implement sort
  * 
  * Args:
  *      arr {array}: an array is disorder
  * Return:
  *      a sorted and ascending array
  */

  if(arr.length <= 1) return arr;
  const mid = Math.floor(arr.length/2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return mergeTwoArray(left, right);
}


console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
console.log(mergeSort([2, 100, 99, 14, 87, 42, 32, 1]));