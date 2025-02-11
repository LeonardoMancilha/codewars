/*
Lobos foram reintroduzidos na Grã-Bretanha. Você é um criador de ovelhas e agora está atormentado por lobos que fingem ser ovelhas. Felizmente, você é bom em identificá-los.

Avise a ovelha na frente do lobo que ela está prestes a ser comida. Lembre-se de que você está na frente da fila , que fica no final da matriz:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
Se o lobo for o animal mais próximo de você, retorne "Pls go away and stop eating my sheep". Caso contrário, retorne "Oi! Sheep number N! You are about to be eaten by a wolf!"onde Nestá a posição da ovelha na fila.

Observação: sempre haverá exatamente um lobo na matriz.

Exemplos
Entrada: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Saída:"Oi! Sheep number 1! You are about to be eaten by a wolf!"

Entrada: ["sheep", "sheep", "wolf"]
Saída:"Pls go away and stop eating my sheep"
*/

function warnTheSheep(queue) {
  const reversed = queue.reverse();
  const loboIndex = reversed.indexOf('wolf');
  if (loboIndex === 0) {
    return 'Pls go away and stop eating my sheep';
  } else {
    return `Oi! Sheep number ${loboIndex}! You are about to be eaten by a wolf!`;
  }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]));
