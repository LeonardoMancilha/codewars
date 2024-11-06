/*
const Player = [
    { name: "Alice"},
    { name: "Bruno"},
    { name: "Carlos"}
];

const reindexado = {};

Player.forEach((valor, index) => {
    return reindexado[index + 1] = Player[index] = valor.name;
});
*/

const duckDuckGoose = (players, goose) => players[(goose - 1) % players.length].name;
