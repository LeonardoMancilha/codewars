Array.prototype.filter = function (func) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (func(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  return result;
};

console.log([1, 2, 3, 4].filter((num) => num > 3)); // [4]
console.log([1, 2, 3, 4].filter((num) => num % 2 === 0)); // [2, 4]
