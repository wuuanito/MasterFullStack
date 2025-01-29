/*
Poner los nombres de los meses en un array de 12 posiciones. Cuando el usuario introduce un número del 1 al 12, mostrar el
nombre de ese mes en pantalla.
*/

const prompt = require("prompt-sync")();

const eleccion = parseInt(prompt("Elige un mes : "))
let meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

for(let i = 1 ; i<=12 ; i++){
    if(eleccion == i){
        console.log(meses[i])
    }
}