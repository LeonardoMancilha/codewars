function eachCons(array, n) {
	if (n > array.length) {
        return [];
    }

    const result = [];

    for (let i = 0; i < array.length - n + 1; i++) {
        result.push(array.slice(i, i + n));
    }

    return result.join(', ');
}

console.log(eachCons([1, 2, 3, 4], 2)); // [[1, 2], [2, 3], [3, 4]