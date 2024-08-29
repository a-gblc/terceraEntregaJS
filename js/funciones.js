const prestamos = [
    { id: 1, tipo: "Hipotecario", tasa: 0.005 },
    { id: 2, tipo: "Pyme", tasa: 0.015 },
    { id: 3, tipo: "Personal", tasa: 0.025 },
    { id: 4, tipo: "Automotor", tasa: 0.035 },
];



document.addEventListener('DOMContentLoaded', () => {

localStorage.clear();

    const tipoPrestamoDesplegable = document.getElementById('tipoPrestamoDesplegable');
    prestamos.forEach(prestamo => {
        const eleccionPrestamo = document.createElement('option');
        eleccionPrestamo.value = prestamo.tipo;
        eleccionPrestamo.text = prestamo.tipo;
        tipoPrestamoDesplegable.appendChild(eleccionPrestamo);
    });


});


function obtenerTasa(tipo) {
    return prestamos.find(p => p.tipo === tipo).tasa;
}


const calcularCuotaMensual = (tipo, plazo, monto) =>
((monto * obtenerTasa(tipo)) / (1 - Math.pow(1 + obtenerTasa(tipo), -plazo))).toFixed(2);


function calcularPrestamo() {

const tipo = document.getElementById('tipoPrestamoDesplegable').value;
const monto = Math.abs(parseFloat(document.getElementById('monto').value));
const plazo = Math.abs(parseInt(document.getElementById('plazo').value));
const tasa = obtenerTasa(tipo);

const cuotaMensual = calcularCuotaMensual(tipo, plazo, monto, tasa);

const prestamoSeleccionado = { tipo, plazo, monto, cuotaMensual, tasa};

    localStorage.setItem('prestamoSeleccionado', JSON.stringify(prestamoSeleccionado));
    mostrarResumen();

}

function mostrarResumen() {
    const prestamoSeleccionado = JSON.parse(localStorage.getItem('prestamoSeleccionado'));
    const resultadoElement = document.getElementById('simulacion');


    if (prestamoSeleccionado) {
        resultadoElement.innerHTML = `
            <div class="resultadoElement">
            <h3>Resumen de la simulaci&oacuten:</h3>
            <p>Tipo de Préstamo: ${prestamoSeleccionado.tipo}</p>
            <p>Monto: ${prestamoSeleccionado.monto} pesos</p>
            <p>Plazo: ${prestamoSeleccionado.plazo} meses</p>
            <p>Tasa aplicada: ${prestamoSeleccionado.tasa* 100} % mensual</p>
            <p>Cuota Mensual: ${prestamoSeleccionado.cuotaMensual} pesos</p>
            </div>`;
    
    } 
}


