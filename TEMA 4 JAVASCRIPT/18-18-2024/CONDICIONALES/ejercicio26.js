/*
Haz un programa que sea el juego de piedra-papel-tijera. 
Pide al usuario que seleccione una de las 3 posibilidades 
y haz que el programa seleccione una de las 3 posibilidades de manera aleatoria. 
Dependiendo del resultado, muestra el mensaje correspondiente.

*/

const prompt = require("prompt-sync")();

const eleccion = parseInt(prompt("Elige:\n 0-piedra \n 1-papel \n 2-tijera"))
console.log("-----------------------")

let eleccionPersona
let eleccionMaquina 


if(eleccion == 0){eleccionPersona="PIEDRA"}
if(eleccion == 1){eleccionPersona="PAPEL"}
if(eleccion == 2){eleccionPersona="TIJERA"}



let numeroRandom = Math.floor(Math.random()*3)
if(numeroRandom == 0){eleccionMaquina="PIEDRA"}
if(numeroRandom == 1){eleccionMaquina="PAPEL"}
if(numeroRandom == 2){eleccionMaquina="TIJERA"}
 
console.log("HAS ELEGIDO ",eleccionPersona," Y LA MAQUINA HA ELEGIDO ",eleccionMaquina)
console.log("-----------------------")

if (eleccion == numeroRandom){console.log("EMPATE!")}

if (eleccion == 0 && numeroRandom == 1){console.log("Pierdes,Gana la Maquina")}
if (eleccion == 0 && numeroRandom == 2){console.log("Ganas!")}
if (eleccion == 1 && numeroRandom == 0){console.log("GANAS!")}
if (eleccion == 1 && numeroRandom == 2){console.log("Pierdes,Ganal la Maquina!")}
if (eleccion == 2 && numeroRandom == 0){console.log("Pierdes,Ganal la Maquina!")}
if (eleccion == 2 && numeroRandom == 1){console.log("GANAS!")}
