const throttling = (
  func,
  time = 17,
  options = {
    leading: true,
    trailing: false,
    context: null
  }) => {
    let previous = new Date(0).getTime()
    let timer;
    class _throttle {
    constructor(...args) {
      let now = new Date().getTime();

      if (options.leading) {
        if (timer)
          return;
        timer = setTimeout(() => {
          timer = null;
          func.apply(options.context, args);
        }, timer);
      } else if (now - previous > time) {
        func.apply(options.context, args);
        previous = now;
      } else if (options.trailing) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(options.context, args);
        }, time);
      }
    }
    static cancel() {
      previous = 0;
      clearTimeout(timer);
      timer = null;
    }
  }
    return _throttle
}