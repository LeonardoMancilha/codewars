const countBy = (x, n) => {
    let z = [];

    for (let i = 0; i < n; i++) {
        z.push(x * (i + 1));
    }
  
    return z;
}

countBy(2, 5); // [2, 4, 6, 8, 10]
