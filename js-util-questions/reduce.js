Array.prototype.selfReduce = function(fn, initialValue) {
  let arr = Array.prototype.slice.call(this);
  let res;
  let startIndex;
  if(initialValue == undefined){
    // find the item & index of first non-empty cell (real-item)
    for(let i = 0; i < arr.length; i++){
      if(!arr.hasOwnProperty(i)) continue;
      startIndex = i;
      res = arr[i]
      break;
    }
  } else {
    res = initialValue
  }
  // skip empty item
  for(let i = ++startIndex || 0; i < arr.length; i++){
    if(!arr.hasOwnProperty(i))continue;
    res = fn.call(null, es, arr[i], i, this)
  }
  return this
}