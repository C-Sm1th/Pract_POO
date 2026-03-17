"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sensor {
    constructor(id, valorActual) {
        this.id = id;
        this.valorActual = valorActual;
    }
    actualizarValor(nuevoValor) {
        this.valorActual = nuevoValor;
        console.log("Sensor " + this.id + " actualizado su valor a: " + this.valorActual);
    }
}
class SensorTemperatura extends Sensor {
    procesarLectura() {
        if (this.valorActual > 40) {
            console.log("ALERTA: Temperatura crítica en " + this.id);
        }
    }
}
class SensorHumedad extends Sensor {
    procesarLectura() {
        if (this.valorActual < 20) {
            console.log("ALERTA: Humedad baja en " + this.id);
        }
    }
}
// INSTANCIA
const termometro = new SensorTemperatura("TEMP_01", 25);
termometro.actualizarValor(45); // Dispara la alerta
//# sourceMappingURL=index.js.map