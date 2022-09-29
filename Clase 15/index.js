/* 
fetch(url, config);
*/

/* fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(data => {
  let listado = document.getElementById("listado");
  data.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = `
      <h1>Titulo: ${item.title}</h1>
      <h2>ID: ${item.id}</h2>
      <p>${item.body}</p>
      <b>ID USER: ${item.userId}</b>
    `;
    listado.append(li);
  });
}) */

/* fetch("https://jsonplaceholder.typicode.com/posts", {
  method: 'POST',
  body: JSON.stringify({
    title: "Prueba",
    body: "probando la peticion",
    userId: 1
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => response.json())
.then(data => console.log(data)) */

/* fetch("./data.json")
.then(response => response.json())
.then(data => {
  data.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = `
      <h1>${item.nombre}</h1>
      <h2>ID: ${item.id}</h2>
      <b>$${item.precio}</b>
    `;
    listado.append(li);
  });
}) */

const traerDatos = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await respuesta.json();
  let listado = document.getElementById("listado");
  data.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = `
      <h1>Titulo: ${item.title}</h1>
      <h2>ID: ${item.id}</h2>
      <p>${item.body}</p>
      <b>ID USER: ${item.userId}</b>
    `;
    listado.append(li);
  });
};

traerDatos();