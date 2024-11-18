const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

function mergeArrays(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];

    return [...new Set(mergedArray)].sort((a, b) => a - b);
}
