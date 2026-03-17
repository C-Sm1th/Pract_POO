"use strict";
//EJERCICIO 1
Object.defineProperty(exports, "__esModule", { value: true });
// abstract class Heroe {
//     constructor(protected nombre: string) {}
//     abstract usarPoder(): void;
// }
// class Volador extends Heroe {
//     override usarPoder(): void {
//         console.log("Estoy volando por los cielos");
//     }
// }
// class Fuerte extends Heroe {
//     override usarPoder(): void {
//         console.log("Estoy levantando un camion");
//     }
// }
// const heroe1 = new Volador("Aero");
// const heroe2 = new Fuerte("Titan");
// heroe1.usarPoder();
// heroe2.usarPoder();
//EJERCICIO 2
// abstract class MaquinaBebida {
//     abstract servir(): void;
// }
// class Cafetera extends MaquinaBebida {
//     override servir(): void {
//         console.log("Sirviendo un café caliente");
//     }
// }
// class DispensadorSoda extends MaquinaBebida {
//     override servir(): void {
//         console.log("Sirviendo soda con hielo");
//     }
// }
// const maquina1 = new Cafetera();
// const maquina2 = new DispensadorSoda();
// maquina1.servir();
// maquina2.servir();
//EJERCICIO 3
// abstract class Persona {
//     constructor(protected nombre: string) {}
//     abstract saludar(): void;
// }
// class Formal extends Persona {
//     override saludar(): void {
//         console.log("Mucho gusto, mi nombre es " + this.nombre);
//     }
// }
// class Informal extends Persona {
//     override saludar(): void {
//         console.log("Que onda, soy " + this.nombre);
//     }
// }
// const persona1 = new Formal("Carlos");
// const persona2 = new Informal("Luis");
// persona1.saludar();
// persona2.saludar();
//EJERCICIO 4
class Electrodomestico {
    constructor(marca) {
        this.marca = marca;
    }
}
class Licuadora extends Electrodomestico {
    funcionar() {
        console.log("La licuadora " + this.marca + " esta moliendo fruta");
    }
}
class Microondas extends Electrodomestico {
    funcionar() {
        console.log("El microondas " + this.marca + " esta calentando comida");
    }
}
const electro1 = new Licuadora("Oster");
const electro2 = new Microondas("LG");
electro1.funcionar();
electro2.funcionar();
//# sourceMappingURL=Ejer_Tarea.js.map