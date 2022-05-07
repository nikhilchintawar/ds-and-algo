const partialFunc = function (fn, ...args) {
  let placeholderNum = 0;
  return (...args2) => {
    args2.forEach((arg) => {
      let index = args.findIndex((item) => item === "_");
      if (index < 0) return;
      args[index] = arg;
      placeholderNum++;
    });
    if (placeholderNum < args.length) {
      args2 = args2.slice(placeholderNum, args2.length);
    }
    return fn.apply(this, [...args, ...args2]);
  };
};
