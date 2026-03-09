"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Persona {
    constructor(nombre, edad) {
        if (edad <= 0) {
            console.log(`Edad no valida`);
            edad = 1;
        }
        this.nombre = nombre;
        this.edad = edad;
    }
}
class Estudiante extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    mostrarRol() {
        console.log(`${this.nombre} es un estudiante y tiene ${this.edad} años`);
    }
}
class Docente extends Persona {
    constructor(nombre, edad) {
        super(nombre, edad);
    }
    mostrarRol() {
        console.log(`${this.nombre} es un docente y tiene ${this.edad} años`);
    }
}
let per = new Estudiante('Carlos', 20);
per.mostrarRol();
//# sourceMappingURL=Ejer2.js.map