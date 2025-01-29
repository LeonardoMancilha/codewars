function sum(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sum([1, 5.2, 4, 0, -1])); // 9.2