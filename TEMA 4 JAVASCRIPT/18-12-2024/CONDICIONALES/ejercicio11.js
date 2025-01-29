/*
Escribe un programa que pida dos números enteros entre 25 y 75 
y que diga si hay un dígito en común entre los dos números.
*/

const prompt = require("prompt-sync")();

const valor1 = parseInt(prompt("Dame el primer valor : "));
const valor2 = parseInt(prompt("Dame el segundo valor : "));


if ((valor1<=75 && valor1>=25) && (valor2<=75 && valor2>=25) ){


if(valor1%10==valor2%10 ){console.log(`${valor1%10 } Es el digito comun `)}
if(valor1%10==parseInt(valor2/10)){console.log(`${valor1%10 } Es el digito comun `)}

if(parseInt(valor1/10)== valor2%10){console.log(`${valor2%10 } Es el digito comun `)}
if(parseInt(valor1/10)== parseInt(valor2/10)){console.log(`${parseInt(valor2/10) } Es el digito comun `)}

}
else{
    console.log("el numero no esta en el rango ")
}
