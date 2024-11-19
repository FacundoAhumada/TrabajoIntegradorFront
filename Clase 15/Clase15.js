/* Crea una clase CuentaBancaria que tenga las siguientes propiedades y métodos:
Propiedades:
titular: el nombre del titular de la cuenta.
saldo: el saldo de la cuenta (inicialmente 0).
Métodos:
depositar: que permita depositar dinero en la cuenta.
retirar: que permita retirar dinero de la cuenta (siempre y cuando haya suficiente saldo).
obtenerSaldo: que devuelva el saldo actual.
*/

/* 
Ejemplo de uso:
const cuenta = new CuentaBancaria("Juan Pérez");
cuenta.depositar(500);
console.log(cuenta.obtenerSaldo()); // 500
cuenta.retirar(200);
console.log(cuenta.obtenerSaldo()); // 300
cuenta.retirar(400); // "Fondos insuficientes."
*/

class CuentaBancaria {
    constructor(titular) {
        this.saldo = 0;
        this.titular = titular; 
    }
    depositar(depositar) {
        this.saldo += depositar
        console.log('Deposito exitoso su saldo actual es de: ' + this.saldo); 
    }
    retirar(monto) {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            console.log(`Se han retirado ${monto}. Nuevo saldo: ${this.saldo}.`);
        } else {
            console.log('El monto a retirar debe ser mayor que 0.');
        }
    }
    obtenerSaldo() {
        return this.saldo;
    }
}

const cuenta1 = new CuentaBancaria('Pedro');
cuenta1.depositar(500);
cuenta1.retirar(200);
console.log(`Saldo actual: ${cuenta1.obtenerSaldo()}`);


/* 
Crea una clase Libro que tenga las siguientes propiedades y métodos:
Propiedades:
titulo: el título del libro.
autor: el autor del libro.
paginas: el número de páginas del libro.
Métodos:
obtenerDescripcion: que devuelva una descripción del libro.
esLargo: que devuelva true si el libro tiene más de 300 páginas y false en caso contrario.
*/

/*
Ejemplo de uso:
const libro = new Libro("1984", "George Orwell", 328);
console.log(libro.obtenerDescripcion()); // "1984 de George Orwell, 328 páginas."
console.log(libro.esLargo()); // true
*/

class Libro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }

    obtenerDescripcion() {
        return `${this.titulo} de ${this.autor}, ${this.paginas} paginas. `;
    }

    esLargo() {
        return this.paginas > 300;
    }
}

const libro1 = new Libro("El gato negro", "Edgar Allan Poe", 224)
console.log(libro1.obtenerDescripcion());
console.log(libro1.esLargo());