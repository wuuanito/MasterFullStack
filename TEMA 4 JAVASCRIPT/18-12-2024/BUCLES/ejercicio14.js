/*
Pedir al usuario un número.
Mostrar en pantalla el siguiente dibujo con tantas líneas como las que haya introducido:

*/

const prompt = require("prompt-sync")();


const numero = parseInt(prompt("Dime numero "))
for (let i = 0 ; i< numero; i++){
    let asterisco = ""

    for(let x = 0 ; x<=i ; x++){
        asterisco += "*"
    }
    console.log(asterisco)
}
