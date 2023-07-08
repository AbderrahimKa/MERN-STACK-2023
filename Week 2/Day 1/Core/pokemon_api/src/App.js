import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  const fetchPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
      const { results } = response.data;
      const pokemonNames = results.map(pokemon => pokemon.name);
      setPokemonList(pokemonNames);
    } catch (error) {
      console.error('Error fetching Pokemon:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchPokemon}>Fetch Pokemon</button>
      {pokemonList.map((pokemon, index) => (
        <p key={index}>{pokemon}</p>
      ))}
    </div>
  );
}

export default App;
