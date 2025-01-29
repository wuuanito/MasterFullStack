/*
Crear un array. Usar un for para pedir 3 valores al usuario y guardarlos en el mismo. Comparar los 3 valores del array y mostrar
en pantalla el más pequeño.
*/

const prompt = require("prompt-sync")();


let miArray = []
let numeroPequeño = 0
for (let i = 0 ; i<3 ; i++){
    let numero = parseInt(prompt("Di numero : "))
    miArray[i] = numero
    if(i==0 ){numeroPequeño = numero}
    if(numeroPequeño>numero){numeroPequeño= numero}
    

}

console.log(numeroPequeño)