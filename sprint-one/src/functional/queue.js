var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var storageEnd = 1;
  var storageStart = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[storageEnd] = value;
    storageEnd++;
  };

  someInstance.dequeue = function() {
    var x = storage[storageStart];
    delete storage[storageStart];
    storageStart++;
    return x;
  };

  someInstance.size = function() {
    return storageEnd - storageStart < 0 ? 0 : storageEnd - storageStart;
  };

  return someInstance;
};
