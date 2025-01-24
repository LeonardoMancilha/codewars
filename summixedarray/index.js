function sumMix(x) {
  return x.reduce((acc, item) => {
    return acc + Number(item);
  }, 0);
}

console.log(sumMix([9, 3, '7', '3'])); // 22