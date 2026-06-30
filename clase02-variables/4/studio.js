/* Práctica 4 — Coerción de tipos
Dificultad: 🟡 intermedia

Objetivo
Entender la diferencia entre == (igualdad débil) y === (igualdad estricta), y por qué la coerción implícita de tipos puede generar bugs difíciles de detectar.

Consigna
Parte A — Predecir antes de ejecutar
Para cada línea, anotá en papel true o false antes de correrla. Después ejecutala en la consola y comparala con tu predicción:

 */

console.log(0 == false) // true le pegue
console.log(0 === false) // false le pegue
console.log("" == false) // true le pegue
console.log(null == undefined) // truen le pegue
console.log(null === undefined) // false le pegue 
console.log("5" == 5) // true le pegue
console.log("5" === 5) // false le pegue 

//confiamos

/* Parte B — ¿Cuándo usarías ==?
Respondé esta pregunta en papel antes de ver la respuesta:

"¿Hay algún caso en el que tenga sentido usar == en vez de ===?"

Rta: Sí, hay un caso donde tiene hay que usarlo y es para verificar si una variable es null o undefined de forma simultánea. */


/* Parte C — Arreglar código roto
Los tres fragmentos de abajo usan == y tienen un bug. Para cada uno:

Explicá qué problema puede causar el ==.
Reescribilo usando === (y lo que haga falta para que funcione bien). */

//Fragmento 1 — input vacío:
// El usuario escribe su nombre en un formulario

const nombreUsuario = " "; // espacios en blanco
if (nombreUsuario == "") {
  console.log("El nombre no puede estar vacío");
} else {
  console.log("Bienvenido, " + nombreUsuario);
}
//Problema: con == este código no detecta que el input tiene solo espacios.
/* Al usar ==, JavaScript convierte "  " (espacios) en un número antes de mirarla. 
La cadena se evalúa como \(0\), y como \(0 == 0\) es verdadero, el if falla: saluda al usuario en vez de pedirle que escriba su nombre correctamente. */


//Fragmento 2 — chequeo de null:
// Una función que busca un jugador en una lista
// Si no lo encuentra, devuelve null

const jugador = null;
if (jugador == undefined) {
  console.log("Jugador no encontrado");
}
//Problema: null == undefined es true en JS. Si más adelante el código cambia y devuelve undefined por error, este if los trata como si fueran lo mismo.

/* Problema del ==: Como null == undefined es true, si una función devuelve undefined por error (por ejemplo, 
al no encontrar el jugador en la base de datos), el if se ejecutará de todas formas, mostrando el mensaje incorrecto. */

//Fragmento 3 — número de formulario:
// El usuario ingresó su edad en un input HTML (siempre llega como string)

const edadTexto = "17";
const edadMinima = 16;
if (edadTexto == edadMinima) {
  console.log("Edad válida");
} else {
  console.log("Muy joven");
}
//Problema: funciona "por casualidad" gracias a la coerción, pero esconde que los tipos son diferentes. Mañana alguien puede poner edadMinima = "16" y el código sigue andando, ocultando que nunca se hizo la conversión.
/* El operador == realiza una coerción de tipos. 
esto puede dar errores lógicos, ya que 1 (número) será considerado igual a "1" (texto), lo cual no es lo que queremos.*/

