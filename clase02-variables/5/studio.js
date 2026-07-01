/*Práctica 5 — Mini ficha de jugador
Dificultad: 🔴 desafío

Objetivo
Integrar todo lo visto hasta ahora: tipos de datos, const/let, template literals y operadores básicos, para construir algo con sentido real desde cero.

Consigna
Vas a armar la ficha de un jugador del Mundial 2026.

Parte A — Las variables
Declaré al menos 5 variables que representen datos del jugador. Usá al menos 4 tipos distintos (string, number, boolean, null):

Dato	                                          Tipo sugerido
Nombre completo	                                     string
Edad	                                             number
Número de camiseta	                                 number
Es capitán del equipo	                             boolean
Goles en el torneo actual	                         number
Algo que todavía no se sabe (lesión, contrato)	     null

Para cada variable decidí si va con const o let:

¿El dato puede cambiar durante el partido o el torneo? → let
¿El dato es fijo? → const
 */

// PARTE A — Las variables
const nombreCompleto = "Lionel Messi"; // Const
let edad = 39; // Variable (cumple años durante el torneo)
let numerocamiseta = 10; // Variable (podría cambiar en otro club o torneo)
const capitan = true; // Const (es el capitán)
let golesTorneo = 4; // Variable (aumenta con los goles que haga)
const lesionactual = null; // Const por ahora (dato nulo)

/*Parte B — Tres salidas con console.log
Usá template literals para armar y mostrar:

1. Presentación de una línea:

Lionel Messi, 38 años — Camiseta #10

2. Resumen de dos líneas con salto de línea real (sin \n, con Enter dentro del template literal):

Equipo: Argentina | Posición: Delantero
Goles en el torneo: 4

3. Una línea que use una condición booleana:

¿Es capitán? Sí
o
¿Es capitán? No

Para la parte 3, el valor booleano true/false no se imprime directamente: 
convertilo a texto con una expresión ternaria dentro del template literal: 
${esCap ? "Sí" : "No"}. */


// PARTE B — Tres salidas con console.log
// 1. Presentación de una línea
console.log(`${nombreCompleto}, ${edad} años — Camiseta #${numeroCamiseta}`);

// 2. Resumen de dos líneas con salto real
console.log(`Equipo: Argentina | Posición: Delantero
Goles en el torneo: ${golesTorneo}`);

// 3. Expresión ternaria para el booleano
console.log(`¿Es capitán? ${esCapitan ? "Sí" : "No"}`);

/*Parte C — Una cuenta simple
Calculá e imprimí cuántos goles le faltan al jugador para llegar a 5 (el umbral de "goleador del torneo"):

Le faltan 1 goles para ser goleador del torneo.

Si ya tiene 5 o más:

Ya es goleador del torneo con 6 goles. */

// PARTE C — Una cuenta simple
const umbralGoles = 5;

if (golesTorneo >= umbralGoles) {
  console.log(`Ya es goleador del torneo con ${golesTorneo} goles.`);
} else {
  let golesFaltantes = umbralGoles - golesTorneo;
  console.log(`Le faltan ${golesFaltantes} goles para ser goleador del torneo.`);
}


