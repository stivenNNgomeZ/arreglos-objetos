// Arreglo inicial
let frutas = ["Manzana", "Pera", "Uva"];

// Agregar "Banano" al inicio
frutas.unshift("Banano");

// Eliminar el último elemento
frutas.pop();

// Mostrar arreglo final
console.log(frutas);

// Recorrer con for...of
for (let fruta of frutas) {
  console.log(fruta);
}