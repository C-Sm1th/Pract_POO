"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const Usuario_1 = __importDefault(require("../models/Usuario"));
class UsuarioController {
    async crear(req, res) {
        const { nombre, apellido, email, password } = req.body;
        const u = new Usuario_1.default(nombre, apellido, email, password);
        const db = database_1.default.getInstance().getConnection();
        await db.query("INSERT INTO usuarios (nombre, apellido, email, password) VALUES (?, ?, ?, ?)", [u.getNombre(), u.getApellido(), u.getEmail(), u.getPassword()]);
        res.json({ mensaje: "Usuario guardado con éxito" });
    }
    async listar(req, res) {
        const db = database_1.default.getInstance().getConnection();
        const [rows] = await db.query("SELECT * FROM usuarios");
        res.json(rows);
    }
    async eliminar(req, res) {
        const { id } = req.params;
        const db = database_1.default.getInstance().getConnection();
        await db.query("DELETE FROM usuarios WHERE id = ?", [id]);
        res.json({ mensaje: "Usuario eliminado correctamente" });
    }
}
exports.default = new UsuarioController();
//# sourceMappingURL=UsuarioController.js.map