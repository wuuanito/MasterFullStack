/*
 Pide al usuario que escriba un día de la semana (lunes, martes...). Mostrar en pantalla el día que dice que es si es entre lunes y viernes 
 (Por ejemplo "Hoy es lunes") y si es fin de semana mostrar "Es fin de semana". Hazlo una vez usando switch y otra con if else.

*/

const prompt = require("prompt-sync")();

const diaSemana = prompt("dime un dia de la semana: ");

switch (diaSemana) {
  case "lunes":
    console.log("Hoy es Lunes");
    break;
  case "martes":
    console.log("Hoy es Martes");
    break;
  case "miercoles":
    console.log("Hoy es Miercoles");
    break;
  case "jueves":
    console.log("Hoy es Jueves");
    break;
  case "viernes":
    console.log("Hoy es viernes");
    break;
  case "sabado":
    console.log("Es fin de semana");
    break;
  case "domingo":
    console.log("Es fin de semana");
    break;



}
