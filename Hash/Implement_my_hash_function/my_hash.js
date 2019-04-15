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
    // If we find the key alreadt exists in buckets, then replace the value of this key
    let currentBuckets = this.data[address];
    for(let i = 0; i < currentBuckets.length; i++) {
      if(currentBuckets[i][0] === key) {
        currentBuckets[i][1] = value;
        return;
      }
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    let address = this._hash(key);
    if(this.data[address] === undefined) {
      return undefined;
    }

    var bucket = this.data[address].filter((bucket) => {
      return bucket[0] === key;
    });

    return bucket[0][1];      // bucket: [["aaa", 500]]
  }

  // retrieve all kes
  keys() {
    let allKeys = [];
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        allKeys.push(this.data[i][0][0]);     //push the key to the return array
      }
    }
    return allKeys;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set('grapes', 10000);
myHashTable.set('grapes', 500);
var res = myHashTable.get('grapes');
console.log(res);

myHashTable.set('apples', 9);
var res = myHashTable.get('apples');
console.log(res);

myHashTable.set('no ways', 888);
myHashTable.set('judy', 666);


var keys = myHashTable.keys();
console.log(keys.sort());