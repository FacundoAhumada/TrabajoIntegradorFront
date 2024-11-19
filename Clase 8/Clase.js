/* Se requiere calcular el producto de dos números. Crear una función que reciba dos números y que retorne la siguiente salida : 
El resultado de la multiplicación.

Para ello Ud. dispone de las siguientes Entradas: 
Número 1 (n1): identifica el primer número 
Número 2 (n2): identifica el segundo número.

imprimir el resultado de multiplicacion y sumarle 5
extra:


*/

function multiplicacion(n1, n2) {
    return n1 * n2;   
}

console.log(multiplicacion(2, 4));


let resultado = multiplicacion(4, 1) + 5;

console.log(resultado);


/* Una persona necesita obtener información relacionado con el desempeño de su automóvil. Se pide retornarlas siguientes Salidas:  
La cantidad de litros consumidos.  El importe gastado en combustible. 

Para ello Ud. dispone de las siguientes Entradas:  
Kilómetros (km): representa los Km recorridos por el vehículo.  
Precio (pr): representa el precio de combustible por litro.  
Kilómetros Litro (kmL): representa los km recorridos por cada litro. */

function desempeñoautomovil(km, pr, kmL) {


    let litrosconsumidos = km / kmL;

    let importegastado = litrosconsumidos * pr;


console.log("litrosconsumidos: ", litrosconsumidos);
console.log("importegastado: ", importegastado);
return
}

 desempeñoautomovil(80, 40, 20);


/* Desarrollar una función que le solicite al usuario su año de nacimiento, y que calcule y retorne la edad que tendrá el usuario a fin de este año. */

function calcularaño() {

    let añoactual = 2024;



let nacimiento = prompt("Ingrese su fecha de nacimiento");

let edad = añoactual - nacimiento;

return edad;
}

console.log(calcularaño());


/* El observatorio meteorológico necesita obtener información relacionada con la variación de temperaturas en distintos momentos del día. Se pide retornar la siguiente Salida Impresa: 

 La temperatura promedio del día 

Para ello Ud. Debe pedirle al usuario la siguiente información: 

Temperatura 1 (t1): representa la temperatura tomada en horas de la mañana. 
Temperatura 2 (t2): representa la temperatura tomada en horas de la tarde.  
Temperatura 3 (t3): representa la temperatura tomada en horas de la noche. */

/* function calculartemperatura(t1, t2, t3) {
    let temperatura1 = prompt("Ingrese temperatura de la mañana: ");
    let t2 = prompt("Ingrese temperatura de la tarde: ");
    let t3 = prompt("Ingrese temperatura de la noche: ");

    let variacion = (t1 + t2 + t3) / 3; 

    console.log("La temperatura del dia es" + variacion + "°C");
}


/* Se necesita conocer cuál es el valor mayor de entre dos números. Suponer que estos números son distintos. 

Se pide retornar la siguiente salida:  
Cuál de los números es el mayor. 

Para ello Ud. dispone de las siguientes entradas:  
Número1 (n1): representa el primer número a comparar.  
Número2 (n2): representa el segundo número a comparar.
*/

let Numero1 = 2;
let Numero2 = 7;

if (Numero1 > Numero2) {
    console.log("Numero1 es mayor que Numero2");
} else {
    console.log("Numero1 es menor que Numero2");
}


/* En un comercio se venden tres modelos de frascos codificados como 1, 2 y 3. Se pide retornar la siguiente salida:  
Emitir un listado con la descripción de cada frasco; como se muestra a continuación: 1. Chico 2. Mediano 3. Grande 

Para ello Ud. dispone de la siguiente entrada:  
Código de Frasco (cod): representa el código de frasco a ingresar. Los valores que asume esta entrada de dato son 1, 2 o 3. */

function descripcionfrasco(){

    let cod = prompt("Ingrese codigo de frasco 1, 2 o 3");

    switch (cod) {
        case 1:
            console.log("1. Chico");
            break;
        case 2:
            console.log("2. Mediano");
            break;
        case 3:
            console.log("3. Grande");
            break;
        default:
            console.log("Código inválido. Ingrese un valor entre 1 y 3.");
    }
}
