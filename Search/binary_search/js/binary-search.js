'use strict';

function binarySearch(sorted_array, value) {
    /* 
     * Args:
     *      sorted_array {array}: an array which was sorted
     *      value : a value to be searched
     * Return:
     *      if found: return the index of target element
     *      else: return -1
     */

    // check head and tail value
    if(sorted_array[0] == value) return 0;
    let arr_length = sorted_array.length;
    if(sorted_array[arr_length-1] == value) return (arr_length - 1);
    
    // initial
    let lp = 0;    // left point
    let rp = arr_length - 1;   //right point
    let mp = Math.floor(rp / 2);    // middle

    while(true) {
        if (mp == lp || mp == rp) return -1;
        if (sorted_array[mp] == value) return mp;

        if (sorted_array[mp] < value) {
            // move lp to mp
            lp = mp;
            // recalculate mp
            let offset = Math.floor((rp - lp) / 2);
            mp = lp + offset;
        } else if (sorted_array[mp] > value) {
            // move rp to mp
            rp = mp;
            // recalculate mp
            let offset = Math.floor((rp - lp) / 2);
            mp = rp - offset;
        }
    }
}

console.log(binarySearch([1,2,3,5,7,9,11,13,14,15,20,26,27,28,29,30,31,35,37,38,39,40], 23));
console.log(binarySearch([1,2,3,5,7,9,11,13,14,15,20,26,27,28,29,30,31,35,37,38,39,40], 11));
console.log(binarySearch([1,3,5,7,9,11,13,15], 15));
console.log(binarySearch([1,3,5,7,9,11,13,15], 1));
console.log(binarySearch([1,3,5,7,9,11,13,15], 2));
