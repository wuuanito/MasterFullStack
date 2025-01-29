/*
Escribe un programa que indique la fecha del día 
siguiente a la que el usuario haya introducido por teclado. Verificar que la fecha introducida es correcta.
*/

const prompt = require("prompt-sync")();


const fecha = prompt("Dime tu fecha : ")

let dias =""
let mes = ""
let año = ""
let contadorGuiones = 0

for (let i = 0 ; i < fecha.length ; i++){
    if (fecha[i]!="-" && contadorGuiones == 0){dias = dias+fecha[i]}
    if (fecha[i]!="-" && contadorGuiones == 1){mes = mes+fecha[i]}
    if (fecha[i]!="-" && contadorGuiones == 2){año = año+fecha[i]}
    if (fecha[i] === "-") {
        contadorGuiones++
    }

}

if (parseInt(dias)>31){console.log("Los dias estan mal")}
if (parseInt(mes)>12){console.log("El mes estan mal")}

if (parseInt(dias)==31){
    dias = "1"
    mes = parseInt(mes)+1
    if(parseInt(mes) >= 12){
        mes = "1"
        año = parseInt(año)+1
    }

}else{
    dias = parseInt(dias)+1
}
console.log(dias,mes,año)
