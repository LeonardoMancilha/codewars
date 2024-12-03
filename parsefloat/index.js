function parseF(s) {
  const number = parseFloat(s);
  if (!isNaN(number)) {
    return number;
  } else {
    return null;
  }
}
