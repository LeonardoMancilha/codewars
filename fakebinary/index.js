function fakeBin(x) {
    let arr = [];
    for (let i = 0; i < x.length; i++) {
    if (Number(x[i] < 5)) {
        arr.push(0);
    } else {
        arr.push(1);
    }
}
    return arr.join("");
}
