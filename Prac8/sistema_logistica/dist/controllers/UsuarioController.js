"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../config/database"));
const Usuario_1 = __importDefault(require("../models/Usuario"));
class UsuarioController {
    async crear(req, res) {
        const { nombre, email } = req.body;
        const usuario = new Usuario_1.default(nombre, email);
        const db = database_1.default.getInstance().getConnection();
        await db.query("INSERT INTO usuarios (nombre, email) VALUES (?, ?)", [usuario.getNombre(), usuario.getEmail()]);
        res.json({ mensaje: "Usuario creado" });
    }
    async listar(req, res) {
        const db = database_1.default.getInstance().getConnection();
        const [rows] = await db.query("SELECT * FROM usuarios");
        res.json(rows);
    }
}
exports.default = new UsuarioController();
//# sourceMappingURL=UsuarioController.js.map