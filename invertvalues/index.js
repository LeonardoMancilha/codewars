function invert(array) {
  return array.map(num => {
    if (num > 0) {
      return -num;
    } else if (num < 0) {
      return Math.abs(num);
    } 
    return num;
  });
}

console.log(invert([1, -2, 3, -4, 5]));
