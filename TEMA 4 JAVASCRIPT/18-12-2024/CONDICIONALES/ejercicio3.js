/*

Escribe un programa que pida al usuario 3 números. 
Si el resultado de la suma de los dos primeros es igual al tercer número, 
mostrarlo en pantalla, si no mostrar que el tercero no es la suma de los dos anteriores.

*/


const prompt = require("prompt-sync")();


const valor1 = parseInt(prompt("Primer Valor"))
const valor2 = parseInt(prompt("Segundo Valor"))
const valor3 = parseInt(prompt("Tercer Valor"))
const suma = valor1+valor2

if (suma == valor3){
    console.log(`La suma es ${suma}`)
}
else{
    console.log("El tercer numero no es la suma de los dos anteriores")
}