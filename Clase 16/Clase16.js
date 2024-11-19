/*
Crea una clase Animal que tenga las siguientes propiedades y métodos:
Propiedades:
nombre: el nombre del animal.
tipo: el tipo de animal (ej. perro, gato).
Métodos:
hablar: que devuelva un mensaje que represente el sonido que hace el animal.
Crea dos subclases Perro y Gato que extiendan de Animal y sobrescriban el método hablar para que devuelva el sonido correspondiente.
*/

class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    hablar() {
        console.log(this.nombre + ' hace un sonido.');
    }
}

class Perro extends Animal {
    constructor(nombre) {
        super(nombre, "perro")
    }
    hablar() {
        console.log(this.nombre + ' ladra.');
    }
}

class Gato extends Animal {
    constructor(nombre) {
        super(nombre, "gato")
    }
    hablar() {
        console.log(this.nombre + ' maulla.');
    }
}

const gato1 = new Gato("Garfield");

gato1.hablar();

const perro1 = new Perro("Bobby");
console.log(perro1.nombre);
console.log(perro1.tipo);
perro1.hablar();

const animal1 = new Animal("Coco");

animal1.hablar();