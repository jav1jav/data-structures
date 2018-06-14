var Queue = function() {

  var queueInstance = {};
  queueInstance.storage = {};
  queueInstance.storageStart = 0;
  queueInstance.storageEnd = 0;
  _.extend(queueInstance, queueMethods);

  return queueInstance;

};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.storageEnd] = value;
  this.storageEnd++;
};

queueMethods.dequeue = function () {
  var x = this.storage[this.storageStart];
  delete this.storage[this.storageStart];
  this.storageStart++;
  return x;
};

queueMethods.size = function () {
  return this.storageEnd - this.storageStart < 0 ? 0 : this.storageEnd - this.storageStart;
};

