"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Transporte {
    constructor(nombre) {
        this.nombre = nombre;
    }
    mostrarDetalle(distancia) {
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
    calcularCosto(distancia) {
        return distancia * 0.50;
    }
}
class Uber extends Transporte {
    constructor() {
        super("Uber");
    }
    calcularCosto(distancia) {
        return distancia * 0.75;
    }
}
console.log("--- SIMULADOR DE COSTO DE TRANSPORTE ---");
rl.question("Elige transporte (1: Taxi, 2: Uber): ", (opcion) => {
    rl.question("Ingresa la distancia en kilómetros: ", (valor) => {
        const distancia = parseFloat(valor);
        let transporte;
        if (opcion === "1") {
            transporte = new Taxi();
        }
        else {
            transporte = new Uber();
        }
        transporte.mostrarDetalle(distancia);
        rl.close();
    });
});
//# sourceMappingURL=Tarea.js.map