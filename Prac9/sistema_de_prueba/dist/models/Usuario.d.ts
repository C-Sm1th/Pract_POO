export default class Usuario {
    private id?;
    private nombre;
    private apellido;
    private email;
    private password;
    constructor(nombre: string, apellido: string, email: string, password: string, id?: number);
    getNombre(): string;
    getApellido(): string;
    getEmail(): string;
    getPassword(): string;
}
//# sourceMappingURL=Usuario.d.ts.map