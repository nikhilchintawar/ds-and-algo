const selfSome = function (fn, context) {
  let arr = Array.prototype.slice.call(this);

  if (!arr.length) return false;
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    let res = fn(context, arr[i], i, this);
    if (arr[i]) return true;
  }
  return false;
};

Array.prototype.selfSome ||
  Object.defineProperty(Array.prototype, "selfSome", {
    value: selfSome,
    enumerable: false,
    configurable: true,
    writable: true,
  });

let arr = [1, 2, 3, 4, 5];
console.log(arr.selfSome((item) => item === 2));
