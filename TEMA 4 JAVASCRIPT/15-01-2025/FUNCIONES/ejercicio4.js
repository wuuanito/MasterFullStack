/*
Escribe una función que devuelva el resultado de sumar los dos parámetros que le pasamos. Pide al usuario 2 números. Usa
esos 2 números como parámetros de la función y después asigna el valor que devuelve la función a una tercera variable.
Finalmente, muestra el valor de la variable en la consola.
*/

const prompt = require("prompt-sync")();


const numero1 = parseInt(prompt("Dime el primer numero"))
const numero2 = parseInt(prompt("Dime el segundo numero"))



function sumar (a,b){
    const resultado= a+b
    return resultado
}

const sumatorio = sumar(numero1,numero2)
console.log("La suma es ",sumatorio)