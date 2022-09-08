/* const saludar = (nombre)=>{
  console.log("Hola Click " + nombre);
}

let boton = document.getElementById("btnPrincipal");
let evento = prompt("Ingrese el evento");
let nombre = prompt("Ingrese el nombre");

boton.addEventListener(evento, () => saludar(nombre)); */
/* const saludar = () => {
  console.log("Hola Click");
};

let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", saludar); */

/* let boton = document.getElementById("btnPrincipal");
let saludo = document.getElementById("saludo"); */

// boton.addEventListener("mousedown", () => console.log("mousedown"));
// boton.addEventListener("mouseup", () => console.log("mouseup"));
// boton.addEventListener("mouseover", () => console.log("mouseover"));
// boton.addEventListener("mouseout", () => console.log("mouseout"));
// boton.addEventListener("mousemove", () => console.log("mousemove"));
// boton.addEventListener("click", () => console.log("click"));

/* boton.addEventListener("mouseout", () => {
  saludo.className = "rojo";
});

boton.addEventListener("mouseover", () => {
  saludo.className = "azul";
}); */

/* let nombre = document.getElementById("nombre");
let saludo = document.getElementById("saludo"); */
// nombre.addEventListener("keydown", () => console.log("keydown"))
/* nombre.addEventListener("keyup", (e) => {
  if(e.key === "a"){
    saludo.className = "rojo";
  }else if(e.key === "s"){
    saludo.className = "azul";
  }else{
    saludo.className = "amarillo";
  }
}) */

// nombre.addEventListener("change", () => console.log("change"));
/* nombre.addEventListener("input", () => {
  if(nombre.value.includes("@")){
    saludo.className = "azul"
  }else{
    saludo.className = "rojo"
  }
}); */

/* nombre.addEventListener("input", () => {
  if(nombre.value.includes("@")){
    saludo.className = "azul"
  }else{
    let mensaje = document.createElement("div");
    mensaje.innerHTML = "Correo inválido";
    mensaje.className = "rojo";
    document.body.append(mensaje);
  }
}); */

/* let ropa = [];

let formulario = document.getElementById("formulario");
let contenedor = document.getElementById("contenedor");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  contenedor.innerHTML = "";
  let inputs = e.target.children;
  ropa.push(inputs[0].value);

  ropa.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = item;
    contenedor.append(div);
  })
}) */

let arreglo = [];

let obj = {
  id: arreglo.length
}
arreglo.push(obj)
let obj1 = {
  id: arreglo.length
}

arreglo.push(obj1);

console.log(arreglo);