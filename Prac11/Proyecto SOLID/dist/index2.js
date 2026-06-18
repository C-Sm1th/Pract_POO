"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Implementaciones que extienden el sistema sin modificar la lógica central
class BecaParcial {
    aplicarDescuento(monto) { return monto * 0.25; }
}
class BecaCompleta {
    aplicarDescuento(monto) { return monto * 1.00; }
}
class BecaArteCultura {
    aplicarDescuento(monto) { return monto * 0.50; }
}
// Clase procesadora: Cerrada a modificación
class CalculadoraPagos {
    procesar(montoBase, beneficio) {
        const descuento = beneficio.aplicarDescuento(montoBase);
        const total = montoBase - descuento;
        console.log(`Monto Original: $${montoBase} | Total con Beca: $${total}`);
    }
}
// Implementación funcional
const pago = new CalculadoraPagos();
pago.procesar(500, new BecaParcial()); // Salida: Total con Beca: $375
pago.procesar(500, new BecaCompleta());
pago.procesar(500, new BecaArteCultura());
//# sourceMappingURL=index2.js.map