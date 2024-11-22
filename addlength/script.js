function addLength(str) {
    const stringToArray = str.split(' ');

    return stringToArray
    .filter(palavra => palavra.trim() !== "") // Remove palavras vazias
    .map(palavra => `${palavra.trim()} ${palavra.trim().length}`); // Formata as palavras
}

const string = "apple ban";
console.log(addLength(string));
