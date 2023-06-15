const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const PORT = process.env.PORT || "8080";
const router = express.Router();
const pokemonRouter = require("./routers/pokemon");
const cors = require("cors");
const path = require("path");
app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
  console.log(`using the PORT: ${PORT}`);
});

app.use(express.static(path.join(__dirname, "src", "pokeImages")));
app.use(express.static(path.join(__dirname, "src", "pokedex_jnx")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "pokedex_jnx", "index.html").send);
});
app.use("/pokemons", pokemonRouter);
