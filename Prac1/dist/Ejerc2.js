"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ordenCafe {
    constructor(tipo, cantidad, precio) {
        this.tipo = tipo;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    totalPagar() {
        return this.cantidad * this.precio;
    }
    imprimirTicket() {
        console.log(`Pedido: ${this.tipo} * ${this.cantidad}`);
        console.log(`Total a pagar: $${this.totalPagar()}`);
    }
}
const cafe = new ordenCafe("expresso", 10, 7);
cafe.imprimirTicket();
//# sourceMappingURL=Ejerc2.js.map