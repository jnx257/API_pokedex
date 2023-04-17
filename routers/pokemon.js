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
        res.status(400).send("nao tem esse pokemon na primeira geracao, ou ele nao existe...")
    }
    else {
        res.status(200).json(pokemon)
    }
})
router.post('/criarPokemon',(req,res)=>{
    const NewPokemon = req.body
    console.log(`novo pokemon se chama: ${NewPokemon.name}` )
 if  ( GetPoke.some(pokemon => pokemon.id === NewPokemon.id) ) {  
res.status(406).send("Um pokemon com esse ID ja existe")
}
else if (!NewPokemon.id || !NewPokemon.name || !NewPokemon.type || !NewPokemon.image ){
    console.log("Esta faltando a/as propriedades:", !NewPokemon.id ? "id" : !NewPokemon.name ? "name" : !NewPokemon.type ? "type" : "image")
    res.status(406).send("tem uma ou mais caracteristicas faltando..")
}
else{
    GetPoke.push(NewPokemon)
    fs.writeFile('getPoke.json', JSON.stringify(GetPoke), (err) => {
        if (err) {
            console.error(err)
            res.status(500).send('Nao criou um novo pokemon')
        } else {
            res.status(201).send('Novo pokemon adicionado :D')
        }
    })
}
})
module.exports = router
