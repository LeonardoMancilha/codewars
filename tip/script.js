function isLochNessMonster(s) {
  if (s.toLowerCase().includes("tree fiddy")) return true;
  if (s.toLowerCase().includes("three fifty")) return true;
  if (s.toLowerCase().includes("3.50")) return true;
  return false;
}

console.log(
  isLochNessMonster("Hello, I come from the year 3150 to bring you good news!")
); // false
