function addExtra(listOfNumbers) {
    return [...listOfNumbers, true];
}

const arr = [40, 40, 8, 36, 1, 12, 26, 21, 0, 39, 14, 1, 25, 9, 35, 31, 36, 2, 6, 12, 36, 40, 21, 5, 17];
console.log(addExtra(arr)); // [2, 3, 4, 5]
// return listOfNumbers.map((num) => num + 1);