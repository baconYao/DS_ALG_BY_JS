// Create a function that reverses a string:
// 'Hi My name is Bacon' should be:
// 'nocaB si eman yM iH'

'use strict';

var STR = 'Hi My name is Bacon';

function reverse(str) {
  return str.split("").reverse().join("");
}


const reverse2 = str => [...str].reverse().join("");


function reverse3(str) {
  if( !str || str.length < 2 || typeof str !== 'string') {
    return "Input is invalid"
  }

  let backwards = [];
  let total_number = str.length - 1;
  for(let i = total_number; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join("");
}



var r1 = reverse(STR);
var r2 = reverse2(STR);
var r3 = reverse3(STR);

console.log(r1);
console.log(r2);
console.log(r3);