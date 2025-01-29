/*

Crear un programa que muestre el valor de sumar todos los números desde 1 hasta el número que introduzca el usuario.
Por ejemplo, si introduce el 8 debería mostrar 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8).

*/

const prompt = require("prompt-sync")();


const numero = parseInt(prompt("Dime un numero : "))
let sumaTotal = 0

for (let i = 0 ; i<=numero;i++){
    sumaTotal += i
}
console.log("La suma total es : ",sumaTotal)

