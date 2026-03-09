"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Figura {
    calcularArea() {
        console.log(`Calculando area`);
    }
}
class Rectangulo extends Figura {
    constructor(base, altura) {
        super();
        if (base <= 0 || altura <= 0) {
            console.log(`Dimensiones no validas`);
            base = 1;
            altura = 1;
        }
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        let area = this.base * this.altura;
        console.log(`El area del rectangulo es ${area}`);
    }
}
class Circulo extends Figura {
    constructor(radio) {
        super();
        if (radio <= 0) {
            console.log(`Radio no valido`);
            radio = 1;
        }
        this.radio = radio;
    }
    calcularArea() {
        let area = 3.14 * (this.radio * this.radio);
        console.log(`El area del circulo es ${area}`);
    }
}
let fig = new Rectangulo(10, 5);
fig.calcularArea();
//# sourceMappingURL=Ejer4.js.map