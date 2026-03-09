class Producto{
    nombre: string;
    precio: number;

    constructor(nombre:string, precio:number){

        if(precio <= 0){
            console.log(`El precio debe ser mayor que 0`)
            precio = 1
        }

        this.nombre = nombre
        this.precio = precio
    }

    calcularPrecioFinal(): void{
        console.log(`El precio del producto ${this.nombre} es $${this.precio}`)
    }
}

class ProductoDigital extends Producto{

    constructor(nombre:string, precio:number){
        super(nombre, precio)
    }

    calcularPrecioFinal(): void{
        console.log(`El producto digital ${this.nombre} cuesta $${this.precio}`)
    }
}

class ProductoFisico extends Producto{

    constructor(nombre:string, precio:number){
        super(nombre, precio)
    }

    calcularPrecioFinal(): void{
        let recargo = this.precio * 0.10
        let total = this.precio + recargo

        console.log(`El producto fisico ${this.nombre} cuesta $${total} con recargo`)
    }
}

let prod = new ProductoFisico('Mouse', 20)
prod.calcularPrecioFinal()