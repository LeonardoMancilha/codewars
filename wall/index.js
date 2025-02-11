function whoIsPaying(name) {
  if (name.length === 0) {
    return [''];
  } else if (name.length <= 2) {
    return [name];
  }
  return [name, name.slice(0, 2)]; 
}

const nome = 'Melissa';
console.log(whoIsPaying(nome)); 
