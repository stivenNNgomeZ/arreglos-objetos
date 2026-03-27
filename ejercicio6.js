// Ejercicio 6
const termo = {
  marca: "Hydro Flask",
  color: "Azul",
  capacidad: "500ml",
  material: "Acero inoxidable"
};
 
for (const [clave, valor] of Object.entries(termo)) {
  console.log(clave + ": " + valor);
}
 