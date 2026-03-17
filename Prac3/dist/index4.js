"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
        if (!nombre)
            throw new Error("Nombre requerido");
    }
    mostrarRecibo() {
        console.log("Empleado: " + this.nombre + " | ID: " + this.id);
        console.log("Salario Neto: $" + this.calcularSalario());
    }
}
class Desarrollador extends Empleado {
    constructor(nombre, id, proyecto) {
        super(nombre, id);
        this.proyecto = proyecto;
    }
    //Implementacion obligatoria
    calcularSalario() {
        return 2500; //Salario fijo para devs
    }
}
class FreeLancer extends Empleado {
    constructor(nombre, id, horas, tarifa) {
        super(nombre, id);
        this.horas = horas;
        this.tarifa = tarifa;
        if (horas < 0 || tarifa < 0)
            throw new Error("Valores invalidos");
    }
    calcularSalario() {
        return this.horas * this.tarifa;
    }
}
//Instancia
try {
    const emp1 = new Desarrollador("Alex", "DEV-01", "App Movil");
    const emp2 = new FreeLancer("Sofia", "FREE-05", 40, 25);
    emp1.mostrarRecibo();
    console.log("---");
    emp2.mostrarRecibo();
}
catch (e) {
    console.log("Error: " + e.message);
}
//# sourceMappingURL=index4.js.map