/* 
//variables
let nombre = prompt("Ingrese el nombre");
// alert(nombre);

//condicionales
if(nombre != "" && nombre.toLowerCase() === "andres"){
  alert("bienvenido");
}else{
  alert("No puedes entrar");
} */

//Bucles
/* let usuario = prompt("Ingrese el usuario");

while(usuario != "andres"){
  alert("usuario incorrecto");
  usuario = prompt("Ingrese el usuario");
}

alert("Bienvenido"); */

/* for(let i = 0; i < 10; i++){
  alert(i);
} */

//Funciones
/* function suma(x, y){
  return x + y;
} */
/* const suma = (x, y) => x + y;

let resultado = suma(4,5);
console.log(resultado); */

//Objetos
/* let persona = {
  nombre: "fabian",
  edad: 45,
  direccion: "AV"
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion); */

/* function Persona(nombre, edad, direccion){
  this.nombre = nombre,
  this.edad = edad;
  this.direccion = direccion;
}

let persona1 = new Persona("mariana", 45, "AV");
console.log(persona1); */

/* class Persona{
  constructor(nombre, edad, direccion){
    this.nombre = nombre,
    this.edad = edad;
    this.direccion = direccion;
  }

  hablar(){
    console.log("hablando " + this.nombre);
  }
}

let persona1 = new Persona("mariana", 45, "AV");
console.log(persona1); */

//Arreglos
/* const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

//for normal, for of, forEach
productos.forEach(item => console.log(item.producto)); */

//Storage
/* 
setItem(clave, valor)
getItem(clave)
removeItem(clave)
clear()
JSON.stringify(elemento)
JSON.parse(json)
*/

//DOM
/* const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

productos.forEach(item => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>${item.id}</h2>
    <p>${item.producto}</p>
    <b>${item.precio}</b>
  `;

  document.body.append(div);
}) */

//Formularios
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = e.target.children;

  console.log(inputs[0].value);
  console.log(inputs[1].value);
})