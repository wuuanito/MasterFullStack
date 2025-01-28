/*
Mostrar el mayor de tres valores

*/

const valor1 = 4;
const valor2 = 665;
const valor3 = 41;
let valorMayor;
if (valor1 < valor2) {
  valorMayor = valor2;
} else {
  valorMayor = valor1;
}

if (valorMayor < valor3) {
  valorMayor = valor3;
}

console.log("El valor mayor :", valorMayor);
