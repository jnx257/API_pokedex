const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const http = require("http");
const PORT = process.env.PORT || "8080"
const router = express.Router();
const pokemonRouter = require("./routers/pokemon");
const cors = require('cors')
const path = require('path')
app.use(cors())
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self' 'unsafe-inline'");
  next();
});
app.listen(PORT, () => {
  console.log(`using the PORT: ${PORT}`);
})
app.use(express.static(path.join(__dirname, 'src', 'pokedex_jnx')))
app.get('/', (req,res) => {
res.sendFile(path.join(htmlPath))
})
// app.get("/", (req, res) => {
//   res.status(200).send("jnx pokedex");  
//  });
app.use("/pokemons", pokemonRouter);
app.use(express.json());
