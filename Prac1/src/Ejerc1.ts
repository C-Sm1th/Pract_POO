class player{
    nombre: string;
    vida: number;

    constructor(nombre:string, vidaInicial:number){
        this.nombre = nombre
        this.vida = vidaInicial
    }

    recibirDaño(puntos:number): void{
        this.vida -= puntos;
        console.log(`${this.nombre} recibio ${puntos} de dano. Vida restante ${this.vida}`)
    }

    status(): void{
        if(this.vida > 0){
            console.log(`${this.nombre} sigues luchando.`)
        }else {
            console.log(`${this.nombre} te petateaste`)
        }
    }
}

const pl = new player("chris", 100)
pl.recibirDaño(50)
pl.status()