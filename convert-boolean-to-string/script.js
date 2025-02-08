function booleanToString(b) {
    return b? 'true' : 'false';
}

console.log(booleanToString(true));  // Output: true
console.log(booleanToString(false)); // Output: false

console.log(booleanToString(1));  // Output: true (coerced to boolean)
console.log(booleanToString(0)); // Output: false (coerced to boolean)
