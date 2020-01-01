'use strict';

function validAnagram(first, second) {
  if(first.length !== second.length) return false;

  const lookup = {};

  for(let c of first) {
    lookup[c] ? lookup[c] += 1 : lookup[c] = 1;
  }

  for(let c of second) {
    if(!lookup[c]) return false;
    lookup[c] -= 1;
  }

  return true;
}

console.log(validAnagram("123411", "312114"));        // true
console.log(validAnagram("", ""));                    // true
console.log(validAnagram("zaz", "zza"));              // true
console.log(validAnagram("awesome", "awsome"));       // false
console.log(validAnagram("rat", "cat"));              // false
console.log(validAnagram("textteisttime", "timeteisttext"));  // true