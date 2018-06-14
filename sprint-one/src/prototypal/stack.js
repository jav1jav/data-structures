var Stack = function() {

  var obj = Object.create(stackMethods);
  obj.storage = {};
  obj.storageKey = 0;
  return obj;

};

var stackMethods = {};


stackMethods.push = function(value) {
  this.storage[this.storageKey] = value;
  this.storageKey++;
};

stackMethods.pop = function() {
  var x = this.storage[this.storageKey - 1];
  delete this.storage[this.storageKey - 1];
  this.storageKey--;
  return x;
};

stackMethods.size = function() {
  return this.storageKey < 0 ? 0 : this.storageKey;
};