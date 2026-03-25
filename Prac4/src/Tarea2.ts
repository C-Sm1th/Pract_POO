const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


abstract class Figura {

    abstract calcularArea(): number;

    abstract calcularPerimetro(): number;

    public mostrarResultados(): void {
        console.log("------------------------------");
        console.log("Área: " + this.calcularArea().toFixed(2));
        console.log("Perímetro: " + this.calcularPerimetro().toFixed(2));
        console.log("------------------------------");
    }
}


class Cuadrado extends Figura {
    constructor(private lado: number) {
        super();
    }

    override calcularArea(): number {
        return this.lado * this.lado;
    }

    override calcularPerimetro(): number {
        return this.lado * 4;
    }
}

class Circulo extends Figura {
    constructor(private radio: number) {
        super();
    }

    override calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    override calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}


console.log("--- CALCULADORA DE FIGURAS ---");

rl.question("Elige una figura (1: Cuadrado, 2: Círculo): ", (opcion: string) => {

    if (opcion === "1") {
        rl.question("Ingresa el valor del lado: ", (valor: string) => {
            const lado = parseFloat(valor);
            let figura: Figura = new Cuadrado(lado);

            figura.mostrarResultados();
            rl.close();
        });

    } else {
        rl.question("Ingresa el valor del radio: ", (valor: string) => {
            const radio = parseFloat(valor);
            let figura: Figura = new Circulo(radio);

            figura.mostrarResultados();
            rl.close();
        });
    }
});