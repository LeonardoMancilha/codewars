function well(x) {
  let ocorrencias = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i] === 'good') {
      ocorrencias++;
    } 
  }

  const respostas = {
    1: 'Publish!',
    2: 'Publish!',
    default: (ocorrencias) => {
      return ocorrencias > 2 ? 'I smell a series!' : 'Fail!';
    }
  };
  
  return respostas[ocorrencias] || respostas.default(ocorrencias);
}

console.log(well(['bad', 'bad', 'bad'])); // fail
