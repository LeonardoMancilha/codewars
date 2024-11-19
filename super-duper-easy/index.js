function problem(x) {
    return typeof x === 'string' ? 'Error' : (x * 50) + 6;
}

console.log(problem(4));
