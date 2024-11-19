/* Para resolver una regla de 3 simple sabemos que tenemos que conocer 3 valores y dar un resultado.

Según la imagen que vimos, la formula general seria (B * C) / A. En este punto es importante que el usuario ingrese bien los valores, ya que no es lo mismo ingresar (A * C) / B o (B * A) / C, claramente nos va a dar valores distintos a lo que debería.
La clave para evitar que haya una confusión, y que el usuario reciba su valor esperado, es comunicar efectivamente donde el usuario debe ingresar los 3 valores.

Entonces: Necesitamos 3 inputs, pero debemos ser muy claros cual es cada uno de esos inputs, y finalmente imprimir el resultado.
 */

function CalcularReglaTres() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    const x = document.getElementById('x');
    if (!isNaN(a) && !isNaN(b) && !isNaN(c))  {
        console.log("No es NaN")
        if ( a !== 0) {
            const resultado = (b * c) / a;
            x.value = `Resultado: ${resultado}`;
        } else {
            x.value = 'El valor de a tiene que ser distinto a 0';
        }
    } else {
        x.value = 'Porfavor ingrese valores validos';
        console.log("Es NaN");
    }
   
}