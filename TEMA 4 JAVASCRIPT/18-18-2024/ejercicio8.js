/*

Escribe un programa que pida dos números al usuario. 
Después muestra un mensaje que dice cómo se relacionan entre los dos. 
Por ejemplo si escribe 5 y 7 , muestra "5 es menor que 7".

*/

const prompt = require("prompt-sync")();

const valor1 = parseInt(prompt("Dame el primer valor "))
const valor2 = parseInt(prompt("Dame el segundo valor "))


if (valor1 == valor2)
{
    console.log (`${valor1} es igual a ${valor2}`)

}

else if (valor1 > valor2){

    console.log (`${valor1} es mayor a ${valor2}`)

}
else{

        console.log (`${valor1} es menor a ${valor2}`)
    
    
}
