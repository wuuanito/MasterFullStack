/*
Escribe un programa que muestre los números del 1 al 12 en una columna.
En la columna de los números impares mostrar el cuadrado de ese valor y en la de los pares mostrar el cubo.
*/

console.log("Pares || Cubos     Impares || Cubos");
console.log("--------------------------------");
for (let i = 1; i <= 12; i+=2) {
    console.log(`${i+1}    || ${(i+1)*(i+1)*(i+1)}        ${i}     || ${i*i}`);
}