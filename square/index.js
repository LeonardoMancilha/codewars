function squareOrSquareRoot(array) {
  return array.map(num => Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num * num);
}

console.log(squareOrSquareRoot([4,3,9,7,2,1])); 
