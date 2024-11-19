/*
Crear un modelo básico de un computador portatil utilizando un objeto. El objeto tendrá algunas propiedades y un par de métodos para que pueda realizar tareas sencillas.
Este objeto debe tener las siguientes propiedades: marca y modelo
Métodos sencillos: turnOn que muestre el mensaje "El computador [brand] [model] está encendido". Y openApp que acepta un nombre de aplicación como parámetro y simula la apertura de dicha aplicación".
Probar el Objeto:Usar console.log para probar los métodos que creaste.
Objetivo del Ejercicio:
Definir un objeto con propiedades.
Crear y usar métodos para ejecutar acciones simples.
Acceder a las propiedades del objeto utilizando this.
*/

let computador = {
    brand: "Lenovo",
    model: "320-15IAP",

    turnOn() {
        console.log(`El computador ${this.brand} ${this.model} esta encendido.`);
    }, 

    openApp(nombreAplicacion) {
        console.log(`Abriendo ${nombreAplicacion}.`);
    }
};

computador.turnOn();

computador.openApp('Spotify');