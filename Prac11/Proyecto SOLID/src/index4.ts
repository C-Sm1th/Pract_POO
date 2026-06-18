import { emit } from "node:cluster"

class usuario{
    constructor(public username: string, public email: string
    ) {}
} 

interface IStreaming{ reproducir(): void}
interface IDescargable{desacargaOffline(): void}
interface ISoporteVIP{llamarAsesor(): void}

abstract class SuscripcionBase{
    constructor (public nombre: string){}
    abstract obtenrAcceso(): void;
}

abstract class SuscripcionComercial extends SuscripcionBase{
    constructor(nombre: string, public precio: number){
        super(nombre)
    }

    abstract procesarfactura(): void
}

class planBasico extends SuscripcionComercial implements IStreaming{
    procesarfactura(): void {
        console.log(`[PAYMENT]: cobrando $${this.precio} (Plan basico).`)
    }

    obtenrAcceso(): void {
        console.log(`Acceso conseguido a catalogo estandar`)
    }

    reproducir(): void {
        console.log(`reproduciendo contenido en 720p`)
    }
}

class planEnterprise extends SuscripcionComercial implements IStreaming, IDescargable, ISoporteVIP{
    procesarfactura(): void {
        console.log(`[PAYMENT]: cobrando $${this.precio} (plan Enterprise)`)
    }

    obtenrAcceso(): void {
        console.log(`Acceso total a servidores e infraestructura`)
    }

    reproducir(): void {
        console.log(`Reproduciendo contenido 4K`)
    }

    desacargaOffline(): void {
        console.log(`Contenido disponible para descarga en maxima calidad`)
    }

    llamarAsesor(): void {
        console.log(`Conectando con soporte VIP`)
    }
}

interface INotification{
    enviar(usuario: usuario, mensaje: string): void
}

class NotificacionEmail implements INotification{
    enviar(usuario: usuario, mensaje: string) {
        console.log(`[EMAIL]: para ${usuario.email}`)
    }
}