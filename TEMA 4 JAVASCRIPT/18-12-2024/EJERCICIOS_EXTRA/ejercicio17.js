

/*

Mostrar en pantalla una pirámide hecha con un símbolo.
El usuario introduce el símbolo que se usa y un valor que indica la altura en líneas de la pirámide.
 
* ** ***
  
 Ejemplo:
Si el usuario introduce # y 7, el resultado será:
      #
     ###
    #####
   #######
  #########
 ###########
#############
*/




const prompt = require("prompt-sync")();


const caracter = prompt("Dime tu caracter : ")
const filas = parseInt(prompt("Dime tu numero : "))


for (let i = 0; i < filas; i++) {
    let numCaracteres = 2 * i + 1;
    let numEspacios = filas - i - 1;
    
    let espacios = "";
    for (let j = 0; j < numEspacios; j++) {
        espacios += " ";
    }
    
    let caracteres = "";
    for (let k = 0; k < numCaracteres; k++) {
        caracteres += caracter;
    }
    
    console.log(espacios + caracteres);
 }