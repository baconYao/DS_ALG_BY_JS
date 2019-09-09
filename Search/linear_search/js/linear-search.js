'use strict';

/* 
 * This function accepts an array and a value
 * Loop through the array and check if the current array element is equal to the value
 * If it is, return the index at which the element is found
 * If the value is never found, return -1
 */

const linearSearch = (array, value) => {
    if (array == null || array.length < 1 || value == null) return -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i; 
    }
    return -1;
}

console.log(linearSearch(["A","b","C"], "s"));
console.log(linearSearch(["A","b","K","C"], "K"));