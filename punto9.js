let productos = [
  { nombre: "Laptop", precio: 2500, disponible: true },
  { nombre: "Mouse", precio: 50, disponible: true },
  { nombre: "Teclado", precio: 100, disponible: false }
];

for (let producto of productos) {
  console.log(producto.nombre);
}