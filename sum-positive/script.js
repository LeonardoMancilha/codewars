function positiveSum(arr) {
    return arr.filter(num => num > 0).reduce((acc, curr) => acc + curr, 0);
}

console.log(positiveSum([1, -4, 7, 12])); // 20
