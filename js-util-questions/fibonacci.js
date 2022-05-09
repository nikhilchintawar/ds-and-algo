const speed = (fn, num) => {
  console.time('time')
  let val = fn(num)
  console.timeEnd('timeEnd')
  console.log("value", val)
} 

let fibonacci = function (n) {
  if (n < 1) throw new Error('参数有误')
  if (n === 1 || n === 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

speed(fibonacci, 35)


const memory = function (fn) {
  let obj = {}
  return function (n) {
      if (obj[n] === undefined) obj[n] = fn(n)
      return obj[n]
  }
}
fibonacci = memory(fibonacci)

speed(fibonacci, 35)

function fibonacci_DP(n) {
  let res = 1
  if (n === 1 && n === 2) return res
  n = n - 2
  let cur = 1
  let pre = 1
  while (n) {
      res = cur + pre
      pre = cur
      cur = res
      n--
  }
  return res
}

speed(fibonacci_DP, 35)