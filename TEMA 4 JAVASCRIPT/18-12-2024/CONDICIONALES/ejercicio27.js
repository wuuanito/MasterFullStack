/*


Haz un programa que simule un libro de “Elige tu propia aventura”. Muestra un texto inicial 
y pide al usuario que seleccione una opción para continuar con la historia. 
Según la opción que elija el usuario, muestra un texto diferente para cada una de las opciones y ofrece otras 2 opciones al usuario.
*/


const prompt = require("prompt-sync")();

console.log("\n=== LA CUEVA MISTERIOSA ===");
console.log("\nTe encuentras frente a una cueva antigua. La entrada está oscura pero puedes ver dos caminos...");
console.log("1) Tomar el camino de la izquierda");
console.log("2) Tomar el camino de la derecha");

let eleccion1 = prompt("Elige una opción (1 o 2): ");

if (eleccion1 === "1") {
   console.log("\nAvanzas por el camino izquierdo y encuentras una antorcha encendida.");
   console.log("También ves un cofre brillante y una puerta antigua.");
   console.log("1) Abrir el cofre");
   console.log("2) Atravesar la puerta");

   let eleccion2 = prompt("Elige una opción (1 o 2): ");
   
   if (eleccion2 === "1") {
       console.log("\n¡Abres el cofre y encuentras un tesoro! Has ganado la aventura.");
   } else if (eleccion2 === "2") {
       console.log("\nLa puerta conduce a un callejón sin salida. La aventura termina.");
   } else {
       console.log("Opción no válida. La aventura termina.");
   }

} else if (eleccion1 === "2") {
   console.log("\nEl camino de la derecha te lleva a una habitación con un lago subterráneo.");
   console.log("Ves un bote pequeño y un puente de cuerda.");
   console.log("1) Usar el bote");
   console.log("2) Cruzar el puente");

   let eleccion2 = prompt("Elige una opción (1 o 2): ");
   
   if (eleccion2 === "1") {
       console.log("\nEl bote tiene un agujero y te hundes. La aventura termina.");
   } else if (eleccion2 === "2") {
       console.log("\n¡Cruzas el puente y encuentras la salida! Has completado la aventura.");
   } else {
       console.log("Opción no válida. La aventura termina.");
   }

} else {
   console.log("Opción no válida. La aventura termina.");
}