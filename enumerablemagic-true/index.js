const all = (arr, fun) => arr.every(fun);

console.log(all([1, 2, 3, 4], (n) => n < 5)); // true