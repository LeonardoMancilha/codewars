const periodIsLate = (last, today, cycleLength) => {
  const lastDate = new Date(last);
  const numberDaysLast = lastDate.getTime() / (1000 * 3600 * 24);
  const todayDate = new Date(today);
  const numberDaysToday = todayDate.getTime() / (1000 * 3600 * 24);
  const diferenceDays = numberDaysToday - numberDaysLast;

  return diferenceDays > cycleLength;
}

console.log(periodIsLate("2016-06-13", "2016-07-16", 35)); // false
console.log(periodIsLate("2016-06-13", "2016-07-16", 28)); // true

