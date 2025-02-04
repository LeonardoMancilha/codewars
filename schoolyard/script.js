function howMuchILoveYou(nbPetals) {
  const love = nbPetals % 6;
  const prefix = love > 0 ? "" : "It can not be less than 0";
  switch (love) {
    case 1:
      return `${prefix}I love you`;
    case 2:
      return `${prefix}a little`;
    case 3:
      return `${prefix}a lot`;
    case 4:
      return `${prefix}passionately`;
    case 5:
      return `${prefix}madly`;
    default:
      return 'not at all';
  }
}

console.log(howMuchILoveYou(1)); // "I love you just a little"
