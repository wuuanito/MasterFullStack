/*

Crea un programa para ver si los comerciales reciben un extra. Si venden más de 500 euros, les damos un extra del 5% del total de lo que han vendido. 
El usuario introduce su nombre y el precio de las ventas. 
Muestra en pantalla su nombre, seguido de las ventas y en el caso de que las ventas superen 500 euros el 5% de las ventas como extra.

*/


const prompt = require("prompt-sync")();


const nombre = prompt("Dame tu nombre : ")
const ventas = parseInt(prompt("¿Cuantas Ventas? "))

const calculoVentasExtra = ventas*1.05

if(ventas > 500){console.log(`${nombre} recibe un tontal de ${calculoVentasExtra}$`)}else{console.log(`${nombre} recibe un tontal de ${ventas}$`)}