var Stack = function() {

  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageKey = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[storageKey] = value;
    storageKey++;
  };

  someInstance.pop = function() {
    var x = storage[storageKey - 1];
    delete storage[storageKey - 1];
    storageKey--;
    return x;
  };

  someInstance.size = function() {
    return storageKey < 0 ? 0 : storageKey;
  };

  return someInstance;
};


