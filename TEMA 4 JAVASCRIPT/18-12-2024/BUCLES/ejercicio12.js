/*

Escribe un programa que pida un número de 3 dígitos y muestre el resultado de sumar sus dígitos.
*/

const prompt = require("prompt-sync")();


const numero = parseInt(prompt("Dime un numero : "))


let suma = 0
let numeroDesglosado= numero
for (let i = 0 ; i < numero.toString().length;i++ ){
    suma += numeroDesglosado%10
    numeroDesglosado= Math.floor(numeroDesglosado/10)
}

console.log(suma)