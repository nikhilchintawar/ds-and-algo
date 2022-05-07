const selfFlat = function (depth = 1) {
  const arr = Array.prototype.slice.call(this);
  if (depth === 0) return arr;
  return arr.reduce((prev, cur) => {
    if (Array.isArray(cur)) {
      return [...prev, ...selfFlat.call(cur, depth - 1)];
    } else {
      return [...prev, cur];
    }
  }, []);
};

Array.prototype.selfFlat ||
  Object.defineProperty(Array.prototype, "selfFlat", {
    value: selfFlat,
    enumerable: false,
    configurable: true,
    writable: true,
  });
let arr = [1, 2, [3, 4, [5, 6, 7, 8], 9], 10, 11, 12, [13, 14]];

console.log(arr.selfFlat());
