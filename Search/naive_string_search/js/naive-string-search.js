'use strict';

function myNavieStringSearch(ls, ss) {
    /* Count substring from long string
     * Args:
     *      ls: long string
     *      ss: substring
     * Return:
     *      count
     */

    let count = 0;

    let i = 0;
    while(i < ls.length) {
        if(ls[i] != ss[0]) {
            i++;
        } else {
            let j = 0;
            while(j < ss.length) {
                if(ls[i] == ss[j]) {
                    i++;
                    j++;
                } else {
                    i++;
                    break;
                }
            }
            if(j === ss.length) {
                count++;
            }
        }
    }

    return count;
}

console.log(myNavieStringSearch("wowomgzomg", "omg"));          // answer: 2
console.log(myNavieStringSearch("wowomgzomg", "owo"));          // answer: 1
console.log(myNavieStringSearch("wowomgzomg", "kl"));           // answer: 0