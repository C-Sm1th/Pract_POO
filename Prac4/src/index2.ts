const readline = require('readline');

// Configuración de la interfaz de comunicación con el usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. ABSTRACTACIÓN: El "Molde" de lo que es un Pago
abstract class Pago {
    constructor(protected monto: number) {
        if (monto <= 0) {
            throw new Error("El monto debe ser una cantidad positiva.");
        }
    }

    // Método abstracto: Obliga a las hijas a definir CÓMO procesan el dinero
    abstract procesarPago(): void;

    // Método concreto: Todos los pagos muestran el recibo igual
    public mostrarRecibo(): void {
        console.log("---");
        console.log("RECIBO DE PAGO");
        console.log("Monto procesado: $" + this.monto);
        console.log("Estado: Exitoso");
        console.log("---");
    }
}

// 2. HERENCIA: Implementaciones específicas
class PagoEfectivo extends Pago {
    override procesarPago(): void {
        console.log("Procesando pago en efectivo...");
        console.log("Por favor, entregue el dinero al cajero.");
    }
}

class PagoTarjeta extends Pago {
    constructor(monto: number, private nroTarjeta: string) {
        super(monto); // Enviamos el monto al padre
    }

    override procesarPago(): void {
        console.log("Conectando con el banco...");
        console.log("Validando tarjeta terminada en: " + this.nroTarjeta.slice(-4));
        console.log("Cargo de $" + this.monto + " autorizado.");
    }
}

// 3. INTERACCIÓN Y POLIMORFISMO (EL programa principal)
console.log("=== SISTEMA DE COBRO UNIVERSITARIO ===");

rl.question("Seleccione método (1: Efectivo, 2: Tarjeta): ", (opcion: string) => {
    rl.question("Ingrese el monto a pagar: ", (montoInput: string) => {
        const montoNum = parseInt(montoInput);
        let miPago: Pago; // Variable de tipo padre (Polimorfismo)

        if (opcion === "1") {
            miPago = new PagoEfectivo(montoNum);
            finalizarTransaccion(miPago);
        } else if (opcion === "2") {
            rl.question("Ingrese su número de tarjeta: ", (tarjeta: string) => {
                miPago = new PagoTarjeta(montoNum, tarjeta);
                finalizarTransaccion(miPago);
            });
        } else {
            console.log("Opción no válida.");
            rl.close();
        }
    });
});

// Función polimórfica: Recibe cualquier objeto que sea un "Pago"
function finalizarTransaccion(p: Pago) {
    console.log("\nEjecutando proceso de pago...");
    p.procesarPago(); // Aquí se decide qué código correr (Efectivo o Tarjeta)
    p.mostrarRecibo();
    rl.close(); // Cerramos la interfaz para que el programa termine
}