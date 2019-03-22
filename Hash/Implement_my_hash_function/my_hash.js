'use strict';

class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value) {
    let i = this._hash(key);
    this.data[i] = value;
  }

  get(key) {
    return this.data[this._hash(key)];
  }

}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000);
var res = myHashTable.get('grapes');
console.log(res);

myHashTable.set('apples', 9);
var res = myHashTable.get('apples');
console.log(res);
