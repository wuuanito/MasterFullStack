/*

Tenemos dos números, un numerador y un denominador. 
Si el denominador no es cero, mostramos el resultado de dividir el numerador por el denominador. 
Si el denominador es cero, mostramos el mensaje "No se puede dividir por cero".


*/

const numerador = 6
const denominador = 2

if (denominador != 0 ){
    console.log(`${numerador/denominador}`)

}
else if (denominador == 0)
{
    console.log("no se puede dividir por cero ")
}