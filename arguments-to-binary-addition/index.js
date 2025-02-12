function arr2bin(arr) {
  return arr.reduce((prev, curr) => prev + (typeof curr == 'number' ? curr: 0), 0).toString(2);
}

console.log(arr2bin([1,2,3,4,5]));
