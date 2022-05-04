const selfFilter = function (fn, context) {
  let arr = Array.prototype.slice.call(this);
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    fn.call(context, arr[i], i, this) && filteredArr.push(arr[i]);
  }
  return filteredArr;
};

const selfFilter2 = function (fn, context) {
  return this.reduce((pre, cur, i) => {
    return fn.call(context, cur, i, this) ? [...pre, cur] : [...pre];
  }, []);
};

Array.prototype.selfFilter ||
  Object.defineProperty(Array.prototype, "selfFilter", {
    value: selfFilter,
    enumerable: false,
    configurable: true,
    writable: true,
  });

Array.prototype.selfFilter2 ||
  Object.defineProperty(Array.prototype, "selfFilter2", {
    value: selfFilter2,
    enumerable: false,
    configurable: true,
    writable: true,
  });

let arr = [1, 2, 3];
console.log(arr.selfFilter((item) => item === 2));

console.log(
  arr.selfFilter2(
    function (item) {
      return item === 2;
    },
    ["a", "b", "c"]
  )
);

let s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
  var newArray = [];
  // Add your code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i]) === true) {
      newArray.push(this[i]);
    }
  }
  // Add your code above this line
  return newArray;
};

var new_s = s.myFilter(function (item) {
  return item % 2 === 1;
});
