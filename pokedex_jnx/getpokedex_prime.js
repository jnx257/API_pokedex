function getPoke() {
    fetch('http://localhost:5000/pokemons')
      .then(response => response.json())
      .then(data => {
        const dataList = document.querySelector('#pokemon-list listbody')
        dataList.innerHTML = ''
        data.forEach(element => {
          const row = document.createElement('li')
          const nameElement = document.createElement('li')
          nameElement.textContent = `name: ${element.name}`
          const idElement = document.createElement('li')
          idElement.textContent = `Id: #${element.id}`
          const typeElement = document.createElement('li')
          typeElement.textContent = `types: ${element.type}`
          const imageElement = document.createElement('li')
          const image = document.createElement('img')
          image.src = element.image
          image.alt = element.name
          imageElement.appendChild(image)
          row.appendChild(nameElement)
          row.appendChild(idElement)
          row.appendChild(typeElement)
          row.appendChild(imageElement)
          dataList.appendChild(row)
        })
      })
      .catch(error => console.log(error))
  }
  getPoke()