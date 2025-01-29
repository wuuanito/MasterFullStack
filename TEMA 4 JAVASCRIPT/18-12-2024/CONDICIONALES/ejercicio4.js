/*
 
Escribe un programa que pida al usuario tres números y 
que diga si la diferencia entre uno de ellos es exactamente 20 menos que uno de los otros. 
Por ejemplo, si el usuario introduce 20, 40 y 55, el programa dirá que el primer número es 20 menos que el segundo


*/



const prompt = require("prompt-sync")();


const valor1 = parseInt(prompt("Primer Valor"))
const valor2 = parseInt(prompt("Segundo Valor"))
const valor3 = parseInt(prompt("Tercer Valor"))



if (valor1+20 == valor2){
    console.log("El primer numero es 20 menos que el segundo")
}
else if (valor2+20 == valor1)
    console.log("El segundo numero es 20 menos que el primero ")

if (valor1+20 == valor3){
    console.log("El primer numero es 20 menos que el tercero")
}else if (valor3-20 == valor1)
    console.log("El tercer numero es 20 menos que el primero ")

if (valor2+20 == valor3){
    console.log("el valor dos es 20 menos que el tercero")
}
else if (valor3 +20 == valor2){
    console.log("El valor 3 es 20 menos que el segundo ")
}