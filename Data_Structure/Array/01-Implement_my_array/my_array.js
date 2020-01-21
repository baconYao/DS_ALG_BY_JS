'use strict';

class My_Array {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shift_items(index);
    return item;
  }

  shift_items(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i++];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}


const newArray = new My_Array();
newArray.push("Hello");
newArray.push("You");
newArray.push("are");
newArray.delete(2)
newArray.push("nice");
newArray.push("!");
console.log(newArray);
