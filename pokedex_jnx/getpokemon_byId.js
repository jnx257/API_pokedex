// get the pokemon by Id, just showing one pokemon deetails
let pokemonName = "";
function getPokeById() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  fetch(`http://localhost:5000/pokemons/${id}`)
    .then((response) => response.json())
    .then((pokemonData) => {
      const pokemonDataById = document.querySelector("#pokemonData");
      pokemonDataById.innerHTML = "";
      const line = document.createElement("div");
      const pokemonImg = document.createElement("img");
      pokemonImg.src = pokemonData.image;
      pokemonImg.alt = pokemonData.name;
      const pokeName = document.createElement("h2");
      pokemonName = pokemonData.name;
      pokeName.textContent = `Name: ${pokemonData.name}`;
      const pokeId = document.createElement("h2");
      pokeId.textContent = `Id: #${pokemonData.id}`;
      const pokeType = document.createElement("h2");
      pokeType.textContent = pokemonData.type;
      pokemonTypes = pokemonData.type;
      line.classList.add("pokemon");
      line.appendChild(pokemonImg);
      line.appendChild(pokeName);
      line.appendChild(pokeId);
      line.appendChild(pokeType);
      pokemonDataById.appendChild(line);
      const editButton = document.createElement("button");
      editButton.textContent = "Edit Pokemon";
      line.appendChild(editButton);
      editButton.addEventListener("click", pokePUTbutton);
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

function pokePUTbutton(event) {
  //calling event.preventDefault i'm passing that I don't want to execute it as a normal method (dont send nothing until I want it)
  //normal events this would made a immediately PUT
  event.preventDefault();
  const pokemonPut = document.createElement("form");
  pokemonPut.classList.add("pokemonPUT");
  pokemonPut.innerHTML = `
    <div class="pokePopUp">
      <h3 style="text-align:center">Change Pokemon</h3>
      <label for="pokemonName">Pokemon name:</label>
      <input type="text" id="pokemonNamePUT" value= "${pokemonName}">
      <br>
      <label for="pokemonImg">Insert pokemon image:</label>
      <input type="file" id="pokemonImgPUT" value="nothing selected">
      <br>
      <label for ="pokemonType">Pokemon Type:</label>
      <br>
      <input type = "checkbox" id="pokemonTypes" value="Normal"
      <label for="pokemonType">Normal</label>
      <input type = "checkbox" id="pokemonTypes" value="Fire"
      <label for="pokemonType">Fire</label>
      <input type = "checkbox" id="pokemonTypes" value="Water"
      <label for="pokemonType">Water</label>
      <input type = "checkbox" id="pokemonTypes" value="Grass"
      <label for="pokemonType">Grass</label>
      <input type = "checkbox" id="pokemonTypes" value="Flying"
      <label for="pokemonType">Flying</label>
      <br>
      <input type = "checkbox" id="pokemonTypes" value="Bug"
      <label for="pokemonType">Bug</label>
      <input type = "checkbox" id="pokemonTypes" value="Ground"
      <label for="pokemonType">Ground</label>
      <input type = "checkbox" id="pokemonTypes" value="Ice"
      <label for="pokemonType">Ice</label>
      <input type = "checkbox" id="pokemonTypes" value="Eletric"
      <label for="pokemonType">Eletric</label>
      <input type = "checkbox" id="pokemonTypes" value="Rock"
      <label for="pokemonType">Rock</label>
      <br>
      <input type = "checkbox" id="pokemonTypes" value="Poison"
      <label for="pokemonType">Poison</label>
      <input type = "checkbox" id="pokemonTypes" value="Psichic"
      <label for="pokemonType">Psichic</label>
      <input type = "checkbox" id="pokemonTypes" value="Ghost"
      <label for="pokemonType"Ghost"</label>
      <input type = "checkbox" id="pokemonTypes" value="Dragon"
      <label for="pokemonType">Dragon</label>
      <input type = "checkbox" id="pokemonTypes" value="Fighting"
      <label for="pokemonType">Fighting</label>
      <br>
      <button id="submitButton">Submit</button>
      <button id="closePopupButton"> X </button>
    </div>
  `;
  pokemonPut.addEventListener('submit', function(event) {
    event.preventDefault() })
  const closePopUp = pokemonPut.querySelector('#closePopupButton');
  closePopUp.addEventListener('click', function() {
    pokemonPut.style.display = 'none';
  })
  // const editPokemon = pokemonPut.querySelector('submitButton')
  // editPokemon.addEventListener('click', function (){
    
  // })
  document.body.appendChild(pokemonPut);
} 