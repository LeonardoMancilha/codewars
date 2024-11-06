const countSheep = function (num) {
    let result = '';

    for (let i = 0; i < num; i++) {
       result += `${i + 1} sheep...`;
    }

   return result;
}

countSheep(4);

/*
const countable = function (num) {
    for (let i = 0; i < num; i++) {
        return `${i} sheep...`;
    }
}
*/

document.getElementById('demo').innerHTML = countSheep(4);
