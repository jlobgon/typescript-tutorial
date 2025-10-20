

// //Declaración de variables
// const z = "Fran"
// if(true){
//     var x = "Maria"
//     let y = "Jose"; // Tiene un ámbito de bloque
// }
// x = "Jose" // x tiene un ámbito global por eso puede modificar el valor asignado del if

// console.log(x)

// // TIPOS DE DATOS
// /**
//  * Datos Primitivos
//  * string
//  * number
//  * boolean
//  */

// let nombre:string = "Jose Antonio"
// let edad:number = 18;
// let mayor_edad:boolean = true

// /** Tipos de datos especiales
//  * 
//  * any
//  * unknown
//  * void
//  */

// //Any provocaria un error en tiempo de compliación
// let cualquierCosa:any = "Hola"
// cualquierCosa = 2
// cualquierCosa = true;

// //console.log(cualquierCosa.toLowerCase())

// //Uso del tipo unknown
// let tipoDeDatoDesconocido:unknown;

// tipoDeDatoDesconocido = "Nombre"
// tipoDeDatoDesconocido = 18

// if (typeof(tipoDeDatoDesconocido) == "string"){
//     console.log(tipoDeDatoDesconocido.toLocaleLowerCase())
// }


// //CONCATENAR
// console.log(`Tu nombre es ${x}`)

// //ARRAYS

// let numeros:number[] = [3,5,8,11]
// let numeros2:number[] = [3,5,8,11]

// let mixto:(number|string)[]=[3,"Jose",5,"Juan"]

// let array2d:number[][] = [[1,2,3],[4,5,6],[7,8,9]]

// console.log(`La posición 0 del array numeros es : ${numeros[0]}`)
// if (array2d[0] || array2d[0] != undefined) {
//     console.log(`La posición 0,0 del array array2d es : ${array2d[0][0]}`)
// }
// //Con ternaria
// console.log(`La posición 0,0 del array array2d es : ${array2d[0] != undefined?array2d[0][0]:0}`)

// //Concatenar arrays
// let numeros3 = [...numeros,...numeros2]

// console.log(`El array de números 3 contiene : ${numeros3}`)
// numeros3[0] = 10
// console.log(numeros3)


// //MÉTODOS PARA TRABAJAR CON ARRAYS

// let anumeros = [1,3,5,7,9]
// //PUSH
// anumeros.push(11)
// console.log(anumeros)
// //POP
// anumeros.pop()
// console.log(anumeros)

// anumeros.push(13,15,17)

// //UNSHIFT
// anumeros.unshift(0)
// console.log(anumeros)

// //SHIFT

// anumeros.shift()
// console.log(anumeros)

// //ACCESO, REEMPLAZO
// anumeros[0] = -1
// console.log(anumeros[0])
// console.log(anumeros.length)

// //BUSQUEDA DE ELEMENTOS
// let frutas = ["manzana","pera","mandarina"]
// //INDEXOF
// console.log(frutas.indexOf("pera"))

// //INCLUDE
// console.log(frutas.includes("pera".toLocaleLowerCase()))

// //FIND Busqueda de un elemento que cumple una determinada condición.

// console.log(frutas.find((fruta) =>{return fruta.length > 5 }))

// function buscar(frutas:string[]):string|undefined{
//     for (let x = 0;x<frutas.length;x++){
//         const valorX = frutas[x];

//         if (valorX!=undefined && valorX.length>5){
//             return valorX;
//             break;
//         }
//     }
// }

// //NOT NULL ASSERTION
// //valor[x]!.length Ejecuta el length si o si
// //valor[x]?.length En caso de que valor[x] no sea undefenide o null no se ejecuta el length

// //console.log(apellido ?? "")  En caso de que sea undefined se imprime cadena vacia en caso de que no sea undefined se imprime apellido

// console.log(frutas.findIndex((fruta) => {return fruta.length>5}))

// //FOREACH RECORRE TODOS LOS ELEMENTOS
// frutas.forEach(valor => console.log(valor))

// frutas.forEach(valor => valor.length>5?console.log(valor):null)

// //MAP -> TRANSFORMAR LOS ELEMENTOS DE UN ARRAY
// let frutas2 = frutas.map((fruta) => {return fruta.toLocaleUpperCase()})
// console.log(frutas2)

// //FILTER FILTRAR LOS ELEMENTOS DE UN ARRAY
// let frutasFiltradas = frutas.filter((fruta:string) =>{return fruta.length<5})
// console.log(frutasFiltradas)

// //REDUCE -> ACUMULAR EL VALOR
// let numerosEnteros = [11,1,2,3,4,5,6,7]

// numeros.reduce((acc,elementoActual)=>{return acc += elementoActual})

// let nombres = ["Jesús","Lobato","González"]
// let miNombre = nombres.reduce((elementoAnterior,elementoActual) => {return elementoAnterior +=" "+ elementoActual})
// console.log(miNombre)


// //SORT, CUIDADO CON LOS NÚMEROS
// console.log(numerosEnteros.sort((a: number, b: number) => {
//   return b - a;
// }));

