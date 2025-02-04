/*

Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo. Pediremos de qué figura queremos calcular su
área y según lo introducido pedirá los valores necesarios para calcular el área. Crea un método por cada figura para calcular
cada área, este devolverá un número entero(sin decimales). Muestra el resultado por pantalla
1. Circulo: (radio^2)*PI0
2. Triángulo: (base * altura) / 2
3. Cuadrado: lado * lado
*/


const prompt = require("prompt-sync")();

let numero

do{

 numero = Math.floor(parseInt(prompt("1. Circulo \n2. Triangulo \n3. Cuadrado \n4. Salir \n")));

 switch (numero){
    case 1 :
        const radio = parseInt(prompt("Dime el radio de la circunferencia : "))
        circulo(radio)
        break;
    case 2:
        const base = parseInt(prompt("Dime la base del triangulo : "))
        const altura = parseInt(prompt("Dime la altura del triangulo : "))
        triangulo(base,altura)
        break;
    case 3:
        const lado = parseInt(prompt("Dime el lado del cuadrado : "))
        cuadrado(lado)
        break



 }


}while(numero!=4)


function circulo(r){

    return console.log(Math.floor(r*2*Math.PI), " De area tiene la circunferencia")

}
function triangulo(b,h){
    return console.log(Math.floor((b*h)/2), " De area tiene el triangulo")

}

function cuadrado (l){
    return console.log(l*l, " De area tiene el cuadrado")

}