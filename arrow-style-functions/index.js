const ArrowFunc = function(arr) {
  return arr.map(num => String.fromCharCode(num)).join('');
};

console.log(ArrowFunc([84,101,115,116])); // Test
