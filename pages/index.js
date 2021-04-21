import Image from 'next/image';
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

  return (
    <div>
      <div>
        <input type="text" onInput={e => setSearchText(e.target.value)}></input>
        <button onClick={search}>Search</button>
      </div>
      <div>
        <Image src={pokemonData?.sprites?.front_default ?? "/Warrior_Attack_1.png"} width={200} height={200} />
        <span>{pokemonData?.types[0]?.type?.name ?? ""}</span>
        <span>{pokemonData?.types[1]?.type?.name ?? ""}</span>
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
