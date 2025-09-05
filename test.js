console.log("Bienvenidos a este taller introductorio de hackaton")

let nombre = "Valentina"; // String
let edad = 19; // Integer
let cantidad = 19.8874; // Float
let verdadero = true;
let esFalso = false; // boolean

console.log("Hola soy " + nombre);
console.log("Tengo : " + edad);

// Funciones 

function saludar(nombre) {
    return "Hola " + nombre + "!";
}

console.log(saludar("Oscar"));
console.log(saludar("Luis"));

function calcularEdadEndias(años) {
    return años * 365;
}

console.log("19 años son ", calcularEdadEndias(19), " días")

let estudiante = {
    nombre: "Oscar", // Key: Value
    edad: 25,
    carrera: "Física",
    universidad: "UTM",
    esEstudianteActivo: false
}

console.log("Nombre: ", estudiante.nombre);
console.log("Universidad en la que estudió: ", estudiante.universidad);
console.log("Es estudiante activo? ", estudiante.esEstudianteActivo);
console.log("Edad de oscar en un año: ", estudiante.edad += 1)


