/*


Crea un aplicación que nos convierta una cantidad de euros introducida por teclado a otra moneda, estas pueden ser a dólares,
yenes o libras. El método tendrá como parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
devolverá ningún valor, mostrará un mensaje indicando el cambio.
1. 0.86 libras es un 1 €
2. 1.28611 $ es un 1 €
3. 129.852 yenes es un 1 €

*/


const prompt = require("prompt-sync")();


const moneda = parseInt(prompt("Dime la moneda : "))
const tipoMoneada = prompt("Tipo de moneda?  ") 

conversion(moneda,tipoMoneada)


function conversion(moneda,tipoMoneda){
    if (tipoMoneda == "libras"){
        return console.log(moneda*0.86," Libras ")
    }
    if (tipoMoneda == "dolar"){
        return console.log(moneda*1.28611," Dolares ")
    }
    if (tipoMoneda == "yenes"){
        return console.log(moneda*129.852," Yenes ")
    }
}