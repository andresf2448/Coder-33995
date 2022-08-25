// let nombre = "pepito";
// let edad = 23;
// let direccion = "AV";

/* 
estructura de un objeto

{key1: value1, key2: value2, ... , keyn: valuen}
*/

/* let persona = {
  nombre: "pepito",
  edad: 23,
  direccion: "AV"
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.direccion);

console.log(persona["nombre"]);
console.log(persona["edad"]);

let lugar = "direccion";
console.log(persona[lugar]);

persona["nombre"] = "Juan";
persona.edad = 67;

console.log(persona); */

//Funciones contructoras
/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
}

let persona1 = new Persona("pepito", 23, "AV");
let persona2 = new Persona("mariana", 22, "AV");
console.log(persona1.nombre);
console.log(persona2.nombre); */

/* function Persona(info){
  this.nombre = info.nombre;
  this.edad = info.edad;
  this.direccion = info.direccion;
  this.colorCabello = info.colorCabello;
  this.ColorOjos = info.colorOjos;
}

let persona1 = new Persona({
  nombre: "Damian",
  edad: 34,
  direccion: "AV",
  colorCabello: "Negro",
  colorOjos: "Azul"
});

console.log(persona1.edad);

function Perrito(nombre, edad){
  this.nombre = nombre;
  this.edad = edad;
}

let perrito1 = new Perrito("firu", 3);
let perrito2 = new Perrito("max", 4);


function Producto(img, precio, nombre){
  this.img = img;
  this.precio = precio;
  this.nombre = nombre;
}

let producto1 = new Producto( 406000, "httpa,sdfhlkasugfojdshf","Monitor sam...");

function Producto(tabla){
  this.img = tabla.img;
  this.precio = tabla.precio;
  this.nombre = tabla.nombre;
}

let producto2 = new Producto({
  nombre: "Monitor sam...",
  precio: 406000,
  img: "httpa,sdfhlkasugfojdshf",
}) */

// console.log("lina".toUpperCase());

/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
  this.hablar = function() {console.log("Hola soy " + this.nombre);}
}

let persona1 = new Persona("maria", 45, "AV");
persona1.hablar(); */

/* let persona = {
  nombre: "pepito",
  edad: 23,
  direccion: "AV"
};

for(const propiedad in persona){
  console.log(propiedad);
  console.log(persona[propiedad]);
} */

/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
  this.hablar = function() {console.log("Hola soy " + this.nombre);}
} */

/* class Persona {
  constructor(nombre, edad, direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  hablar(){
    console.log("Hola soy " + this.nombre);
  }
}

let persona1 = new Persona("maria", 34, "AV");
console.log(persona1.edad); */


class Producto{
  constructor(info){
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }

  vender(){
    this.cantidad = this.cantidad - 1;
  }
}


let producto1 = new Producto("Televisor", 100000, 5);
console.log(producto1);
producto1.vender();
console.log(producto1);
producto1.vender();
console.log(producto1);


