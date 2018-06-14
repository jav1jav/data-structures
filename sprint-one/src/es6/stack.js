class Stack {

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