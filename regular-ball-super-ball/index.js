const Ball = function (ballType) {
  this.ballType = ballType || 'regular';
};

const myBall = new Ball("super");
const myBall2 = new Ball("");
