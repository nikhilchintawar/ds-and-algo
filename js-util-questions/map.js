const selfMap = function (fn, context) {
  let arr = Array.prototype.slice.call(this);
  let mappedArr = Array();
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    mappedArr[i] = fn.call(context, arr[i], i, this);
  }
  return mappedArr;
};

// implement map using reduce
const selfMap2 = function (fn, context) {
  let arr = Array.prototype.slice.call(this);
  return arr.reduce(
    (pre, cur, index) => [...pre, fn.call(context, cur, index, this)],
    []
  );
};

Array.prototype.selfMap ||
  Object.defineProperty(Array.prototype, "selfMap", {
    value: selfMap,
    enumerable: false,
    configurable: true,
    writable: true,
  });
Array.prototype.selfMap2 ||
  Object.defineProperty(Array.prototype, "selfMap2", {
    value: selfMap2,
    enumerable: false,
    configurable: true,
    writable: true,
  });

let arr = ["z", "h", , "l"];
console.log(arr.selfMap((item) => item + "1"));
console.log(selfMap2.call({ 0: "a", 1: "b", length: 2 }, (item) => item + "1"));

// ------
// The global Array
let s = [23, 65, 98, 5];

Array.prototype.selfMap3 = function (callback) {
  let newArray = [];

  // Add your code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]));
  }
  // Add your code above this line

  return newArray;
};

let new_s = s.myMap(function (item) {
  return item * 2;
});
