var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
   var stackInstance = {};

   stackInstance.storage = {};
   stackInstance.storageKey = 0;
   _.extend(stackInstance, stackMethods)

   return stackInstance;

};

stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.storageKey] = value;
  this.storageKey++;
}

stackMethods.pop = function () {
  var x = this.storage[this.storageKey - 1];
  delete this.storage[this.storageKey - 1];
  this.storageKey--;
  return x;
}

stackMethods.size = function () {
  return this.storageKey < 0 ? 0 : this.storageKey;
}
