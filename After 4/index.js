let contenedor = document.getElementById("contenedor");

const getCharacters = async () => {
  // let response = await fetch("https://rickandmortyapi.com/api/character");
  // let data = await response.json();
  // let personajes = data.results;
  try {
    let response = await axios("https://rickandmortyapi.com/api/character");
    let personajes = response.data.results;

    personajes.forEach((item) => {
      const div = document.createElement("div");

      div.innerHTML = `
      <h1>${item.name}</h1>
      <p>${item.status}</p>
      <p>${item.gender}</p>
      <img src="${item.image}">
      <hr/>
    `;

      contenedor.append(div);
    });
  } catch (error) {
    console.log(error);
  }
};

getCharacters();
