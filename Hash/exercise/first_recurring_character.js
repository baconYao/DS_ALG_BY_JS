// Google Question
// Given an array = [2,5,1,2,3,5,1,2,4];
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1

// Given an array = [2,3,4,5];
// It should return undefined

'use strict';

class My_HASH {
  constructor(size) {
    this.size = size;
    this.data = new Array(size);
  }

  /*
   * key must be int type
   * 
   */
  _hash(key) {
    let hash;
    hash = key % this.size;
    return hash;
  }

  // I save the 'value' same as the 'key'
  set(key) {
    let address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push(key);
    // console.log(this.data);
  }

  get(key) {
    let address = this._hash(key);
    if(this.data[address]) {
      let exists = this.data[address].find( elem => elem === key ) ? true : false;
      return exists
    }
    return false;
  }
}

const get_first_recurring_character = (array, hash_table_size) => {
  var my_hash = new My_HASH(hash_table_size);
  for(let i = 0; i < array.length; i++) {
    if(my_hash.get(array[i])) {
      return array[i];
    }
    my_hash.set(array[i]);
  }
  return undefined;
}

const ans = get_first_recurring_character([2,1,1,2,3,5,1,2,4], 2);
// const ans = get_first_recurring_character([2,5,1,2,3,5,1,2,4], 2);
// const ans = get_first_recurring_character([2,3,4,5], 2);
console.log(ans);