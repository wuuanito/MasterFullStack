/*
Crear un array. Pedir al usuario 3 veces que escriba un string. Guardar cada uno de esos strings en las posiciones 0, 1 y 2.
Mostrar en pantalla en el orden: primero posición 1, después posición 2 y por último posición 0.
*/
const prompt = require("prompt-sync")();

let miArray = []

const primerNumero = parseInt(prompt("1º numero"))
miArray[0]=primerNumero
const segundoNumero = parseInt(prompt("2º numero"))
miArray[1]=segundoNumero
const tercerNumero = parseInt(prompt("3º numero"))
miArray[2]=tercerNumero

console.log(miArray)
