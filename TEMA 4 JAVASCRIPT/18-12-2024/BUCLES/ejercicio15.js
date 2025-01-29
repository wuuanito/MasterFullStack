/*

Escribe un programa que analice si la contraseña introducida es correcta o no. Para que la contraseña sea correcta deberá cumplir las siguientes directivas:
Debe tener 8 caracteres como mínimo.
La contraseña deberá contener números.
La primera letra tiene que ser en mayúsculas.
*/
const prompt = require("prompt-sync")();


const contrasenia = prompt("Dime una contraseña : ")


if (contrasenia.length >= 8) {
    if (contrasenia[0] == contrasenia[0].toUpperCase()) {
        let tieneNumero = false;
        
        for (let i = 0; i < contrasenia.length; i++) {
            if (Number.isInteger(parseInt(contrasenia[i]))) {
                tieneNumero = true;
                break;
            }
        }

        if (tieneNumero) {
            console.log("TODO CORRECTO");
        } else {
            console.log("Debe contener al menos un número");
        }

    } else {
        console.log("La primera no es mayuscula");
    }
} else {
    console.log("Minimo 8 caracteres");
}