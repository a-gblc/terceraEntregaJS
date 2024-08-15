const tasasMensuales = [0.008, 0.015, 0.025, 0.035];
const tiposPrestamos = ['hipotecario', 'pyme', 'personal', 'automotor'];

class Prestamo {
    constructor(tipo, plazo, monto) {
        this.tipo = tipo;
        this.plazo = plazo;
        this.monto = monto;
        this.tasa = this.tasaInteres();
    }
    
    tasaInteres() {
        
        let indiceTiposPrestamo = tiposPrestamos.indexOf(this.tipo);
        return tasasMensuales[indiceTiposPrestamo];
    }
    
    calcularPrestamo() {
        let cuotaMensual = this.monto / this.plazo;
        let cuotaTotal = cuotaMensual + (cuotaMensual * this.tasa);
        console.log('El valor de su cuota mensual es de ' + cuotaTotal + ' pesos.');
    }
}

let eleccionPrestamo = prompt('Ingrese el préstamo que desea simular (hipotecario, pyme, personal, automotor):').toLowerCase();
while (!tiposPrestamos.includes(eleccionPrestamo)) {
    console.log('El tipo de préstamo no es válido. Elegí entre : hipotecario, pyme, personal, automotor.');
    eleccionPrestamo = prompt('Ingrese el préstamo que desea simular (hipotecario, pyme, personal, automotor):').toLowerCase();
    
}

console.log('Ha elegido un préstamo :' + '' + ' ' + eleccionPrestamo );

let plazoDelPrestamoMeses = parseInt(prompt('Ingrese el plazo en meses:'));
while (isNaN(plazoDelPrestamoMeses)) {
    console.log('El valor ingresado no es válido.');
    plazoDelPrestamoMeses = parseInt(prompt('Ingrese el plazo en meses'));
}

let montoSolicitado = parseInt(prompt('Ingrese el monto solicitado'));
while (isNaN(montoSolicitado)) {
    console.log('El valor ingresado no es válido.');
    montoSolicitado = parseInt(prompt('Ingrese el monto solicitado'));
}


const prestamo1 = new Prestamo(eleccionPrestamo, plazoDelPrestamoMeses, montoSolicitado);
prestamo1.calcularPrestamo();
console.log(prestamo1);




