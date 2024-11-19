function TiposUnidades() {
    console.log('TiposUnidades');
    const unit_in = document.getElementById('unit_in');
    const unit_out = document.getElementById('unit_out');
    const tipo_conversion = document.getElementById('tipo_conversion');
    console.log(unit_in.value, unit_out.value, tipo_conversion.value);

    unit_in.innerHTML = '<option value="">Seleccione...</option>';
    unit_out.innerHTML = '<option value="">Seleccione...</option>';

    if (tipo_conversion.value === 'temperatura') {
        agregarOpciones(unit_in, ['Celsius', 'Fahrenheit', 'Kelvin']);
        agregarOpciones(unit_out, ['Celsius', 'Fahrenheit', 'Kelvin']);
    } else if (tipo_conversion.value === 'longitud') {
        agregarOpciones(unit_in, ['metros', 'kilometros', 'millas', 'pies']);
        agregarOpciones(unit_out, ['metros', 'kilometros', 'millas', 'pies']);
    } else if (tipo_conversion.value === 'peso') {
        agregarOpciones(unit_in, ['gramos', 'kilogramos', 'libras']);
        agregarOpciones(unit_out, ['gramos', 'kilogramos', 'libras']);
    }
}

function agregarOpciones(selectElement, opciones) {
    opciones.forEach(opcion => {
        const option = document.createElement('option');
        option.value = opcion.toLowerCase();
        option.textContent = opcion;
        selectElement.appendChild(option);
    });
}

function ConversionUnidades() {
    const entrada_unidad = document.getElementById('unit_in').value;
    const salida_unidad = document.getElementById('unit_out').value;
    const valor_unidad = parseFloat(document.getElementById('valor_entrada').value);
    let resultado = 0;

    const tipoConversion = document.getElementById('tipo_conversion').value;

    if (tipoConversion === 'temperatura') {
        resultado = convertirTemperatura(entrada_unidad, salida_unidad, valor_unidad);
    } else if (tipoConversion === 'longitud') {
        resultado = convertirDistancia(entrada_unidad, salida_unidad, valor_unidad);
    } else if (tipoConversion === 'peso') {
        resultado = convertirPeso(entrada_unidad, salida_unidad, valor_unidad);
    }
    
    document.getElementById('resultado').value = `Resultado: ${resultado}`;
}

function convertirTemperatura(entrada, salida, valor) {
    if (entrada === salida) return valor;

    if (entrada === 'Celsius') {
        if (salida === 'Fahrenheit') return (valor * 9/5) + 32;
        if (salida === 'Kelvin') return valor + 273.15;
    }
    if (entrada === 'Fahrenheit') {
        if (salida === 'Celsius') return (valor - 32) * 5/9;
        if (salida === 'Kelvin') return (valor - 32) * 5/9 + 273.15;
    }
    if (entrada === 'Kelvin') {
        if (salida === 'Celsius') return valor - 273.15;
        if (salida === 'Fahrenheit') return (valor - 273.15) * 9/5 + 32;
    }
    return "Conversión no válida";
}

function convertirDistancia(entrada, salida, valor) {
    if (entrada === salida) return valor;

    if (entrada === 'metros') {
        if (salida === 'kilometros') return valor / 1000;
        if (salida === 'millas') return valor / 1609.34;
        if (salida === 'pies') return valor * 3.28084;
    }
    if (entrada === 'kilometros') {
        if (salida === 'metros') return valor * 1000;
        if (salida === 'millas') return valor * 0.621371;
        if (salida === 'pies') return valor * 3280.84;
    }
    if (entrada === 'millas') {
        if (salida === 'metros') return valor * 1609.34;
        if (salida === 'kilometros') return valor / 0.621371;
        if (salida === 'pies') return valor * 5280;
    }
    if (entrada === 'pies') {
        if (salida === 'metros') return valor / 3.28084;
        if (salida === 'kilometros') return valor / 3280.84;
        if (salida === 'millas') return valor / 5280;
    }
    return "Conversión no válida";
}

function convertirPeso(entrada, salida, valor) {
    if (entrada === salida) return valor;

    if (entrada === 'gramos') {
        if (salida === 'kilogramos') return valor / 1000;
        if (salida === 'libras') return valor * 0.00220462;
    }
    if (entrada === 'kilogramos') {
        if (salida === 'gramos') return valor * 1000;
        if (salida === 'libras') return valor * 2.20462;
    }
    if (entrada === 'libras') {
        if (salida === 'gramos') return valor * 453.592;
        if (salida === 'kilogramos') return valor / 2.20462;
    }
    return "Conversión no válida";
}
