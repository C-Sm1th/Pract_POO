class mascota{
    nombre: string;
    hambre: number = 50;

    constructor(nombre: string) {
        this.nombre = nombre
    }

    comer(): void{
        this.hambre -= 20;
        console.log(`${this.nombre} ha comido,, su hambre actual es de: ${this.hambre}`)
    }

    correr(): void{
        this.hambre += 10
        console.log(`${this.nombre} salio a correr. Su hambre actual es de: ${this.hambre}`)
    }
}

const mc = new mascota("pancho")
mc.comer()
mc.correr()