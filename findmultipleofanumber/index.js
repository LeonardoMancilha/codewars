function findMultiples(integer, limit) {
    const multiples = [];
    
    for (let i = integer; i <= limit; i += integer) {
        multiples.push(i);
    }
    
    return multiples;
}

console.log(findMultiples(5, 25)); // [5, 10, 15, 20]