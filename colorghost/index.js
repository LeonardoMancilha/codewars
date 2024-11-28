class Ghost {
  constructor() {
    const colors = ["white", "yellow", "purple", "red"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  getColor() {
    return this.color;
  }
}

const ghost1 = new Ghost();
console.log(`Cor do fantasma: ${ghost1.getColor()}`);

const ghost2 = new Ghost();
console.log(`Cor do fantasma: ${ghost2.getColor()}`);