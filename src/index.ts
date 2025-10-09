

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


//MÉTODOS PARA TRABAJAR CON ARRAYS

let anumeros = [1,3,5,7,9]
//PUSH
anumeros.push(11)
console.log(anumeros)
//POP
anumeros.pop()
console.log(anumeros)

anumeros.push(13,15,17)

//UNSHIFT
anumeros.unshift(0)
console.log(anumeros)

//SHIFT

anumeros.shift()
console.log(anumeros)

//ACCESO, REEMPLAZO
anumeros[0] = -1
console.log(anumeros[0])
console.log(anumeros.length)

//BUSQUEDA DE ELEMENTOS
let frutas = ["manzana","pera","mandarina"]
//INDEXOF
console.log(frutas.indexOf("pera"))

//INCLUDE
console.log(frutas.includes("pera".toLocaleLowerCase()))

//FIND Busqueda de un elemento que cumple una determinada condición.

console.log(frutas.find((fruta) =>{return fruta.length > 5 }))

console.log(frutas.findIndex((fruta) => {return fruta.length>5}))

//FOREACH RECORRE TODOS LOS ELEMENTOS
frutas.forEach(valor => console.log(valor))

frutas.forEach(valor => valor.length>5?console.log(valor):null)

//MAP -> TRANSFORMAR LOS ELEMENTOS DE UN ARRAY
let frutas2 = frutas.map((fruta) => {return fruta.toLocaleUpperCase()})
console.log(frutas2)

//FILTER FILTRAR LOS ELEMENTOS DE UN ARRAY
let frutasFiltradas = frutas.filter((fruta:string) =>{return fruta.length<5})
console.log(frutasFiltradas)

//REDUCE -> ACUMULAR EL VALOR
let numerosEnteros = [11,1,2,3,4,5,6,7]

numeros.reduce((acc,elementoActual)=>{return acc += elementoActual})

let nombres = ["Jesús","Lobato","González"]
let miNombre = nombres.reduce((elementoAnterior,elementoActual) => {return elementoAnterior +=" "+ elementoActual})
console.log(miNombre)


//SORT, CUIDADO CON LOS NÚMEROS
console.log(numerosEnteros.sort((a: number, b: number) => {
  return b - a;
}));

//SLICE
console.log(nombres.slice(0,2))

//JOIN
console.log(nombres.join(" "))

//TUPLAS

let nombreEdad:[string,number]
nombreEdad = ["Jesús",24]
console.log(`Mi nombre es ${nombreEdad[0]}`)
console.log(`Mi edad es ${nombreEdad[1]}`)


//DICCIONARIOS

let diccionario = {1:"Jose",2:"Juan"}
console.log(diccionario)


//FUNCIONES

/**
 * Función para sumar 2 elementos
 * @param a Primer parámetro a sumar
 * @param b Segundo parámatro a sumar
 * @returns Número sumado
 */
function sumar(a:number,b:number):number
{
    return a+b
}

let suma2numeros = sumar(10,20)

//NO TIENE HOISTING, ES DECIR RECOLECTA TODAS LAS FUNCIONES Y LAS PONE AL PRINCIPIO PARA QUE SE PUEDAN USAR SIEMPRE AUNQUE LA DECLARES LÍNEAS MÁS ABAJO
const fResta = function(a:number,b:number){
    return a-b
}

console.log(fResta(5,2))

//OPERADOR TERNARIO + PARAMETRO OPCIONAL
function saludar(nombre:string, apellido?:string){
    apellido!=undefined?console.log(`Hola ${nombre} ${apellido}`):console.log(`Hola ${nombre}`)

    console.log(`Hola ${nombre} ${apellido ?? ""}`)
    
    
}