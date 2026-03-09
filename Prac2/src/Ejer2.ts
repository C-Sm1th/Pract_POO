class Persona{
    nombre: string;
    edad: number;

    constructor(nombre:string, edad:number){

        if(edad <= 0){
            console.log(`Edad no valida`)
            edad = 1
        }

        this.nombre = nombre
        this.edad = edad
    }
}

class Estudiante extends Persona{

    constructor(nombre:string, edad:number){
        super(nombre, edad)
    }

    mostrarRol(): void{
        console.log(`${this.nombre} es un estudiante y tiene ${this.edad} años`)
    }
}

class Docente extends Persona{

    constructor(nombre:string, edad:number){
        super(nombre, edad)
    }

    mostrarRol(): void{
        console.log(`${this.nombre} es un docente y tiene ${this.edad} años`)
    }
}

let per = new Estudiante('Carlos', 20)
per.mostrarRol()