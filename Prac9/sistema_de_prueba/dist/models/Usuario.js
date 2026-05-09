"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    id;
    nombre;
    apellido;
    email;
    password;
    constructor(nombre, apellido, email, password, id) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.id = id;
    }
    getNombre() { return this.nombre; }
    getApellido() { return this.apellido; }
    getEmail() { return this.email; }
    getPassword() { return this.password; }
}
exports.default = Usuario;
//# sourceMappingURL=Usuario.js.map