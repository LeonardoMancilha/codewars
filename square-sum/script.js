function squareSum(numbers) {
  return numbers.map(num => Math.pow(num, 2)).reduce((acc, num) => acc + num, 0);
}

console.log(squareSum([1, 2, 2])); // Output: 9
