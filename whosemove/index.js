function whoseMove(lastPlayer, win) {
  if (win) {
    return lastPlayer;
  }
  return lastPlayer === 'white' ? 'black' : 'white';  
}

console.log(whoseMove('black', true)); // 'black'