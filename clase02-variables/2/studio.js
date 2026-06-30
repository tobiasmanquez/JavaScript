/* Práctica 2 — var vs let y const */

/* Parte A — El bucle roto */

/* ¿Qué valor tiene i después de que termina el bucle? ¿O da error? ¿Por qué? */

/* Código para analizar */

for (var i = 0; i < 3; i++) {
    console.log("Botón " + i + " creado");
}
console.log("i después del bucle:", i); /* ??? */

/* El valor de i después de que termina el bucle es 3 y no da ningún error. 
Cuando for finaliza, se ejecuta la última i de la variable(i++ cambia el valor a 3) y la condición i < 3 ya no se cumple, 
por lo que el bucle se para.
Sin embargo, la variable i sobrevive y su valor se mantiene accesible en el resto del código. Por lo tanto, 
la secuencia completa de lo que imprime es código es: Botón 0 creadoBotón 1 creadoBotón 2 creadoi después del bucle: 3 */


/* Parte B — Arreglarlo con let */

for (let i = 0; i < 3; i++) {
    console.log("Botón " + i + " creado");
}
console.log("i después del bucle:", i); /* ??? */ /* dio lo mismo */

/* La diferencia es en el (scope) de las variables:
Con var la variable tiene un alcance de función o global en todo el codigo. 
Esto significa que i se va del bucle for. 
Al terminar la ejecución, i sigue y conserva su último valor (3), por lo que el último console.log se ejecuta sin problemas.

Con let: La variable tiene alcance de bloque. El bucle for hace su propio bloque. 
La variable i solo existe dentro de ese bloque y en cada iteración por separado. 
Una vez que el bucle termina, esa i se destruye, por lo que intentar llamarla desde afuera genera un error */