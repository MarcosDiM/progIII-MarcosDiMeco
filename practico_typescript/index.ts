// TRABAJO PRACTICO TYPESCRIPT

//EJERCICIO 3

let stringVar : string = "Hola soy Marcos";
let numberVar : number = 45;
let booleanVar : Boolean = true;
let dateVar : Date = new Date();

const contenedor = document.getElementById("tipoDeDatos")
contenedor!.innerHTML = `
<p>String: ${stringVar} </p>
<p>Numero: ${numberVar} </p>
<p>Booleano: ${booleanVar} </p>
<p>Fecha: ${dateVar.toLocaleDateString()} </p>`


//EJERCICIO 4

let number : number = 65
function numeroACadena(number : number) {
    let numeroCadena: String;
    numeroCadena = number.toString()
    return numeroCadena;
}

const contenedorNumeroCadena = document.getElementById("numeroACadena")
contenedorNumeroCadena!.innerHTML = `<p>
Numero convertido a cadena: ${numeroACadena(number)}
</p>`

// EJERCICIO 5 

let arrayNumeros : number[] = [5, 85, 14, 8]

function sumaNumerosArray(lista : number[]){
    let sumaNumeros : number = 0;
    for(let i = 0; i < lista.length; i++){
        sumaNumeros += lista[i]
    }
    return sumaNumeros
}

let suma = sumaNumerosArray(arrayNumeros);

const contenedorSumaArray = document.getElementById("sumaArray")
contenedorSumaArray!.innerHTML = `<p>
Suma del array: ${suma}
</p>`

// EJERCICIO 6

const estudiante = {
    nombre: "Marcos",
    edad: 22,
    curso: "4A"
}

const contenedorObjetoEstudiante = document.getElementById("objetoEstudiante")
contenedorObjetoEstudiante!.innerHTML = `<p>
Estudiante: ${estudiante.nombre}
Edad: ${estudiante.edad}
Curso: ${estudiante.curso}
</p>`

// EJERCICIO 7

type Direccion = {
    calle : string;
    ciudad : string;
    codPostal : number;
}

const direccion : Direccion = {
    calle: "Francia",
    ciudad: "Lujan de Cuyo",
    codPostal: 5505
}

const contenedorTypeDireccion = document.getElementById("typeDireccion")
contenedorTypeDireccion!.innerHTML = `<p>
Direccion
Calle: ${direccion.calle}, Ciudad: ${direccion.ciudad}, CP: ${direccion.codPostal}
</p>`

// EJERCICIO 8 

interface Usuario {
    nombre : string,
    correo : string,

    saludar(): string;
}

const usuario : Usuario = {
    nombre : "Marcos Di Meco",
    correo : "marcosdimecom@gmail.com",

    saludar() {
        return `Hola, mi nombre es ${this.nombre}`
    },
}

const contenedorInterfazUsuario = document.getElementById("interfazUsuario")
contenedorInterfazUsuario!.innerHTML = 
usuario.saludar()

// EJERCICIO 9

class Persona {
    nombre : string;
    edad : number;

    constructor(nombre : string, edad : number){
        this.nombre = nombre
        this.edad = edad
    }

    presentacion(): string {
        return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`
    }
}

const persona1 = new Persona("Marcos Di Meco", 22)

const contenedorClasePersona = document.getElementById("clasePersona")
contenedorClasePersona!.innerHTML = persona1.presentacion()


//EJERCICIO 10 

class Caja<T>{
    private valor?: T;

    constructor(valor : T){
        this.valor = valor;
    }

    obtenerValor(){
        return this.valor
    }
}

const cajaTexto : Caja <string> = new Caja("Mensaje oculto")
const cajaNumero : Caja <number> = new Caja(6854)

const contenedorClaseGenerica = document.getElementById("claseGenerica")
contenedorClaseGenerica!.innerHTML = `<p>
Contenido de caja de texto: ${cajaTexto.obtenerValor()} <br>
Contenido de caja de numero: ${cajaNumero.obtenerValor()}
</p>`

//EJERCICIO 11 

function identidad<T>(valor : T) : T {
    return valor;
}

const textoIdentidad = identidad("hola como estas");
const numeroIdentidad = identidad(654);

const contenedorIdentidadGenerinca = document.getElementById("identidadGenerica")
contenedorIdentidadGenerinca!.innerHTML = `<p>
Identidad numero : ${numeroIdentidad} <br>
Identidad texto : ${textoIdentidad}
</p>`

//EJERCICIO 12

enum Colores {
    Rojo = "Rojo",
    Azul = "Azul",
    Amarillo = "Amarillo"
}

const cololorFavorito : Colores = Colores.Rojo

const contenedorEnumColores = document.getElementById("enumColores")

contenedorEnumColores!.innerHTML = `<p>
Color favorito: ${cololorFavorito}
</p>`