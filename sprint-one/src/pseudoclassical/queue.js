var Queue = function() {

  this.storage = {};
  this.storageStart = 0;
  this.storageEnd = 0;

};

Queue.prototype.enqueue = function(value) {
  this.storage[this.storageEnd] = value;
  this.storageEnd++;
};

Queue.prototype.dequeue = function() {
  var x = this.storage[this.storageStart];
  delete this.storage[this.storageStart];
  this.storageStart++;
  return x;
};

Queue.prototype.size = function() {
  return this.storageEnd - this.storageStart < 0 ? 0 : this.storageEnd - this.storageStart;
};


