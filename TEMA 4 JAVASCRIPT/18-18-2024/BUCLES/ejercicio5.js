/*

Escribe un programa que muestre el 
resultado de sumar todos los números del 1 hasta el 
número introducido y que vuelva a pedirle al usuario 
otro número hasta que el usuario introduzca un 0.

*/

const prompt = require("prompt-sync")();

let numero
do{
    numero = parseInt(prompt("Dime un numero : "))
    let suma = 0

    for(let i = 1; i<=numero;){
        suma += i
        i++
    }
    console.log("La suma es ",suma)


}while(numero != 0)