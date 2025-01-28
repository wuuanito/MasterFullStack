
/* 

Escribe un programa que pida un número y muestre ese número al cuadrado y al cubo 
(multiplicado por sí mismo dos y tres veces). Si el número es menor que 1, no calcules el cubo ni el cuadrado.

*/

const prompt = require("prompt-sync")();

const valor = parseInt(prompt("Dame un valor: "))

if (valor >= 1){
console.log(`El cuadrado es ${valor*valor} y el cubo es ${valor*valor*valor}`)

}
else
{
    console.log("El valor es mas pequeño de 1")
}