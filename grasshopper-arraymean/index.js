function findAverage(nums) {
  let sum = 0;

  nums.forEach(num => {
    sum += num;
  });

  return sum / nums.length;
}

console.log(findAverage([1,3,5,7]));
