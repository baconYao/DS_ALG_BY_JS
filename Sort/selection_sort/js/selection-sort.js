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
        let sv_i = i;   // the index of the smallest value and the initial value is equal to i used to be basis
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

console.log(mySelectionSort([95,24,53,46,11,66,72,1]));
console.log(mySelectionSort([95,24,53,46,53,66,72,1,95,34,-472,9,105,-2]));
console.log(mySelectionSort([5,1,2,3,4]));