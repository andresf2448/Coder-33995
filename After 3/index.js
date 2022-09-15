/* 
localStorage
sessionStorage

setItem(clave, valor) //para guardar en el local o session
getItem(clave) //para traer el valor asociado a la clave pasada por parametro
removeItem(clave) //Eliminar el valor asociado a la clave
clear(); //Elimina por completo el local o session storage
JSON.stringify(elemento) //convierte el elemento en formato json
JSON.parse(elemento) //convierte de json a el elemento en javascript
*/

/* let nombre = "pepito";
localStorage.setItem("nombre", nombre); */

/* let objeto = {nombre: "juan", edad: 45};
localStorage.setItem("objeto", JSON.stringify(objeto)); */

/* let objeto = localStorage.getItem("objeto");
console.log(JSON.parse(objeto)); */

/* let productos = [
  { id: 1, nombre: "pantalon", precio: 1000 },
  { id: 2, nombre: "camisa", precio: 1000 },
  { id: 3, nombre: "gorra", precio: 1000 },
  { id: 4, nombre: "zapato", precio: 1000 },
];

localStorage.setItem("productos", JSON.stringify(productos)); */

function cambiarPrecio(nombre, precio){
  let array = JSON.parse(localStorage.getItem('productos'));

  const producto = array.find(elemento => elemento.nombre === nombre);
  producto.precio = precio;

  localStorage.setItem("productos", JSON.stringify(array));
}

cambiarPrecio("pantalon", 700);