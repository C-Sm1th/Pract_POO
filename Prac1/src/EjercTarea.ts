///EJERCICIO 1

class Empleado {
    nombre: string;
    salarioBase: number;
    horasTrabajadas: number;

    constructor(nombre: string, salarioBase: number, horasTrabajadas: number) {
        this.nombre = nombre
        this.salarioBase = salarioBase
        this.horasTrabajadas = horasTrabajadas
    }

    calcularSalario(): void {
        let salarioTotal = this.salarioBase * this.horasTrabajadas
        console.log(`El empleado ${this.nombre} trabajó ${this.horasTrabajadas} horas y su salario total es: $${salarioTotal}`)
    }
}

const emp = new Empleado("Carlos", 10, 40)
emp.calcularSalario()



///EJERCICIO 2

class CuentaBancaria {
    titular: string;
    saldo: number;

    constructor(titular: string, saldo: number) {
        this.titular = titular
        this.saldo = saldo
    }

    depositar(cantidad: number): void {
        this.saldo += cantidad
        console.log(`${this.titular} depositó $${cantidad}. Saldo actual: $${this.saldo}`)
    }

    retirar(cantidad: number): void {
        if (cantidad <= this.saldo) {
            this.saldo -= cantidad
            console.log(`${this.titular} retiró $${cantidad}. Saldo actual: $${this.saldo}`)
        } else {
            console.log("Fondos insuficientes")
        }
    }

    mostrarSaldo(): void {
        console.log(`El saldo actual de ${this.titular} es: $${this.saldo}`)
    }
}

const cuenta = new CuentaBancaria("Ana", 500)
cuenta.depositar(200)
cuenta.retirar(100)
cuenta.mostrarSaldo()




/// EJERCICIO 3

class Vehiculo {
    marca: string;
    modelo: string;
    anio: number;

    constructor(marca: string, modelo: string, anio: number) {
        this.marca = marca
        this.modelo = modelo
        this.anio = anio
    }

    mostrarInfo(): void {
        console.log(`Vehículo: ${this.marca} ${this.modelo} - Año: ${this.anio}`)
    }
}

const veh = new Vehiculo("Toyota", "Corolla", 2022)
veh.mostrarInfo()




/// EJERCICIO 4
class Libro {
    titulo: string;
    autor: string;
    numeroPaginas: number;

    constructor(titulo: string, autor: string, numeroPaginas: number) {
        this.titulo = titulo
        this.autor = autor
        this.numeroPaginas = numeroPaginas
    }

    mostrarInfo(): void {
        console.log(`Libro: ${this.titulo} | Autor: ${this.autor} | Páginas: ${this.numeroPaginas}`)
    }
}

const libro1 = new Libro("Cien Años de Soledad", "Gabriel García Márquez", 417)
const libro2 = new Libro("El Principito", "Antoine de Saint-Exupéry", 96)

libro1.mostrarInfo()
libro2.mostrarInfo()