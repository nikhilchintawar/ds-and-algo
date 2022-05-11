const isComplexDataType = (obj) =>
  (typeof obj === "object" || typeof obj === "function") && obj !== null;

const selfBind = function (bindTarget, ...args1) {
  if (typeof this !== "function")
    throw new TypeError("Bind must be called on a function");
  const originFunc = this;
  const boundFunc = function (...args2) {
    if (new.target) {
      let res = originFunc.call(this, ...args1, ...args2);
      if (isComplexDataType(res)) return res;
      return this;
    } else {
      return originalFunc.call(bindTarget, ...args1, ...args2);
    }
  };

  if (originFunc.prototype) {
    boundFunc.prototype = originFunc.prototype;
  }

  const desc = Object.getOwnPropertyDescriptors(originFunc);
  Object.defineProperties(boundFunc, {
    length: desc.length,
    name: Object.assign(desc.name, {
      value: `bound ${desc.name.value}`,
    }),
  });
  return boundFunc;
};

Function.prototype.selfBind ||
  Object.defineProperty(Function.prototype, "selfBind", {
    value: selfBind,
    enumerable: false,
    configurable: true,
    writable: true,
  });

function originFunc() {
  this.name = "yeyan1996";
  return {};
}

let obj = {
  age: 22,
};

const boundFunc = originFunc.selfBind(obj);

console.dir(originFunc);
console.dir(boundFunc);

new boundFunc();
console.log(obj);

boundFunc();
console.log(obj);

function originFunc2() {
  this.name = "yeyan1996";
}

const boundFunc2 = originFunc2.selfBind({});
let instance = new boundFunc2();
console.log(instance.__proto__ === originFunc2.prototype);
