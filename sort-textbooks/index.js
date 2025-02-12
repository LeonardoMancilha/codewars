function sorter(textbooks) {
  return textbooks.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
}

console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english'])); // ['$istory', '**english', 'Alg#bra', 'Geom^try']

