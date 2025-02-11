function warnTheSheep(queue) {
  const reversed = queue.reverse();
  const loboIndex = reversed.indexOf('wolf');
  if (loboIndex === 0) {
    return 'Pls go away and stop eating my sheep';
  } else {
    return `Oi! Sheep number ${loboIndex}! You are about to be eaten by a wolf!`;
  }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
