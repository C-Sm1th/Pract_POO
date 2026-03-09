class CuentaBancaria{
    titular: string;
    saldo: number;

    constructor(titular:string, saldo:number){
        this.titular = titular
        this.saldo = saldo
    }

    depositar(monto:number): void{
        this.saldo += monto
        console.log(`${this.titular} deposito $${monto}. Saldo actual: $${this.saldo}`)
    }

    retirar(monto:number): void{
        if(this.saldo - monto < 0){
            console.log(`No se puede retirar, saldo insuficiente`)
        }else{
            this.saldo -= monto
            console.log(`${this.titular} retiro $${monto}. Saldo actual: $${this.saldo}`)
        }
    }
}

class CuentaAhorro extends CuentaBancaria{

    constructor(titular:string, saldo:number){
        super(titular, saldo)
    }

    mensaje(): void{
        console.log(`Cuenta de ahorro de ${this.titular} con saldo $${this.saldo}`)
    }
}

class CuentaCorriente extends CuentaBancaria{

    constructor(titular:string, saldo:number){
        super(titular, saldo)
    }

    mensaje(): void{
        console.log(`Cuenta corriente de ${this.titular} con saldo $${this.saldo}`)
    }
}

let cuenta = new CuentaAhorro('Chris', 200)
cuenta.depositar(100)
cuenta.retirar(50)