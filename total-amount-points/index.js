function points(games) {
  let score = 0;
  for (let game of games) {
    let [x, y] = game.split(":").map(Number);
    if (x > y) score += 3;
    else if (x < y) score += 0;
    else score += 1;
  }
  return score;
}

console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));
