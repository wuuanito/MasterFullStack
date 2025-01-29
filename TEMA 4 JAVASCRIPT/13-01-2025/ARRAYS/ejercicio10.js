/*
Crear un array con 11 ceros. Pedir al usuario que introduzca valores entre 0 y 10. Cada vez que introduzca un dígito, añadir uno
al valor en esa posición del array. Si por ejemplo introduce un 3, sumar uno a la posición 3. Mostrar en pantalla los valores. Si
introduce un número mayor que 10, decir que ese número es incorrecto. Si introduce un número negativo, mostrar en pantalla el
número de cada posición y el valor que contiene.
*/
const prompt = require("prompt-sync")();

let numeros = new Array(11).fill(0)

    let entrada = prompt("Introduce un número entre 0 y 10 (número negativo para ver resultados):")
    let numero = parseInt(entrada)

    if (numero < 0) {
        for (let i = 0; i < numeros.length; i++) {
            console.log(`Posición ${i}: ${numeros[i]}`)
        }
        
    }

    if (numero > 10) {
        console.log("Número incorrecto. Debe ser entre 0 y 10")
        
    }

    numeros[numero]++
    console.log("Valores actuales: " + numeros.join(", "))


    // No lo he entendido muy bien
    