function Counter() {
  this.value = 0;
}

// Define métodos no protótipo
Counter.prototype.increase = function () {
  this.value++;
};

Counter.prototype.getValue = function () {
  return this.value;
};

Counter.prototype.reset = function () {
  this.value = 0;
};

// Exemplo de uso
const counter = new Counter();
counter.increase();
console.log(counter.getValue()); // 1
counter.reset();
console.log(counter.getValue()); // 0
