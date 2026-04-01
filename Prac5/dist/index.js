"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 1. CLASE PADRE (El Contrato)
class Producto {
    constructor(nombre) {
        this.nombre = nombre;
    }
    mostrarPrecioFinal(precioBase) {
        const final = this.aplicarDescuento(precioBase);
        console.log("--------------------------------------------");
        console.log("Producto: " + this.nombre);
        console.log("Precio Original: $" + precioBase);
        console.log("Precio con Descuento: $" + final.toFixed(2));
        console.log("--------------------------------------------");
    }
}
// 2. CLASES HIJAS (El Relleno)
class Ropa extends Producto {
    //la ropa tiene un 20% de descuento fijo
    aplicarDescuento(precio) {
        return precio * 0.80;
    }
}
class Electronica extends Producto {
    //La electronica solo tiene un 10%
    aplicarDescuento(precio) {
        return precio * 0.90;
    }
}
// 3. INTERACION
console.log("=== SISTEMA DE CAJA REGISTRADORA");
rl.question("Tipo de producto (1: ropa, 2: Electronica): ", (opcion) => {
    rl.question("Ingrese el precio de etiqueta: ", (entrada) => {
        const precio = parseFloat(entrada);
        let prod;
        if (opcion === "1") {
            prod = new Ropa("Camiseta de Algodon");
        }
        else {
            prod = new Electronica("Audifonos Bluetooth");
        }
        prod.mostrarPrecioFinal(precio);
        rl.close();
    });
});
//# sourceMappingURL=index.js.map