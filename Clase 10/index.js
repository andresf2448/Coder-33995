//forma de guardar en el storage
// localStorage.setItem("nombre", "mariano");
// localStorage.setItem("numero", "5");
// localStorage.setItem("valor", "true");
// localStorage.setItem("arreglo", [1, 2, 3, 4, 5]);
// localStorage.setItem("objeto", {nombre: "fabian", edad: 50});

// console.log(localStorage);
// let numero = localStorage.getItem("numero");
// console.log(typeof numero);

// for(let i = 0; i < localStorage.length; i++){
//   let clave = localStorage.key(i);
//   console.log("clave", clave);
//   console.log("valor", localStorage.getItem(clave));
// }

// localStorage.removeItem("numero"); //elimina un elemento pasado su key
// localStorage.clear(); //elimina todo el storage

// sessionStorage.setItem("prueba", "probando");

//JSON.stringify le da estructura de objeto a nnuestro elemento antes de guardarlo en el storage
// let arreglo = [1, 2, 3, 4, 5];
// localStorage.setItem("arreglo", JSON.stringify(arreglo));

// let objeto = {nombre: "fabian", edad: 50};
// localStorage.setItem("objeto", JSON.stringify(objeto));

// JSON.parse
// let objetoString = localStorage.getItem("objeto");
// let objeto = JSON.parse(objetoString);
// console.log(objeto);

// let arregloString = localStorage.getItem("arreglo");
// let arreglo = JSON.parse(arregloString);
// console.log(arreglo);

// function suma(x, y){
//   return x + y;
// }

// localStorage.setItem("resultado", suma(4,5));
// const guardarStorage = (clave, valor) => {localStorage.setItem(clave, valor)};

// const productos = [
//   { id: 1, producto: "Arroz", precio: 125 },
//   { id: 2, producto: "Fideo", precio: 70 },
//   { id: 3, producto: "Pan", precio: 50 },
//   { id: 4, producto: "Flan", precio: 100 },
// ];

// for(const producto of productos){
//   guardarStorage(producto.id, JSON.stringify(producto));
// }

// localStorage.setItem("productos", JSON.stringify(productos));

//Ejemplo se sesion
/* let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");

if(usuarioStorage){
  let mensaje = `Bienvenido ${usuarioStorage}`;
  alert(mensaje);
}else{
  usuario = prompt("Ingrese su nombre");
  sessionStorage.setItem("usuario", usuario);
  alert("Bienvenido es tu primera vez");
} */

const productos = [
  { id: 1, producto: "Arroz", precio: 125 },
  { id: 2, producto: "Fideo", precio: 70 },
  { id: 3, producto: "Pan", precio: 50 },
  { id: 4, producto: "Flan", precio: 100 },
];

// localStorage.setItem("carrito", JSON.stringify(productos));
let carritoStorage = localStorage.getItem("carrito");
let carrito = [];

if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
}
const agregar = (id) => {
  console.log(id);
}
if (carrito.length > 0) {
  carrito.forEach((elemento) => {
    let item = document.createElement("div");
    item.innerHTML = `
                      <h2>Id: ${elemento.id}</h2>
                      <p>Nombre: ${elemento.producto}</p>
                      <b>$${elemento.precio}</b>
                      <button id="agregar${elemento.id}">Agregar</button>
    `;

    document.body.append(item);
    let botonAgregar = document.getElementById(`agregar${elemento.id}`);
    botonAgregar.addEventListener("click", () => agregar(elemento.id));
  });
} else {
  let item = document.createElement("div");
  item.innerHTML = "No hay productos";
  document.body.append(item);
}

let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  localStorage.clear();
  alert("Carrito eliminado");
})