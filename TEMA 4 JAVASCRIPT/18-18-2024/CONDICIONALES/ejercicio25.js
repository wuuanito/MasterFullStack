/*

Bob es un adolescente vago, en una conversación sus contestaciones son muy limitadas: 
1. Bob responde: “¡Claro!” si le haces una pregunta.
2. Bob responde “¡Eh!, tranquilízate.” si le gritas
3. Bob responde “¡Eh, tranquilízate! Yo sé lo que hago.” Si le haces una pregunta
4. Bob responde “Vale con que esas tenemos...” Si no le dices nada 
5. Bob responde “Sin más.” a cualquier otra cosa
*/

const prompt = require("prompt-sync")();

const frase = prompt("Di algo: ")
let contienePregunta
let contieneExclamacion

for (let i =0 ; i<=frase.length;){

    if(frase[i]=="?"){ contienePregunta = true}
    if(frase[i]=="!"){ contieneExclamacion = true}
    i++
}

if (contienePregunta == true && contieneExclamacion == true){console.log("¡Eh, tranquilízate! Yo sé lo que hago.")}
if (contienePregunta == true && contieneExclamacion != true){console.log("¡Claro!")}
if (contienePregunta != true && contieneExclamacion == true){console.log("¡Eh!, tranquilízate.")}
if (frase.length == 0){console.log("Vale con esas tenemos")}
if (contieneExclamacion!= true && contienePregunta != true && frase.length > 0){console.log("Sin mas")}

