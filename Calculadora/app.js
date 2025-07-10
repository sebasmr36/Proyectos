const pantalla = document.getElementById('resultado');
const botones = document.querySelectorAll('button');

function limpiarPantalla() {
    pantalla.value = '0';
}

function eliminarUltimo() {
    pantalla.value = pantalla.value.length > 1 ? pantalla.value.slice(0, -1) : '0';
}

function calcularResultado() {
    try {
        pantalla.value = eval(pantalla.value.replace('×', '*').replace('÷', '/'));
        setTimeout(limpiarPantalla, 5000);
    } catch {
        pantalla.value = 'Error';
        setTimeout(limpiarPantalla, 2000);
    }
}

function agregarCaracter(caracter) {
    if (pantalla.value === '0' && !isNaN(caracter)) {
        pantalla.value = caracter;
    } else {
        pantalla.value += caracter;
    }
}

function aplicarPorcentaje() {
    pantalla.value = (parseFloat(pantalla.value) / 100).toString();
}

limpiarPantalla();

botones.forEach(button => {
    button.addEventListener('click', function() {
        if (
            button.classList.contains('operador') &&
            (pantalla.value === '' || pantalla.value === '0')
        ) {
            alert('El formato usado no es válido!');
            return; 
        }
        switch (button.id) {
            case 'clear':
                limpiarPantalla();
                break;
            case 'eliminar':
                eliminarUltimo();
                break;
            case 'enter':
                calcularResultado();
                break;
            case 'porcentaje':
                aplicarPorcentaje();
                break;
            default:
                agregarCaracter(button.textContent);
        }
    });
});