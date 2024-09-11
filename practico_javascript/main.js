//INTRODUCCION A JAVASCRIPT

/*
//  EJERCICIO 2
let a = 5;
let b = 10;
let c = a + b;
console.log("La suma de a + b es: "+ c); 

// EJERCICIO 3
let nombre = prompt("¿Cual es su nombre?")
console.log("Hola, "+ nombre + "!")


//OPERADORES LOGICOS Y CONDICIONALES

//EJERCICIO 1

let valor1 = prompt("Ingrese el valor 1:")
let valor2 = prompt("Ingrese el valor 2:") 
let resultado 

if (valor1 > valor2){
    resultado = valor1
    console.log("El mayor valor es: "+ resultado)
} else if (valor2 > valor1){
    resultado = valor2
    console.log("El mayor valor es: "+ resultado)
} else {
    console.log("Los valores son iguales")
}


//EJERCICIO 2

let esParImpar = prompt("Ingrese un numero")

if ((esParImpar % 2) == 1){
    console.log("El numero "+ esParImpar+ " es impar")
} else {
    console.log("El numero "+ esParImpar +" es par")
}


//EJERCICIO 3

let contador10a0 = 10

while (contador10a0 >= 0) {
    console.log(contador10a0)
    contador10a0 --
}
console.log("FIN")


//EJERCICIO 4
let numMayor100
do {
    numMayor100 = prompt("Ingrese un valor mayor a 100:")
} while (numMayor100 <= 100) 
console.log("El numero ingresado es: " + numMayor100)



// FUNCIONES 

// EJERCICIO 1 

function esPar(numero) {
    if (numero % 2 == 1) {
        return false
    } else {
        return true
    }
}

let numeroIngresado = prompt("Ingresa un numero: ")
console.log("El numero ingresado "+ numeroIngresado +" es par: "+ esPar(numeroIngresado))


//EJERCICIO 2 
let celsius = 30
convertirCelsiusAFahrengeit(celsius)

function convertirCelsiusAFahrengeit(celsius) {
    let fahrenheit = celsius * 1.8 + 32
    console.log(celsius + "°C son equivalentes a "+ fahrenheit +"°F")
}


// OBJETOS

// EJERCICIO 1

let persona = {
    nombre: "Marcos",
    edad: 22,
    ciudad: "Mendoza",

    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};

console.log("Ciudad antes del cambio: " + persona.ciudad)

persona.cambiarCiudad("Buenos Aires")

console.log("Persona: "+ persona.nombre +", Edad: "+ persona.edad + ", Ciudad: " + persona.ciudad)


//EJERCICIO 2

let libro = {
    titulo: "El señor de los anillos",
    autor: "Tolkien",
    anio: 1954,

    libroAntiguo: function() {
        let anioAcultual =  new Date().getFullYear();
        if((anioAcultual - libro.anio)>= 10 ) {
            return true
        } else { return false}
    }
}
console.log("El libro "+ libro.titulo + " es antiguo: "+ libro.libroAntiguo());

//ARRAYS

//EJERCICIO 1

let numeros = []
for(let i = 0 ;i < 10; i++){
    numeros[i] = i+1
}

let numerosMultiplicados = []
for(let i = 0; i < numeros.length; i++) {
    numerosMultiplicados[i] = numeros[i]*2
}

console.log("Lista de numeros original "+ numeros);
console.log("Lista de numeros multiplicados: "+ numerosMultiplicados)

*/

//INTRODUCCION A DOM

//EJERCICIO 1

const button = document.getElementById("button")

const p = document.getElementsByClassName("p")

const hadleStyleP = () => {
    if(p[1].classList.contains("blueParagraph")){
        for(let i= 0; i < p.length; i++){
            p[i].classList.remove("blueParagraph")
        }
    } else {
        for(let i= 0; i < p.length; i++){
            p[i].classList.add("blueParagraph")
        }
    }
}

button.addEventListener("click",()=>{
    hadleStyleP();
})


//EJERCICIO 2

const textButton = document.getElementById("textButton")

const text = document.getElementById("text")

textButton.addEventListener("click",()=>{
    alert("Has ingresado: " + text.value)
})

//EVENTOS EN DOM

//EJERCICIO 1

const liElement = document.getElementsByTagName("li")

for(let i = 0; i < liElement.length; i++){
    liElement[i].addEventListener("click",() => {
        console.log(liElement[i].textContent)
    })
}


//EJERCICIO 2

const disableButton = document.getElementById("disableButton")
const ableButton = document.getElementById("ableButton")
const textAble = document.getElementById("textAble")

disableButton.addEventListener("click",() => {
    textAble.disabled = true
})

ableButton.addEventListener("click",() => {
    textAble.disabled = false
})

// LOCAL STORAGE

const sendButton = document.getElementById("saveButton");
const deleteButton = document.getElementById("deleteButton");
const saveEmail = document.getElementById("saveEmail")


const getDataInput = () => {
    const emailInput = document.getElementById("mail").value;
    localStorage.setItem("emails", JSON.stringify({emailInput}))
    if(emailInput) {
        saveEmail.innerHTML = `<p>Correo guardado: ${emailInput}</p>`
    }
}

const deleteDataInput = () => {
    localStorage.removeItem("emails")
    saveEmail.innerHTML = ""
}

sendButton.addEventListener("click", () => {
    getDataInput();
});

deleteButton.addEventListener("click", ()=>{
    deleteDataInput();
})