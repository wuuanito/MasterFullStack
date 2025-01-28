/*

Escribe un programa que pida 10 valores.
Al final, mostrar la media de esos valores.


*/

const prompt = require("prompt-sync")();

let variable = [];

for (let i = 0; i < 10; i++) {
  variable[i] = parseInt(prompt("dime un valor"));
}
let suma = 0;

for (let i = 0; i < variable.length; i++) {
  suma += variable[i];
}

console.log("la media es ", suma / 10);
