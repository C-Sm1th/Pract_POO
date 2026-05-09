// SISTEMA DE GESTION DE SUSCRIPCIONES

class usuarios {
    constructor(
        public username: string,
        public email: string,
        public planActual: string
    ) {}
}


interface ISuscripcion {
    obtenerCosto(): number;
    obtenerBeneficios(): string;
}

//PLANES EXISTENTES
class PlanBasico implements ISuscripcion {
    obtenerCosto(): number { return 5.00 }
    obtenerBeneficios(): string { return "Acceso a 1 instancia de servidor" }
}

class PlanPremium implements ISuscripcion {
    obtenerCosto(): number { return 12.00 }
    obtenerBeneficios(): string { return "Acceso a 5 instancias + soporte 24/7" }
}

class PlanEnterPrise implements ISuscripcion {
    obtenerCosto(): number { return 50.00 }
    obtenerBeneficios(): string { return "Infraestructura dedicada + API Ilimitada" }
}

// ---------------- PLANES NUEVOS ----------------
class PlanEstudiante implements ISuscripcion {
    obtenerCosto(): number { return 3.50 }
    obtenerBeneficios(): string { return "Acceso educativo limitado + recursos básicos" }
}

class PlanFamiliar implements ISuscripcion {
    obtenerCosto(): number { return 18.00 }
    obtenerBeneficios(): string { return "Hasta 4 usuarios + instancias compartidas" }
}

class PlanEmpresarialPlus implements ISuscripcion {
    obtenerCosto(): number { return 80.00 }
    obtenerBeneficios(): string { return "Cluster privado + monitoreo avanzado" }
}



interface INotificacion {
    enviar(usuario: usuarios, mensaje: string): void
}

//MEDIOS EXISTENTES
class NotificacionEmail implements INotificacion {
    enviar(usuario: usuarios, mensaje: string): void {
        console.log(`[EMAIL] Enviando a ${usuario.email}`)
        console.log(`Mensaje: ${mensaje}`)
    }
}

//MEDIOS NUEVOS
class NotificacionWhatsApp implements INotificacion {
    enviar(usuario: usuarios, mensaje: string): void {
        console.log(`[WHATSAPP] Enviando mensaje a ${usuario.username}`)
        console.log(`Mensaje: ${mensaje}`)
    }
}

class NotificacionSMS implements INotificacion {
    enviar(usuario: usuarios, mensaje: string): void {
        console.log(`[SMS] Enviando mensaje al usuario ${usuario.username}`)
        console.log(`Mensaje: ${mensaje}`)
    }
}

class NotificacionPush implements INotificacion {
    enviar(usuario: usuarios, mensaje: string): void {
        console.log(`[PUSH] Notificación enviada a ${usuario.username}`)
        console.log(`Mensaje: ${mensaje}`)
    }
}

//--------------------------------------------------------------------------
class ProcesadoSuscripciones {
    constructor(private notificador: INotificacion) {}

    procesarPago(usuario: usuarios, plan: ISuscripcion): void {
        const costo = plan.obtenerCosto()
        const beneficios = plan.obtenerBeneficios()

        console.log("--------------------------------")
        console.log("Facturacion de Servicios en la nube")
        console.log("--------------------------------")
        console.log(`Cliente: ${usuario.username}`)
        console.log(`Plan: ${usuario.planActual}`)
        console.log(`Monto a pagar: $${costo.toFixed(2)}`)
        console.log(`Detalle: ${beneficios}`)
        console.log("--------------------------------")

        const mensajeConfirmacion =
            `Confirmación: su pago de $${costo.toFixed(2)} ha sido procesado. Plan activo: ${beneficios}`

        this.notificador.enviar(usuario, mensajeConfirmacion)
    }
}



// 1. Plan Básico + Email
// const usuario1 = new usuarios("Ana", "ana@mail.com", "Basico")
// const sistema1 = new ProcesadoSuscripciones(new NotificacionEmail())
// sistema1.procesarPago(usuario1, new PlanBasico())

// 2. Plan Premium + WhatsApp
// const usuario2 = new usuarios("Carlos", "carlos@mail.com", "Premium")
// const sistema2 = new ProcesadoSuscripciones(new NotificacionWhatsApp())
// sistema2.procesarPago(usuario2, new PlanPremium())

// // 3. Plan Enterprise + Email (medio repetido)
// const usuario3 = new usuarios("EmpresaX", "contacto@empresax.com", "Enterprise")
// const sistema3 = new ProcesadoSuscripciones(new NotificacionEmail())
// sistema3.procesarPago(usuario3, new PlanEnterPrise())

// // 4. Plan Estudiante + SMS
// const usuario4 = new usuarios("Luis", "luis@mail.com", "Estudiante")
// const sistema4 = new ProcesadoSuscripciones(new NotificacionSMS())
// sistema4.procesarPago(usuario4, new PlanEstudiante())

// // 5. Plan Familiar + WhatsApp (medio repetido)
// const usuario5 = new usuarios("Familia Perez", "familia@mail.com", "Familiar")
// const sistema5 = new ProcesadoSuscripciones(new NotificacionWhatsApp())
// sistema5.procesarPago(usuario5, new PlanFamiliar())

// // 6. Plan Empresarial Plus + Push
const usuario6 = new usuarios("CorpGlobal", "admin@corp.com", "Empresarial Plus")
const sistema6 = new ProcesadoSuscripciones(new NotificacionPush())
sistema6.procesarPago(usuario6, new PlanEmpresarialPlus())