/*

Para convertir de grados centígrados a grados fahrenheit multiplicamos por 9, 
le dividimos 5 y a ese resultado le añadimos 32. Para convertir de fahrenheit a centígrados le restamos 32,
 multiplicamos por 5 y dividimos entre 9. Pide un valor y pregunta al usuario si quiere convertirlo a centígrados 
(si escribe C) o si quiere convertirlo a fahrenheit (si escribe F) y muestra el valor en pantalla.
*/


const prompt = require("prompt-sync")();

const temperatura = parseInt(prompt("Dime la temperatura"))

const conversionOpcion = prompt("Si quieres convertirlo a centrigrados escribe C si quieres a fhrenheit F")

if (conversionOpcion == "c"){
    const temperaturaC = ((temperatura *9)/5)+32
    console.log(temperaturaC," Grados Centigrados")
}
if (conversionOpcion == "f"){
    const temperaturaF = ((temperatura-32)*5)/9
    console.log(temperaturaF)
}