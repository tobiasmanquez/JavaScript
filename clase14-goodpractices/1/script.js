//Fragmento A


function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}

// saludar("Ana"
saludar("Luis");


// **Resultado esperado** una vez corregido: imprimir "Hola, Ana!" y "Hola, Luis!" en la consola.

// Va a aparecer en consola, "SyntaxError"
//Porque en la linea 8 en el primer "saludar", falta cerrar el parentesis y el punto y coma

// Fragmento B

//Arreglo
//const cantidadAlumnos = 5
const edades = [15, 17, 14, 18, 16];

let suma = 0;
for (const edad of edades) {
    suma += edad;
}

console.log("Promedio:", suma / cantidadAlumnos);


//  **Resultado esperado** una vez corregido: imprimir el promedio de edades (16).

//En este caso, en consola aparecera "ReferenceError"
//Porque "cantidadAlumnos" no esta definida


//  Fragmento C


const producto = {
    nombre: "Remera",
    precio: 1500,
};

const nombreEnMayusculas = producto.nombre.toUpperCase();
const descripcion = producto.descripcion.toUpperCase();

console.log(nombreEnMayusculas);
console.log(descripcion);


// **Resultado esperado** una vez corregido: imprimir "REMERA" y manejar el caso en que `descripcion` no existe.

// En este caso en consola aparecera, otra vez "TypeError"
//Porque "descripcion" no tiene un valor inicial asignado en el objeto

//El arreglo seria agregar "descripcion" en el objeto como por ejemplo
// decripcion: "100% algodon"
//y por ultimo para cumplir con la consigna eliminar la linea 47 en este caso
