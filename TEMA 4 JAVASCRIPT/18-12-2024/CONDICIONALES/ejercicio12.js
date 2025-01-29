/*

Resultado de carrera. Hacer varios programas en los que se le pregunta al usuario el puesto en el que acabó. Después:
1. Si el valor de puesto es 1 mostramos mensaje con "Ganaste", si no "Lo importante es participar”.
2. Si el valor de puesto es 1, mostramos mensaje con "Medalla de oro", si el valor de puesto es 2, mostramos el mensaje con
"Medalla de plata", si es 3 "Medalla de bronce" y al resto "Lo importante es participar.
3. Con switch: Si el valor de puesto es 1, mostramos mensaje con "Medalla de oro", si el valor de puesto es 2, mostramos el
mensaje con "Medalla de plata", si es 3 "Medalla de bronce" y al resto "Lo importante es participar.
4. Los puestos 1, 2 y 3 ven el mensaje "Sube al podium", el resto ven el mensaje "Se acabó la carrera". Hazlo usando un
if/else.

*/

const prompt = require("prompt-sync")();

const valor1 = parseInt(prompt("Dime tu puesto : "));

if (valor1 == 1){console.log("Ganaste")}else{console.log("Lo importante es participar")}

{
if (valor1 == 1){console.log("Medalla de oro")}
if (valor1 == 2){console.log("Medalla de plata")}
if (valor1 == 3){console.log("Medalla de bronce")}
else{console.log("Lo importante es participar")}
}

