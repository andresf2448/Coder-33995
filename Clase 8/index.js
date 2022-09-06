//getElementById

/* let div = document.getElementById("aplicacion");
console.log(div.innerHTML);
console.log(div.innerText); */

/* let parrafo = document.getElementById("parrafo");
console.log(parrafo.innerHTML);
console.log(parrafo.innerText); */

//getElementsByClassName
/* let perritos = document.getElementsByClassName("perritos");
console.log(perritos[0].innerHTML);
console.log(perritos[1].innerHTML);
console.log(perritos[2].innerHTML); */

/* let divs = document.getElementsByTagName("div");
console.log(divs[0].innerHTML);
console.log(divs[1].innerHTML);
console.log(divs[2].innerHTML); */

/* let perritos = document.getElementsByClassName("perritos");

for(const perrito of perritos){
  console.log(perrito.innerHTML);
} */

/* let saludo = document.getElementById("saludo");
let seccion = prompt("Ingresa la seccion a la que desea ir");

if(seccion === "carrito"){
  saludo.innerHTML = "<h2>Bienvenido al carrito</h2>";
  saludo.className = "rojo";
}else if(seccion === "favoritos"){
  saludo.innerHTML = "<h2>Bienvenido a los favoritos</h2>";
  saludo.className = "azul";
}else{
  saludo.innerHTML = "<h1>Bienvenido a nuestra plataforma</h1>";
  saludo.className = "amarillo";
} */

/* let contenedor = document.getElementById("contenedor");
let parrafo = document.createElement("p");//creacion
parrafo.innerHTML = "<h1>Hola a todos</h1>"; //asignacion de contenido

// document.body.append(parrafo);
contenedor.append(parrafo); */

/* let saludo = document.getElementById("saludo");
saludo.remove(); */

/* let personas = ["Manuel", "Camilo", "Lucas", "Andres", "pepito", "pantalon"];
let lista = document.getElementById("personas");

for(const persona of personas){
  let li = document.createElement("li");
  li.innerHTML = persona;
  lista.append(li);
} */

/* let producto = {
  id: 1,
  nombre: "camisa",
  precio: 4000
};

let contenedor = document.getElementById("contenedor");
contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                        <p>Producto: ${producto.nombre}</p>
                        <b>${producto.precio}</b>
                        `; */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "gorra", precio: 1300 },
  { id: 4, nombre: "zapato", precio: 1500 },
];

let contenedor = document.getElementById("contenedor");

for (const producto of productos) {
  let div = document.createElement("div");
  div.innerHTML = `<h3> ID: ${producto.id}</h3>
                          <p>Producto: ${producto.nombre}</p>
                          <b>${producto.precio}</b>`;

  contenedor.append(div);
} */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "gorra", precio: 1300 },
  { id: 4, nombre: "zapato", precio: 1500 },
];

let contenedor = document.getElementById("contenedor");
let nombre = prompt("Ingrese el producto");
let producto = productos.find(item => item.nombre === nombre);

contenedor.innerHTML = `<h3> ID: ${producto.id}</h3>
                          <p>Producto: ${producto.nombre}</p>
                          <b>${producto.precio}</b>`; */

/* const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "gorra", precio: 1300 },
  { id: 4, nombre: "zapato", precio: 1500 },
];

let contenedor = document.getElementById("contenedor");
let precio = parseInt(prompt("Ingrese el precio minimo"));

let productosFiltrados = productos.filter(item => item.precio > precio);

for (const producto of productosFiltrados) {
  let div = document.createElement("div");
  div.innerHTML = `<h3> ID: ${producto.id}</h3>
                   <p>Producto: ${producto.nombre}</p>
                   <b>${producto.precio}</b>`;

  contenedor.append(div);
}
 */

/* let div = document.querySelectorAll(".contenedor");
console.log(div); */

let parrafo = document.querySelector("#contenedor p");