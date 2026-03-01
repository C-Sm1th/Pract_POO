"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class mascota {
    constructor(nombre) {
        this.hambre = 50;
        this.nombre = nombre;
    }
    comer() {
        this.hambre -= 20;
        console.log(`${this.nombre} ha comido,, su hambre actual es de: ${this.hambre}`);
    }
    correr() {
        this.hambre += 10;
        console.log(`${this.nombre} salio a correr. Su hambre actual es de: ${this.hambre}`);
    }
}
const mc = new mascota("pancho");
mc.comer();
mc.correr();
//# sourceMappingURL=Ejerc3.js.map