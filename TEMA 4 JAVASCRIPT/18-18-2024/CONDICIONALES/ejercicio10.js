/*

Escribe un programa que pida dos valores al usuario y
1. Si los dos valores son iguales muestre 0
2. Si los dos valores tienen el mismo resto al dividir entre 6 mostrar el más pequeño 
3. Si no que muestre el más grande de los dos


*/

const prompt = require("prompt-sync")();

const valor1 = parseInt(prompt("Dame el primer valor : "));
const valor2 = parseInt(prompt("Dame el segundo valor : "));

if (valor1 == valor2) {
  console.log("0");
}
if (valor1 % 6 == valor2 % 6) {
  if (valor1 < valor2) {
    console.log(`El valor mas pequeño es ${valor1}`);
  } else {
    console.log(`${valor2} es el mas pequeño`);
  }
} else if (valor1 > valor2) {
  console.log(`El valor mas grande es ${valor1}`);
} else {
  console.log(`${valor2} es el mas grande`);
}
