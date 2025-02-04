/*
Diseña una función esPar() que reciba como parámetro un número y devuelva si ese número es par o no. Utilízalo en un
programa que lea un número por prompt y determine si es par o no y muestre un mensaje al respecto en un alert.
*/

const prompt = require("prompt-sync")();
const numero = parseFloat(prompt("Introduce el número: "));

function esPar(a) {
  if (a % 2 == 0) {
    console.log("Es par")
  } else {
    console.log("Es impar")
  }
}

esPar(numero)

