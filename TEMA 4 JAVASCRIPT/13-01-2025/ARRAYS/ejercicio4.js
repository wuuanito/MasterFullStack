/*
 Crear un array vacío. Pedir al usuario que introduzca 10 valores a ese array. Usar un for para mostrarlos en pantalla
*/

const prompt = require("prompt-sync")();


let miArray = []

for (let i =0 ; i<10;i++){
    let numero = parseInt(prompt("Dime un numero : "))
    miArray[i]=numero
}
for (let i =0 ; i<10;i++){
console.log(miArray[i])
}