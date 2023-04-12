const express = require('express')
const router = express.Router()
const GetPoke = [
    {
      id: 1,
      name: "Bulbasaur",
      type: [
        "grass",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 2,
      name: "Ivysaur",
      type: [
        "grass",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 3,
      name: "Venusaur",
      type: [
        "grass",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 4,
      name: "Charmander",
      type: [
        "fire"
      ],
      image:"ainda nao"
      
    },
    {
      id: 5,
      name: "Charmeleon",
      price: 2.5,
      type: [
        "fire"
      ],
      image:"ainda nao"
      
    },
    {
      id: 6,
      name: "Charizard",
      price: 3,
      type: [
        "fire",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 7,
      name: "Squirtle",
      price: 2.5,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 8,
      name: "Wartortle",
      price: 1,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 9,
      name: "Blastoise",
      price: 2.5,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 10,
      name: "Caterpie",
      price: 3,
      type: [
        "bug"
      ],
      image:"ainda nao"
      
    },
    {
      id: 11,
      name: "Metapod",
      price: 3,
      type: [
        "bug"
      ],
      image:"ainda nao"
      
    },
    {
      id: 12,
      name: "Butterfree",
      price: 2.5,
      type: [
        "bug",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 13,
      name: "Weedle",
      price: 1,
      type: [
        "bug",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 14,
      name: "Kakuna",
      price: 3,
      type: [
        "bug",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 15,
      name: "Beedrill",
      price: 2.5,
      type: [
        "bug",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 16,
      name: "Pidgey",
      price: 1,
      type: [
        "normal",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 17,
      name: "Pidgeotto",
      price: 1,
      type: [
        "normal",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 18,
      name: "Pidgeot",
      price: 3,
      type: [
        "normal",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 19,
      name: "Rattata",
      price: 1,
      type: [
        "normal"
      ],
      image:"ainda nao"
      
    },
    {
      id: 20,
      name: "Raticate",
      price: 2.5,
      type: [
        "normal"
      ],
      image:"ainda nao"
      
    },
    {
      id: 21,
      name: "Spearow",
      price: 1,
      type: [
        "normal",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 22,
      name: "Fearow",
      price: 3,
      type: [
        "normal",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 23,
      name: "Ekans",
      price: 3,
      type: [
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 24,
      name: "Arbok",
      price: 2.5,
      type: [
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 25,
      name: "Pikachu",
      price: 10,
      type: [
        "electric"
      ],
      image:"ainda nao"
      
    },
    {
      id: 26,
      name: "Raichu",
      price: 3,
      type: [
        "electric"
      ],
      image:"ainda nao"
      
    },
    {
      id: 27,
      name: "Sandshrew",
      price: 1,
      type: [
        "ground"
      ],
      image:"ainda nao"
      
    },
    {
      id: 28,
      name: "Sandslash",
      price: 2.5,
      type: [
        "ground"
      ],
      image:"ainda nao"
      
    },
    {
      id: 29,
      name: "Nidoran♀",
      price: 7,
      type: [
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 30,
      name: "Nidorina",
      price: 9,
      type: [
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 31,
      name: "Nidoqueen",
      price: 8,
      type: [
        "poison",
        "ground"
      ],
      image:"ainda nao"
      
    },
    {
      id: 32,
      name: "Nidoran♂",
      price: 3,
      type: [
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 33,
      name: "Nidorino",
      price: 1,
      type: [
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 34,
      name: "Nidoking",
      price: 6,
      type: [
        "poison",
        "ground"
      ],
      image:"ainda nao"
      
    },
    {
      id: 35,
      name: "Clefairy",
      price: 3,
      type: [
        "fairy"
      ],
      image:"ainda nao"
      
    },
    {
      id: 36,
      name: "Clefable",
      price: 2.5,
      type: [
        "fairy"
      ],
      image:"ainda nao"
      
    },
    {
      id: 37,
      name: "Vulpix",
      price: 1,
      type: [
        "fire"
      ],
      image:"ainda nao"
      
    },
    {
      id: 38,
      name: "Ninetales",
      price: 3,
      type: [
        "fire"
      ],
      image:"ainda nao"
      
    },
    {
      id: 39,
      name: "Jigglypuff",
      price: 4,
      type: [
        "normal",
        "fairy"
      ],
      image:"ainda nao"
      
    },
    {
      id: 40,
      name: "Wigglytuff",
      price: 1,
      type: [
        "normal",
        "fairy"
      ],
      image:"ainda nao"
      
    },
    {
      id: 41,
      name: "Zubat",
      price: 3,
      type: [
        "poison",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 42,
      name: "Golbat",
      price: 1,
      type: [
        "poison",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 43,
      name: "Oddish",
      price: 2.5,
      type: [
        "poison",
        "grass"
      ],
      image:"ainda nao"
      
    },
    {
      id: 44,
      name: "Gloom",
      price: 5,
      type: [
        "poison",
        "grass"
      ],
      image:"ainda nao"
      
    },
    {
      id: 45,
      name: "Vileplume",
      price: 7,
      type: [
        "poison",
        "grass"
      ],
      image:"ainda nao"
      
    },
    {
      id: 46,
      name: "Paras",
      price: 1,
      type: [
        "bug",
        "grass"
      ],
      image:"ainda nao"
      
    },
    {
      id: 47,
      name: "Parasect",
      price: 1,
      type: [
        "bug",
        "grass"
      ],
      image:"ainda nao"
      
    },
    {
      id: 48,
      name: "Venonat",
      price: 3,
      type: [
        "bug",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 49,
      name: "Venomoth",
      price: 9,
      type: [
        "bug",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 50,
      name: "Diglett",
      price: 2.5,
      type: [
        "ground"
      ],
      image:"ainda nao"
      
    },
    {
      id: 51,
      name: "Dugtrio",
      price: 9,
      type: [
        "ground"
      ],
      image:"ainda nao"
      
    },
    {
      id: 52,
      name: "Meowth",
      price: 3,
      type: [
        "normal"
      ],
      image:"ainda nao"
      
    },
    {
      id: 53,
      name: "Persian",
      price: 1,
      type: [
        "normal"
      ],
      image:"ainda nao"
      
    },
    {
      id: 54,
      name: "Psyduck",
      price: 1,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 55,
      name: "Golduck",
      price: 1,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 56,
      name: "Mankey",
      price: 2.5,
      type: [
        "fighting"
      ],
      image:"ainda nao"
      
    },
    {
      id: 57,
      name: "Primeape",
      price: 1,
      type: [
        "fighting"
      ],
      image:"ainda nao"
      
    },
    {
      id: 58,
      name: "Growlithe",
      price: 1,
      type: [
        "fire"
      ],
      image:"ainda nao"
      
    },
    {
      id: 59,
      name: "Arcanine",
      price: 1,
      type: [
        "fire"
      ],
      image:"ainda nao"
      
    },
    {
      id: 60,
      name: "Poliwag",
      price: 1,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 61,
      name: "Poliwhirl",
      price: 1,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 62,
      name: "Poliwrath",
      price: 2.5,
      type: [
        "water",
        "fighting"
      ],
      image:"ainda nao"
      
    },
    {
      id: 63,
      name: "Abra",
      price: 1,
      type: [
        "psychic"
      ],
      image:"ainda nao"
      
    },
    {
      id: 64,
      name: "Kadabra",
      price: 1,
      type: [
        "psychic"
      ],
      image:"ainda nao"
      
    },
    {
      id: 65,
      name: "Alakazam",
      price: 1,
      type: [
        "psychic"
      ],
      image:"ainda nao"
      
    },
    {
      id: 66,
      name: "Machop",
      price: 1,
      type: [
        "fighting"
      ],
      image:"ainda nao"
      
    },
    {
      id: 67,
      name: "Machoke",
      price: 1,
      type: [
        "fighting"
      ],
      image:"ainda nao"
      
    },
    {
      id: 68,
      name: "Machamp",
      price: 2.5,
      type: [
        "fighting"
      ],
      image:"ainda nao"
      
    },
    {
      id: 69,
      name: "Bellsprout",
      price: 1,
      type: [
        "grass",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 70,
      name: "Weepinbell",
      price: 1,
      type: [
        "grass",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 71,
      name: "Victreebel",
      price: 1,
      type: [
        "grass",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 72,
      name: "Tentacool",
      price: 1,
      type: [
        "water",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 73,
      name: "Tentacruel",
      price: 2.5,
      type: [
        "water",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 74,
      name: "Geodude",
      price: 1,
      type: [
        "ground",
        "rock"
      ],
      image:"ainda nao"
      
    },
    {
      id: 75,
      name: "Graveler",
      type: [
        "ground",
        "rock"
      ],
      image:"ainda nao"
      
    },
    {
      id: 76,
      name: "Golem",
      price: 3,
      type: [
        "ground",
        "rock"
      ],
      image:"ainda nao"
      
    },
    {
      id: 77,
      name: "Ponyta",
      price: 3,
      type: [
        "fire"
      ],
      image:"ainda nao"
      
    },
    {
      id: 78,
      name: "Rapidash",
      price: 3,
      type: [
        "fire"
      ],
      image:"ainda nao"
      
    },
    {
      id: 79,
      name: "Slowpoke",
      price: 3,
      type: [
        "water",
        "psychic"
      ],
      image:"ainda nao"
      
    },
    {
      id: 80,
      name: "Slowbro",
      price: 1,
      type: [
        "water",
        "psychic"
      ],
      image:"ainda nao"
      
    },
    {
      id: 81,
      name: "Magnemite",
      price: 2.5,
      type: [
        "electric",
        "steel"
      ],
      image:"ainda nao"
      
    },
    {
      id: 82,
      name: "Magneton",
      price: 1,
      type: [
        "electric",
        "steel"
      ],
      image:"ainda nao"
      
    },
    {
      id: 83,
      name: "Farfetch'd",
      price: 3,
      type: [
        "normal",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 84,
      name: "Doduo",
      price: 3,
      type: [
        "normal",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 85,
      name: "Dodrio",
      price: 3,
      type: [
        "normal",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 86,
      name: "Seel",
      price: 1,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 87,
      name: "Dewgong",
      price: 2.5,
      type: [
        "water",
        "ice"
      ],
      image:"ainda nao"
      
    },
    {
      id: 88,
      name: "Grimer",
      type: [
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 89,
      name: "Muk",
      price: 1,
      type: [
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 90,
      name: "Shellder",
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 91,
      name: "Cloyster",
      type: [
        "water",
        "ice"
      ],
      image:"ainda nao"
      
    },
    {
      id: 92,
      name: "Gastly",
      price: 3,
      type: [
        "ghost",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 93,
      name: "Haunter",
      type: [
        "ghost",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 94,
      name: "Gengar",
      type: [
        "ghost",
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 95,
      name: "Onix",
      price: 2.5,
      type: [
        "rock",
        "ground"
      ],
      image:"ainda nao"
      
    },
    {
      id: 96,
      name: "Drowzee",
      price: 3,
      type: [
        "psychic"
      ],
      image:"ainda nao"
      
    },
    {
      id: 97,
      name: "Hypno",
      price: 2.5,
      type: [
        "psychic"
      ],
      image:"ainda nao"
      
    },
    {
      id: 98,
      name: "Krabby",
      price: 2.5,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 99,
      name: "Kingler",
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 100,
      name: "Voltorb",
      price: 2.5,
      type: [
        "electric"
      ],
      image:"ainda nao"
      
    },
    {
      id: 101,
      name: "Electrode",
      price: 3.5,
      type: [
        "electric"
      ],
      image:"ainda nao"
      
    },
    {
      id: 102,
      name: "Exeggcute",
      price: 3.5,
      type: [
        "grass",
        "psychic"
      ],
      image:"ainda nao"
      
    },
    {
      id: 103,
      name: "Exeggutor",
      type: [
        "grass",
        "psychic"
      ],
      image:"ainda nao"
      
    },
    {
      id: 104,
      name: "Cubone",
      type: [
        "ground"
      ],
      image:"ainda nao"
      
    },
    {
      id: 105,
      name: "Marowak",
      price: 2.5,
      type: [
        "ground"
      ],
      image:"ainda nao"
      
    },
    {
      id: 106,
      name: "Hitmonlee",
      price: 3,
      type: [
        "fighting"
      ],
      image:"ainda nao"
      
    },
    {
      id: 107,
      name: "Hitmonchan",
      price: 2.5,
      type: [
        "fighting"
      ],
      image:"ainda nao"
      
    },
    {
      id: 108,
      name: "Lickitung",
      price: 1,
      type: [
        "normal"
      ],
      image:"ainda nao"
      
    },
    {
      id: 109,
      name: "Koffing",
      price: 2.5,
      type: [
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 110,
      name: "Weezing",
      price: 3,
      type: [
        "poison"
      ],
      image:"ainda nao"
      
    },
    {
      id: 111,
      name: "Rhyhorn",
      price: 3,
      type: [
        "ground",
        "rock"
      ],
      image:"ainda nao"
      
    },
    {
      id: 112,
      name: "Rhydon",
      price: 2.5,
      type: [
        "ground",
        "rock"
      ],
      image:"ainda nao"
      
    },
    {
      id: 113,
      name: "Chansey",
      price: 1,
      type: [
        "normal"
      ],
      image:"ainda nao"
      
    },
    {
      id: 114,
      name: "Tangela",
      price: 3,
      type: [
        "grass"
      ],
      image:"ainda nao"
      
    },
    {
      id: 115,
      name: "Kangaskhan",
      price: 2.5,
      type: [
        "normal"
      ],
      image:"ainda nao"
      
    },
    {
      id: 116,
      name: "Horsea",
      price: 1,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 117,
      name: "Seadra",
      price: 1,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 118,
      name: "Goldeen",
      price: 3,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 119,
      name: "Seaking",
      price: 1,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 120,
      name: "Staryu",
      price: 2.5,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 121,
      name: "Starmie",
      price: 1,
      type: [
        "water",
        "psychic"
      ],
      image:"ainda nao"
      
    },
    {
      id: 122,
      name: "Mr. Mime",
      price: 3,
      type: [
        "psychic",
        "fairy"
      ],
      image:"ainda nao"
      
    },
    {
      id: 123,
      name: "Scyther",
      price: 3,
      type: [
        "bug",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 124,
      name: "Jynx",
      price: 2.5,
      type: [
        "ice",
        "psychic"
      ],
      image:"ainda nao"
      
    },
    {
      id: 125,
      name: "Electabuzz",
      price: 5,
      type: [
        "electric"
      ],
      image:"ainda nao"
      
    },
    {
      id: 126,
      name: "Magmar",
      price: 3,
      type: [
        "fire"
      ],
      image:"ainda nao"
      
    },
    {
      id: 127,
      name: "Pinsir",
      price: 1,
      type: [
        "bug"
      ],
      image:"ainda nao"
      
    },
    {
      id: 128,
      name: "Tauros",
      price: 2.5,
      type: [
        "normal"
      ],
      image:"ainda nao"
      
    },
    {
      id: 129,
      name: "Magikarp",
      price: 7,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 130,
      name: "Gyarados",
      price: 9,
      type: [
        "water",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 131,
      name: "Lapras",
      price: 8,
      type: [
        "water",
        "ice"
      ],
      image:"ainda nao"
      
    },
    {
      id: 132,
      name: "Ditto",
      price: 3,
      type: [
        "normal"
      ],
      image:"ainda nao"
      
    },
    {
      id: 133,
      name: "Eevee",
      price: 1,
      type: [
        "normal"
      ],
      image:"ainda nao"
      
    },
    {
      id: 134,
      name: "Vaporeon",
      price: 6,
      type: [
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 135,
      name: "Jolteon",
      price: 3,
      type: [
        "electric"
      ],
      image:"ainda nao"
      
    },
    {
      id: 136,
      name: "Flareon",
      price: 2.5,
      type: [
        "fire"
      ],
      image:"ainda nao"
      
    },
    {
      id: 137,
      name: "Porygon",
      price: 1,
      type: [
        "normal"
      ],
      image:"ainda nao"
      
    },
    {
      id: 138,
      name: "Omanyte",
      price: 3,
      type: [
        "rock",
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 139,
      name: "Omastar",
      price: 4,
      type: [
        "rock",
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 140,
      name: "Kabuto",
      price: 1,
      type: [
        "rock",
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 141,
      name: "Kabutops",
      price: 3,
      type: [
        "rock",
        "water"
      ],
      image:"ainda nao"
      
    },
    {
      id: 142,
      name: "Aerodactyl",
      price: 1,
      type: [
        "rock",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 143,
      name: "Snorlax",
      price: 2.5,
      type: [
        "normal"
      ],
      image:"ainda nao"
      
    },
    {
      id: 144,
      name: "Articuno",
      price: 5,
      type: [
        "ice",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 145,
      name: "Zapdos",
      price: 7,
      type: [
        "electric",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 146,
      name: "Moltres",
      price: 1,
      type: [
        "fire",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 147,
      name: "Dratini",
      price: 1,
      type: [
        "dragon"
      ],
      image:"ainda nao"
      
    },
    {
      id: 148,
      name: "Dragonair",
      price: 3,
      type: [
        "dragon"
      ],
      image:"ainda nao"
      
    },
    {
      id: 149,
      name: "Dragonite",
      price: 9,
      type: [
        "dragon",
        "flying"
      ],
      image:"ainda nao"
      
    },
    {
      id: 150,
      name: "Mewtwo",
      price: 2.5,
      type: [
        "psychic"
      ],
      image:"ainda nao"
      
    },
    {
      id: 151,
      name: "Mew",
      price: 9,
      type: [
        "psychic"
      ],
      image:"ainda nao"
    }
  ]

router.get('/',(req,res)=>{
    res.status(200).json(GetPoke)
})
router.get('/:id',(req,res)=>{
    const PokeId = parseInt(req.params.id)
    const pokemon = GetPoke.find(params => params.id == PokeId)
    if (!pokemon){
        res.status(404).send("nao tem esse pokemon na primeira geracao, ou ele nao existe...")
    }
    else {
        res.status(200).json(pokemon)
    }
})



module.exports = router
