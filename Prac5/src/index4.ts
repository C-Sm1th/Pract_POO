const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 1. CLASE PADRE
abstract class Pedido {
    abstract preparar(): void
}

// 2. CLASES HIJAS
class Hamburguesa extends Pedido {

    preparar(): void {
        console.log("Preparando Hamburguesa")
        console.log("- Cocinar la carne")
        console.log("- Colocar el pan")
        console.log("- Añadir queso")
        console.log("- Agregar vegetales")
        console.log("- Servir")
    }
}

class Pizza extends Pedido {

    preparar(): void {
        console.log("Preparando Pizza")
        console.log("- Extender la masa")
        console.log("- Agregar salsa de tomate")
        console.log("- Añadir queso y toppings")
        console.log("- Hornear")
        console.log("- Cortar y servir")
    }
}

// 3. INTERACCION
console.log("=== SISTEMA DE PEDIDOS ===")

rl.question("Que desea ordenar? (1: Hamburguesa, 2: Pizza): ", (opcion: string) => {

    let pedido: Pedido

    if(opcion === "1"){
        pedido = new Hamburguesa()
    } else {
        pedido = new Pizza()
    }

    pedido.preparar()
    rl.close()
})