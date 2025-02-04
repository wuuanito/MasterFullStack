/*
Escribe una función a la que le pasamos un año y devuelve true si es bisiesto. En el programa principal, pídele al usuario un
número y muestra en pantalla “El año … es bisiesto” o “El año … no es bisiesto” y sigue pidiendo números y diciendo si es o no
bisiesto hasta que introduzca un 0. Un año es bisiesto si es divisible entre 4, pero no si es divisible entre 100 pero si es divisible
entre 400 sí lo es.
*/

const prompt = require("prompt-sync")();


const anio = parseInt(prompt("Dime el anio : "))

if (esBisiesto(anio)){
    console.log("Es bisiesto");
    
}else{console.log("No es bisiesto");
}


function esBisiesto(a){
    if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
        return true;
    }
}