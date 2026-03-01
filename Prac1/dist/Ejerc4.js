"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Alarma {
    constructor(codigoAcceso) {
        this.estado = true;
        this.codigoAcceso = codigoAcceso;
    }
    desactivar(intento) {
        if (intento === this.codigoAcceso) {
            this.estado = false;
            console.log(`Alarma desactivada correctamente`);
        }
        else {
            console.log(`El codigo ingresado no es correcto! Llamando a la policia...`);
        }
    }
}
const al = new Alarma("junc1to");
al.desactivar("junc1to");
//# sourceMappingURL=Ejerc4.js.map