// const arreglo1 = [];
// const arreglo2 = [5, 7, 6, 8, 9];
// const arreglo3 = ["andres", "Joan", "mariana", "juaco"];
// const arreglo4 = [true, false, false, true];
// const arreglo5 = [true, 5, "pepito"];

// console.log(arreglo5[1]);
// console.log(arreglo5[2]);
// console.log(arreglo2[2] + arreglo2[4]);

/* const arreglo2 = [5, 7, 6, 8, 9];

for(let index = 0; index < 5; index++){
  console.log(arreglo2[index]);
} */

// const arreglo3 = ["andres", "Joan", "mariana", "juaco"];

// for(let index = 0; index < arreglo3.length; index++){
//   console.log(arreglo3[index].toUpperCase());
// }

//push agrega elementos al final
/* arreglo3.push("camila");
console.log(arreglo3.length);
console.log(arreglo3);

//unshift agrega elementos al principio
arreglo3.unshift("pepito");
console.log(arreglo3.length);
console.log(arreglo3);

//pop para sacar elementos del final
arreglo3.pop();
console.log(arreglo3.length);
console.log(arreglo3);

//shift para sacar elementos del principio
arreglo3.shift();
console.log(arreglo3.length);
console.log(arreglo3); */

//splice elimina los elementos pasados en parentesis
/* const arreglo3 = ["andres", "Joan", "mariana", "juaco"];
arreglo3.splice(1,3);

console.log(arreglo3); */

//join concatena todos los elementos del arreglo en un solo string separando los elementos por lo indicado dentro de los parentesis
/* const arreglo3 = ["andres", "Joan", "mariana", "juaco"];
console.log(arreglo3.join("")); */

//concat concatena arreglos
/* const arreglo3 = ["andres", "Joan", "mariana", "juaco"];
const numeros = [1, 2, 3, 4, 5];

const varios = numeros.concat(arreglo3);
console.log(varios); */

//slice hace una copia de una arreglo
/* const arreglo3 = ["andres", "Joan", "mariana", "juaco"];
const copia = arreglo3.slice(1, 3);
console.log(copia); */

/* 
indexOf busca la posicion de un elemento en el arreglo
const arreglo3 = ["andres", "Joan", "mariana", "juaco", "mariana"];
console.log(arreglo3.indexOf("mariana")); */

/*
valida si el arreglo contiene el elemento pasadoe n los parentesis
const arreglo3 = ["andres", "Joan", "mariana", "juaco", "mariana"];
console.log(arreglo3.includes("felix")); */

/* const arreglo3 = ["andres", "Joan", "mariana", "juaco", "mariana"];
console.log(arreglo3.reverse()); */

/* const arreglo3 = ["andres", "Joan", "mariana", "juaco", "mariana"];

arreglo3.pop();
arreglo3.pop();
console.log(arreglo3[arreglo3.length - 1]); */

/* const arreglo3 = ["andres", "Joan", "mariana", "juaco"];

const eliminar = (nombre) => {
  let posicion = arreglo3.indexOf(nombre);

  if(posicion != -1){
    arreglo3.splice(1, 1);
  }

  console.log(arreglo3);
}

eliminar("Joan"); */

/* class Producto{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
  }
}

const array = [];

for(let i = 0; i < 2; i++){
  let nombre = prompt("ingrese el nombre");
  let precio = prompt("ingrese el precio");
  let obj = new Producto(nombre, precio);

  array.push(obj);
}

console.log(array); */

/* const productos = [
  { id: 1, nombre: "Arroz" },
  { id: 2, nombre: "Fideo" },
  { id: 3, nombre: "Pan" },
];

for(const item of productos){
  console.log(item);
} */

/* const productos = [
  { id: 1, nombre: "Arroz" },
  { id: 2, nombre: "Fideo" },
  { id: 3, nombre: "Pan" },
]; */

/* for(const item of productos){
  console.log(item);
} */

/* for (let index = 0; index < productos.length; index++) {
  const element = productos[index];

  console.log(element);
} */

/* const obj = {nombre: "andres", edad: 50};
let mensaje = `persona ${obj.nombre} edad ${obj.edad}`;

alert(mensaje); */