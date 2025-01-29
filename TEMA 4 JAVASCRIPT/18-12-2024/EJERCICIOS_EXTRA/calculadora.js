/*


Realizar un programa que implemente 6 operaciones básicas de una calculadora:
Suma, resta, producto, división, potencia y raíz cuadrada. El programa debe mostrar el siguiente menú:
************************
Calculadora
************************
1. Suma
2. Resta
3. Multiplicación
4. Potencia
5. División
6. Raíz
7. Salir
Introduce la opción deseada:
Reglas del programa:
Opciones entre 1 y 6:
En todos los casos se solicitará introducir dos números por teclado y se realizará la operación matemática correspondiente. En pantalla se mostrará el resultado con el formato:
  Operación seleccionada: <nombre de la operación> Operando1 <operación> Operando2 = Resultado
Opción 7:
Finalizar el programa.
Opción fuera del rango (1-7): Mostrar el mensaje:
Después, volver a mostrar el menú para que el usuario pueda continuar.
El menú debe mostrarse constantemente hasta que el usuario elija la opción "Salir".
Opción X no disponible, vuelva a intentarlo.

*/

const prompt = require("prompt-sync")();

let opcion;

do {
   console.log("************************")
   console.log("Calculadora")
   console.log("************************")
   opcion = parseInt(prompt("1. Suma \n2. Resta \n3. Multiplicacion \n4. Potencia \n5. Division \n6. Raiz \n7. Salir \n"))

   if(opcion == 7) {
       break;
   }
   else if(opcion < 1 || opcion > 7) {
       console.log("Opción no disponible, vuelva a intentarlo.");
       continue;
   }

   const numeroUno = parseInt(prompt("Dime tu primer numero : "))
   const numeroDos = parseInt(prompt("Dime tu segundo numero : "))

   switch(opcion){
       case 1:
           const suma = numeroUno + numeroDos
           console.log("Operacion seleccionada: SUMA", numeroUno, " + ", numeroDos, " = ", suma)
           break
       case 2:
           const resta = numeroUno - numeroDos
           console.log("Operacion seleccionada: RESTA", numeroUno, " - ", numeroDos, " = ", resta)
           break
       case 3:
           const multiplicacion = numeroUno * numeroDos
           console.log("Operacion seleccionada: MULTIPLICACIÓN", numeroUno, " * ", numeroDos, " = ", multiplicacion)
           break
       case 4:
           let potencia = 1
           for(let i = 0; i < numeroDos; i++){
               potencia = potencia * numeroUno
           }
           console.log("Operacion seleccionada: POTENCIA", numeroUno, " ^ ", numeroDos, " = ", potencia)
           break
       case 5:
           if(numeroDos === 0) {
               console.log("No se puede dividir entre cero")
           } else {
               const division = numeroUno / numeroDos
               console.log("Operacion seleccionada: DIVISION", numeroUno, " / ", numeroDos, " = ", division)
           }
           break
       case 6:
           const raiz = Math.sqrt(numeroUno)
           console.log("Operacion seleccionada: RAIZ", "√", numeroUno, " = ", raiz)
           break
   }
} while(opcion != 7)

