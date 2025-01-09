function sumOfDifferences(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return 0;
  }
  
  arr.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) return -1; 
    if (a % 2 !== 0 && b % 2 === 0) return 1;
    
    return b - a;
  });

  let sum = 0;

  for (let i = 0; i < arr.length; i--) {
    sum += arr[i];
}

  return arr;
}

console.log(sumOfDifferences([2, 1, 10]));
