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
    let address = this._hash(key);
    // this address dosen't have any bucket, so we need to initialize an array to it.
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    return this.data[this._hash(key)];
  }

}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000);
// var res = myHashTable.get('grapes');
// console.log(res);

myHashTable.set('apples', 9);
// var res = myHashTable.get('apples');
// console.log(res);
