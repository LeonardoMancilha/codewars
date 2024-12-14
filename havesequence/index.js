function first(arr, n = 1) {
    return arr.length === 0 ? [] : arr.slice(0, n);
}

const arr = ['a', 'b', 'c', 'd', 'e'];

console.log(first(arr)); // Output: ['a', 'b', 'c']