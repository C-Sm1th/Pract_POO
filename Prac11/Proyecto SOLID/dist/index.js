"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Entidad: Solo almacena información del estudiante
class Estudiante {
    nombre;
    carnet;
    carrera;
    constructor(nombre, carnet, carrera) {
        this.nombre = nombre;
        this.carnet = carnet;
        this.carrera = carrera;
    }
}
// Gestor: Se encarga exclusivamente de las acciones de almacenamiento
class GestorEstudiante {
    guardarEnBaseDeDatos(estudiante) {
        console.log(`[DB]: Registrando a ${estudiante.nombre} (Carnet: ${estudiante.carnet})...`);
    }
    generarExpedienteDigital(estudiante) {
        console.log(`[PDF]: Creando ficha académica para la carrera de ${estudiante.carrera}.`);
    }
}
// Ejecución
const alumno = new Estudiante("Josue Montoya", "U2026001", "Software");
const persistencia = new GestorEstudiante();
persistencia.guardarEnBaseDeDatos(alumno);
persistencia.generarExpedienteDigital(alumno);
//# sourceMappingURL=index.js.map