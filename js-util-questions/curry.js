const display = (a, b, c, d, e, f, g, h) => [a, b, c, d, e, f, g, h];

function curry(fn) {
  if (fn.length <= 1) return fn;
  const generator = (...args) => {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return (...args2) => {
        return generator(...args, ...args2);
      };
    }
  };
  return generator;
}

const curriedDisplay = curry(display);
console.log("curriedDisplay0", curriedDisplay);
console.log("curriedDisplay", curriedDisplay(1)(2)(3)(4)(5)(6)(7)(8));

// ES6
const curry2 = (fn) => {
  if (fn.length <= 1) return fn;
  const generator = (...args) =>
    args.length === fn.length
      ? fn(...args)
      : (...args2) => generator(...args, ...args2);
  return generator;
};
const curriedDisplay2 = curry2(display);
console.log("curriedDisplay2", curriedDisplay2(1)(2)(3)(4)(5)(6)(7)(8));

const curry3 = (fn, placeholder = "_") => {
  curry3.placeholder = placeholder;
  if (fn.length <= 1) return fn;
  let argsList = [];
  const generator = (...args) => {
    let currentPlaceholderIndex = -1;
    args.forEach((arg) => {
      let placeholderIndex = argsList.findIndex(
        (item) => item === curry3.placeholder
      );
      if (placeholderIndex < 0) {
        currentPlaceholderIndex = argsList.push(arg) - 1;
      } else if (placeholderIndex !== currentPlaceholderIndex) {
        argsList[placeholderIndex] = arg;
      } else {
        argsList.push(arg);
      }
    });
    let realArgsList = argsList.filter((arg) => arg !== curry3.placeholder);
    if (realArgsList.length >= fn.length) {
      return fn(...argsList);
    } else {
      return generator;
    }
  };

  return generator;
};

const curriedDisplay3 = curry3(display);
console.log(
  "curriedDisplay3",
  curriedDisplay3("_", 2)(1, "_", 4)(3, "_")("_", 5)(6)(7, 8)
);

const compose = function (...fns) {
  return function (initValue) {
    return fns.reduceRight((acc, cur) => {
      return cur(acc);
    }, initValue);
  };
};

const curriedJoin = curry3((separator, arr) => arr.join(separator));
const curriedMap = curry3((fn, arr) => arr.map(fn));
const curriedSplit = curry3((separator, str) => str.split(separator));

const composeFunc = compose(
  curriedJoin("1"),
  curriedMap((item) => `${item}1`),
  curriedSplit("")
);

console.log("compose + curry", composeFunc("helloworld"));

if (typeof window === undefined) {
  const { readFile } = require("fs");
  const { join } = require("path");

  const callback = (err, data) => {
    err ? console.error(err) : console.log(data);
  };

  ["curry.js", "curry.html"]
    .map((file) => join(__dirname, file))
    .map(curry3(readFile)("_", "utf-8", callback));
} else {
  console.warn("File doesn't exist");
}
