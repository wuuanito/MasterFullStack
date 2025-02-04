/*
El objeto randomObject tiene objetos anidados. Muestra por consola la clave board con valor broken . Luego, añade un
atributo debajo de él con la clave name y el valor que hayas pedido al usuario.

*/

let randomObject = {
    inner: {
      board: "broken"
    }
  }
  console.log(randomObject.inner.board)
  randomObject.inner.name = prompt("Ingresa un nombre:")
  