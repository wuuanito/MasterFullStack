/*
Haz un programa que realice la media de los valores que contiene un array de 10 números y lo muestre por consola. No es
necesario pedir los números al usuario.
*/

let miArray = [1,2,3,4,5,6,7,8,9,10]

let suma = 0
for (let i = 0 ; i<miArray.length;i++){
    suma += miArray[i]
}
console.log(suma/miArray.length)