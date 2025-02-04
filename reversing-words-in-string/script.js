function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reverse('World Hello!')); // Hello World
