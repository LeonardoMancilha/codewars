function howManyDalmatians(number) {
  let dogs = [
    "Hardly any",
    "More than a handful!",
    "Woah that's a lot of dogs!",
    "101 DALMATIANS!!!",
  ];

  let respond =
    number <= 10
      ? dogs[0]
      : number <= 50
      ? dogs[1]
      : number <= 100
      ? dogs[2]
      : (number = 101)
      ? dogs[3]
      : "";

  return respond;
}

console.log(howManyDalmatians(101));
