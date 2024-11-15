let hello = "!Hi";

let replacement = hello.replace(/!/g, "");
console.log(replacement);

function remove(s, n) {
  let input = s;
  while (n) {
    input = input.replace(/!/, "");
    n -= 1;
  }
  return input;
}
