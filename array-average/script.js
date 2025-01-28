function findAverage(array) {
  if (array.length === 0) {
    return 0; // Evita divisão por zero
  }

  const soma = array.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  );
  const media = soma / array.length;
  return media;
}

const arr = [40, 40, 8, 36, 1, 12, 26, 21, 0, 39, 14, 1, 25, 9, 35, 31, 36, 2, 6, 12, 36, 40, 21, 5, 17];

console.log(findAverage(arr)); // 20.52
