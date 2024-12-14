function uniTotal(string) {
  return string.split('').reduce((total, char) => total + char.charCodeAt(0), 0);
}

console.log(uniTotal('a')); // 97
