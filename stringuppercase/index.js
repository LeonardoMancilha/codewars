const stringOne = 'Leonardo';
const stringTwo = 'LEONARDO';

/*
function isUppercase(string) {
    return string === string.toUpperCase();
}
*/

String.prototype.isUpperCase = function() {
    return this.localeCompare(this.toUpperCase()) === 0 ? true : false;
}

console.log("HELLO".isUpperCase()); // true
console.log("Hello".isUpperCase()); // false
console.log("hello".isUpperCase()); // false