const express = require('express')
const router = express.Router()
const GetPoke = require('/home/jnx/Desktop/Studies/API_pokemon/routers/getPoke.json')
const bodyParser = require('body-parser')
const PokeId = parseInt(req.params.id)
const pokemon = GetPoke.find(params => params.id == PokeId)

router.get('/',(req,res)=>{
    res.status(200).json(GetPoke)
})
router.get('/:id',(req,res)=>{
    if (!pokemon){
        res.status(404).send("nao tem esse pokemon na primeira geracao, ou ele nao existe...")
    }
    else {
        res.status(200).json(pokemon)
    }
})



module.exports = router
