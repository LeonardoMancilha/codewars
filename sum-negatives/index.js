function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) return [];
    
    let positiveCount = 0;
    let negativeSum = 0;
    
    input.forEach(num => {
        if (num > 0) {
            positiveCount++;
        } else if (num < 0) {
            negativeSum += num;
        }
    });
    return [positiveCount, negativeSum];
}

console.log(countPositivesSumNegatives([null]));
