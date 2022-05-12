const run = (generatorFunc) => {
  let it = generatorFunc();
  let result = it.next();

  return new Promise((resolve, reject) => {
    const next = function (result) {
      if (result.done) {
        resolve(result.done);
      }
      result.value = Promise.resolve(result.value);
      result.value
        .then((res) => {
          let result = it.next(res);
          next(result);
        })
        .catch((error) => {
          reject(error);
        });
    };
    next(result);
  });
};
