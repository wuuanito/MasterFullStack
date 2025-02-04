/*

Escribe una función a la que le damos dos números y que devuelva true si el primer número es más grande que el segundo
número y false en el caso contrario. Pide dos números al usuario, y pasalos a la función. Muestra en consola “El primer número
es más grande” o “El primer número no es más grande”.
*/
const prompt = require("prompt-sync")();


const numero1 = parseInt(prompt("Dime el primer numero"))
const numero2 = parseInt(prompt("Dime el segundo numero"))


function mayorQue(numeroA,numeroB){
    if (numeroA>numeroB){
        return true
    }else{
        return false
    }
}

if(mayorQue(numero1,numero2)){
    console.log("El primer numero es mas grande")
}else{console.log("El primer numero no es el mas grande")}