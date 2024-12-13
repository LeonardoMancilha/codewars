function none(arr, fun) {
  if (arr.length === 0) {
    return true;
  }

  return !fun(arr[0]) && none(arr.slice(1), fun);
}

console.log(none([1,2,3,4,5],function(item){ return item > 5 }));
