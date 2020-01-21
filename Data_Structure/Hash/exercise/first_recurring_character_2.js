'use strict';

// O(n)

function first_recurring_character_2(input) {
  let map = {};
  for(let i = 0; i < input.length; i++) {
    if(map[input[i]]) {
      return input[i];
    } else {
      map[input[i]] = true;
    }
  }

  return undefined;
}

var ans = first_recurring_character_2([2,1,9,2,3,5,1,2,4]);

console.log(ans);