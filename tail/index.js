function correctTail(bodylength, tail) {
  let sub = bodylength[bodylength.length - tail.length];

  if (tail === sub) return true;
  else return false;
}

console.log(correctTail("Fox", "x"));
