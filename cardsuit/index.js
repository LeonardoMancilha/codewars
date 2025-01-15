function defineSuit(card) {
  const suits = {
    "♣": "clubs",
    "♦": "diamonds",
    "♥": "hearts",
    "♠": "spades"
  };

  for (const symbol in suits) {
    if (card.includes(symbol)) {
      return suits[symbol];
    }
  }
  return null;
}

console.log(defineSuit("3♠"));
