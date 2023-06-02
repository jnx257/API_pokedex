function getPoke() {
  fetch("http://localhost:8080/pokemons")
    .then((response) => response.json())
    .then((data) => {
      const dataList = document.querySelector("#pokemon-list listbody")
      dataList.innerHTML = "";
      const search = document.querySelector("#searchBar").value.toLowerCase()
      data.forEach((element) => {
        const Pokename = element.name.toLowerCase()
        if (Pokename.includes(search)){
        const row = document.createElement("li");
        const nameElement = document.createElement("li");
        nameElement.textContent = `name: ${element.name}`;
        const idElement = document.createElement("li");
        idElement.textContent = `Id: #${element.id}`;
        const typeElement = document.createElement("li");
        typeElement.textContent = `types: ${element.type}`;
        const imageElement = document.createElement("li");
        const imageLink = document.createElement("a");
        imageLink.href = `Idpokemon.html?id=${element.id}`;
        const image = document.createElement("img");
        image.src = element.image;
        image.alt = element.name;
        imageLink.appendChild(image);
        imageElement.appendChild(imageLink);
        row.classList.add("pokemon");
        row.appendChild(nameElement);
        row.appendChild(idElement);
        row.appendChild(typeElement);
        row.appendChild(imageElement);
        dataList.appendChild(row);
        }
      });
    })
    .catch((error) => console.log(error));
}
const search = document.querySelector("#searchBar")
search.addEventListener("input", getPoke)

getPoke();
