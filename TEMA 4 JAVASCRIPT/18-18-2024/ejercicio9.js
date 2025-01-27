/*

Un programa que te pregunta la temperatura que hace donde estás y te sugiere qué hacer dependiendo de ella. Las recomendaciones son:
1. Si hace más de 40 grados, vete a otro sitio
2. Entre 30 y 40 grados, enciende el aire acondicionado 3. Entre 30 y 20 grados, no hagas nada
4. Entre 10 y 20 grados, enciende la calefacción
5. Si hace menos de 10 grados, vete a otro sitio

*/


const prompt = require("prompt-sync")();

const temperatura = parseInt(prompt("Dame la temperatura : "));

if (temperatura > 40) {
    console.log("Vete a otro sitio");
} 
else if (temperatura >= 30 && temperatura <= 40) {
    console.log("Enciende el aire acondicionado");
} 
else if (temperatura >= 10 && temperatura <= 20) {
    console.log("Enciende la calefaccion");
} 
else if (temperatura < 10) {
    console.log("vete a otro sitio");
}