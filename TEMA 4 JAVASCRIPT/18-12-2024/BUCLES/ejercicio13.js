/*


Se desea conocer el lucky number (número de la suerte) de cualquier persona
El número de la suerte se consigue reduciendo la fecha de nacimiento a un número de un solo dígito. Ejemplo:
Fecha de nacimiento: 16-08-1973
16 + 8 + 1973 = 1997
1 + 9 + 9 + 7 = 26
2+ 6= 8
El número de la suerte es 8.
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

let sumaFechas = parseInt(dias)+parseInt(mes)+parseInt(año)
let sumaPrimer = 0


let sumaFechasStr = sumaFechas.toString()
for (let i = 0; i < sumaFechasStr.length; i++) {
    sumaPrimer = sumaPrimer + parseInt(sumaFechasStr[i])
}


let sumaSegundo = 0

let segundaSumaStr = sumaPrimer.toString()
for (let i = 0; i < segundaSumaStr.length; i++) {
    sumaSegundo = sumaSegundo + parseInt(segundaSumaStr[i])
}

console.log("tu numero favorito de la suerte es ; ",sumaSegundo)