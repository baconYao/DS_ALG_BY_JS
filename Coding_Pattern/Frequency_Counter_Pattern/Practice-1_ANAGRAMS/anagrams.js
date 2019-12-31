'use strict';

const validAnagram = (s1, s2) => {
  // check if the s1 and s2 are anagram
  // params:
  //  s1: {string}
  //  s2: {string}
  // return {boolean}

  if(s1.length != s2.length) return false;
  if(s1.length === 0 && s2.length === 0) return true;

  const frequencyMap1 = {};
  const frequencyMap2 = {};

  for(let i = 0; i < s1.length; i++) {
    frequencyMap1[s1[i]] = (frequencyMap1[s1[i]] || 0) + 1;
    frequencyMap2[s2[i]] = (frequencyMap2[s2[i]] || 0) + 1;
  }

  for(let key in frequencyMap1) {
    if(!(key in frequencyMap2)) return false;
    if(frequencyMap1[key] !== frequencyMap2[key]) return false;
  }

  return true;
}

console.log(validAnagram("123411", "312114"));        // true
console.log(validAnagram("", ""));                    // true
console.log(validAnagram("zaz", "zza"));              // true
console.log(validAnagram("awesome", "awsome"));       // false
console.log(validAnagram("rat", "cat"));              // false
console.log(validAnagram("textteisttime", "timeteisttext"));  // true