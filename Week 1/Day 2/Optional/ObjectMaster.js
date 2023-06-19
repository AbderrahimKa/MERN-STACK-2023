const pokémon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
const array1 = pokémon.filter( p => p.id % 3 == 0)
const array2 = pokémon.filter( p => p.types[0] == ['fire'] || p.types[1] == ['fire']);
const array3 = pokémon.filter( p => p.types.length > 1)
const array4 = pokémon.map( p => p.name);
const array5 = pokémon.filter( p => p.id > 99).map( p => p.name);
const array6 = pokémon.filter( p => p.types[0] == ['poison'] && p.types.length == 1).map( p => p.name);
const array7 = pokémon.filter( p => p.types[1] == ['flying'] && p.types.length == 2).map( p => p.types[0]);
const array8 = pokémon.filter( p => p.types[0] == ['normal'] && p.types.length == 1).length

// console.log(bListPkmn);
// console.log(array1);
// console.log(array2);
// console.log(array3);
// console.log(array4);
// console.log(array5);
// console.log(array6);
// console.log(array7);
// console.log(array8);

