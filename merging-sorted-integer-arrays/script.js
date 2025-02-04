function mergeArrays(a, b) {
  const mergedArrays = new Set([...a,...b].sort((a, b) => a - b));
  return Array.from(mergedArrays);
}

console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeArrays([2, 4, 8], [2, 4, 6]));
