/*


Escribe un programa para una empresa de alquiler de coches. 
Tendremos que preguntar al usuario la edad. Si el usuario es menor de 18, no podrá alquilar un vehículo y se lo diremos en pantalla. 
En caso de ser mayor de edad, le preguntamos si tiene carnet de conducir. Si la respuesta es negativa, no podrá alquilar un coche 
y se lo advertiremos por pantalla. Si es mayor de edad le pediremos tanto nombre como apellido , ciudad de recogida del vehículo
 y número de días que quiere alquilar el coche (el alquiler del coche por día tiene un coste de 25 euros y en caso que lo alquile una semana, 
el coste será de 150 euros). Imprimir por pantalla los datos del cliente que vaya a alquilar el coche y el coste total del alquiler.

*/

const prompt = require("prompt-sync")();


const edad = parseInt(prompt("Dame tu edad : "))

if (edad >=18){
    const carnet = prompt("Tienes carnet? ")
    if(carnet){
        const nombre = prompt("Cual es tu nombre? ")
        const apellido = prompt("Cual es tu apellido? ")
        const ciudadRecogida = prompt("Donde quieres recoger el vehiculo? ")
        const numeroDias = prompt("Cuantos dias? ")
        const calculoSemanas = parseInt(numeroDias/7)
        const restoSemanas = numeroDias%7
        if (numeroDias<7){console.log(`${nombre} ${apellido} recogera su vehiculo en ${ciudadRecogida} durante ${numeroDias} dias y el precio total sera de ${numeroDias*25}€ `)}
        if (numeroDias>=7){
            const calculoTotal = (calculoSemanas*150)+(restoSemanas*25)
            {console.log(`${nombre} ${apellido} recogera su vehiculo en ${ciudadRecogida} durante ${numeroDias} dias y el precio total sera de ${calculoTotal}€ `)}
        }

    }
    else{
        console.log("No tienes carnet no puedes alquilar un coche ")
    }

}
else{console.log("Eres menor de edad , no puedes alquilar ")}