// //SLICE
// console.log(nombres.slice(0,2))

// //JOIN
// console.log(nombres.join(" "))

// //TUPLAS

// let nombreEdad:[string,number]
// nombreEdad = ["Jesús",24]
// console.log(`Mi nombre es ${nombreEdad[0]}`)
// console.log(`Mi edad es ${nombreEdad[1]}`)


// //DICCIONARIOS

// let diccionario = {1:"Jose",2:"Juan"}
// console.log(diccionario)


// //FUNCIONES

// /**
//  * Función para sumar 2 elementos
//  * @param a Primer parámetro a sumar
//  * @param b Segundo parámatro a sumar
//  * @returns Número sumado
//  */
// function sumar(a:number,b:number):number
// {
//     return a+b
// }

// let suma2numeros = sumar(10,20)

// //NO TIENE HOISTING, ES DECIR RECOLECTA TODAS LAS FUNCIONES Y LAS PONE AL PRINCIPIO PARA QUE SE PUEDAN USAR SIEMPRE AUNQUE LA DECLARES LÍNEAS MÁS ABAJO
// const fResta = function(a:number,b:number){
//     return a-b
// }

// console.log(fResta(5,2))

// //OPERADOR TERNARIO + PARAMETRO OPCIONAL
// function saludar(nombre:string, apellido?:string){
//     apellido!=undefined?console.log(`Hola ${nombre} ${apellido}`):console.log(`Hola ${nombre}`)

//     console.log(`Hola ${nombre} ${apellido ?? ""}`)
// }

// //FUNCIÓN CON PARAMETROS POR DEFECTO
// function potencia(base:number,exponente:number=2){
//     return base**exponente
// }
// console.log(potencia(2))
// console.log(potencia(2,4))


// //FUCIÓN FLECHA
// const fflecha = (a:number) => {return a}
// const fflecha2 = (a:number) => a //SI ES EN LA MISMA LÍNEA TE PUEDES SALTAR LAS LLAVES Y EL RETURN


// function math(a:number,b:number,operacion:(a:number,b:number) => number) {
//     return operacion(a,b)
// }

// const farrowsumar = (a:number,b:number) => a+b
// const frestar = function(a:number,b:number):number{return a+b} 

// console.log(math(4,2,farrowsumar))
// console.log(math(4,2,frestar))

// //PASARLE A FUNCION NUMERO INDEFINIDO DE PARAMETROS
// function multipleParams (...valores:number[]){
//     let suma = valores.reduce((previousValue:number,currentValue:number) => previousValue+= currentValue,0)
//     return suma
// }
// console.log(multipleParams(4,3,2,1))

// interface DataApi{
//     message:string,
//     status:string
// }
// //FUNCIONES ASINCRONAS
// async function getApiData(url:string):Promise<DataApi> {
//     const respuesta = await fetch(url)
//     const datos = respuesta.json() as Promise<DataApi>
//     return datos
// }

// getApiData("https://dog.ceo/api/breeds/image/random")
// .then((value:DataApi) => {console.log(value.message)})
// .catch((error) => {console.log(error)})


 //CREACIÓN DE OBJETOS LITERALES

 let persona = {
    id:1,
    nombre:"Jesús",
    apellido:"Jesús Lobato",
    direccion:{
        calle:"Madrid",
        color:"Blanco"
    },
    edad:25,
    esMayorEdad: function ():boolean {return this.edad >=18?true:false}
 }

 // TYPE, parecidos a las interfaces de java
//Es una plantilla que me va a permitir reutilizar código

type Usuario = {
    readonly id:number, //No se puede modificar el valor
    userName:string,
    email:string,
    estaActivo:boolean,
    profileURL?:string, // propiedad opcional
    saluda: ()=>void
}

type PuestoTrabajo ={
    puestoTrabajo:string,
    oficina:string
}

type Empleado = Usuario & PuestoTrabajo
//DA FALLO POR EL ÁMBITO, SI QUIERES USAR UNA PROPIEDAD DENTRO DE LA FUNCIÓN, TIENES QUE USAR UNA FUNCIÓN CON NOMBRE
// let u1:Usuario = {
//     id:1,
//     userName:"user1",
//     email:"email1@mail.com",
//     estaActivo:true,
//     saluda: () => console.log(`Hola mi nombre de usuario es ${this.userName}`)
// }

let u1: Usuario = {
  id: 1,
  userName: "user1",
  email: "email1@mail.com",
  estaActivo: true,
  
  saluda() {
    console.log(`Hola mi nombre de usuario es ${this.userName}`);
  }
};


u1.email = "emailuser2@mail.com"
//u1.id = 2

//if (u1 instanceof Usuario) NO FUNCIONA, el type no existe en tiempo de ejecución

let e1:Empleado= {
    id: 1,
  userName: "user1",
  email: "email1@mail.com",
  estaActivo: true,
  
  saluda() {
    console.log(`Hola mi nombre de usuario es ${this.userName}`);
  },
  puestoTrabajo:"Programador",
  oficina:"Sevilla"
}

type Saludo = `Hola ${number}`
let mensaje:Saludo = "Hola 1"






