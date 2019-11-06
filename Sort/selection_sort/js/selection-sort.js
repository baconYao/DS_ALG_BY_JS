'use strict';

function mySelectionSort(unSortedArr) {
    /* 
    * Args:
    *      unSortedArr {array}: an array is disorder
    * Return:
    *      a sorted and ascending array
    */
    var al = unSortedArr.length;
    for(let i = 0; i < al - 1; i++) {
        let sv_i = i;   // the index of the smallest value and the value is smaller than unSortedArr[i]
        for(let j = i + 1; j < al; j++) {
            if(unSortedArr[j] < unSortedArr[sv_i]) {
                sv_i = j;
            }   
        }
        if(sv_i != i) {         // used to judge whether swap or not
            let temp = unSortedArr[i];
            unSortedArr[i] = unSortedArr[sv_i];
            unSortedArr[sv_i] = temp;
        }
    }
    return unSortedArr;
}

function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => (
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    );
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[lowest]) {
                lowest = j;
            }
        }
        if(i !== lowest) swap(arr, i, lowest);
    }
    return arr
}

console.log(selectionSort([95,24,53,46,11,66,72,1]));
console.log(selectionSort([95,24,53,46,53,66,72,1,95,34,-472,9,105,-2]));
console.log(selectionSort([5,1,2,3,4]));

console.log(selectionSort([95,24,53,46,11,66,72,1]));
console.log(selectionSort([95,24,53,46,53,66,72,1,95,34,-472,9,105,-2]));
console.log(selectionSort([5,1,2,3,4]));