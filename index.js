const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const http = require("http");
const PORT = process.env.PORT || "8080"
const router = express.Router();
const pokemonRouter = require("./routers/pokemon");
const cors = require('cors')
app.use(cors())
app.use('/pokeImages', express.static('images'));


app.listen(PORT, () => {
  console.log(`using the PORT: ${PORT}`);
});

//pokedex
app.get("/", (req, res) => {
  res.status(200).send("jnx pokedex");
});
app.use("/pokemons", pokemonRouter);
app.use(express.json());