/* 
Ejercicio 8: Operadores lógicos



1. Declara tres variables:
let esMayorDeEdad = true;
let tieneLicencia = false;
let puedeConducir = esMayorDeEdad && tieneLicencia;


---------------------------------------
2. Responde:
¿Qué valor tiene puedeConducir y por qué?
Cambia tieneLicencia a true . ¿Qué ocurre?

---------------------------------
3. Crea una nueva condición usando el operador OR ( || ):
let tieneCarnetProvisional = true;
let acceso = tieneLicencia || tieneCarnetProvisional;
console.log(acceso);

------------------------------
4. ¿Qué imprime acceso ?

*/


//EJERCICIO 1

let esMayotDeEdad = true 
let tieneLicencia = true  
let puedeConducir = esMayotDeEdad && tieneLicencia

//EJERCICIO 2

/*
El valor de puedeConducir es False ya que && es un AND entonces se compara si true == a False y como no es da False

si lo cambio a true si me da true 
*/

//EJERCICIO 3

let tieneCarnetProvisional = true
let acceso = tieneLicencia  || tieneCarnetProvisional 

console.log(acceso)

//EJERCICIO 4

// Imprime true porque es un or entonces una u otra 