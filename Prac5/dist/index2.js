"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodeFs = require("node:fs");
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 1. CLASE PADRE
class Ejercicio {
}
// 2. CLASES HIJAS
class Correr extends Ejercicio {
    calcularcalorias(minutos) {
        return minutos * 10;
    }
}
class Yoga extends Ejercicio {
    calcularcalorias(minutos) {
        return minutos * 4;
    }
}
// 3. INTERACION
console.log("=== MONITOR DE ACTIVIDAD FISICA ===");
rl.question("Que ejercicio hizo? (1:correr, 2:Yoga", (opcion) => {
    rl.question("Cuantos minutos entreno? ", (tiempo) => {
        const minutos = parseInt(tiempo);
        let entrenamiento;
        if (opcion === "1") {
            entrenamiento = new Correr();
            console.log("Gran ezfuerzo cardiovascular");
        }
        else {
            entrenamiento = new Yoga();
            console.log("Excelente para la flexibilidad y mente");
        }
        const quemadas = entrenamiento.calcularcalorias(minutos);
        console.log("Totall de aclorias quemadas: " + quemadas + " kcal");
        rl.close();
    });
});
//# sourceMappingURL=index2.js.map