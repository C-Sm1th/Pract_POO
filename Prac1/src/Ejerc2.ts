class ordenCafe{
    tipo: string;
    cantidad: number;
    precio: number;

    constructor(tipo: string, cantidad: number, precio: number) {
        this.tipo = tipo
        this.cantidad = cantidad
        this.precio = precio
    }

    totalPagar(): number{
        return this.cantidad * this.precio
    }

    imprimirTicket(): void{
        console.log(`Pedido: ${this.tipo} * ${this.cantidad}`)
        console.log(`Total a pagar: $${this.totalPagar()}`)
    }
}

const cafe = new ordenCafe("expresso", 10, 7)
cafe.imprimirTicket()