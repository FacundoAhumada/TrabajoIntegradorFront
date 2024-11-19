/*  

Ejercicio: Manipulación básica de arrays
Instrucciones:
Crea un array llamado frutas que contenga las siguientes frutas: "manzana", "banana", "naranja", "uva", "kiwi".
Realiza las siguientes operaciones en el array:
Imprime en la consola el primer elemento del array.
Imprime en la consola el último elemento del array (utiliza la propiedad .length).
Añade la fruta "mango" al final del array.
Añade la fruta "fresa" al inicio del array.
Elimina el primer elemento del array e imprime el array resultante.
Elimina el último elemento del array e imprime el array resultante.
Reemplaza el tercer elemento del array con la fruta "piña".
Utiliza un ciclo for o forEach para imprimir todos los elementos del array.

*/

let frutas = ["Manzana","Banana","Naranja","Uva","Kiwi"];

console.log(frutas[0]);

console.log(frutas[frutas.length - 1]);

console.log(frutas[5 - 1]);

frutas.push("Mango");

console.log(frutas);

frutas.unshift("Fresa");

console.log(frutas);

frutas.shift();

console.log(frutas);

frutas.pop();

console.log(frutas);

console.log(frutas[2]);

frutas[2] = "Pinia";

console.log(frutas);

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}


frutas = ["Manzana","Banana","Naranja","Uva","Kiwi"];

frutas.forEach(fruta => {
    console.log(fruta);
});