document.getElementById('formulario').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('email');
    const mensajeDiv = document.getElementById('mensaje');

    mensajeDiv.textContent = '';

    if (!emailInput.value.includes('@')) {
        event.preventDefault(); 
        mensajeDiv.textContent = 'Se necesita el símbolo @ en el correo electrónico.';
    } else {
        
        mensajeDiv.textContent = 'El formulario se ha cumplido correctamente.';
    }
});

let botonEnviar = document.getElementById('boton');

botonEnviar.onclick = function() {
    alert('El formulario fue enviado.');
}

botonEnviar.onmouseover = function() {
    
}

botonEnviar.onmouseover = function () {
    botonEnviar.classList.add("highlight");
 };

 botonEnviar.onmouseout = function () {
    botonEnviar.classList.remove("highlight");
 }; 