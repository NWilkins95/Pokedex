// Gen 1 Pokemon Data (1-25)
const gen1PokemonData = [
  {
    pokedex_number: 1,
    name: "Bulbasaur",
    type: ["Grass", "Poison"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Ivysaur",
      evolution_level: 16
    },
    abilities: ["Overgrow"],
    base_stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      special_attack: 65,
      special_defense: 65,
      speed: 45
    },
    max_stats: {
      hp: 294,
      attack: 251,
      defense: 251,
      special_attack: 295,
      special_defense: 295,
      speed: 251
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
    pokedex_number: 2,
    name: "Ivysaur",
    type: ["Grass", "Poison"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Bulbasaur",
      evolves_to: "Venusaur",
      evolution_level: 32
    },
    abilities: ["Overgrow"],
    base_stats: {
      hp: 60,
      attack: 62,
      defense: 63,
      special_attack: 80,
      special_defense: 80,
      speed: 60
    },
    max_stats: {
      hp: 324,
      attack: 277,
      defense: 280,
      special_attack: 348,
      special_defense: 348,
      speed: 276
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
    pokedex_number: 3,
    name: "Venusaur",
    type: ["Grass", "Poison"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Ivysaur"
    },
    abilities: ["Overgrow"],
    base_stats: {
      hp: 80,
      attack: 82,
      defense: 83,
      special_attack: 100,
      special_defense: 100,
      speed: 80
    },
    max_stats: {
      hp: 364,
      attack: 358,
      defense: 362,
      special_attack: 404,
      special_defense: 404,
      speed: 348
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
    pokedex_number: 4,
    name: "Charmander",
    type: ["Fire"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Charmeleon",
      evolution_level: 16
    },
    abilities: ["Blaze"],
    base_stats: {
      hp: 39,
      attack: 52,
      defense: 43,
      special_attack: 60,
      special_defense: 50,
      speed: 65
    },
    max_stats: {
      hp: 282,
      attack: 257,
      defense: 240,
      special_attack: 276,
      special_defense: 254,
      speed: 295
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
    pokedex_number: 5,
    name: "Charmeleon",
    type: ["Fire"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Charmander",
      evolves_to: "Charizard",
      evolution_level: 36
    },
    abilities: ["Blaze"],
    base_stats: {
      hp: 58,
      attack: 64,
      defense: 58,
      special_attack: 80,
      special_defense: 65,
      speed: 80
    },
    max_stats: {
      hp: 320,
      attack: 283,
      defense: 270,
      special_attack: 348,
      special_defense: 295,
      speed: 348
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
    pokedex_number: 6,
    name: "Charizard",
    type: ["Fire", "Flying"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Charmeleon"
    },
    abilities: ["Blaze"],
    base_stats: {
      hp: 78,
      attack: 84,
      defense: 78,
      special_attack: 109,
      special_defense: 85,
      speed: 100
    },
    max_stats: {
      hp: 360,
      attack: 366,
      defense: 342,
      special_attack: 427,
      special_defense: 370,
      speed: 404
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
    pokedex_number: 7,
    name: "Squirtle",
    type: ["Water"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Wartortle",
      evolution_level: 16
    },
    abilities: ["Torrent"],
    base_stats: {
      hp: 44,
      attack: 48,
      defense: 65,
      special_attack: 50,
      special_defense: 64,
      speed: 43
    },
    max_stats: {
      hp: 292,
      attack: 251,
      defense: 295,
      special_attack: 254,
      special_defense: 288,
      speed: 240
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
    pokedex_number: 8,
    name: "Wartortle",
    type: ["Water"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Squirtle",
      evolves_to: "Blastoise",
      evolution_level: 36
    },
    abilities: ["Torrent"],
    base_stats: {
      hp: 59,
      attack: 63,
      defense: 80,
      special_attack: 65,
      special_defense: 80,
      speed: 58
    },
    max_stats: {
      hp: 322,
      attack: 280,
      defense: 348,
      special_attack: 295,
      special_defense: 348,
      speed: 270
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },
  {
    pokedex_number: 9,
    name: "Blastoise",
    type: ["Water"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Wartortle"
    },
    abilities: ["Torrent"],
    base_stats: {
      hp: 79,
      attack: 83,
      defense: 100,
      special_attack: 85,
      special_defense: 105,
      speed: 78
    },
    max_stats: {
      hp: 362,
      attack: 362,
      defense: 404,
      special_attack: 370,
      special_defense: 420,
      speed: 342
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  },
  {
    pokedex_number: 10,
    name: "Caterpie",
    type: ["Bug"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Metapod",
      evolution_level: 7
    },
    abilities: ["Shield Dust"],
    base_stats: {
      hp: 45,
      attack: 30,
      defense: 35,
      special_attack: 20,
      special_defense: 20,
      speed: 45
    },
    max_stats: {
      hp: 294,
      attack: 174,
      defense: 196,
      special_attack: 140,
      special_defense: 140,
      speed: 251
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
  },
  {
    pokedex_number: 11,
    name: "Metapod",
    type: ["Bug"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Caterpie",
      evolves_to: "Butterfree",
      evolution_level: 10
    },
    abilities: ["Shed Skin"],
    base_stats: {
      hp: 50,
      attack: 20,
      defense: 55,
      special_attack: 25,
      special_defense: 25,
      speed: 30
    },
    max_stats: {
      hp: 304,
      attack: 140,
      defense: 262,
      special_attack: 157,
      special_defense: 157,
      speed: 174
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
  },
  {
    pokedex_number: 12,
    name: "Butterfree",
    type: ["Bug", "Flying"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Metapod"
    },
    abilities: ["Compound Eyes"],
    base_stats: {
      hp: 60,
      attack: 45,
      defense: 50,
      special_attack: 90,
      special_defense: 80,
      speed: 70
    },
    max_stats: {
      hp: 324,
      attack: 247,
      defense: 254,
      special_attack: 382,
      special_defense: 348,
      speed: 316
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
  },
  {
    pokedex_number: 13,
    name: "Weedle",
    type: ["Bug", "Poison"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Kakuna",
      evolution_level: 7
    },
    abilities: ["Shield Dust"],
    base_stats: {
      hp: 40,
      attack: 35,
      defense: 30,
      special_attack: 20,
      special_defense: 20,
      speed: 50
    },
    max_stats: {
      hp: 284,
      attack: 196,
      defense: 174,
      special_attack: 140,
      special_defense: 140,
      speed: 254
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
  },
  {
    pokedex_number: 14,
    name: "Kakuna",
    type: ["Bug", "Poison"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Weedle",
      evolves_to: "Beedrill",
      evolution_level: 10
    },
    abilities: ["Shed Skin"],
    base_stats: {
      hp: 45,
      attack: 25,
      defense: 50,
      special_attack: 25,
      special_defense: 25,
      speed: 35
    },
    max_stats: {
      hp: 294,
      attack: 157,
      defense: 254,
      special_attack: 157,
      special_defense: 157,
      speed: 196
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
  },
  {
    pokedex_number: 15,
    name: "Beedrill",
    type: ["Bug", "Poison"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Kakuna"
    },
    abilities: ["Swarm"],
    base_stats: {
      hp: 65,
      attack: 90,
      defense: 40,
      special_attack: 45,
      special_defense: 80,
      speed: 75
    },
    max_stats: {
      hp: 334,
      attack: 382,
      defense: 218,
      special_attack: 247,
      special_defense: 348,
      speed: 329
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
  },
  {
    pokedex_number: 16,
    name: "Pidgey",
    type: ["Normal", "Flying"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Pidgeotto",
      evolution_level: 18
    },
    abilities: ["Keen Eye", "Tangled Feet"],
    base_stats: {
      hp: 40,
      attack: 45,
      defense: 40,
      special_attack: 35,
      special_defense: 35,
      speed: 56
    },
    max_stats: {
      hp: 284,
      attack: 247,
      defense: 218,
      special_attack: 196,
      special_defense: 196,
      speed: 265
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
  },
  {
    pokedex_number: 17,
    name: "Pidgeotto",
    type: ["Normal", "Flying"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Pidgey",
      evolves_to: "Pidgeot",
      evolution_level: 36
    },
    abilities: ["Keen Eye", "Tangled Feet"],
    base_stats: {
      hp: 63,
      attack: 60,
      defense: 55,
      special_attack: 50,
      special_defense: 50,
      speed: 71
    },
    max_stats: {
      hp: 330,
      attack: 276,
      defense: 262,
      special_attack: 254,
      special_defense: 254,
      speed: 320
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
  },
  {
    pokedex_number: 18,
    name: "Pidgeot",
    type: ["Normal", "Flying"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Pidgeotto"
    },
    abilities: ["Keen Eye", "Tangled Feet"],
    base_stats: {
      hp: 83,
      attack: 80,
      defense: 75,
      special_attack: 70,
      special_defense: 70,
      speed: 101
    },
    max_stats: {
      hp: 366,
      attack: 348,
      defense: 329,
      special_attack: 316,
      special_defense: 316,
      speed: 407
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
  },
  {
    pokedex_number: 19,
    name: "Rattata",
    type: ["Normal"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Raticate",
      evolution_level: 20
    },
    abilities: ["Run Away", "Guts"],
    base_stats: {
      hp: 30,
      attack: 56,
      defense: 35,
      special_attack: 25,
      special_defense: 35,
      speed: 72
    },
    max_stats: {
      hp: 274,
      attack: 265,
      defense: 196,
      special_attack: 157,
      special_defense: 196,
      speed: 322
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
  },
  {
    pokedex_number: 20,
    name: "Raticate",
    type: ["Normal"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Rattata"
    },
    abilities: ["Run Away", "Guts"],
    base_stats: {
      hp: 55,
      attack: 81,
      defense: 60,
      special_attack: 50,
      special_defense: 70,
      speed: 97
    },
    max_stats: {
      hp: 314,
      attack: 355,
      defense: 276,
      special_attack: 254,
      special_defense: 316,
      speed: 397
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
  },
  {
    pokedex_number: 21,
    name: "Spearow",
    type: ["Normal", "Flying"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Fearow",
      evolution_level: 20
    },
    abilities: ["Keen Eye"],
    base_stats: {
      hp: 40,
      attack: 60,
      defense: 30,
      special_attack: 31,
      special_defense: 31,
      speed: 70
    },
    max_stats: {
      hp: 284,
      attack: 276,
      defense: 174,
      special_attack: 178,
      special_defense: 178,
      speed: 316
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
  },
  {
    pokedex_number: 22,
    name: "Fearow",
    type: ["Normal", "Flying"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Spearow"
    },
    abilities: ["Keen Eye"],
    base_stats: {
      hp: 65,
      attack: 90,
      defense: 65,
      special_attack: 61,
      special_defense: 61,
      speed: 100
    },
    max_stats: {
      hp: 334,
      attack: 382,
      defense: 295,
      special_attack: 278,
      special_defense: 278,
      speed: 404
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
  },
  {
    pokedex_number: 23,
    name: "Ekans",
    type: ["Poison"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Arbok",
      evolution_level: 22
    },
    abilities: ["Intimidate", "Shed Skin"],
    base_stats: {
      hp: 35,
      attack: 60,
      defense: 44,
      special_attack: 40,
      special_defense: 54,
      speed: 55
    },
    max_stats: {
      hp: 278,
      attack: 276,
      defense: 244,
      special_attack: 218,
      special_defense: 260,
      speed: 262
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
  },
  {
    pokedex_number: 24,
    name: "Arbok",
    type: ["Poison"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Ekans"
    },
    abilities: ["Intimidate", "Shed Skin"],
    base_stats: {
      hp: 60,
      attack: 95,
      defense: 69,
      special_attack: 65,
      special_defense: 79,
      speed: 80
    },
    max_stats: {
      hp: 324,
      attack: 394,
      defense: 310,
      special_attack: 295,
      special_defense: 344,
      speed: 348
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
  },
  {
    pokedex_number: 25,
    name: "Pikachu",
    type: ["Electric"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Pichu",
      evolves_to: "Raichu"
    },
    abilities: ["Static"],
    base_stats: {
      hp: 35,
      attack: 55,
      defense: 40,
      special_attack: 50,
      special_defense: 50,
      speed: 90
    },
    max_stats: {
      hp: 278,
      attack: 262,
      defense: 218,
      special_attack: 254,
      special_defense: 254,
      speed: 382
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
    pokedex_number: 26,
    name: "Raichu",
    type: ["Electric"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Pikachu"
    },
    abilities: ["Static"],
    base_stats: {
      hp: 60,
      attack: 90,
      defense: 55,
      special_attack: 90,
      special_defense: 80,
      speed: 110
    },
    max_stats: {
      hp: 324,
      attack: 382,
      defense: 262,
      special_attack: 382,
      special_defense: 348,
      speed: 438
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
  },
  {
    pokedex_number: 27,
    name: "Sandshrew",
    type: ["Ground"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Sandslash",
      evolution_level: 22
    },
    abilities: ["Sand Veil"],
    base_stats: {
      hp: 50,
      attack: 75,
      defense: 85,
      special_attack: 20,
      special_defense: 30,
      speed: 40
    },
    max_stats: {
      hp: 304,
      attack: 329,
      defense: 370,
      special_attack: 140,
      special_defense: 174,
      speed: 218
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
  },
  {
    pokedex_number: 28,
    name: "Sandslash",
    type: ["Ground"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Sandshrew"
    },
    abilities: ["Sand Veil"],
    base_stats: {
      hp: 75,
      attack: 100,
      defense: 110,
      special_attack: 45,
      special_defense: 55,
      speed: 65
    },
    max_stats: {
      hp: 354,
      attack: 404,
      defense: 438,
      special_attack: 247,
      special_defense: 262,
      speed: 295
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
  },
  {
    pokedex_number: 29,
    name: "Nidoran♀",
    type: ["Poison"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Nidorina",
      evolution_level: 16
    },
    abilities: ["Poison Point", "Rivalry"],
    base_stats: {
      hp: 55,
      attack: 47,
      defense: 52,
      special_attack: 40,
      special_defense: 40,
      speed: 41
    },
    max_stats: {
      hp: 314,
      attack: 249,
      defense: 257,
      special_attack: 218,
      special_defense: 218,
      speed: 224
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
  },
  {
    pokedex_number: 30,
    name: "Nidorina",
    type: ["Poison"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Nidoran♀",
      evolves_to: "Nidoqueen"
    },
    abilities: ["Poison Point", "Rivalry"],
    base_stats: {
      hp: 70,
      attack: 62,
      defense: 67,
      special_attack: 55,
      special_defense: 55,
      speed: 56
    },
    max_stats: {
      hp: 344,
      attack: 277,
      defense: 299,
      special_attack: 262,
      special_defense: 262,
      speed: 265
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
  },
  {
    pokedex_number: 31,
    name: "Nidoqueen",
    type: ["Poison", "Ground"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Nidorina"
    },
    abilities: ["Poison Point", "Rivalry"],
    base_stats: {
      hp: 90,
      attack: 92,
      defense: 87,
      special_attack: 75,
      special_defense: 85,
      speed: 76
    },
    max_stats: {
      hp: 384,
      attack: 386,
      defense: 375,
      special_attack: 329,
      special_defense: 370,
      special_defense: 332
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
  },
  {
    pokedex_number: 32,
    name: "Nidoran♂",
    type: ["Poison"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Nidorino",
      evolution_level: 16
    },
    abilities: ["Poison Point", "Rivalry"],
    base_stats: {
      hp: 46,
      attack: 57,
      defense: 40,
      special_attack: 40,
      special_defense: 40,
      speed: 50
    },
    max_stats: {
      hp: 296,
      attack: 268,
      defense: 218,
      special_attack: 218,
      special_defense: 218,
      speed: 254
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
  },
  {
    pokedex_number: 33,
    name: "Nidorino",
    type: ["Poison"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Nidoran♂",
      evolves_to: "Nidoking"
    },
    abilities: ["Poison Point", "Rivalry"],
    base_stats: {
      hp: 61,
      attack: 72,
      defense: 57,
      special_attack: 55,
      special_defense: 55,
      speed: 65
    },
    max_stats: {
      hp: 326,
      attack: 322,
      defense: 268,
      special_attack: 262,
      special_defense: 262,
      speed: 295
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
  },
  {
    pokedex_number: 34,
    name: "Nidoking",
    type: ["Poison", "Ground"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Nidorino"
    },
    abilities: ["Poison Point", "Rivalry"],
    base_stats: {
      hp: 81,
      attack: 102,
      defense: 77,
      special_attack: 85,
      special_defense: 75,
      speed: 85
    },
    max_stats: {
      hp: 366,
      attack: 410,
      defense: 336,
      special_attack: 370,
      special_defense: 329,
      speed: 370
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
  },
  {
    pokedex_number: 35,
    name: "Clefairy",
    type: ["Normal"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Cleffa",
      evolves_to: "Clefable"
    },
    abilities: ["Cute Charm", "Magic Guard"],
    base_stats: {
      hp: 70,
      attack: 45,
      defense: 48,
      special_attack: 60,
      special_defense: 65,
      speed: 35
    },
    max_stats: {
      hp: 344,
      attack: 247,
      defense: 251,
      special_attack: 276,
      special_defense: 295,
      speed: 196
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
  },
  {
    pokedex_number: 36,
    name: "Clefable",
    type: ["Normal"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Clefairy"
    },
    abilities: ["Cute Charm", "Magic Guard"],
    base_stats: {
      hp: 95,
      attack: 70,
      defense: 73,
      special_attack: 95,
      special_defense: 90,
      speed: 60
    },
    max_stats: {
      hp: 394,
      attack: 316,
      defense: 324,
      special_attack: 394,
      special_defense: 382,
      speed: 276
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
  },
  {
    pokedex_number: 37,
    name: "Vulpix",
    type: ["Fire"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Ninetales"
    },
    abilities: ["Flash Fire"],
    base_stats: {
      hp: 38,
      attack: 41,
      defense: 40,
      special_attack: 50,
      special_defense: 65,
      speed: 65
    },
    max_stats: {
      hp: 280,
      attack: 224,
      defense: 218,
      special_attack: 254,
      special_defense: 295,
      speed: 295
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
  },
  {
    pokedex_number: 38,
    name: "Ninetales",
    type: ["Fire"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Vulpix"
    },
    abilities: ["Flash Fire"],
    base_stats: {
      hp: 73,
      attack: 76,
      defense: 75,
      special_attack: 81,
      special_defense: 100,
      speed: 100
    },
    max_stats: {
      hp: 350,
      attack: 332,
      defense: 329,
      special_attack: 355,
      special_defense: 404,
      speed: 404
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
  },
  {
    pokedex_number: 39,
    name: "Jigglypuff",
    type: ["Normal"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Igglybuff",
      evolves_to: "Wigglytuff"
    },
    abilities: ["Cute Charm", "Competitive"],
    base_stats: {
      hp: 115,
      attack: 45,
      defense: 20,
      special_attack: 45,
      special_defense: 25,
      speed: 20
    },
    max_stats: {
      hp: 434,
      attack: 247,
      defense: 140,
      special_attack: 247,
      special_defense: 157,
      speed: 140
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
  },
  {
    pokedex_number: 40,
    name: "Wigglytuff",
    type: ["Normal"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Jigglypuff"
    },
    abilities: ["Cute Charm", "Competitive"],
    base_stats: {
      hp: 140,
      attack: 70,
      defense: 45,
      special_attack: 85,
      special_defense: 50,
      speed: 45
    },
    max_stats: {
      hp: 484,
      attack: 316,
      defense: 247,
      special_attack: 370,
      special_defense: 254,
      speed: 247
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
  },
  {
    pokedex_number: 41,
    name: "Zubat",
    type: ["Poison", "Flying"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Golbat",
      evolution_level: 22
    },
    abilities: ["Inner Focus"],
    base_stats: {
      hp: 40,
      attack: 45,
      defense: 35,
      special_attack: 30,
      special_defense: 40,
      speed: 55
    },
    max_stats: {
      hp: 284,
      attack: 247,
      defense: 196,
      special_attack: 174,
      special_defense: 218,
      speed: 262
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
  },
  {
    pokedex_number: 42,
    name: "Golbat",
    type: ["Poison", "Flying"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Zubat",
      evolves_to: "Crobat"
    },
    abilities: ["Inner Focus"],
    base_stats: {
      hp: 75,
      attack: 80,
      defense: 70,
      special_attack: 65,
      special_defense: 75,
      speed: 90
    },
    max_stats: {
      hp: 354,
      attack: 348,
      defense: 316,
      special_attack: 295,
      special_defense: 329,
      speed: 382
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
  },
  {
    pokedex_number: 43,
    name: "Oddish",
    type: ["Grass", "Poison"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Gloom",
      evolution_level: 21
    },
    abilities: ["Chlorophyll"],
    base_stats: {
      hp: 45,
      attack: 50,
      defense: 55,
      special_attack: 75,
      special_defense: 65,
      speed: 30
    },
    max_stats: {
      hp: 294,
      attack: 254,
      defense: 262,
      special_attack: 329,
      special_defense: 295,
      speed: 174
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
  },
  {
    pokedex_number: 44,
    name: "Gloom",
    type: ["Grass", "Poison"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Oddish",
      evolves_to: "Vileplume"
    },
    abilities: ["Chlorophyll"],
    base_stats: {
      hp: 60,
      attack: 65,
      defense: 70,
      special_attack: 85,
      special_defense: 75,
      speed: 40
    },
    max_stats: {
      hp: 324,
      attack: 295,
      defense: 316,
      special_attack: 370,
      special_defense: 329,
      speed: 218
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
  },
  {
    pokedex_number: 45,
    name: "Vileplume",
    type: ["Grass", "Poison"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Gloom"
    },
    abilities: ["Chlorophyll"],
    base_stats: {
      hp: 75,
      attack: 80,
      defense: 85,
      special_attack: 110,
      special_defense: 90,
      speed: 50
    },
    max_stats: {
      hp: 354,
      attack: 348,
      defense: 370,
      special_attack: 438,
      special_defense: 382,
      speed: 254
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
  },
  {
    pokedex_number: 46,
    name: "Paras",
    type: ["Bug", "Grass"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Parasect",
      evolution_level: 24
    },
    abilities: ["Effect Spore", "Dry Skin"],
    base_stats: {
      hp: 35,
      attack: 70,
      defense: 55,
      special_attack: 45,
      special_defense: 55,
      speed: 25
    },
    max_stats: {
      hp: 278,
      attack: 316,
      defense: 262,
      special_attack: 247,
      special_defense: 262,
      speed: 157
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
  },
  {
    pokedex_number: 47,
    name: "Parasect",
    type: ["Bug", "Grass"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Paras"
    },
    abilities: ["Effect Spore", "Dry Skin"],
    base_stats: {
      hp: 60,
      attack: 95,
      defense: 80,
      special_attack: 60,
      special_defense: 80,
      speed: 30
    },
    max_stats: {
      hp: 324,
      attack: 394,
      defense: 348,
      special_attack: 276,
      special_defense: 348,
      speed: 174
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
  },
  {
    pokedex_number: 48,
    name: "Venonat",
    type: ["Bug", "Poison"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Venomoth",
      evolution_level: 31
    },
    abilities: ["Compound Eyes", "Tinted Lens"],
    base_stats: {
      hp: 60,
      attack: 55,
      defense: 50,
      special_attack: 40,
      special_defense: 55,
      speed: 45
    },
    max_stats: {
      hp: 324,
      attack: 262,
      defense: 254,
      special_attack: 218,
      special_defense: 262,
      speed: 247
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
  },
  {
    pokedex_number: 49,
    name: "Venomoth",
    type: ["Bug", "Poison"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Venonat"
    },
    abilities: ["Shield Dust", "Tinted Lens"],
    base_stats: {
      hp: 70,
      attack: 65,
      defense: 60,
      special_attack: 90,
      special_defense: 75,
      speed: 90
    },
    max_stats: {
      hp: 344,
      attack: 295,
      defense: 276,
      special_attack: 382,
      special_defense: 329,
      speed: 382
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
  },
  {
    pokedex_number: 50,
    name: "Diglett",
    type: ["Ground"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Dugtrio",
      evolution_level: 26
    },
    abilities: ["Sand Veil", "Arena Trap"],
    base_stats: {
      hp: 10,
      attack: 55,
      defense: 25,
      special_attack: 35,
      special_defense: 45,
      speed: 95
    },
    max_stats: {
      hp: 244,
      attack: 262,
      defense: 157,
      special_attack: 196,
      special_defense: 247,
      speed: 394
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
  },
  {
    pokedex_number: 51,
    name: "Dugtrio",
    type: ["Ground"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Diglett"
    },
    abilities: ["Sand Veil", "Arena Trap"],
    base_stats: {
      hp: 35,
      attack: 100,
      defense: 50,
      special_attack: 50,
      special_defense: 70,
      speed: 120
    },
    max_stats: {
      hp: 278,
      attack: 404,
      defense: 254,
      special_attack: 254,
      special_defense: 316,
      speed: 460
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
  },
  {
    pokedex_number: 52,
    name: "Meowth",
    type: ["Normal"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Persian",
      evolution_level: 28
    },
    abilities: ["Pickup", "Technician"],
    base_stats: {
      hp: 40,
      attack: 45,
      defense: 35,
      special_attack: 40,
      special_defense: 40,
      speed: 90
    },
    max_stats: {
      hp: 284,
      attack: 247,
      defense: 196,
      special_attack: 218,
      special_defense: 218,
      speed: 382
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
  },
  {
    pokedex_number: 53,
    name: "Persian",
    type: ["Normal"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Meowth"
    },
    abilities: ["Limber", "Technician"],
    base_stats: {
      hp: 65,
      attack: 70,
      defense: 60,
      special_attack: 65,
      special_defense: 65,
      speed: 115
    },
    max_stats: {
      hp: 334,
      attack: 316,
      defense: 276,
      special_attack: 295,
      special_defense: 295,
      speed: 444
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
  },
  {
    pokedex_number: 54,
    name: "Psyduck",
    type: ["Water"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Golduck",
      evolution_level: 33
    },
    abilities: ["Damp", "Cloud Nine"],
    base_stats: {
      hp: 50,
      attack: 52,
      defense: 48,
      special_attack: 65,
      special_defense: 50,
      speed: 55
    },
    max_stats: {
      hp: 304,
      attack: 257,
      defense: 251,
      special_attack: 295,
      special_defense: 254,
      speed: 262
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
  },
  {
    pokedex_number: 55,
    name: "Golduck",
    type: ["Water"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Psyduck"
    },
    abilities: ["Damp", "Cloud Nine"],
    base_stats: {
      hp: 80,
      attack: 82,
      defense: 78,
      special_attack: 95,
      special_defense: 80,
      speed: 85
    },
    max_stats: {
      hp: 364,
      attack: 358,
      defense: 342,
      special_attack: 394,
      special_defense: 348,
      speed: 370
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
  },
  {
    pokedex_number: 56,
    name: "Mankey",
    type: ["Fighting"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Primeape",
      evolution_level: 28
    },
    abilities: ["Vital Spirit", "Anger Point"],
    base_stats: {
      hp: 40,
      attack: 80,
      defense: 35,
      special_attack: 35,
      special_defense: 45,
      speed: 70
    },
    max_stats: {
      hp: 284,
      attack: 348,
      defense: 196,
      special_attack: 196,
      special_defense: 247,
      speed: 316
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
  },
  {
    pokedex_number: 57,
    name: "Primeape",
    type: ["Fighting"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Mankey"
    },
    abilities: ["Vital Spirit", "Anger Point"],
    base_stats: {
      hp: 65,
      attack: 105,
      defense: 60,
      special_attack: 60,
      special_defense: 70,
      speed: 95
    },
    max_stats: {
      hp: 334,
      attack: 420,
      defense: 276,
      special_attack: 276,
      special_defense: 316,
      speed: 394
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
  },
  {
    pokedex_number: 58,
    name: "Growlithe",
    type: ["Fire"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Arcanine"
    },
    abilities: ["Intimidate", "Flash Fire"],
    base_stats: {
      hp: 55,
      attack: 70,
      defense: 45,
      special_attack: 70,
      special_defense: 50,
      speed: 60
    },
    max_stats: {
      hp: 314,
      attack: 316,
      defense: 247,
      special_attack: 316,
      special_defense: 254,
      speed: 276
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
  },
  {
    pokedex_number: 59,
    name: "Arcanine",
    type: ["Fire"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Growlithe"
    },
    abilities: ["Intimidate", "Flash Fire"],
    base_stats: {
      hp: 90,
      attack: 110,
      defense: 80,
      special_attack: 100,
      special_defense: 80,
      speed: 95
    },
    max_stats: {
      hp: 384,
      attack: 438,
      defense: 348,
      special_attack: 404,
      special_defense: 348,
      speed: 394
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
  },
  {
    pokedex_number: 60,
    name: "Poliwag",
    type: ["Water"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Poliwhirl",
      evolution_level: 25
    },
    abilities: ["Water Absorb", "Damp"],
    base_stats: {
      hp: 40,
      attack: 50,
      defense: 40,
      special_attack: 40,
      special_defense: 40,
      speed: 90
    },
    max_stats: {
      hp: 284,
      attack: 254,
      defense: 218,
      special_attack: 218,
      special_defense: 218,
      speed: 382
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
  },
  {
    pokedex_number: 61,
    name: "Poliwhirl",
    type: ["Water"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Poliwag",
      evolves_to: "Poliwrath"
    },
    abilities: ["Water Absorb", "Damp"],
    base_stats: {
      hp: 65,
      attack: 65,
      defense: 65,
      special_attack: 50,
      special_defense: 50,
      speed: 90
    },
    max_stats: {
      hp: 334,
      attack: 295,
      defense: 295,
      special_attack: 254,
      special_defense: 254,
      speed: 382
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
  },
  {
    pokedex_number: 62,
    name: "Poliwrath",
    type: ["Water", "Fighting"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Poliwhirl"
    },
    abilities: ["Water Absorb", "Damp"],
    base_stats: {
      hp: 90,
      attack: 95,
      defense: 95,
      special_attack: 70,
      special_defense: 90,
      speed: 70
    },
    max_stats: {
      hp: 384,
      attack: 394,
      defense: 394,
      special_attack: 316,
      special_defense: 382,
      speed: 316
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
  },
  {
    pokedex_number: 63,
    name: "Abra",
    type: ["Psychic"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Kadabra",
      evolution_level: 16
    },
    abilities: ["Synchronize", "Inner Focus"],
    base_stats: {
      hp: 25,
      attack: 20,
      defense: 15,
      special_attack: 105,
      special_defense: 55,
      speed: 90
    },
    max_stats: {
      hp: 264,
      attack: 140,
      defense: 122,
      special_attack: 420,
      special_defense: 262,
      speed: 382
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
  },
  {
    pokedex_number: 64,
    name: "Kadabra",
    type: ["Psychic"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Abra",
      evolves_to: "Alakazam"
    },
    abilities: ["Synchronize", "Inner Focus"],
    base_stats: {
      hp: 40,
      attack: 35,
      defense: 30,
      special_attack: 120,
      special_defense: 70,
      speed: 105
    },
    max_stats: {
      hp: 284,
      attack: 196,
      defense: 174,
      special_attack: 460,
      special_defense: 316,
      speed: 420
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
  },
  {
    pokedex_number: 65,
    name: "Alakazam",
    type: ["Psychic"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Kadabra"
    },
    abilities: ["Synchronize", "Inner Focus"],
    base_stats: {
      hp: 55,
      attack: 50,
      defense: 45,
      special_attack: 135,
      special_defense: 95,
      speed: 120
    },
    max_stats: {
      hp: 314,
      attack: 254,
      defense: 247,
      special_attack: 504,
      special_defense: 394,
      speed: 460
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
  },
  {
    pokedex_number: 66,
    name: "Machop",
    type: ["Fighting"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Machoke",
      evolution_level: 28
    },
    abilities: ["Guts", "No Guard"],
    base_stats: {
      hp: 70,
      attack: 80,
      defense: 50,
      special_attack: 35,
      special_defense: 35,
      speed: 35
    },
    max_stats: {
      hp: 344,
      attack: 348,
      defense: 254,
      special_attack: 196,
      special_defense: 196,
      speed: 196
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
  },
  {
    pokedex_number: 67,
    name: "Machoke",
    type: ["Fighting"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Machop",
      evolves_to: "Machamp"
    },
    abilities: ["Guts", "No Guard"],
    base_stats: {
      hp: 80,
      attack: 100,
      defense: 70,
      special_attack: 50,
      special_defense: 60,
      speed: 45
    },
    max_stats: {
      hp: 364,
      attack: 404,
      defense: 316,
      special_attack: 254,
      special_defense: 276,
      speed: 247
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
  },
  {
    pokedex_number: 68,
    name: "Machamp",
    type: ["Fighting"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Machoke"
    },
    abilities: ["Guts", "No Guard"],
    base_stats: {
      hp: 90,
      attack: 130,
      defense: 80,
      special_attack: 65,
      special_defense: 85,
      speed: 55
    },
    max_stats: {
      hp: 384,
      attack: 492,
      defense: 348,
      special_attack: 295,
      special_defense: 370,
      speed: 262
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
  },
  {
    pokedex_number: 69,
    name: "Bellsprout",
    type: ["Grass", "Poison"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Weepinbell",
      evolution_level: 21
    },
    abilities: ["Chlorophyll"],
    base_stats: {
      hp: 50,
      attack: 75,
      defense: 35,
      special_attack: 70,
      special_defense: 30,
      speed: 40
    },
    max_stats: {
      hp: 304,
      attack: 329,
      defense: 196,
      special_attack: 316,
      special_defense: 174,
      speed: 218
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
  },
  {
    pokedex_number: 70,
    name: "Weepinbell",
    type: ["Grass", "Poison"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Bellsprout",
      evolves_to: "Victreebel"
    },
    abilities: ["Chlorophyll"],
    base_stats: {
      hp: 65,
      attack: 90,
      defense: 50,
      special_attack: 85,
      special_defense: 45,
      speed: 55
    },
    max_stats: {
      hp: 334,
      attack: 382,
      defense: 254,
      special_attack: 370,
      special_defense: 247,
      speed: 262
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
  },
  {
    pokedex_number: 71,
    name: "Victreebel",
    type: ["Grass", "Poison"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Weepinbell"
    },
    abilities: ["Chlorophyll"],
    base_stats: {
      hp: 80,
      attack: 105,
      defense: 65,
      special_attack: 100,
      special_defense: 70,
      speed: 70
    },
    max_stats: {
      hp: 364,
      attack: 420,
      defense: 295,
      special_attack: 404,
      special_defense: 316,
      speed: 316
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
  },
  {
    pokedex_number: 72,
    name: "Tentacool",
    type: ["Water", "Poison"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Tentacruel",
      evolution_level: 30
    },
    abilities: ["Clear Body", "Liquid Ooze"],
    base_stats: {
      hp: 40,
      attack: 40,
      defense: 35,
      special_attack: 50,
      special_defense: 100,
      speed: 70
    },
    max_stats: {
      hp: 284,
      attack: 218,
      defense: 196,
      special_attack: 254,
      special_defense: 404,
      speed: 316
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
  },
  {
    pokedex_number: 73,
    name: "Tentacruel",
    type: ["Water", "Poison"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Tentacool"
    },
    abilities: ["Clear Body", "Liquid Ooze"],
    base_stats: {
      hp: 80,
      attack: 70,
      defense: 65,
      special_attack: 80,
      special_defense: 120,
      speed: 100
    },
    max_stats: {
      hp: 364,
      attack: 316,
      defense: 295,
      special_attack: 348,
      special_defense: 460,
      speed: 404
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
  },
  {
    pokedex_number: 74,
    name: "Geodude",
    type: ["Rock", "Ground"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Graveler",
      evolution_level: 25
    },
    abilities: ["Rock Head", "Sturdy"],
    base_stats: {
      hp: 40,
      attack: 80,
      defense: 100,
      special_attack: 30,
      special_defense: 30,
      speed: 20
    },
    max_stats: {
      hp: 284,
      attack: 348,
      defense: 404,
      special_attack: 174,
      special_defense: 174,
      speed: 140
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
  },
  {
    pokedex_number: 75,
    name: "Graveler",
    type: ["Rock", "Ground"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Geodude",
      evolves_to: "Golem"
    },
    abilities: ["Rock Head", "Sturdy"],
    base_stats: {
      hp: 55,
      attack: 95,
      defense: 115,
      special_attack: 45,
      special_defense: 45,
      speed: 35
    },
    max_stats: {
      hp: 314,
      attack: 394,
      defense: 444,
      special_attack: 247,
      special_defense: 247,
      speed: 196
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
  },
  {
    pokedex_number: 76,
    name: "Golem",
    type: ["Rock", "Ground"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Graveler"
    },
    abilities: ["Rock Head", "Sturdy"],
    base_stats: {
      hp: 80,
      attack: 120,
      defense: 130,
      special_attack: 55,
      special_defense: 65,
      speed: 45
    },
    max_stats: {
      hp: 364,
      attack: 460,
      defense: 492,
      special_attack: 262,
      special_defense: 295,
      speed: 247
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
  },
  {
    pokedex_number: 77,
    name: "Ponyta",
    type: ["Fire"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Rapidash",
      evolution_level: 40
    },
    abilities: ["Run Away", "Flash Fire"],
    base_stats: {
      hp: 50,
      attack: 85,
      defense: 55,
      special_attack: 65,
      special_defense: 65,
      speed: 90
    },
    max_stats: {
      hp: 304,
      attack: 370,
      defense: 262,
      special_attack: 295,
      special_defense: 295,
      speed: 382
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
  },
  {
    pokedex_number: 78,
    name: "Rapidash",
    type: ["Fire"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Ponyta"
    },
    abilities: ["Run Away", "Flash Fire"],
    base_stats: {
      hp: 65,
      attack: 100,
      defense: 70,
      special_attack: 80,
      special_defense: 80,
      speed: 105
    },
    max_stats: {
      hp: 334,
      attack: 404,
      defense: 316,
      special_attack: 348,
      special_defense: 348,
      speed: 420
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
  },
  {
    pokedex_number: 79,
    name: "Slowpoke",
    type: ["Water", "Psychic"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Slowbro",
      evolution_level: 37
    },
    abilities: ["Oblivious", "Own Tempo"],
    base_stats: {
      hp: 90,
      attack: 65,
      defense: 65,
      special_attack: 40,
      special_defense: 40,
      speed: 15
    },
    max_stats: {
      hp: 384,
      attack: 295,
      defense: 295,
      special_attack: 218,
      special_defense: 218,
      speed: 122
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
  },
  {
    pokedex_number: 80,
    name: "Slowbro",
    type: ["Water", "Psychic"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Slowpoke"
    },
    abilities: ["Oblivious", "Own Tempo"],
    base_stats: {
      hp: 95,
      attack: 75,
      defense: 110,
      special_attack: 100,
      special_defense: 80,
      speed: 30
    },
    max_stats: {
      hp: 394,
      attack: 329,
      defense: 438,
      special_attack: 404,
      special_defense: 348,
      speed: 174
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
  },
  {
    pokedex_number: 81,
    name: "Magnemite",
    type: ["Electric", "Flying"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Magneton",
      evolution_level: 30
    },
    abilities: ["Magnet Pull", "Sturdy"],
    base_stats: {
      hp: 25,
      attack: 35,
      defense: 70,
      special_attack: 95,
      special_defense: 55,
      speed: 45
    },
    max_stats: {
      hp: 264,
      attack: 196,
      defense: 316,
      special_attack: 394,
      special_defense: 262,
      speed: 247
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
  },
  {
    pokedex_number: 82,
    name: "Magneton",
    type: ["Electric", "Flying"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Magnemite",
      evolves_to: "Magnezone"
    },
    abilities: ["Magnet Pull", "Sturdy"],
    base_stats: {
      hp: 50,
      attack: 60,
      defense: 95,
      special_attack: 120,
      special_defense: 70,
      speed: 70
    },
    max_stats: {
      hp: 304,
      attack: 276,
      defense: 394,
      special_attack: 460,
      special_defense: 316,
      speed: 316
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
  },
  {
    pokedex_number: 83,
    name: "Farfetch'd",
    type: ["Normal", "Flying"],
    evolution_stages: {
      stage: 1
    },
    abilities: ["Keen Eye", "Inner Focus"],
    base_stats: {
      hp: 52,
      attack: 90,
      defense: 55,
      special_attack: 58,
      special_defense: 62,
      speed: 60
    },
    max_stats: {
      hp: 308,
      attack: 382,
      defense: 262,
      special_attack: 270,
      special_defense: 277,
      speed: 276
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
  },
  {
    pokedex_number: 84,
    name: "Doduo",
    type: ["Normal", "Flying"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Dodrio",
      evolution_level: 31
    },
    abilities: ["Run Away", "Early Bird"],
    base_stats: {
      hp: 35,
      attack: 85,
      defense: 45,
      special_attack: 35,
      special_defense: 35,
      speed: 75
    },
    max_stats: {
      hp: 278,
      attack: 370,
      defense: 247,
      special_attack: 196,
      special_defense: 196,
      speed: 329
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
  },
  {
    pokedex_number: 85,
    name: "Dodrio",
    type: ["Normal", "Flying"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Doduo"
    },
    abilities: ["Run Away", "Early Bird"],
    base_stats: {
      hp: 60,
      attack: 110,
      defense: 70,
      special_attack: 60,
      special_defense: 60,
      speed: 110
    },
    max_stats: {
      hp: 324,
      attack: 438,
      defense: 316,
      special_attack: 276,
      special_defense: 276,
      speed: 438
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
  },
  {
    pokedex_number: 86,
    name: "Seel",
    type: ["Water"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Dewgong",
      evolution_level: 34
    },
    abilities: ["Thick Fat", "Hydration"],
    base_stats: {
      hp: 65,
      attack: 45,
      defense: 55,
      special_attack: 45,
      special_defense: 70,
      speed: 45
    },
    max_stats: {
      hp: 334,
      attack: 247,
      defense: 262,
      special_attack: 247,
      special_defense: 316,
      speed: 247
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
  },
  {
    pokedex_number: 87,
    name: "Dewgong",
    type: ["Water", "Ice"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Seel"
    },
    abilities: ["Thick Fat", "Hydration"],
    base_stats: {
      hp: 90,
      attack: 70,
      defense: 80,
      special_attack: 70,
      special_defense: 95,
      speed: 70
    },
    max_stats: {
      hp: 384,
      attack: 316,
      defense: 348,
      special_attack: 316,
      special_defense: 394,
      speed: 316
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
  },
  {
    pokedex_number: 88,
    name: "Grimer",
    type: ["Poison"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Muk",
      evolution_level: 38
    },
    abilities: ["Stench", "Sticky Hold"],
    base_stats: {
      hp: 80,
      attack: 80,
      defense: 50,
      special_attack: 40,
      special_defense: 50,
      speed: 25
    },
    max_stats: {
      hp: 364,
      attack: 348,
      defense: 254,
      special_attack: 218,
      special_defense: 254,
      speed: 157
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
  },
  {
    pokedex_number: 89,
    name: "Muk",
    type: ["Poison"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Grimer"
    },
    abilities: ["Stench", "Sticky Hold"],
    base_stats: {
      hp: 105,
      attack: 105,
      defense: 75,
      special_attack: 65,
      special_defense: 100,
      speed: 50
    },
    max_stats: {
      hp: 420,
      attack: 420,
      defense: 329,
      special_attack: 295,
      special_defense: 404,
      speed: 254
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
  },
  {
    pokedex_number: 90,
    name: "Shellder",
    type: ["Water"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Cloyster"
    },
    abilities: ["Shell Armor", "Skill Link"],
    base_stats: {
      hp: 30,
      attack: 65,
      defense: 100,
      special_attack: 45,
      special_defense: 25,
      speed: 40
    },
    max_stats: {
      hp: 274,
      attack: 295,
      defense: 404,
      special_attack: 247,
      special_defense: 157,
      speed: 218
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
  },
  {
    pokedex_number: 91,
    name: "Cloyster",
    type: ["Water", "Ice"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Shellder"
    },
    abilities: ["Shell Armor", "Skill Link"],
    base_stats: {
      hp: 50,
      attack: 95,
      defense: 180,
      special_attack: 85,
      special_defense: 45,
      speed: 70
    },
    max_stats: {
      hp: 304,
      attack: 394,
      defense: 680,
      special_attack: 370,
      special_defense: 247,
      speed: 316
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
  },
  {
    pokedex_number: 92,
    name: "Gastly",
    type: ["Ghost", "Poison"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Haunter",
      evolution_level: 25
    },
    abilities: ["Levitate"],
    base_stats: {
      hp: 30,
      attack: 35,
      defense: 30,
      special_attack: 100,
      special_defense: 35,
      speed: 80
    },
    max_stats: {
      hp: 274,
      attack: 196,
      defense: 174,
      special_attack: 404,
      special_defense: 196,
      speed: 348
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
  },
  {
    pokedex_number: 93,
    name: "Haunter",
    type: ["Ghost", "Poison"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Gastly",
      evolves_to: "Gengar"
    },
    abilities: ["Levitate"],
    base_stats: {
      hp: 45,
      attack: 50,
      defense: 45,
      special_attack: 115,
      special_defense: 55,
      speed: 95
    },
    max_stats: {
      hp: 294,
      attack: 254,
      defense: 247,
      special_attack: 444,
      special_defense: 262,
      speed: 394
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
  },
  {
    pokedex_number: 94,
    name: "Gengar",
    type: ["Ghost", "Poison"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Haunter"
    },
    abilities: ["Cursed Body"],
    base_stats: {
      hp: 60,
      attack: 65,
      defense: 60,
      special_attack: 130,
      special_defense: 75,
      speed: 110
    },
    max_stats: {
      hp: 324,
      attack: 295,
      defense: 276,
      special_attack: 492,
      special_defense: 329,
      speed: 438
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
  },
  {
    pokedex_number: 95,
    name: "Onix",
    type: ["Rock", "Ground"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Steelix"
    },
    abilities: ["Rock Head", "Sturdy"],
    base_stats: {
      hp: 35,
      attack: 45,
      defense: 160,
      special_attack: 30,
      special_defense: 45,
      speed: 70
    },
    max_stats: {
      hp: 278,
      attack: 247,
      defense: 614,
      special_attack: 174,
      special_defense: 247,
      speed: 316
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
  },
  {
    pokedex_number: 96,
    name: "Drowzee",
    type: ["Psychic"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Hypno",
      evolution_level: 26
    },
    abilities: ["Insomnia", "Forewarn"],
    base_stats: {
      hp: 60,
      attack: 48,
      defense: 45,
      special_attack: 43,
      special_defense: 90,
      speed: 42
    },
    max_stats: {
      hp: 324,
      attack: 251,
      defense: 247,
      special_attack: 240,
      special_defense: 382,
      speed: 232
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
  },
  {
    pokedex_number: 97,
    name: "Hypno",
    type: ["Psychic"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Drowzee"
    },
    abilities: ["Insomnia", "Forewarn"],
    base_stats: {
      hp: 85,
      attack: 73,
      defense: 70,
      special_attack: 73,
      special_defense: 115,
      speed: 67
    },
    max_stats: {
      hp: 370,
      attack: 324,
      defense: 316,
      special_attack: 324,
      special_defense: 444,
      speed: 299
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
  },
  {
    pokedex_number: 98,
    name: "Krabby",
    type: ["Water"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Kingler",
      evolution_level: 28
    },
    abilities: ["Hyper Cutter", "Shell Armor"],
    base_stats: {
      hp: 30,
      attack: 105,
      defense: 90,
      special_attack: 25,
      special_defense: 25,
      speed: 50
    },
    max_stats: {
      hp: 274,
      attack: 420,
      defense: 382,
      special_attack: 157,
      special_defense: 157,
      speed: 254
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
  },
  {
    pokedex_number: 99,
    name: "Kingler",
    type: ["Water"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Krabby"
    },
    abilities: ["Hyper Cutter", "Shell Armor"],
    base_stats: {
      hp: 55,
      attack: 130,
      defense: 115,
      special_attack: 50,
      special_defense: 50,
      speed: 75
    },
    max_stats: {
      hp: 314,
      attack: 492,
      defense: 444,
      special_attack: 254,
      special_defense: 254,
      speed: 329
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
  },
  {
    pokedex_number: 100,
    name: "Voltorb",
    type: ["Electric"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Electrode",
      evolution_level: 30
    },
    abilities: ["Soundproof", "Static"],
    base_stats: {
      hp: 40,
      attack: 30,
      defense: 50,
      special_attack: 55,
      special_defense: 55,
      speed: 100
    },
    max_stats: {
      hp: 284,
      attack: 174,
      defense: 254,
      special_attack: 262,
      special_defense: 262,
      speed: 404
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
  },
  {
    pokedex_number: 101,
    name: "Electrode",
    type: ["Electric"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Voltorb"
    },
    abilities: ["Soundproof", "Static"],
    base_stats: {
      hp: 60,
      attack: 50,
      defense: 70,
      special_attack: 80,
      special_defense: 80,
      speed: 150
    },
    max_stats: {
      hp: 324,
      attack: 254,
      defense: 316,
      special_attack: 348,
      special_defense: 348,
      speed: 548
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
  },
  {
    pokedex_number: 102,
    name: "Exeggcute",
    type: ["Grass", "Psychic"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Exeggutor"
    },
    abilities: ["Chlorophyll"],
    base_stats: {
      hp: 60,
      attack: 40,
      defense: 80,
      special_attack: 60,
      special_defense: 45,
      speed: 40
    },
    max_stats: {
      hp: 324,
      attack: 218,
      defense: 348,
      special_attack: 276,
      special_defense: 247,
      speed: 218
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
  },
  {
    pokedex_number: 103,
    name: "Exeggutor",
    type: ["Grass", "Psychic"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Exeggcute"
    },
    abilities: ["Chlorophyll"],
    base_stats: {
      hp: 95,
      attack: 95,
      defense: 85,
      special_attack: 125,
      special_defense: 75,
      speed: 55
    },
    max_stats: {
      hp: 394,
      attack: 394,
      defense: 370,
      special_attack: 476,
      special_defense: 329,
      speed: 262
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
  },
  {
    pokedex_number: 104,
    name: "Cubone",
    type: ["Ground"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Marowak",
      evolution_level: 28
    },
    abilities: ["Rock Head", "Lightning Rod"],
    base_stats: {
      hp: 50,
      attack: 50,
      defense: 95,
      special_attack: 40,
      special_defense: 50,
      speed: 35
    },
    max_stats: {
      hp: 304,
      attack: 254,
      defense: 394,
      special_attack: 218,
      special_defense: 254,
      speed: 196
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
  },
  {
    pokedex_number: 105,
    name: "Marowak",
    type: ["Ground"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Cubone"
    },
    abilities: ["Rock Head", "Lightning Rod"],
    base_stats: {
      hp: 60,
      attack: 80,
      defense: 110,
      special_attack: 50,
      special_defense: 80,
      speed: 45
    },
    max_stats: {
      hp: 324,
      attack: 348,
      defense: 438,
      special_attack: 254,
      special_defense: 348,
      speed: 247
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
  },
  {
    pokedex_number: 106,
    name: "Hitmonlee",
    type: ["Fighting"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Tyrogue"
    },
    abilities: ["Limber", "Reckless"],
    base_stats: {
      hp: 50,
      attack: 120,
      defense: 53,
      special_attack: 35,
      special_defense: 110,
      speed: 87
    },
    max_stats: {
      hp: 304,
      attack: 460,
      defense: 259,
      special_attack: 196,
      special_defense: 438,
      speed: 375
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
  },
  {
    pokedex_number: 107,
    name: "Hitmonchan",
    type: ["Fighting"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Tyrogue"
    },
    abilities: ["Keen Eye", "Iron Fist"],
    base_stats: {
      hp: 50,
      attack: 105,
      defense: 79,
      special_attack: 35,
      special_defense: 110,
      speed: 76
    },
    max_stats: {
      hp: 304,
      attack: 420,
      defense: 344,
      special_attack: 196,
      special_defense: 438,
      speed: 332
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
  },
  {
    pokedex_number: 108,
    name: "Lickitung",
    type: ["Normal"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Lickilicky"
    },
    abilities: ["Own Tempo", "Oblivious"],
    base_stats: {
      hp: 90,
      attack: 55,
      defense: 75,
      special_attack: 60,
      special_defense: 75,
      speed: 30
    },
    max_stats: {
      hp: 384,
      attack: 262,
      defense: 329,
      special_attack: 276,
      special_defense: 329,
      speed: 174
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
  },
  {
    pokedex_number: 109,
    name: "Koffing",
    type: ["Poison"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Weezing",
      evolution_level: 35
    },
    abilities: ["Levitate"],
    base_stats: {
      hp: 40,
      attack: 65,
      defense: 95,
      special_attack: 60,
      special_defense: 45,
      speed: 35
    },
    max_stats: {
      hp: 284,
      attack: 295,
      defense: 394,
      special_attack: 276,
      special_defense: 247,
      speed: 196
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
  },
  {
    pokedex_number: 110,
    name: "Weezing",
    type: ["Poison"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Koffing"
    },
    abilities: ["Levitate"],
    base_stats: {
      hp: 65,
      attack: 90,
      defense: 120,
      special_attack: 85,
      special_defense: 70,
      speed: 60
    },
    max_stats: {
      hp: 334,
      attack: 382,
      defense: 460,
      special_attack: 370,
      special_defense: 316,
      speed: 276
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
  },
  {
    pokedex_number: 111,
    name: "Rhyhorn",
    type: ["Ground", "Rock"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Rhydon",
      evolution_level: 42
    },
    abilities: ["Lightning Rod", "Rock Head"],
    base_stats: {
      hp: 80,
      attack: 85,
      defense: 95,
      special_attack: 30,
      special_defense: 30,
      speed: 25
    },
    max_stats: {
      hp: 364,
      attack: 370,
      defense: 394,
      special_attack: 174,
      special_defense: 174,
      speed: 157
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
  },
  {
    pokedex_number: 112,
    name: "Rhydon",
    type: ["Ground", "Rock"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Rhyhorn",
      evolves_to: "Rhyperior"
    },
    abilities: ["Lightning Rod", "Rock Head"],
    base_stats: {
      hp: 105,
      attack: 130,
      defense: 120,
      special_attack: 45,
      special_defense: 45,
      speed: 40
    },
    max_stats: {
      hp: 420,
      attack: 492,
      defense: 460,
      special_attack: 247,
      special_defense: 247,
      speed: 218
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
  },
  {
    pokedex_number: 113,
    name: "Chansey",
    type: ["Normal"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Happiny",
      evolves_to: "Blissey"
    },
    abilities: ["Natural Cure", "Serene Grace"],
    base_stats: {
      hp: 250,
      attack: 5,
      defense: 5,
      special_attack: 35,
      special_defense: 105,
      speed: 50
    },
    max_stats: {
      hp: 714,
      attack: 63,
      defense: 63,
      special_attack: 196,
      special_defense: 420,
      speed: 254
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
  },
  {
    pokedex_number: 114,
    name: "Tangela",
    type: ["Grass"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Tangrowth"
    },
    abilities: ["Chlorophyll", "Leaf Guard"],
    base_stats: {
      hp: 65,
      attack: 55,
      defense: 115,
      special_attack: 100,
      special_defense: 40,
      speed: 60
    },
    max_stats: {
      hp: 334,
      attack: 262,
      defense: 444,
      special_attack: 404,
      special_defense: 218,
      speed: 276
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
  },
  {
    pokedex_number: 115,
    name: "Kangaskhan",
    type: ["Normal"],
    evolution_stages: {
      stage: 1
    },
    abilities: ["Early Bird", "Scrappy"],
    base_stats: {
      hp: 105,
      attack: 95,
      defense: 80,
      special_attack: 40,
      special_defense: 80,
      speed: 90
    },
    max_stats: {
      hp: 420,
      attack: 394,
      defense: 348,
      special_attack: 218,
      special_defense: 348,
      speed: 382
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
  },
  {
    pokedex_number: 116,
    name: "Horsea",
    type: ["Water"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Seadra",
      evolution_level: 32
    },
    abilities: ["Swift Swim", "Sniper"],
    base_stats: {
      hp: 30,
      attack: 40,
      defense: 70,
      special_attack: 70,
      special_defense: 25,
      speed: 60
    },
    max_stats: {
      hp: 274,
      attack: 218,
      defense: 316,
      special_attack: 316,
      special_defense: 157,
      speed: 276
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
  },
  {
    pokedex_number: 117,
    name: "Seadra",
    type: ["Water"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Horsea",
      evolves_to: "Kingdra"
    },
    abilities: ["Poison Point", "Sniper"],
    base_stats: {
      hp: 55,
      attack: 65,
      defense: 95,
      special_attack: 95,
      special_defense: 45,
      speed: 85
    },
    max_stats: {
      hp: 314,
      attack: 295,
      defense: 394,
      special_attack: 394,
      special_defense: 247,
      speed: 370
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
  },
  {
    pokedex_number: 118,
    name: "Goldeen",
    type: ["Water"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Seaking",
      evolution_level: 33
    },
    abilities: ["Swift Swim", "Water Veil"],
    base_stats: {
      hp: 45,
      attack: 67,
      defense: 60,
      special_attack: 35,
      special_defense: 50,
      speed: 63
    },
    max_stats: {
      hp: 294,
      attack: 299,
      defense: 276,
      special_attack: 196,
      special_defense: 254,
      speed: 280
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
  },
  {
    pokedex_number: 119,
    name: "Seaking",
    type: ["Water"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Goldeen"
    },
    abilities: ["Swift Swim", "Water Veil"],
    base_stats: {
      hp: 80,
      attack: 92,
      defense: 65,
      special_attack: 65,
      special_defense: 80,
      speed: 68
    },
    max_stats: {
      hp: 364,
      attack: 386,
      defense: 295,
      special_attack: 295,
      special_defense: 348,
      speed: 304
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
  },
  {
    pokedex_number: 120,
    name: "Staryu",
    type: ["Water"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Starmie"
    },
    abilities: ["Illuminate", "Natural Cure"],
    base_stats: {
      hp: 30,
      attack: 45,
      defense: 55,
      special_attack: 70,
      special_defense: 55,
      speed: 85
    },
    max_stats: {
      hp: 274,
      attack: 247,
      defense: 262,
      special_attack: 316,
      special_defense: 262,
      speed: 370
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
  },
  {
    pokedex_number: 121,
    name: "Starmie",
    type: ["Water", "Psychic"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Staryu"
    },
    abilities: ["Illuminate", "Natural Cure"],
    base_stats: {
      hp: 60,
      attack: 75,
      defense: 85,
      special_attack: 100,
      special_defense: 85,
      speed: 115
    },
    max_stats: {
      hp: 324,
      attack: 329,
      defense: 370,
      special_attack: 404,
      special_defense: 370,
      speed: 444
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
  },
  {
    pokedex_number: 122,
    name: "Mr. Mime",
    type: ["Psychic"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Mime Jr."
    },
    abilities: ["Soundproof", "Filter"],
    base_stats: {
      hp: 40,
      attack: 45,
      defense: 65,
      special_attack: 100,
      special_defense: 120,
      speed: 90
    },
    max_stats: {
      hp: 284,
      attack: 247,
      defense: 295,
      special_attack: 404,
      special_defense: 460,
      speed: 382
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
  },
  {
    pokedex_number: 123,
    name: "Scyther",
    type: ["Bug", "Flying"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Scizor"
    },
    abilities: ["Swarm", "Technician"],
    base_stats: {
      hp: 70,
      attack: 110,
      defense: 80,
      special_attack: 55,
      special_defense: 80,
      speed: 105
    },
    max_stats: {
      hp: 344,
      attack: 438,
      defense: 348,
      special_attack: 262,
      special_defense: 348,
      speed: 420
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
  },
  {
    pokedex_number: 124,
    name: "Jynx",
    type: ["Ice", "Psychic"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Smoochum"
    },
    abilities: ["Oblivious", "Forewarn"],
    base_stats: {
      hp: 65,
      attack: 50,
      defense: 35,
      special_attack: 115,
      special_defense: 95,
      speed: 95
    },
    max_stats: {
      hp: 334,
      attack: 254,
      defense: 196,
      special_attack: 444,
      special_defense: 394,
      speed: 394
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
  },
  {
    pokedex_number: 125,
    name: "Electabuzz",
    type: ["Electric"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Elekid",
      evolves_to: "Electivire"
    },
    abilities: ["Static"],
    base_stats: {
      hp: 65,
      attack: 83,
      defense: 57,
      special_attack: 95,
      special_defense: 85,
      speed: 105
    },
    max_stats: {
      hp: 334,
      attack: 362,
      defense: 268,
      special_attack: 394,
      special_defense: 370,
      speed: 420
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
  },
  {
    pokedex_number: 126,
    name: "Magmar",
    type: ["Fire"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Magby",
      evolves_to: "Magmortar"
    },
    abilities: ["Flame Body"],
    base_stats: {
      hp: 65,
      attack: 95,
      defense: 57,
      special_attack: 100,
      special_defense: 85,
      speed: 93
    },
    max_stats: {
      hp: 334,
      attack: 394,
      defense: 268,
      special_attack: 404,
      special_defense: 370,
      speed: 389
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
  },
  {
    pokedex_number: 127,
    name: "Pinsir",
    type: ["Bug"],
    evolution_stages: {
      stage: 1
    },
    abilities: ["Hyper Cutter", "Mold Breaker"],
    base_stats: {
      hp: 65,
      attack: 125,
      defense: 100,
      special_attack: 55,
      special_defense: 70,
      speed: 85
    },
    max_stats: {
      hp: 334,
      attack: 476,
      defense: 404,
      special_attack: 262,
      special_defense: 316,
      speed: 370
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
  },
  {
    pokedex_number: 128,
    name: "Tauros",
    type: ["Normal"],
    evolution_stages: {
      stage: 1
    },
    abilities: ["Intimidate", "Anger Point"],
    base_stats: {
      hp: 75,
      attack: 100,
      defense: 95,
      special_attack: 40,
      special_defense: 70,
      speed: 110
    },
    max_stats: {
      hp: 354,
      attack: 404,
      defense: 394,
      special_attack: 218,
      special_defense: 316,
      speed: 438
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
  },
  {
    pokedex_number: 129,
    name: "Magikarp",
    type: ["Water"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Gyarados",
      evolution_level: 20
    },
    abilities: ["Swift Swim"],
    base_stats: {
      hp: 20,
      attack: 10,
      defense: 55,
      special_attack: 15,
      special_defense: 20,
      speed: 80
    },
    max_stats: {
      hp: 254,
      attack: 92,
      defense: 262,
      special_attack: 116,
      special_defense: 140,
      speed: 348
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
  },
  {
    pokedex_number: 130,
    name: "Gyarados",
    type: ["Water", "Flying"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Magikarp"
    },
    abilities: ["Intimidate"],
    base_stats: {
      hp: 95,
      attack: 125,
      defense: 79,
      special_attack: 60,
      special_defense: 100,
      speed: 81
    },
    max_stats: {
      hp: 394,
      attack: 476,
      defense: 344,
      special_attack: 276,
      special_defense: 404,
      speed: 355
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
  },
  {
    pokedex_number: 131,
    name: "Lapras",
    type: ["Water", "Ice"],
    evolution_stages: {
      stage: 1
    },
    abilities: ["Water Absorb", "Shell Armor"],
    base_stats: {
      hp: 130,
      attack: 85,
      defense: 80,
      special_attack: 85,
      special_defense: 95,
      speed: 60
    },
    max_stats: {
      hp: 494,
      attack: 370,
      defense: 348,
      special_attack: 370,
      special_defense: 394,
      speed: 276
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
  },
  {
    pokedex_number: 132,
    name: "Ditto",
    type: ["Normal"],
    evolution_stages: {
      stage: 1
    },
    abilities: ["Limber"],
    base_stats: {
      hp: 48,
      attack: 48,
      defense: 48,
      special_attack: 48,
      special_defense: 48,
      speed: 48
    },
    max_stats: {
      hp: 300,
      attack: 251,
      defense: 251,
      special_attack: 251,
      special_defense: 251,
      speed: 251
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  },
  {
    pokedex_number: 133,
    name: "Eevee",
    type: ["Normal"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Vaporeon/Jolteon/Flareon"
    },
    abilities: ["Run Away", "Adaptability"],
    base_stats: {
      hp: 55,
      attack: 55,
      defense: 50,
      special_attack: 45,
      special_defense: 65,
      speed: 55
    },
    max_stats: {
      hp: 314,
      attack: 262,
      defense: 254,
      special_attack: 247,
      special_defense: 295,
      speed: 262
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
  },
  {
    pokedex_number: 134,
    name: "Vaporeon",
    type: ["Water"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Eevee"
    },
    abilities: ["Water Absorb"],
    base_stats: {
      hp: 130,
      attack: 65,
      defense: 60,
      special_attack: 110,
      special_defense: 95,
      speed: 65
    },
    max_stats: {
      hp: 494,
      attack: 295,
      defense: 276,
      special_attack: 438,
      special_defense: 394,
      speed: 295
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
  },
  {
    pokedex_number: 135,
    name: "Jolteon",
    type: ["Electric"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Eevee"
    },
    abilities: ["Volt Absorb"],
    base_stats: {
      hp: 65,
      attack: 65,
      defense: 60,
      special_attack: 110,
      special_defense: 95,
      speed: 130
    },
    max_stats: {
      hp: 334,
      attack: 295,
      defense: 276,
      special_attack: 438,
      special_defense: 394,
      speed: 492
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
  },
  {
    pokedex_number: 136,
    name: "Flareon",
    type: ["Fire"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Eevee"
    },
    abilities: ["Flash Fire"],
    base_stats: {
      hp: 65,
      attack: 130,
      defense: 60,
      special_attack: 95,
      special_defense: 110,
      speed: 65
    },
    max_stats: {
      hp: 334,
      attack: 492,
      defense: 276,
      special_attack: 394,
      special_defense: 438,
      speed: 295
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
  },
  {
    pokedex_number: 137,
    name: "Porygon",
    type: ["Normal"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Porygon2"
    },
    abilities: ["Trace", "Download"],
    base_stats: {
      hp: 65,
      attack: 60,
      defense: 70,
      special_attack: 85,
      special_defense: 75,
      speed: 40
    },
    max_stats: {
      hp: 334,
      attack: 276,
      defense: 316,
      special_attack: 370,
      special_defense: 329,
      speed: 218
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
  },
  {
    pokedex_number: 138,
    name: "Omanyte",
    type: ["Rock", "Water"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Omastar",
      evolution_level: 40
    },
    abilities: ["Swift Swim", "Shell Armor"],
    base_stats: {
      hp: 35,
      attack: 40,
      defense: 100,
      special_attack: 90,
      special_defense: 55,
      speed: 35
    },
    max_stats: {
      hp: 278,
      attack: 218,
      defense: 404,
      special_attack: 382,
      special_defense: 262,
      speed: 196
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
  },
  {
    pokedex_number: 139,
    name: "Omastar",
    type: ["Rock", "Water"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Omanyte"
    },
    abilities: ["Swift Swim", "Shell Armor"],
    base_stats: {
      hp: 70,
      attack: 60,
      defense: 125,
      special_attack: 115,
      special_defense: 70,
      speed: 55
    },
    max_stats: {
      hp: 344,
      attack: 276,
      defense: 476,
      special_attack: 444,
      special_defense: 316,
      speed: 262
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
  },
  {
    pokedex_number: 140,
    name: "Kabuto",
    type: ["Rock", "Water"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Kabutops",
      evolution_level: 40
    },
    abilities: ["Swift Swim", "Battle Armor"],
    base_stats: {
      hp: 30,
      attack: 80,
      defense: 90,
      special_attack: 55,
      special_defense: 45,
      speed: 55
    },
    max_stats: {
      hp: 274,
      attack: 348,
      defense: 382,
      special_attack: 262,
      special_defense: 247,
      speed: 262
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
  },
  {
    pokedex_number: 141,
    name: "Kabutops",
    type: ["Rock", "Water"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Kabuto"
    },
    abilities: ["Swift Swim", "Battle Armor"],
    base_stats: {
      hp: 60,
      attack: 115,
      defense: 105,
      special_attack: 65,
      special_defense: 70,
      speed: 80
    },
    max_stats: {
      hp: 324,
      attack: 444,
      defense: 420,
      special_attack: 295,
      special_defense: 316,
      speed: 348
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
  },
  {
    pokedex_number: 142,
    name: "Aerodactyl",
    type: ["Rock", "Flying"],
    evolution_stages: {
      stage: 1
    },
    abilities: ["Rock Head", "Pressure"],
    base_stats: {
      hp: 80,
      attack: 105,
      defense: 65,
      special_attack: 60,
      special_defense: 75,
      speed: 130
    },
    max_stats: {
      hp: 364,
      attack: 420,
      defense: 295,
      special_attack: 276,
      special_defense: 329,
      speed: 492
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
  },
  {
    pokedex_number: 143,
    name: "Snorlax",
    type: ["Normal"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Munchlax"
    },
    abilities: ["Immunity", "Thick Fat"],
    base_stats: {
      hp: 160,
      attack: 110,
      defense: 65,
      special_attack: 65,
      special_defense: 110,
      speed: 30
    },
    max_stats: {
      hp: 524,
      attack: 438,
      defense: 295,
      special_attack: 295,
      special_defense: 438,
      speed: 174
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
  },
  {
    pokedex_number: 144,
    name: "Articuno",
    type: ["Ice", "Flying"],
    evolution_stages: {
      stage: 1
    },
    abilities: ["Pressure"],
    base_stats: {
      hp: 90,
      attack: 85,
      defense: 100,
      special_attack: 95,
      special_defense: 125,
      speed: 85
    },
    max_stats: {
      hp: 384,
      attack: 370,
      defense: 404,
      special_attack: 394,
      special_defense: 476,
      speed: 370
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
  },
  {
    pokedex_number: 145,
    name: "Zapdos",
    type: ["Electric", "Flying"],
    evolution_stages: {
      stage: 1
    },
    abilities: ["Pressure"],
    base_stats: {
      hp: 90,
      attack: 90,
      defense: 85,
      special_attack: 125,
      special_defense: 90,
      speed: 100
    },
    max_stats: {
      hp: 384,
      attack: 382,
      defense: 370,
      special_attack: 476,
      special_defense: 382,
      speed: 404
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
  },
  {
    pokedex_number: 146,
    name: "Moltres",
    type: ["Fire", "Flying"],
    evolution_stages: {
      stage: 1
    },
    abilities: ["Pressure"],
    base_stats: {
      hp: 90,
      attack: 100,
      defense: 90,
      special_attack: 125,
      special_defense: 85,
      speed: 90
    },
    max_stats: {
      hp: 384,
      attack: 404,
      defense: 382,
      special_attack: 476,
      special_defense: 370,
      speed: 382
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
  },
  {
    pokedex_number: 147,
    name: "Dratini",
    type: ["Dragon"],
    evolution_stages: {
      stage: 1,
      evolves_to: "Dragonair",
      evolution_level: 30
    },
    abilities: ["Shed Skin"],
    base_stats: {
      hp: 41,
      attack: 64,
      defense: 45,
      special_attack: 50,
      special_defense: 50,
      speed: 50
    },
    max_stats: {
      hp: 286,
      attack: 288,
      defense: 247,
      special_attack: 254,
      special_defense: 254,
      speed: 254
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
  },
  {
    pokedex_number: 148,
    name: "Dragonair",
    type: ["Dragon"],
    evolution_stages: {
      stage: 2,
      evolves_from: "Dratini",
      evolves_to: "Dragonite",
      evolution_level: 55
    },
    abilities: ["Shed Skin"],
    base_stats: {
      hp: 61,
      attack: 84,
      defense: 65,
      special_attack: 70,
      special_defense: 70,
      speed: 70
    },
    max_stats: {
      hp: 326,
      attack: 366,
      defense: 295,
      special_attack: 316,
      special_defense: 316,
      speed: 316
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
  },
  {
    pokedex_number: 149,
    name: "Dragonite",
    type: ["Dragon", "Flying"],
    evolution_stages: {
      stage: 3,
      evolves_from: "Dragonair"
    },
    abilities: ["Inner Focus"],
    base_stats: {
      hp: 91,
      attack: 134,
      defense: 95,
      special_attack: 100,
      special_defense: 100,
      speed: 80
    },
    max_stats: {
      hp: 386,
      attack: 502,
      defense: 394,
      special_attack: 404,
      special_defense: 404,
      speed: 348
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
  },
  {
    pokedex_number: 150,
    name: "Mewtwo",
    type: ["Psychic"],
    evolution_stages: {
      stage: 1
    },
    abilities: ["Pressure"],
    base_stats: {
      hp: 106,
      attack: 110,
      defense: 90,
      special_attack: 154,
      special_defense: 90,
      speed: 130
    },
    max_stats: {
      hp: 416,
      attack: 438,
      defense: 382,
      special_attack: 568,
      special_defense: 382,
      speed: 492
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
  },
  {
    pokedex_number: 151,
    name: "Mew",
    type: ["Psychic"],
    evolution_stages: {
      stage: 1
    },
    abilities: ["Synchronize"],
    base_stats: {
      hp: 100,
      attack: 100,
      defense: 100,
      special_attack: 100,
      special_defense: 100,
      speed: 100
    },
    max_stats: {
      hp: 404,
      attack: 404,
      defense: 404,
      special_attack: 404,
      special_defense: 404,
      speed: 404
    },
    image_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
  }
];

module.exports = gen1PokemonData;
