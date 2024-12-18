function validateCode(code) {
    return /^[1-3]/.test(code);
}

console.log(validateCode(27806633)); // true
