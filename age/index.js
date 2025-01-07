function differenceInAges(ages) {
  const oldestPerson = Math.max(...ages);
  const youngestPerson = Math.min(...ages);
  const difference = oldestPerson - youngestPerson;

  const result = [youngestPerson, oldestPerson, difference];
  return result;
}

console.log(differenceInAges([82, 6, 76]));
