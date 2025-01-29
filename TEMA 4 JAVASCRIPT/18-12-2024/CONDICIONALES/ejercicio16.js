/*

Con if else if: Mostrar en pantalla un menú con varias opciones. 
Dependiendo de lo que el usuario elija, mostrar en pantalla la selección. 
Hacerlo tanto con if else como con switch.

*/
const prompt = require("prompt-sync")();

console.log("1- Opcion 1");
console.log("2- Opcion 2");
console.log("3- Opcion 3");

const opcion = parseInt(prompt("Elige una opcion"));

switch (opcion) {
  case 1:
    console.log("Ha elegido la Opcion 1 ");
    break;
  case 2:
    console.log("Ha elegido la Opcion 2");
    break;

  case 3:
    console.log("Ha elegido la Opcion 3 ");
    break;
}
