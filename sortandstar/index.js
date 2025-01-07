function twoSort(array) {
  if (array.length > 0) {
    const arrayOrganized = array.sort();

    let primeiraString = arrayOrganized[0];

    let letras = primeiraString.split("");

    let resultado = letras.join("***");

    const firstValue = (array[0] = resultado);
    return firstValue;
  }
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ])
);
