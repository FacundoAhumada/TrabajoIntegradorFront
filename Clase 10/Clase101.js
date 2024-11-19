/* Ejercicio dos: Adivina el Número
Descripción: Escribe un programa en JavaScript que le pida al usuario que adivine un número aleatorio entre 1 y 10. El programa debe seguir pidiendo números hasta que el usuario adivine correctamente. Usa un ciclo do...while para asegurarte de que el programa pida al menos una vez el número, y termina el ciclo solo cuando el usuario adivine el número correcto.

Instrucciones:
Genera un número aleatorio entre 1 y 10.
Usa un ciclo do...while para pedir al usuario
que ingrese un número.
Si el número es incorrecto, muestra un mensaje de error y vuelve a pedir otro número.
Si el número es correcto, felicita al usuario y termina el ciclo.

Consejo: utilizar la biblioteca Math para generar un numero aleatorio entre el 1 y el 10
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
*/

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;

do {
    // Pide al usuario un número
    numeroUsuario = parseInt(prompt("Vamos a jugar un juego, tengo un número aleatorio. Trata de adivinarlo:"));

    // Compara el número ingresado con el número aleatorio
    if (numeroAleatorio !== numeroUsuario) {
        console.log("Número incorrecto, intenta de nuevo.");
    } else {
        console.log("¡Felicidades, acertaste!");
    }

}
while (numeroAleatorio !== numeroUsuario);