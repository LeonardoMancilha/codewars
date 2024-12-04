function multiply(number) {
    let expoente = Math.abs(number).toString().length;
    let resultado = number * 5 ** expoente;
    return resultado;
}

console.log(multiply(-2));