/*
Escribe un programa que muestre el número entero positivo que el usuario introduzca pero al revés.
Por ejemplo, si introduce 1478 que muestre 8741. 
Repetir hasta que el usuario introduzca 0. Si introduce 0 la primera vez,
debería mostrarlo al revés (es decir, mostrar 0) y acabar el programa.

*/

const prompt = require("prompt-sync")();


let numero

while (numero!=0){
    numero = parseInt(prompt("Dime un numero : "))
    let numeroDesglosado = numero
    let resultado =""
    for (let i = 0 ; i < numero.toString().length ; i++){
        
       resultado += (numeroDesglosado%10)
       numeroDesglosado = Math.floor(numeroDesglosado/10)

       }
       console.log(resultado)
       
}

