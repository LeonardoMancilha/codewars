function formatMoney(amount) {
  return '$' + parseFloat(amount).toFixed(2);
}

console.log(formatMoney(39.99));