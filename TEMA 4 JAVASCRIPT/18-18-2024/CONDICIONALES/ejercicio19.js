/*

En una clase tienes tres exámenes, con un valor de 5 puntos máximo en cada uno. 
La nota final es la mejor nota de los dos primeros exámenes más la nota del tercer examen. 
Crea un programa que con tres notas calcula el resultado de nota final con los siguientes rangos:
1. 10 es matrícula
2. 9 y hasta 10 es sobresaliente 
3. 7 y hasta 9 es notable
4. 6 y hasta 7 es bien
5. 5 y hasta 6 es suficiente
6. 0 hasta 5 es suspenso


*/

const nota1 = 2
const nota2 = 3
const nota3 = 1
let mejorNota 
if (nota1<nota2){
    mejorNota = nota2
}else {mejorNota = nota1}

const notaFinal = mejorNota + nota3

if(notaFinal == 10){console.log("Matricula")}
if(notaFinal >= 9 && notaFinal <10){console.log("Sobresaliente")}
if(notaFinal >= 7 && notaFinal <9){console.log("Notable")}
if(notaFinal >= 6 && notaFinal <7){console.log("Bien")}
if(notaFinal >= 5 && notaFinal <6){console.log("Suficiente")}
if(notaFinal >= 0 && notaFinal <5){console.log("Suspenso")}

