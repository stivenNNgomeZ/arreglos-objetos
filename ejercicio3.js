// Crear arreglo con 6 notas
let notas = [3.5, 4.0, 2.8, 5.0, 3.9, 4.2];

// Variable para sumar
let suma = 0;

// Recorrer con for
for (let i = 0; i < notas.length; i++) {
  suma = suma + notas[i];
}

// Calcular promedio
let promedio = suma / notas.length;

// Mostrar resultado
console.log("Promedio:", promedio);