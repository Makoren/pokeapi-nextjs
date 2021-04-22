import { useState } from 'react';
//import styles from '../styles/Home.module.css'

export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [pokemonData, setPokemonData] = useState({});

  function search() {
    const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(baseUrl + searchText.toLowerCase())
      .then(res => res.json())
      .then(data => setPokemonData(data));
  }

  function getPokemonType1() {
    if (pokemonData?.types !== undefined) {
      return pokemonData.types[0].type.name;
    }
    return undefined;
  }

  function getPokemonType2() {
    if (pokemonData?.types !== undefined && pokemonData.types[1] !== undefined) {
      return pokemonData.types[1].type.name;
    }
    return undefined;
  }

  return (
    <div>
      <div>
        <input type="text" onInput={e => setSearchText(e.target.value)}></input>
        <button onClick={search}>Search</button>
      </div>
      <div>
        <img src={pokemonData?.sprites?.front_default ?? "/Warrior_Attack_1.png"} width="200" height="200" />
        <span>{getPokemonType1() ?? ""}</span>
        <span>{getPokemonType2() ?? ""}</span>
        {/*
        - Pokemon image
        - The types of the pokemon
        - Abilities
        - Stats (maybe in a bar graph like Smogon)
         */}
      </div>
    </div>
  )
}
