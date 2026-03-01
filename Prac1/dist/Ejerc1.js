"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class player {
    constructor(nombre, vidaInicial) {
        this.nombre = nombre;
        this.vida = vidaInicial;
    }
    recibirDaño(puntos) {
        this.vida -= puntos;
        console.log(`${this.nombre} recibio ${puntos} de dano. Vida restante ${this.vida}`);
    }
    status() {
        if (this.vida > 0) {
            console.log(`${this.nombre} sigues luchando.`);
        }
        else {
            console.log(`${this.nombre} te petateaste`);
        }
    }
}
const pl = new player("chris", 100);
pl.recibirDaño(50);
pl.status();
//# sourceMappingURL=Ejerc1.js.map