const express = require("express");
const router = express.Router();
const GetPoke = require("./getPoke.json");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const storageImg = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/pokeImages");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploadImg = multer({ storage: storageImg });
let lastObj = GetPoke[GetPoke.length - 1];
let lastID = lastObj.id;
const idSequel = (sequel) => {
  return (lastID += 1);
};
router.use(cors());
router.use(bodyParser.json());

//return my JSON (database)
router.get("/", (req, res) => {
  console.log(__dirname);
  res.status(200).json(GetPoke);
});

//return individual pokemon Data as a list
router.get("/:id", (req, res) => {
  const PokeId = req.params.id;
  const pokemon = GetPoke.find((params) => params.id == PokeId);
  if (!pokemon) {
    res
      .status(404)
      .send("This pokemon is not in first generation or does not exist...");
  } else {
    res.status(200).json(pokemon);
  }
});

//add a new pokemon to JSON and Upload a IMG to PokeImg folder
router.post("/createPokemon", uploadImg.single("image"), (req, res) => {
  const NewPokemon = req.body;
  const NewpokemonImg = req.file;
  const pokeImgPath = NewpokemonImg.path;
  console.log(`new pokemon calls: ${NewPokemon.name}`);

  if (!NewPokemon.name || !NewPokemon.type || !NewpokemonImg) {
    console.log(
      "Are missing the/those properties:",
      !NewPokemon.name ? "name" : !NewPokemon.type ? "type" : "image"
    );
    res.status(406).send("something is missing..");
  } else {
    const newId = idSequel();
    NewPokemon.id = newId;
    Object.assign(NewPokemon, {
      image: pokeImgPath.substring(3, pokeImgPath.length),
    });
    GetPoke.push(NewPokemon);
    fs.writeFile("getPoke.json", JSON.stringify(GetPoke), (err) => {
      if (err) {
        console.error(err);
        res.status(500).send("Did not create new pokemon");
      } else {
        res.status(201).send("New pokemon created");
        console.log(pokeImgPath);
      }
    });
  }
});
//Alter pokemon stats as: name, type or image
router.put("/:id", uploadImg.single("image"), (req, res) => {
  const PokeId = req.params.id;
  const pokemon = GetPoke.find((params) => params.id == PokeId);
  if (!pokemon) {
    res.status(404).send("Pokemon Not Found!");
  } else {
    const AlterPokemonStats = req.body;
    const AlterPokemonImg = req.file;
    const imagePath = AlterPokemonImg.path.substring(3, AlterPokemonImg.length);
    Object.assign(pokemon, AlterPokemonStats, { image: imagePath });
    fs.writeFile("routers/getPoke.json", JSON.stringify(GetPoke), (err) => {
      if (err) {
        console.log(err);
        res.status(500).send("nothing add");
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

//Delete a pokemon
router.delete("/:id", (req, res) => {
  const PokeId = req.params.id;
  const pokemonIndex = GetPoke.findIndex((params) => params.id == PokeId);
  if (pokemonIndex == -1) {
    res.status(404).send("Pokemon Not Found");
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
