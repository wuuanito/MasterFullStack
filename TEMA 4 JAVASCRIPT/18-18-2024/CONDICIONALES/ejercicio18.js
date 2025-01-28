/*
Mostrar el menor de tres valores

*/

const valor1 = 4;
const valor2 = 665;
const valor3 = 41;
let valorMenor;
if (valor1 > valor2) {
  valorMenor = valor2;
} else {
  valorMenor = valor1;
}

if (valorMenor >valor3) {
  valorMenor = valor3;
}

console.log("El valor menor :", valorMenor);
