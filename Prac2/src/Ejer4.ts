class Figura{

    calcularArea(): void{
        console.log(`Calculando area`)
    }
}

class Rectangulo extends Figura{

    base: number
    altura: number

    constructor(base:number, altura:number){
        super()

        if(base <= 0 || altura <= 0){
            console.log(`Dimensiones no validas`)
            base = 1
            altura = 1
        }

        this.base = base
        this.altura = altura
    }

    calcularArea(): void{
        let area = this.base * this.altura
        console.log(`El area del rectangulo es ${area}`)
    }
}

class Circulo extends Figura{

    radio: number

    constructor(radio:number){
        super()

        if(radio <= 0){
            console.log(`Radio no valido`)
            radio = 1
        }

        this.radio = radio
    }

    calcularArea(): void{
        let area = 3.14 * (this.radio * this.radio)
        console.log(`El area del circulo es ${area}`)
    }
}

let fig = new Rectangulo(10,5)
fig.calcularArea()