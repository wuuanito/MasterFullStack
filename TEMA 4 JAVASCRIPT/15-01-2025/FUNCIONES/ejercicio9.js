/*
Crea una aplicación que nos cuente el número de cifras de un número entero positivo (hay que confirmar que no haya
introducido un número negativo y deberemos quitar los decimales) pedido por teclado. Crea un método que realice esta acción:
pasando el número por parámetro, devolverá el número de cifras. Después mostrar ese número en un alert.

*/


const prompt = require("prompt-sync")();
const numero = Math.floor(parseInt(prompt("Introduce el número: ")));

if(numero>0){
contarCifras(numero)
}
else{console.log("Es negativo");
}


function contarCifras(n){

    return console.log("Tiene : ", n.toString().length," cifras")

}