/* let numero = 50;
numero = numero + 1;
numero += 1;
numero++; */

let temperatura = 35;

/* if(temperatura > 30){
  console.log("hace calor");
}else{
  console.log("Tranquilo");
} */

/* 
Operador ternario
condicion ? codigo1 : codigo2;
*/

// temperatura > 30 ? console.log("hace calor") : console.log("Tranquilo");

/* let permiso;
let edad = 15;

if(edad >= 18){
  permiso = true;
}else{
  permiso = false
}

if(permiso){
  console.log("puedes entrar");
}else{
  console.log("no puedes entrar");
} */

// let edad = 18;
// let permiso = edad >= 18 ? true : false;
// permiso ? console.log("puedes entrar") : console.log("no puedes entrar");

// const carrito = [123];

/* if(carrito.length === 0){
  console.log("carrito vacio");
} */

// carrito.length === 0 && console.log("carrito vacio");

/* 
valor1 && valor2

si el valor1 es verdadero o tiene una representacion de verdadero entonces ejecuta el valor2 en caso contrario ejecuta el valor1

valor1 || valor2

si el valor1 no es falsy retorna el valor1 en caso contrario retorna el valor2
*/

/* const usuario = {
  nombre: "mariano",
  edad: 10
};

const ingreso = usuario.edad >= 18 && new Date();
console.log(ingreso); */

// console.log( 0 || "Falsy") // Falsy
// console.log( 40 || "Falsy")  //40
// console.log( null || "Falsy")  //Falsy
// console.log( undefined || "Falsy")  //Falsy
// console.log( "Hola Mundo" || "Falsy") //hola mundo
// console.log( "" || "Falsy")  //Falsy
// console.log( NaN || "Falsy")  // Falsy
// console.log( true || "Falsy") //true
// console.log( false || "Falsy") //Falsy

/* const usuario = {
  nombre: "mariano",
  edad: 10
};

const usuario1 = null;

console.log(usuario || "El usuario no existe");
console.log(usuario1 || "El usuario no existe"); */

/* let carrito;
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
  carrito = carritoStorage;
}else{
  carrito = [];
} */

// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/* const usuario = {
  nombre: "pepito"
};

console.log(usuario?.nombre || "El usuario no existe"); */

/* const usuario = {
  nombre: "Juan",
  edad: 50,
  direccion: "AV",
  estatura: 180
};

let {
  nombre, 
  edad, 
  direccion, 
  estatura,
} = usuario;

console.log(color); */

/* let nombre = usuario.nombre;
let edad = usuario.edad;
let direccion = usuario.direccion;
let estatura = usuario.estatura; */

/* const usuario = {
  nombre: "John Doe",
  edad: 32,
  telefono: {
    cel: 113334444,
    casa: null,
    trabajo: 113325555,
  },
};

const {
  nombre,
  telefono: { cel },
} = usuario;

console.log(cel); */

/* const usuario = {
  nombre: "Juan",
  edad: 50,
  direccion: "AV",
  estatura: 180,
};

const { nombre: namePerson, edad: age } = usuario;
console.log(namePerson);
console.log(age); */

/* const crearUsuario = ({nombre, edad}) => {
  console.log(nombre, edad);
}

crearUsuario({nombre: "Juan", edad: 45}); */

/* const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

const [a, , b] = nombres;
console.log(a);
console.log(b); */

/* let persona1 = {nombre: "andres", edad: 50};
let persona2 = {...persona1};

persona2.nombre = "camila";
console.log(persona1); */
/* 
const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];
console.log(...nombres);
console.log(nombres.join(" ")); */

/* const numeros = [4, 77, 92, 10, 3, -32, 54, 11];

console.log(Math.max(...numeros)); */

/* const usuario = {
  nombre: "Juan",
  edad: 50,
  direccion: "AV",
  estatura: 180,
};

const usuario1 = {
  ...usuario,
  nombre: "pepito",
  mama: "pepita"
}

console.log(usuario1); */

/* const prueba = (...varios) => {
  varios.forEach(item => console.log(item));
};

prueba("pepito", "pepita", "mariano", 4, 5, 6); */

/* const sumar = (...numeros) => {
  return numeros.reduce((acumulador, item) => acumulador + item, 0);
};

console.log(sumar(1,2,3,5,6,78,9,8)); */