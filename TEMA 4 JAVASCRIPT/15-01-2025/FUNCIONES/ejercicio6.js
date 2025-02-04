/*
Escribe un programa que pida al usuario dos números. Usa esos 2 números en una función que divide el primero por el segundo
y devuelve el resultado. Muestra el resultado que devuelve la función en un alert. Después vuelve a pedir los números y hacer
todo otra vez hasta que el usuario introduzca un 0 como segundo número.
*/

const prompt = require("prompt-sync")();

let numero2;

function division(num1, num2) {
   return num1 / num2;
}

do {
   let numero1 = parseFloat(prompt("Introduce el primer número:"));
   numero2 = parseFloat(prompt("Introduce el segundo número:"));
   
   if (numero2 !== 0) {
       console.log
       (`El resultado de la división es: ${division(numero1, numero2)}`);
   }
} while (numero2 !== 0);