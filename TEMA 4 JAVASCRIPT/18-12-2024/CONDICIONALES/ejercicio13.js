/*

Escribe un programa que dada una frase sacará su carácter central. 
Si la largura de la frase es par deberá sacar los dos caracteres centrales correspondientes 
pero si es impar deberá sacar su único carácter central.

*/


const prompt = require("prompt-sync")();

const frase = prompt("Dime tu puesto : ");

const largoFrase = frase.length
const mitadFrase = parseInt(largoFrase/2)


console.log(`El caracter central es ${frase[mitadFrase]}`)



if (largoFrase%2 == 0){
    console.log(`Los dos caracteres Centrales son ${frase[mitadFrase-1]} y ${frase[mitadFrase]}`)
}