//implementation of hash table
//use of hasOwnProperty
//lookup O(n) add O(n) remove O(1)

var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // change code below this line
  this.add = function(key, value){
    let address = hash(key)
    if(!this.collection.hasOwnProperty(address)){
      this.collection[address] = {}
    }
    this.collection[address][key] =value
  }

  this.remove = function(key){
    let hashObj = this.collection[hash(key)]
    if(hashObj.hasOwnProperty(key)){
      delete hasObj[key]
    }
    if(!Object.keys(hashObj).length){
      delete this.collection[hash(key)]
    }
  }

  this.lookup = function(key){
    let address = hash(key)
    if(this.collection.hasOwnProperty(address)){
      return this.collection[address[key]]
    }
    return null
 }


  // change code above this line
};
