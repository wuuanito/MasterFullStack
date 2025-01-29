/* 

Escribe un programa que pregunte al usuario su edad.
Mostrar en pantalla “Feliz cumpleaños” repetido tantas veces como años tenga.
*/

const prompt = require("prompt-sync")();

const edad = parseInt(prompt("Dime tu edad"))

for(let i = 1; i<=edad;i++){
    console.log("FELIZ CUMPLEAÑOS")
}