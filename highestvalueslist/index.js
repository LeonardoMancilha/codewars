function twoHighest(arr) {
  const valoresUnicos = [...new Set(arr)]; // Remove duplicados
  valoresUnicos.sort((a, b) => b - a);

  if (valoresUnicos.length < 2) {
    return valoresUnicos;
  }

  if (arr.length === 0) {
    return [];
  }

  return [valoresUnicos[0], valoresUnicos[1]];
}

console.log(twoHighest([1, 1, 1]));
