function points(games) {
  let points = 0;
  for (let i = 0; i < games.length; i++) {
    const [score1, score2] = games[i].split(":");
    const result =
      Math.max(Number(score1), Number(score2)) -
      Math.min(Number(score1), Number(score2));

    if (result === 3) {
      points += 3;
    } else if (result === 1) {
      points += 1;
    }
  }
  return points;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
); // Output: 6
