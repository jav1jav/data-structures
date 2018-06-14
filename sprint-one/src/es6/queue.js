class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.storageStart = 0;
    this.storageEnd = 0;
  }

  enqueue(value) {
    this.storage[this.storageEnd] = value;
    this.storageEnd++;
  }

  dequeue() {
    var x = this.storage[this.storageStart];
    delete this.storage[this.storageStart];
    this.storageStart++;
    return x;
  }

  size() {
    return this.storageEnd - this.storageStart < 0 ? 0 : this.storageEnd - this.storageStart;
  }

}
