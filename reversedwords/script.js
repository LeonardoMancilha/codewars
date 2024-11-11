const reverseWords = str => str.split(' ').reverse().join(' ');

const phrase = "The greatest victory is that which requires no battle";
const reversedString = reverseWords(phrase);

document.getElementById('demo').innerHTML = reversedString;
