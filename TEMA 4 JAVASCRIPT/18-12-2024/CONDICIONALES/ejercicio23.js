/*


Un año es bisiesto si se puede dividir por 4. 
Pero un año que se pueda dividir por 100 NO es bisiesto a no ser que se pueda dividir por 400. 
A partir de un año, mostrar en pantalla si es bisiesto o no.
*/


const prompt = require("prompt-sync")();

const ano = parseInt(prompt("Dime un año "))

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    console.log(`${ano} es bisiesto`);
} else {
    console.log(`${ano} no es bisiesto`);
}