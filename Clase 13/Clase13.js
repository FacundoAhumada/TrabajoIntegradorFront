/*
Realizar un formulario que tenga dos inputs, nombre y edad (uno de tipo text y otro de tipo number) y un botón de envío.
Al cargar la página se debe desplegar un alert (usando la funcion alert()) que diga “La página ha cargado completamente.”
Cuando se cambia el valor en los campos de nombre o edad y el usuario sale de ellos (o hace clic en otro lado), se deben mostrar alertas con los nuevos valores.
Al hacer clic en el botón de "Enviar", se dispara una alerta que indica que el formulario fue enviado (en este caso, es solo un ejemplo, no envía datos realmente).
Al pasar el cursor por encima del botón, este se resalta en color amarillo; cuando el cursor sale del botón, vuelve a su estado original.
Cada vez que el usuario presiona una tecla dentro del campo nombre, se registra en la consola qué tecla fue presionada.

*/

window.onload = function() {
    alert("La pagina ha cargado completamente.")
}

let nombreInput = document.getElementById('nombre');

let edadInput = document.getElementById('edad');

let botonEnviar = document.getElementById('boton');

nombreInput.onchange = function() {
    let nombreNuevo = nombreInput.value;
    alert('El nombre ha sido cambiado: ' + nombreNuevo);
}

edadInput.onchange = function() {
    let edadNueva = edadInput.value;
    alert('La edad ha sido cambiada: ' + edadNueva);
}

botonEnviar.onclick = function() {
    alert('El formulario fue enviado.');
}

botonEnviar.onmouseover = function() {
    
}

//Evento onmouseover para resaltar el botón 
botonEnviar.onmouseover = function () {
    botonEnviar.classList.add("highlight");
 };

 // Evento onmouseout para restaurar el botón 
botonEnviar.onmouseout = function () {
    botonEnviar.classList.remove("highlight");
 }; 
 // Evento onkeydown para capturar cuando una tecla es presionada en el campo 'nombre' 
nombreInput.onkeydown = function (event) {
    console.log(event)
    console.log("--------")
 console.log("Tecla presionada: " + event.key);
 };
 