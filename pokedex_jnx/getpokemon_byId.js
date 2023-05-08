function getPokeById (){
    fetch ('localhost:5000/pokemons/:id')
    .then(response => response.json())
    .then(PokemonData => {

    })
}