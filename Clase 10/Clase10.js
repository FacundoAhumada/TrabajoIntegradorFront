/* Ejercicio uno: Suma de Números Pares
Descripción: Escribe un programa que utilice un ciclo for para sumar todos los números pares del 1 al 100. Al final, muestra la suma total en la consola.

Instrucciones:
Declara una variable que almacenará la suma de los números pares.
Utiliza un ciclo for para recorrer los números del 1 al 100.
Dentro del ciclo, verifica si el número es par. Si lo es, añade el número a la variable de suma.
Al finalizar el ciclo, imprime la suma total en la consola.

Ejemplo:
Si ejecutas el programa, debería mostrar:

La suma de los números pares del 1 al 100 es: 2550 */

let numerosPares = 0;

for (let i = 1; i <= 100; i++) {

    if(i % 2 === 0) {
        numerosPares += i;
    }
    
}
console.log("La suma de los numeros pares del 1 al 100 da: " + numerosPares);

for (let i = 0; i >= -10; i--) {
    console.log(i);
}