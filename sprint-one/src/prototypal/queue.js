var Queue = function() {

  var obj = Object.create(queueMethods);
  obj.storage = {};
  obj.storageStart = 0;
  obj.storageEnd = 0;

  return obj;

};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.storageEnd] = value;
  this.storageEnd++;
};

queueMethods.dequeue = function() {
  var x = this.storage[this.storageStart];
  delete this.storage[this.storageStart];
  this.storageStart++;
  return x;
};

queueMethods.size = function() {
  return this.storageEnd - this.storageStart < 0 ? 0 : this.storageEnd - this.storageStart;
};
