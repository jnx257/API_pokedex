const express = require('express')
const router = express.Router()
const GetPoke = require('./getPoke.json')
const bodyParser = require('body-parser')
const fs = require('fs')


router.use(bodyParser.json())
router.get('/',(req,res)=>{
    res.status(200).json(GetPoke)
})
router.get('/:id',(req,res)=>{
    const PokeId = parseInt(req.params.id)
    const pokemon = GetPoke.find(params => params.id == PokeId)
    if (!pokemon){
        res.status(400).send("this pokemon inst in first generation or doesnt exist...")
    }
    else {
        res.status(200).json(pokemon)
    }
})
router.post('/creatPokemon',(req,res)=>{
    const NewPokemon = req.body
    console.log(`new pokemon calls: ${NewPokemon.name}` )
 if  ( GetPoke.some(pokemon => pokemon.id === NewPokemon.id) ) {  
res.status(406).send("There is already a pokemon with this ")
}
else if (!NewPokemon.id || !NewPokemon.name || !NewPokemon.type || !NewPokemon.image ){
    console.log("Are missing the/those properties:", !NewPokemon.id ? "id" : !NewPokemon.name ? "name" : !NewPokemon.type ? "type" : "image")
    res.status(406).send("something is missing..")
}
else{
    GetPoke.push(NewPokemon)
    fs.writeFile('getPoke.json', JSON.stringify(GetPoke), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('Didnt creat new pokemon')
        } else {
            res.status(201).send('New pokemon created :D')
        }
    })
}
})
module.exports = router
