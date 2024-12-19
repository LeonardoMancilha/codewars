function array(string) {
    const numbers = string.split(',');
    string = numbers.slice(1, numbers.length - 1).join(' ');
    if (string === '') return null;
    return string;
}

console.log(array('1, 2, 3, 4'));
