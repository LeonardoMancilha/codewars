function isVowel(a) {
  return a.map(x => /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x);
}

const numbers = [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106];
const result = isVowel(numbers);

console.log(isVowel(result));
