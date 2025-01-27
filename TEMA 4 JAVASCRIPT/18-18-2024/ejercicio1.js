/*

1. Escribe un programa que pida dos números y que muestre la suma, la resta, la multiplicación, la media, el más grande y el más pequeño.

*/
const prompt = require("prompt-sync")();

const valor1 = parseInt(prompt("Dame el primer valor "))
const valor2 = parseInt(prompt("Dame el segundo valor "))


const suma = valor1+valor2
const resta = valor1-valor2
const multiplicación = valor1*valor2
const media = (valor1+valor2)/2

console.log(`La suma de ambos numeros es ${suma}`)
console.log(`La resta de ambos numeros es ${resta}`)
console.log(`la multiplicacion de ambos numeros es ${multiplicación}`)
console.log(`La media de ambos numeros es ${media}`)




if (valor1 > valor2){
    console.log(`${valor1} es el mayor`)
}
else {
    console.log(`${valor2} es el mayor`)

}