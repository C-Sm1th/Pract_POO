class Alarma{
    private codigoAcceso: string;
    estado: boolean = true

    constructor(codigoAcceso: string) {
        this.codigoAcceso = codigoAcceso
    }

    desactivar(intento: string): void{
        if(intento === this.codigoAcceso){
            this.estado = false
            console.log(`Alarma desactivada correctamente`)
        }else {
            console.log(`El codigo ingresado no es correcto! Llamando a la policia...`)
        }
    }
}

const al = new Alarma("junc1to")
al.desactivar("junc1to")