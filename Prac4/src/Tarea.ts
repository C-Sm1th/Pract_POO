const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

abstract class Transporte {
    constructor(protected nombre: string) {}

    abstract calcularCosto(distancia: number): number;

    public mostrarDetalle(distancia: number): void {
        const total = this.calcularCosto(distancia);
        console.log("------------------------------");
        console.log("Transporte: " + this.nombre);
        console.log("Distancia: " + distancia + " km");
        console.log("Total a pagar: $" + total.toFixed(2));
        console.log("------------------------------");
    }
}


class Taxi extends Transporte {
    constructor() {
        super("Taxi");
    }

    override calcularCosto(distancia: number): number {
        return distancia * 0.50;
    }
}

class Uber extends Transporte {
    constructor() {
        super("Uber");
    }

    override calcularCosto(distancia: number): number {
        return distancia * 0.75;
    }
}


console.log("--- SIMULADOR DE COSTO DE TRANSPORTE ---");

rl.question("Elige transporte (1: Taxi, 2: Uber): ", (opcion: string) => {
    rl.question("Ingresa la distancia en kilómetros: ", (valor: string) => {
        const distancia = parseFloat(valor);
        let transporte: Transporte;

        if (opcion === "1") {
            transporte = new Taxi();
        } else {
            transporte = new Uber();
        }

        transporte.mostrarDetalle(distancia);

        rl.close();
    });
});