/*

Crear un array. Usar un for para asignar los valores de 20 a 11 a las 10 primeras posiciones (en orden descendente). Usar un
for para mostrar los 10 valores en pantalla
*/


let miArray = []
let valor = 20
for (let i  = 0;i<10;i++){
    miArray[i]= valor
    valor--
}

for (let i  = 0;i<10;i++){
    console.log(miArray[i])
}
