let called = 0;
let hash = string => {
  called++;
  let hashed = 0;
  for (let i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};

class HashTable{
    constructor(){
        this.collection = {};
    }

    add = (key, value) => {
        let address = hash(key);

        if(!this.collection.hasOwnProperty(address)){
            this.collection[address] = {};
        }
        this.collection[address][key] = value;
    }

    remove = (key) => {
        let address = hash(key);
        if(this.collection[address].hasOwnProperty(key)){
            delete this.collection[address][key]
        }else{
            console.log("Key not found.");
        }
        if(!Object.keys(this.collection[address]).length){
            delete this.collection[address]
        }
    }

    lookup = (key) => {
        let address = hash(key);
        if(this.collection.hasOwnProperty(address)){
            return this.collection[address][key];
        }else{
            return null;
        }
    }
}

let hashIt = new HashTable();

hashIt.add(1, 2);
hashIt.add(2, 3);
hashIt.add(3, 4);
hashIt.lookup(3);
hashIt.remove(2);
hashIt.remove(5);