function countSheeps(sheep) {
  let count = 0;
  
  sheep.forEach((sheep) => {
    if (typeof sheep === "boolean") {
      count += sheep ? 1 : 0;
    }
  });
  return count;
}

console.log(
  countSheeps([
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true,
  ])
);
