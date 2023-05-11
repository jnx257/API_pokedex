// get the pokemon by Id, just showing one pokemon deetails
function getPokeById() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  fetch(`http://localhost:5000/pokemons/${id}`)
    .then((response) => response.json())
    .then((pokemonData) => {
      const pokemonDataById = document.querySelector("#pokemonData");
      pokemonDataById.innerHTML = ""; // clear any previous data
      const line = document.createElement("div");
      const pokemonImg = document.createElement("img");
      pokemonImg.src = pokemonData.image;
      pokemonImg.alt = pokemonData.name;
      const pokeName = document.createElement("h2");
      pokeName.textContent = `Name: ${pokemonData.name}`;
      const pokeId = document.createElement("h2");
      pokeId.textContent = `Id: #${pokemonData.id}`;
      const pokeType = document.createElement("h2");
      pokeType.textContent = pokemonData.type;
      line.classList.add("pokemon");
      line.appendChild(pokemonImg);
      line.appendChild(pokeName);
      line.appendChild(pokeId);
      line.appendChild(pokeType);
      pokemonDataById.appendChild(line);
      const editButton = document.createElement("button");
      editButton.textContent = "Edit Pokemon";
      line.appendChild(editButton);
      const delButton = document.createElement("button");
      delButton.textContent = "Delete Pokemon";
      delButton.href = `Idpokemon.html?id=${id}`;
      line.appendChild(delButton);
      delButton.addEventListener("click", DelPoke);
    })
    .catch((error) => console.log(error));
}

getPokeById();

// delete method js
function DelPoke() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  fetch(`http://localhost:5000/pokemons/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log("Pokemon has been deleted");
      } else {
        console.log("Was not possible to delete the pokemon");
      }
    })
    .catch((error) => console.log(error));
}
