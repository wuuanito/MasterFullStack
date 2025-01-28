/*
Escribe un programa que muestre todos los valores pares o i
mpares entre 1 y 100 dependiendo de si el usuario introduce P o I .
Si introduce otra cosa, decir que ese valor no es correcto y pedirle otra vez.
*/

const prompt = require("prompt-sync")();


let parImpar

while (parImpar != "x"){
    parImpar = prompt("escribe p o i : Para salir pulsa x")
    if (parImpar == "p"){
        for (let i  = 1 ; i <=100 ; i++){
            if(i%2==0){console.log(i)}
        }
    }else if(parImpar == "i"){
        for (let i  = 1 ; i <=100 ; i++){
            if(i%2!=0){console.log(i)}
        }
    }
}