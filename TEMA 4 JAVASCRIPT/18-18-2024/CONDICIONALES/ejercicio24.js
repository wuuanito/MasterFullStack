/*

 Escribe un programa que dice si los dígitos de un número de tres cifras son todos impares, todos pares o son mezclados. T
 u programa debe pedir un número al usuario, 
 y mostrar el número, seguido del mensaje "Todas las cifras son pares", 
 "Todas las cifras son impares" o "El número tiene cifras pares e impares"

*/

const prompt = require("prompt-sync")();

const numeero = parseInt(prompt("dime un numero: "))

const cifra3 = numeero%10
const cifra2 = parseInt((numeero%100)/10)
const cifra1 = parseInt(numeero/100)


if(cifra1 %2 ==0 && cifra2 %2 ==0 && cifra3 %2 ==0){console.log("todos son pares")}

else if(cifra1 %2 !=0 && cifra2 %2 !=0 && cifra3 %2 !=0){console.log("todos son impares")}
else{console.log("Hay mezclados")}