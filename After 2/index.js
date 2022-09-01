/* class Producto{
  constructor(nombre, preciom descripcion){
    this.nombre = nombre;
    this.precio = precio;
    this.descripcion = descripcion;
  }
}

let productos = [
  new Producto("camisa", 1000),
  new Producto("camisa", 1000),
  new Producto("camisa", 1000),
  new Producto("camisa", 1000),
  new Producto("camisa", 1000)
]; */

/* let productos = [
  { id: 1, nombre: "televisor", precio: 1000 },
  { id: 2, nombre: "monitor", precio: 1100 },
  { id: 3, nombre: "computador", precio: 500 },
  { id: 4, nombre: "celular", precio: 700 },
]; */

/* productos.forEach(item => {
  alert(item.nombre);
}); */

/* let filtro = prompt("ingrese el filtro (nombre, precio)");

if (filtro === "precio") {
  let precio = parseInt(prompt("Ingrese el precio del producto a encontrar"));
  let producto = productos.find((el) => el.precio === precio);

  let mensaje = ` Id: ${producto.id}
  Nombre: ${producto.nombre}
  Precio: $${producto.precio}`;
  alert(mensaje);
}else if(filtro === "nombre"){
  let nombre = prompt("Ingrese el nombre del producto a encontrar");
  let producto = productos.find((el) => el.nombre === nombre);

  let mensaje = ` Id: ${producto.id}
  Nombre: ${producto.nombre}
  Precio: $${producto.precio}`;
  alert(mensaje);
} */

let precio = parseInt(prompt("Ingrese el precio minimo"));
let filtrados = productos.filter((el) => el.precio >= precio);

console.log(filtrados);

let productos = [
  { id: 1, nombre: "televisor", precio: 1000 },
  { id: 2, nombre: "monitor", precio: 1100 },
  { id: 3, nombre: "computador", precio: 500 },
  { id: 4, nombre: "celular", precio: 700 },
];

let nombres = productos.map(item => item.nombre);
console.log(nombres);