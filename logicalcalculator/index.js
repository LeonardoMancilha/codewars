function logicalCalc(array, op) {
  return !!array.reduce((prev, curr) => op === 'AND' ? prev && curr : op === 'OR' ? prev || curr : prev ^ curr);
}

console.log(logicalCalc([true], "XOR")); // true
