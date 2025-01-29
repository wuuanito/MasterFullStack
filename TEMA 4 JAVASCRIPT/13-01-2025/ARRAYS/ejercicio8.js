/*
 Crear un programa que, a partir de un array que contiene las edades de 20 alumnos (generadas aleatoriamente entre 18 y 35),
calcule y nos devuelva la media de edad de dicha clase.

*/

let notasClase = []
let suma = 0
for (let i = 0 ; i<20;i++){
    notasClase[i]=Math.floor(Math.random()*(35-18+1)+18)
    suma += notasClase[i]
}

console.log(Math.floor(suma/20))