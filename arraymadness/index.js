function arrayMadness(a, b) {
  const somaQuadrados = a.reduce((soma, num) => soma + Math.pow(num, 2), 0);
  const somaCubos = b.reduce((soma, num) => soma + Math.pow(num, 3), 0);

  return somaQuadrados > somaCubos;
}

console.log(arrayMadness([4, 5, 6], [1, 2, 3])); 