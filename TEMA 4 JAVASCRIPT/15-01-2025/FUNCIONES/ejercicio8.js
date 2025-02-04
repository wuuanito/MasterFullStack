/*
Crea una aplicación que nos calcule el factorial de un número pedido por teclado, lo realizará mediante una función al que le
pasamos el número como parámetro. Para calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
ejemplo, si introducimos un 5, realizará esta operación 54321=120. Mostrar el resultado en un alert.

*/

const prompt = require("prompt-sync")();
const numero = parseFloat(prompt("Introduce el número: "));

function calcularFact(n) {
  let suma = 1;

  for (let i = 1; i <= n; i++) {
    suma = suma * i;
  }

  console.log("El factorial es : ", suma);
}

calcularFact(numero);
