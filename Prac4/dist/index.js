"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 1. EL MOLDE
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
// 2. LAS HIJAS
class Salvadoreno extends Persona {
    saludar() {
        console.log("¡Hola que tal! Me llamo " + this.nombre);
    }
}
class Ingles extends Persona {
    saludar() {
        console.log("Hello! My name is " + this.nombre);
    }
}
// 3. INTERACCIÓN
console.log("--- SIMULADOR DE SALUDOS ---");
rl.question("¿Cómo te llamas?: ", (nombre) => {
    rl.question("Elige idioma (1: Español, 2: Inglés): ", (opcion) => {
        let alguien;
        if (opcion === "1") {
            alguien = new Salvadoreno(nombre);
        }
        else {
            alguien = new Ingles(nombre);
        }
        alguien.saludar(); // Polimorfismo puro
        rl.close();
    });
});
//# sourceMappingURL=index.js.map