/*
. Escribe una función que escriba “Hola” tantas veces como el número que le pasamos de parámetro. Llámala dos veces, primero
con 5 y después con 3.
*/


function saludar(numero){
    for(i=0;i<numero;i++){
        console.log("HOLA")
    }
}



saludar(3)
console.log("--------")
saludar(5)