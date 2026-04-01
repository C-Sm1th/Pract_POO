"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 1. CLASE PADRE
class Alarma {
}
// 2. CLASES HIJAS
class Incendio extends Alarma {
    sonar() {
        console.log("BEEP-BEEP");
        console.log("ALERTA: Evacuar el edificio inmediatamente");
    }
}
class Reloj extends Alarma {
    sonar() {
        console.log("RIIIIING");
        console.log("Es hora de despertar");
    }
}
// 3. INTERACCION
console.log("=== PANEL DE ALARMAS ===");
rl.question("Que alarma desea activar? (1: Incendio, 2: Reloj): ", (opcion) => {
    let alarma;
    if (opcion === "1") {
        alarma = new Incendio();
    }
    else {
        alarma = new Reloj();
    }
    alarma.sonar();
    rl.close();
});
//# sourceMappingURL=index3.js.map