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
console.log(myNavieStringSearch("lorie loled", "lol"));           // answer: 1
console.log(myNavieStringSearch("lorie loled", "lo"));           // answer: 2

function navieStringSearch(long, short) {
    let count = 0;
    let sl = short.length;
    for(let i = 0; i < long.length; i++) {
        for(let j = 0; j < sl; j++) {
            if(short[j] != long[i+j]) break;
            if(j == sl - 1) count++;
        }
    }
    return count;
}

console.log(navieStringSearch("wowomgzomg", "omg"));          // answer: 2
console.log(navieStringSearch("wowomgzomg", "owo"));          // answer: 1
console.log(navieStringSearch("wowomgzomg", "kl"));           // answer: 0
console.log(navieStringSearch("lorie loled", "lol"));           // answer: 1
console.log(navieStringSearch("lorie loled", "lo"));           // answer: 2