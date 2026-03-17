"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MetodoPago {
}
class TarjetaCredito extends MetodoPago {
    procesarPAgo(monto) {
        console.log("Validando tarjeta y cobrando: $" + monto);
    }
}
class Paypal extends MetodoPago {
    procesarPAgo(monto) {
        console.log("Redirigiendo a API de PayPal para cobrar: $" + monto);
    }
}
// La funcion recibe el tipo General (Metodo pago)
function realizarCompra(Metodo, total) {
    Metodo.procesarPAgo(total); //No sabemos que es, pero sabemos quee puede pagar
}
//Instancia
const pago1 = new TarjetaCredito();
const pago2 = new Paypal();
realizarCompra(pago1, 150);
realizarCompra(pago2, 80);
//# sourceMappingURL=index2.js.map