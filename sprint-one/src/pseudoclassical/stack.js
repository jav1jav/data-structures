var Stack = function() {

  this.storage = {};
  this.storageKey = 0;
};


Stack.prototype.push = function(value) {
  this.storage[this.storageKey] = value;
  this.storageKey++;
};

Stack.prototype.pop = function() {
  var x = this.storage[this.storageKey - 1];
  delete this.storage[this.storageKey - 1];
  this.storageKey--;
  return x;
};

Stack.prototype.size = function() {
  return this.storageKey < 0 ? 0 : this.storageKey;
};


