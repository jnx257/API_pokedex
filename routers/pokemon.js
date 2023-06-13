const express = require("express");
const router = express.Router();
const GetPoke = require("./getPoke.json");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require('multer')
const path = require ('path')
const cors = require('cors')
const storageImg = multer.diskStorage({
  destination: function (req,file,cb) {
    cb(null,'./src/pokeImages')
  },
  filename: function (req,file,cb) {
    cb(null, Date.now()+ path.extname(file.originalname))
  }
})
const uploadImg = multer({storage: storageImg})
let lastObj = GetPoke[GetPoke.length - 1];
let lastID = lastObj.id;
const idSequel = (sequel) => {
  return (lastID += 1);
};
router.use(cors())
router.use(bodyParser.json());
//this get method, response all pokemon thta contain in JSON file.
router.get("/", (req, res) => {
  console.log(__dirname)
  res.status(200).json(GetPoke);
});
//this get method, response each pokemon array, using by Id.
router.get("/:id", (req, res) => {
  const PokeId = req.params.id;
  const pokemon = GetPoke.find((params) => params.id == PokeId);
  if (!pokemon) {
    res
      .status(404)
      .send("this pokemon inst in first generation or doesnt exist...");
  } else {
    res.status(200).json(pokemon);
  }
});
//this POST method, you can creat pokemon that you want
router.post("/", uploadImg.single('image'), (req, res) => {
  const NewPokemon = req.body;
  const NewpokemonImg = req.file
  const pokeImgPath = NewpokemonImg.path
  console.log(`new pokemon calls: ${NewPokemon.name}`);

  if (!NewPokemon.name || !NewPokemon.type || !NewpokemonImg) {
    console.log(
      "Are missing the/those properties:",
       !NewPokemon.name
        ? "name"
        : !NewPokemon.type
        ? "type"
        : "image"
    );
    res.status(406).send("something is missing.."); 
  } else {
    const newId = idSequel(); 
    NewPokemon.id = newId;
    Object.assign( NewPokemon, {image:pokeImgPath});
    GetPoke.push(NewPokemon);
    fs.writeFile("getPoke.json", JSON.stringify(GetPoke), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Didnt creat new pokemon");
      } else {
        res.status(201).send("New pokemon created :D");
      }
    });
  }
});
router.put("/:id",uploadImg.single('image'), (req, res) => {
  const PokeId = req.params.id;
  const pokemon = GetPoke.find((params) => params.id == PokeId);
  if (!pokemon) {
    res.status(404).send("Pokemon Not Found!");
  } 
  else {
    const AlterPokemonStats = req.body;
    const AlterPokemonImg =  req.file;
    const imagePath = `/${AlterPokemonImg.path}`
    Object.assign(pokemon, AlterPokemonStats , {image: imagePath});
    fs.writeFile("routers/getPoke.json", JSON.stringify(GetPoke), (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("didnt add nothing to pokemon");
      } else {
        res
          .status(202)
          .send(
            `update ${JSON.stringify(pokemon.name)} with ${JSON.stringify(
              AlterPokemonStats
            )}`
          );
      }
    });
  }
});

//DELETING A POKEMON
router.delete("/:id", (req, res) => {
  const PokeId = req.params.id;
  const pokemonIndex = GetPoke.findIndex((params) => params.id == PokeId);
  if (pokemonIndex == -1) {
    res.status(404).send("Pokemon Not Found!");
  } else {
    GetPoke.splice(pokemonIndex, 1);
    fs.writeFile("routers/getPoke.json", JSON.stringify(GetPoke), (err) => {
      if (err) {
        console.log(err);
        res
          .status(500)
          .send(`was not possible to delete pokemon with id: ${PokeId}`);
      } else {
        res.status(202).send(`deleted pokemon with id:${PokeId}`);
      }
    });
  }
});

module.exports = router;
