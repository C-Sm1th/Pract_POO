abstract class MetodoPago {
    abstract procesarPAgo(monto: number): void;
}

class TarjetaCredito extends MetodoPago {
    override procesarPAgo(monto: number): void {
        console.log("Validando tarjeta y cobrando: $" + monto)
    }
}

class Paypal extends MetodoPago {
    override procesarPAgo(monto: number): void {
        console.log("Redirigiendo a API de PayPal para cobrar: $" + monto)
    }
}

// La funcion recibe el tipo General (Metodo pago)
function realizarCompra(Metodo: MetodoPago, total: number){
    Metodo.procesarPAgo(total); //No sabemos que es, pero sabemos quee puede pagar
}

//Instancia
const pago1 = new TarjetaCredito()
const pago2 = new Paypal()

realizarCompra(pago1, 150);
realizarCompra(pago2, 80)