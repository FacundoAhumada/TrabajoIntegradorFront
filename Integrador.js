document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('validationCustomUsername');

    emailInput.addEventListener('input', function () {
        if (emailInput.value.includes("@") === false && emailInput.value !== "") {
            alert("Necesita poner @");
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {

    const form = document.querySelector('form');
    const comentario = document.querySelector('#floatingTextarea2');

    form.addEventListener('submit', function (event) {
        if (comentario.value.trim() === '') {
        event.preventDefault();
        alert("Debe rellenar el casillero con su comentario u opinion.");
        }

        alert("El formulario ha sido enviado correctamente");

        form.reset();
    });
});