let pantalla = document.getElementById('val_display'); // Fix to target h2 for the display
let botones = document.querySelectorAll('#button button');

let operacion = '';

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const value = boton.value;

        if (value === '=') {
            try {
                operacion = eval(operacion).toString();
                pantalla.textContent = operacion;
            } catch (error) {
                pantalla.textContent = 'Error';
                operacion = ''; // Reset operation on error
            }
        } else if (value === 'CE') {
            operacion = '';
            pantalla.textContent = '';
        } else if (value === 'backspace') {
            operacion = operacion.slice(0, -1);
            pantalla.textContent = operacion;
        } else {
            operacion += value;
            pantalla.textContent = operacion;
        }
    });
});
