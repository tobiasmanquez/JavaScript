/*Práctica 1 — Tipos y typeof*/

/* Parte A — Predecir antes de ejecutar */

typeof "Rosario" /* creo que devuelve 'string'*/
typeof 42 /* creo que devuelve 'number' */
typeof 3.14 /* creo que 'number'*/
typeof true /* creo que devuelve 'boolean'*/
typeof false /* creo que devuelve 'boolean'*/
typeof undefined /* creo que devuelve 'undefined'*/
typeof null /* creo que devuelve 'null'*/


/* Parte B — Declarar y verificar */

const ciudad = "Mendoza";     /* Pienso que es un texto (String) */
const habitantes = 115000;    /* Pienso que da un número (Number) */
const esCap = false;          /* Pienso que es un valor  (Boolean) */
const apodo = null;           /* Pienso que es un valor nulo (null) */
let fundacion;                /* Pienso que da (Undefined) */

console.log(typeof ciudad);     /* Devuelve: string */
console.log(typeof habitantes); /* Devuelve: number */
console.log(typeof esCap);      /* Devuelve: boolean */
console.log(typeof apodo);      /* Devuelve: object por el bugggggg*/
console.log(typeof fundacion);  /* Devuelve: undefined */

/* Parte C — Declarar y verificar */

const nada = null;
console.log(typeof nada); //? 

/* Pienso que dara null */ /* dio object por el bug de JS*/


