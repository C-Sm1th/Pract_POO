"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CuentaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }
    depositar(monto) {
        this.saldo += monto;
        console.log(`${this.titular} deposito $${monto}. Saldo actual: $${this.saldo}`);
    }
    retirar(monto) {
        if (this.saldo - monto < 0) {
            console.log(`No se puede retirar, saldo insuficiente`);
        }
        else {
            this.saldo -= monto;
            console.log(`${this.titular} retiro $${monto}. Saldo actual: $${this.saldo}`);
        }
    }
}
class CuentaAhorro extends CuentaBancaria {
    constructor(titular, saldo) {
        super(titular, saldo);
    }
    mensaje() {
        console.log(`Cuenta de ahorro de ${this.titular} con saldo $${this.saldo}`);
    }
}
class CuentaCorriente extends CuentaBancaria {
    constructor(titular, saldo) {
        super(titular, saldo);
    }
    mensaje() {
        console.log(`Cuenta corriente de ${this.titular} con saldo $${this.saldo}`);
    }
}
let cuenta = new CuentaAhorro('Chris', 200);
cuenta.depositar(100);
cuenta.retirar(50);
//# sourceMappingURL=Ejer1.js.map