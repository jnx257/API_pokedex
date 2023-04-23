const express = require('express')
const router = express.Router()
const GetPoke = require('./getPoke.json')
const bodyParser = require('body-parser')
const fs = require('fs')
let lastObj = GetPoke[GetPoke.length-1]
let lastID = lastObj.id
const idSequel = sequel => {
return lastID += 1
}

router.use(bodyParser.json())
router.get('/',(req,res)=>{
    res.status(200).json(GetPoke)
})
router.get('/:id',(req,res)=>{
    const PokeId = req.params.id
    const pokemon = GetPoke.find(params => params.id == PokeId)
    if (!pokemon){
        res.status(404).send("this pokemon inst in first generation or doesnt exist...")
    }
    else {
        res.status(200).json(pokemon)
    }
})
router.post('/creatPokemon',(req,res)=>{
    const NewPokemon = req.body
    console.log(`new pokemon calls: ${NewPokemon.name}` )

    if (!NewPokemon.name || !NewPokemon.type || !NewPokemon.image ){
    console.log("Are missing the/those properties:", !NewPokemon.id ? "id" : !NewPokemon.name ? "name" : !NewPokemon.type ? "type" : "image")
    res.status(406).send("something is missing..")
}
else {
    const newId = idSequel()
    NewPokemon.id = newId
    GetPoke.push(NewPokemon)
    fs.writeFile('routers/getPoke.json', JSON.stringify(GetPoke), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('Didnt creat new pokemon')
        } else {
            res.status(201).send('New pokemon created :D')
        }
    })
}
})
router.put('/:id',(req,res) => {
    
const PokeId = req.params.id
const pokemon = GetPoke.find(params => params.id == PokeId)
if(!pokemon){
    res.status(404).send("Pokemon Not Found!")
}
else{
const AlterPokemonStats = req.body
Object.assign(pokemon, AlterPokemonStats)
fs.writeFile('routers/getPoke.json', JSON.stringify(GetPoke), (err) => {
    if(err){
        console.log(err)
        res.status(500).send('didnt add nothing to pokemon')
    }
    else{
        res.status(202).send(`update ${JSON.stringify(pokemon.name)} with ${JSON.stringify(AlterPokemonStats)}`)
    }
})
}})

//DELETING A POKEMON
router.delete('/:id',(req,res)=> {
const PokeId = req.params.id
const pokemonIndex = GetPoke.findIndex(params => params.id == PokeId)
if(pokemonIndex == -1  ){
    res.status(404).send("Pokemon Not Found!")
}
else {
GetPoke.splice(pokemonIndex,1)
fs.writeFile('routers/getPoke.json', JSON.stringify(GetPoke),(err) => {
    if(err){
        console.log(err)
        res.status(500).send(`was not possible to delete pokemon with id: ${PokeId}`)
    }
    else{
        res.status(202).send(`deleted pokemon with id:${PokeId}`)
    }
})
}
})

module.exports = router