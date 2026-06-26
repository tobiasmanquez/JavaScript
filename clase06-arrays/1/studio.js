//Práctica 01 — Sort trampa 

const edades = [9, 15, 11, 8, 21, 17, 100];
console.log(edades.sort());

//Parte A — la trampa
//Ejecutá este código tal como está:


//Antes de correrlo, escribí en papel o en un comentario cuál creés que va a ser el resultado.

//Ejecutalo. ¿Coincide con lo que predijiste?
//Escribí con tus palabras por qué el resultado está mal.

/* Esta mal porque de esa manera, el programa toma a los valores como string   */

//Parte B — arreglalo

const edades = [9, 15, 11, 8, 21, 17, 100];
console.log(edades.sort((a, b) => a - b));

/* Aca acomoda los numeros de menor a mayor */

//Parte C — invertilo

const edades = [9, 15, 11, 8, 21, 17, 100];
console.log(edades.sort((a, b) => b - a));

/* Aca acomoda los numeros de mayor a menor */


