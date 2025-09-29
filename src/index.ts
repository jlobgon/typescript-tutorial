

//Declaración de variables
const z = "Fran"
if(true){
    var x = "Maria"
    let y = "Jose"; // Tiene un ámbito de bloque
}
x = "Jose" // x tiene un ámbito global por eso puede modificar el valor asignado del if

console.log(x)

// TIPOS DE DATOS
/**
 * Datos Primitivos
 * string
 * number
 * boolean
 */

let nombre:string = "Jose Antonio"
let edad:number = 18;
let mayor_edad:boolean = true

/** Tipos de datos especiales
 * 
 * any
 * unknown
 * void
 */

//Any provocaria un error en tiempo de compliación
let cualquierCosa:any = "Hola"
cualquierCosa = 2
cualquierCosa = true;

//console.log(cualquierCosa.toLowerCase())

//Uso del tipo unknown
let tipoDeDatoDesconocido:unknown;

tipoDeDatoDesconocido = "Nombre"
tipoDeDatoDesconocido = 18

if (typeof(tipoDeDatoDesconocido) == "string"){
    console.log(tipoDeDatoDesconocido.toLocaleLowerCase())
}


//CONCATENAR
console.log(`Tu nombre es ${x}`)