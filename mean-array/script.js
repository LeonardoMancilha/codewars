function getAverage(marks) {
  if (marks.length === 0) {
    return 0;
  }

  const sum = marks.reduce((acc, mark) => acc + mark, 0);
  return Math.floor(sum / marks.length);
}

console.log(getAverage([1,5,87,45,8,8])); 
