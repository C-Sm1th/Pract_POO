"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    id;
    nombre;
    email;
    constructor(nombre, email, id) {
        this.nombre = nombre;
        this.email = email;
        this.id = id;
    }
    getNombre() { return this.nombre; }
    getEmail() { return this.email; }
}
exports.default = Usuario;
//# sourceMappingURL=Usuario.js.map