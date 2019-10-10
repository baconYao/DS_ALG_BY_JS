'user strict';

function myBubbleSort(array, ascending=true) {
    /* 
    * Args:
    *      array {array}: an array is disorder
    *      ascending {boolean}: 
    *          If true: we want an ascending array
    *          else: descending array
    * Return:
    *      a sorted array
    */
    for(let i = array.length; i >= 0; i--) {
        for(let j = 0; j < i - 1 ; j++) {
            if(array[j] > array[j+1]) {
                tmp = array[j];
                array[j] = array[j+1];
                array[j+1] = tmp;
            }
        }
    }
    
    if(!ascending) {
        return array.reverse();
    }

    return array;
}

console.log(myBubbleSort([95,24,53,46,11,66,72,1]));
console.log(myBubbleSort([95,24,53,46,11,66,72,1], false));

console.log(myBubbleSort([95,24,53,46,11,24,72,95]));
console.log(myBubbleSort([95,24,53,46,11,24,72,95], false));