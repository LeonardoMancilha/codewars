function multipleOfIndex(array) {
  return array.filter((num, index) => num === 0 || num % index === 0);
}

console.log(multipleOfIndex([0,2,3,6,9]));
