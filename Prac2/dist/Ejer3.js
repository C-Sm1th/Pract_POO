"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Producto {
    constructor(nombre, precio) {
        if (precio <= 0) {
            console.log(`El precio debe ser mayor que 0`);
            precio = 1;
        }
        this.nombre = nombre;
        this.precio = precio;
    }
    calcularPrecioFinal() {
        console.log(`El precio del producto ${this.nombre} es $${this.precio}`);
    }
}
class ProductoDigital extends Producto {
    constructor(nombre, precio) {
        super(nombre, precio);
    }
    calcularPrecioFinal() {
        console.log(`El producto digital ${this.nombre} cuesta $${this.precio}`);
    }
}
class ProductoFisico extends Producto {
    constructor(nombre, precio) {
        super(nombre, precio);
    }
    calcularPrecioFinal() {
        let recargo = this.precio * 0.10;
        let total = this.precio + recargo;
        console.log(`El producto fisico ${this.nombre} cuesta $${total} con recargo`);
    }
}
let prod = new ProductoFisico('Mouse', 20);
prod.calcularPrecioFinal();
//# sourceMappingURL=Ejer3.js.map