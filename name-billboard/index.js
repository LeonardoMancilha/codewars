function billboard(name, price = 30) {
  let total = 0;

  name.split('').forEach(() => {
    total += price;
  });

  return total;
}

console.log(billboard('Leonardo Machado'));
