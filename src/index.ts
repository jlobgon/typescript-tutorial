

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

//ARRAYS

let numeros:number[] = [3,5,8,11]
let numeros2:number[] = [3,5,8,11]

let mixto:(number|string)[]=[3,"Jose",5,"Juan"]

let array2d:number[][] = [[1,2,3],[4,5,6],[7,8,9]]

console.log(`La posición 0 del array numeros es : ${numeros[0]}`)
if (array2d[0] || array2d[0] != undefined) {
    console.log(`La posición 0,0 del array array2d es : ${array2d[0][0]}`)
}
//Con ternaria
console.log(`La posición 0,0 del array array2d es : ${array2d[0] != undefined?array2d[0][0]:0}`)

//Concatenar arrays
let numeros3 = [...numeros,...numeros2]

console.log(`El array de números 3 contiene : ${numeros3}`)
numeros3[0] = 10
console.log(numeros3)

