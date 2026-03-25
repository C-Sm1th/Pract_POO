const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. EL MOLDE
abstract class Persona {
    constructor(public nombre: string) {}

    // El padre dice que todos saludan, pero no sabe el idioma
    abstract saludar(): void;
}

// 2. LAS HIJAS
class Salvadoreno extends Persona {
    saludar(): void {
        console.log("¡Hola que tal! Me llamo " + this.nombre);
    }
}

class Ingles extends Persona {
    saludar(): void {
        console.log("Hello! My name is " + this.nombre);
    }
}

// 3. INTERACCIÓN
console.log("--- SIMULADOR DE SALUDOS ---");

rl.question("¿Cómo te llamas?: ", (nombre: string) => {
    rl.question("Elige idioma (1: Español, 2: Inglés): ", (opcion: string) => {
        let alguien: Persona;

        if (opcion === "1") {
            alguien = new Salvadoreno(nombre);
        } else {
            alguien = new Ingles(nombre);
        }

        alguien.saludar(); // Polimorfismo puro
        rl.close();
    });
});