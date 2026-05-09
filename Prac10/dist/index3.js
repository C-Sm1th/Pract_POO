"use strict";
// SISTEMA DE GESTION DE SUSCRIPCIONES
Object.defineProperty(exports, "__esModule", { value: true });
class usuarios {
    username;
    email;
    planActual;
    constructor(username, email, planActual) {
        this.username = username;
        this.email = email;
        this.planActual = planActual;
    }
}
//PLANES EXISTENTES
class PlanBasico {
    obtenerCosto() { return 5.00; }
    obtenerBeneficios() { return "Acceso a 1 instancia de servidor"; }
}
class PlanPremium {
    obtenerCosto() { return 12.00; }
    obtenerBeneficios() { return "Acceso a 5 instancias + soporte 24/7"; }
}
class PlanEnterPrise {
    obtenerCosto() { return 50.00; }
    obtenerBeneficios() { return "Infraestructura dedicada + API Ilimitada"; }
}
// ---------------- PLANES NUEVOS ----------------
class PlanEstudiante {
    obtenerCosto() { return 3.50; }
    obtenerBeneficios() { return "Acceso educativo limitado + recursos básicos"; }
}
class PlanFamiliar {
    obtenerCosto() { return 18.00; }
    obtenerBeneficios() { return "Hasta 4 usuarios + instancias compartidas"; }
}
class PlanEmpresarialPlus {
    obtenerCosto() { return 80.00; }
    obtenerBeneficios() { return "Cluster privado + monitoreo avanzado"; }
}
//MEDIOS EXISTENTES
class NotificacionEmail {
    enviar(usuario, mensaje) {
        console.log(`[EMAIL] Enviando a ${usuario.email}`);
        console.log(`Mensaje: ${mensaje}`);
    }
}
//MEDIOS NUEVOS
class NotificacionWhatsApp {
    enviar(usuario, mensaje) {
        console.log(`[WHATSAPP] Enviando mensaje a ${usuario.username}`);
        console.log(`Mensaje: ${mensaje}`);
    }
}
class NotificacionSMS {
    enviar(usuario, mensaje) {
        console.log(`[SMS] Enviando mensaje al usuario ${usuario.username}`);
        console.log(`Mensaje: ${mensaje}`);
    }
}
class NotificacionPush {
    enviar(usuario, mensaje) {
        console.log(`[PUSH] Notificación enviada a ${usuario.username}`);
        console.log(`Mensaje: ${mensaje}`);
    }
}
//--------------------------------------------------------------------------
class ProcesadoSuscripciones {
    notificador;
    constructor(notificador) {
        this.notificador = notificador;
    }
    procesarPago(usuario, plan) {
        const costo = plan.obtenerCosto();
        const beneficios = plan.obtenerBeneficios();
        console.log("--------------------------------");
        console.log("Facturacion de Servicios en la nube");
        console.log("--------------------------------");
        console.log(`Cliente: ${usuario.username}`);
        console.log(`Plan: ${usuario.planActual}`);
        console.log(`Monto a pagar: $${costo.toFixed(2)}`);
        console.log(`Detalle: ${beneficios}`);
        console.log("--------------------------------");
        const mensajeConfirmacion = `Confirmación: su pago de $${costo.toFixed(2)} ha sido procesado. Plan activo: ${beneficios}`;
        this.notificador.enviar(usuario, mensajeConfirmacion);
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
const usuario6 = new usuarios("CorpGlobal", "admin@corp.com", "Empresarial Plus");
const sistema6 = new ProcesadoSuscripciones(new NotificacionPush());
sistema6.procesarPago(usuario6, new PlanEmpresarialPlus());
//# sourceMappingURL=index3.js.map