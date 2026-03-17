abstract class Sensor {
    protected id: string;
    protected valorActual: number;

    constructor(id: string, valorActual: number) {
        this.id = id;
        this.valorActual = valorActual;
    }

    abstract procesarLectura(): void;

    public actualizarValor(nuevoValor: number): void {
        this.valorActual = nuevoValor;
        console.log("Sensor " + this.id + " actualizado su valor a: " + this.valorActual);
    }
}

class SensorTemperatura extends Sensor {
    override procesarLectura(): void {
        if (this.valorActual > 40) {
            console.log("ALERTA: Temperatura crítica en " + this.id);
        }
    }
}

class SensorHumedad extends Sensor {
    override procesarLectura(): void {
        if (this.valorActual < 20) {
            console.log("ALERTA: Humedad baja en " + this.id);
        }
    }
}

// INSTANCIA
const termometro = new SensorTemperatura("TEMP_01", 25);
termometro.actualizarValor(45); // Dispara la alerta