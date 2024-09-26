"use strict";
//EJERCICIO 1
class Coche {
    constructor(marca, modelo, velocidad) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    acelerar() {
        this.velocidad += 10;
        console.log("Has acelerado, la velocidad ahora es de: " + this.velocidad);
    }
    frenar() {
        if (this.velocidad < 10) {
            this.velocidad = 0;
            console.log(`Has frenado, la velocidad ahora es: ${this.velocidad}`);
        }
        else if (this.velocidad == 0) {
            console.log("El coche ya esta frenado");
        }
        else {
            this.velocidad -= 10;
            console.log(`Has frenado, la velocidad ahora es: ${this.velocidad}`);
        }
    }
}
const golcito = new Coche("Volskwagen", "Gol", 90);
golcito.acelerar();
golcito.frenar();
console.log(golcito);
//EJERCICIO 2
