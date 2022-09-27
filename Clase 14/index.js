/* 
setTimeout(funcion, tiempo)
*/
/* console.log("inicio");

setTimeout(() => {
  console.log("intermedio");
}, 3000);

console.log("final"); */

/* let boton = document.getElementById("boton");
let mensaje = document.getElementById("mensaje");

boton.addEventListener("click", () => {
  mensaje.classList.add("color");

  setTimeout(() => {
    mensaje.classList.remove("color");
  }, 3000);
}); */

/* for (let letra of "hola") {
  setTimeout(() => {
      console.log(letra)
  }, 1000)
}

for (let letra of "mundo") {
  setTimeout(() => {
      console.log(letra)
  }, 3000)
} */

/* console.log("inicio");

setTimeout(() => {
  console.log("intermedio");
}, 0);

console.log("final"); */

/* 
setInterval(funcion, tiempo);
*/

/* setInterval(() => {
  console.log("hola");
}, 2000); */

/* let counter = 0;

const interval = setInterval(() => {
  counter++;
  console.log("Counter: ", counter);

  if (counter >= 5) {
    clearInterval(interval);
    console.log("Se removió el intervalo");
  }
}, 1000); */

//PROMESAS
/* new Promise((resolve, reject) => {
  //cuerpo de la promesa
}) */

// const eventoFuturo = (valor) => {
//   return new Promise((resolve, reject) => {
//     // if (valor) {
//     //   resolve("Promesa resuelta");
//     // } else {
//     //   reject("Promesa rechazada");
//     // }

//     valor ? resolve("Promesa resuelta") : reject("Promesa rechazada");
//   });
// };

// console.log(eventoFuturo(false));

/* const eventoFuturo = (valor) => {
  return new Promise((resolve, reject) => {
    valor ? resolve("Promesa resuelta") : reject("Promesa rechazada");
  });
};

eventoFuturo(true)
.then((response) => {
  console.log("then", response);
  console.log("hola");
})
.catch((error) => {
  console.log("catch", error);
})
.finally(() => {
  console.log("proceso terminado");
}); */

const productos = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "pantalon", precio: 700 },
  { id: 3, nombre: "gorra", precio: 800 },
  { id: 4, nombre: "zapato", precio: 600 },
];

const traerDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  });
};

traerDatos()
.then(response => {
  response.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>ID: ${item.id}</h2>
      <p>Nombre: ${item.nombre}</p>
      <b>$${item.precio}</b>
    `;

    document.body.append(div);
  });
})
.catch(error => console.log(error));