const express = require('express')
const app = express()
const bodyParser = require('body-parser') 
const http = require ('http')
const PORT = 4000
const router = express.Router()
const pokemonRouter = require('./routers/pokemon')



app.listen(PORT, () => {
    console.log(`Servidor usando a porta ${PORT}`)
})

//pokedex
app.get('/', (req,res)=> {
    res.status(200).send("Pagina principal da pokedex :D")
})
app.use('/pokemons', pokemonRouter)


