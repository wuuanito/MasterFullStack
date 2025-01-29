/*

Escribe un programa que pida valores.
Si introduce un valor negativo, mostrar un mensaje diciendo que se ignoran los valores negativos.
Seguir pidiendo hasta que el usuario introduzca un 0, entonces mostrar la suma de los valores introducidos.

*/

const prompt = require("prompt-sync")();


let numero = 1
let suma =0
while (numero !=0){

    numero = parseInt(prompt("Dime un numero : "))
    if (numero<0){console.log("SE IGNORAN VALORES NEGATIVOS")}
    else {
        suma += numero
    }

}

console.log("LA SUMA TOTAL ES : ",suma)