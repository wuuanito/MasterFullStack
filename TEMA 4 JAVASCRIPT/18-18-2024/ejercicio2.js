/*

Pide por teclado la edad del usuario.
Si la edad es igual o inferior a 8 mostramos el mensaje "Pasa al tobogán", 
si no mostramos "Eres demasiado mayor para usar el tobogán".

*/
const prompt = require("prompt-sync")();


const edad = parseInt(prompt("Edad ?"))

if (edad <= 8){
    console.log("Pasa al tobogan")
}
else {
    console.log("Eres demasiado mayor para usar el tobogán")
}