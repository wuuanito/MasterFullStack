/*
Crear un array de 10 valores. Pon el valor 1 en cada una de las posiciones. Pedir al usuario que introduzca un número entre 0 y
9. Cada vez que introduzca un valor entre 0 y 9, mostrar el valor de esa posición del array y modificarlo multiplicándolo por 2
*/

const prompt = require("prompt-sync")();

let miArray = Array(10).fill(1);

    let posicion = parseInt(prompt("Di una posicion (0-9): "));
    
    if (posicion >= 0 && posicion <= 9) {
        miArray[posicion] *= 2;
        console.log(miArray[posicion])
    } else {
        console.log("Un numero entre 0 y 9");
    }
