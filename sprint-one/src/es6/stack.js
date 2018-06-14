class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storageKey = 0;
  }

  push(value) {
    this.storage[this.storageKey] = value;
    this.storageKey++;
  }

  pop() {
    var x = this.storage[this.storageKey - 1];
    delete this.storage[this.storageKey - 1];
    this.storageKey--;
    return x;
  }

  size() {
    return this.storageKey < 0 ? 0 : this.storageKey;
  }

}