"use strict";
// TRABAJO PRACTICO TYPESCRIPT
//EJERCICIO 3
let stringVar = "Hola soy Marcos";
let numberVar = 45;
let booleanVar = true;
let dateVar = new Date();
const contenedor = document.getElementById("tipoDeDatos");
contenedor.innerHTML = `
<p>String: ${stringVar} </p>
<p>Numero: ${numberVar} </p>
<p>Booleano: ${booleanVar} </p>
<p>Fecha: ${dateVar.toLocaleDateString()} </p>`;
//EJERCICIO 4
let number = 65;
function numeroACadena(number) {
    let numeroCadena;
    numeroCadena = number.toString();
    return numeroCadena;
}
const contenedorNumeroCadena = document.getElementById("numeroACadena");
contenedorNumeroCadena.innerHTML = `<p>
Numero convertido a cadena: ${numeroACadena(number)}
</p>`;
// EJERCICIO 5 
let arrayNumeros = [5, 85, 14, 8];
function sumaNumerosArray(lista) {
    let sumaNumeros = 0;
    for (let i = 0; i < lista.length; i++) {
        sumaNumeros += lista[i];
    }
    return sumaNumeros;
}
let suma = sumaNumerosArray(arrayNumeros);
const contenedorSumaArray = document.getElementById("sumaArray");
contenedorSumaArray.innerHTML = `<p>
Suma del array: ${suma}
</p>`;
// EJERCICIO 6
const estudiante = {
    nombre: "Marcos",
    edad: 22,
    curso: "4A"
};
const contenedorObjetoEstudiante = document.getElementById("objetoEstudiante");
contenedorObjetoEstudiante.innerHTML = `<p>
Estudiante: ${estudiante.nombre}
Edad: ${estudiante.edad}
Curso: ${estudiante.curso}
</p>`;
const direccion = {
    calle: "Francia",
    ciudad: "Lujan de Cuyo",
    codPostal: 5505
};
const contenedorTypeDireccion = document.getElementById("typeDireccion");
contenedorTypeDireccion.innerHTML = `<p>
Direccion
Calle: ${direccion.calle}, Ciudad: ${direccion.ciudad}, CP: ${direccion.codPostal}
</p>`;
const usuario = {
    nombre: "Marcos Di Meco",
    correo: "marcosdimecom@gmail.com",
    saludar() {
        return `Hola, mi nombre es ${this.nombre}`;
    },
};
const contenedorInterfazUsuario = document.getElementById("interfazUsuario");
contenedorInterfazUsuario.innerHTML =
    usuario.saludar();
// EJERCICIO 9
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentacion() {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }
}
const persona1 = new Persona("Marcos Di Meco", 22);
const contenedorClasePersona = document.getElementById("clasePersona");
contenedorClasePersona.innerHTML = persona1.presentacion();
//EJERCICIO 10 
class Caja {
    constructor(valor) {
        this.valor = valor;
    }
    obtenerValor() {
        return this.valor;
    }
}
const cajaTexto = new Caja("Mensaje oculto");
const cajaNumero = new Caja(6854);
const contenedorClaseGenerica = document.getElementById("claseGenerica");
contenedorClaseGenerica.innerHTML = `<p>
Contenido de caja de texto: ${cajaTexto.obtenerValor()} <br>
Contenido de caja de numero: ${cajaNumero.obtenerValor()}
</p>`;
//EJERCICIO 11 
function identidad(valor) {
    return valor;
}
const textoIdentidad = identidad("hola como estas");
const numeroIdentidad = identidad(654);
const contenedorIdentidadGenerinca = document.getElementById("identidadGenerica");
contenedorIdentidadGenerinca.innerHTML = `<p>
Identidad numero : ${numeroIdentidad} <br>
Identidad texto : ${textoIdentidad}
</p>`;
//EJERCICIO 12
var Colores;
(function (Colores) {
    Colores["Rojo"] = "Rojo";
    Colores["Azul"] = "Azul";
    Colores["Amarillo"] = "Amarillo";
})(Colores || (Colores = {}));
const cololorFavorito = Colores.Rojo;
const contenedorEnumColores = document.getElementById("enumColores");
contenedorEnumColores.innerHTML = `<p>
Color favorito: ${cololorFavorito}
</p>`;
