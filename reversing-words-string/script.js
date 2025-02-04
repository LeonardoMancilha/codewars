function reverse(string) {
  return string.split(" ").reverse().join(" ");
}

console.log(reverse("World Hello!")); // Outputs: "Hello World!"
