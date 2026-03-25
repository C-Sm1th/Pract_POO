"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Figura {
    mostrarResultados() {
        console.log("------------------------------");
        console.log("Área: " + this.calcularArea().toFixed(2));
        console.log("Perímetro: " + this.calcularPerimetro().toFixed(2));
        console.log("------------------------------");
    }
}
class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
    calcularPerimetro() {
        return this.lado * 4;
    }
}
class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.radio;
    }
}
console.log("--- CALCULADORA DE FIGURAS ---");
rl.question("Elige una figura (1: Cuadrado, 2: Círculo): ", (opcion) => {
    if (opcion === "1") {
        rl.question("Ingresa el valor del lado: ", (valor) => {
            const lado = parseFloat(valor);
            let figura = new Cuadrado(lado);
            figura.mostrarResultados();
            rl.close();
        });
    }
    else {
        rl.question("Ingresa el valor del radio: ", (valor) => {
            const radio = parseFloat(valor);
            let figura = new Circulo(radio);
            figura.mostrarResultados();
            rl.close();
        });
    }
});
//# sourceMappingURL=Tarea2.js.map