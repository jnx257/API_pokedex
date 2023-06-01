
function createPokeButton() {
    const pokemonCreate = document.createElement("form")
    pokemonCreate.classList.add("pokemonCreate")
    pokemonCreate.setAttribute('enctype', "multipart/form-data")
    pokemonCreate.innerHTML = `
      <div class="pokePopUp">
        <h3 style="text-align:center">Create Pokemon</h3>
        <label for="pokemonName">Pokemon name:</label>
        <input type="text" id="pokemonNamePOST" value="Insert Pokemon Name">
        <br>
        <label for="pokemonImg">Insert pokemon image:</label>
        <input type="file" id="pokemonImgPOST" value="nothing selected">
        <br>
        <label for="pokemonType">Pokemon Type:</label>
        <br>
        <input type="checkbox" id="pokemonTypes" value="Normal">
        <label for="pokemonType">Normal</label>
        <input type="checkbox" id="pokemonTypes" value="Fire">
        <label for="pokemonType">Fire</label>
        <input type="checkbox" id="pokemonTypes" value="Water">
        <label for="pokemonType">Water</label>
        <input type="checkbox" id="pokemonTypes" value="Grass">
        <label for="pokemonType">Grass</label>
        <input type="checkbox" id="pokemonTypes" value="Flying">
        <label for="pokemonType">Flying</label>
        <br>
        <input type="checkbox" id="pokemonTypes" value="Bug">
        <label for="pokemonType">Bug</label>
        <input type="checkbox" id="pokemonTypes" value="Ground">
        <label for="pokemonType">Ground</label>
        <input type="checkbox" id="pokemonTypes" value="Ice">
        <label for="pokemonType">Ice</label>
        <input type="checkbox" id="pokemonTypes" value="Eletric">
        <label for="pokemonType">Eletric</label>
        <input type="checkbox" id="pokemonTypes" value="Rock">
        <label for="pokemonType">Rock</label>
        <br>
        <input type="checkbox" id="pokemonTypes" value="Poison">
        <label for="pokemonType">Poison</label>
        <input type="checkbox" id="pokemonTypes" value="Psichic">
        <label for="pokemonType">Psichic</label>
        <input type="checkbox" id="pokemonTypes" value="Ghost">
        <label for="pokemonType">Ghost</label>
        <input type="checkbox" id="pokemonTypes" value="Dragon">
        <label for="pokemonType">Dragon</label>
        <input type="checkbox" id="pokemonTypes" value="Fighting">
        <label for="pokemonType">Fighting</label>
        <br>
        <button id="submitButton">Submit</button>
        <button id="closePopupButton"> X </button>
      </div>
    `;
    pokemonCreate.addEventListener('submit', function(event) {
        event.preventDefault() })
    const closePopUp = pokemonCreate.querySelector('#closePopupButton');
        closePopUp.addEventListener('click', function() {
          pokemonCreate.style.display = 'none'
        })
    const create = pokemonCreate.querySelector("#submitButton")
    create.addEventListener('click', function (event){
        event.preventDefault()
    const newPokemonName = document.getElementById('pokemonNamePOST').value
    const newPokemonImg = document.getElementById("pokemonImgPOST").files[0]
    const newPokemonTypes = Array.from(
        document.querySelectorAll('#pokemonTypes:checked')
      ).map((checkbox) => checkbox.value)
    const formData = new FormData()
    formData.append('name', newPokemonName)
    formData.append('image', newPokemonImg)
    formData.append('type', newPokemonTypes)

    fetch('http://localhost:5000/pokemons', {
        method: "POST",
        body: formData
    })
    .then((response) => {
    if(response.ok){
        console.log(response)
        location.reload(true)
    }
    else {
        console.log("Was not possible to create the pokemon")
    }
})
.catch((error) => console.log(error))

})
document.body.appendChild(pokemonCreate)}
  const createButton = document.getElementById('createButton')
  createButton.addEventListener('click', createPokeButton)