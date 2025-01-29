/*
Un número factorial es el resultado de multiplicar todos los números de 1 a ese mismo número.
Por ejemplo, el factorial de 4 es 1 x 2 x 3 x 4 = 24.
Haz un programa que muestre los números del 1 al 10 en una columna con el resultado de su factorial en la columna de al lado.
*/


for (let i = 1 ; i <=10 ; i++ ){
    let factorial = 1
    for (let x = 1 ; x<=i;x++){
        factorial = factorial * x
    }
    console.log (` ${i} || ${factorial}`)


}