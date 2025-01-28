/**
 * Decir el número de helados que queremos comprar. Cada helado vale 2 euros. Si compramos más de 10 helados, nos regalan uno. 
 * Mostrar en pantalla el número de helados que nos dan y cuánto hemos pagado por ellos. 
 * (Sólo damos un helado gratuito aunque compren muchos más helados que 10)
 */

const prompt = require("prompt-sync")();

const helados = prompt("Dime cuantos helados : ");

const heladosGratis = Math.min(1,parseInt(helados/10))

const costeHelados = helados *2

console.log("helados Gratis",heladosGratis," nos han costado: ",costeHelados," y nos han dado ", parseInt(helados)+heladosGratis)