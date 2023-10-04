"use client"

import axios from "axios"
import { error } from "console"
import { useEffect } from "react"
import { useState } from "react"
import PokeCards from "./components/card"

const Home = () => {
  const [pokemons, setPokemons] = useState<any[]>([])

  useEffect(() => {
    var endpoints = [];
    for(var i = 1; i <= 151; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }
    var results = axios.all(endpoints.map(endpoints => axios.get(endpoints)))
    .then((res) => setPokemons(res))

  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center">Pokedex</h1>
      <div className="flex flex-wrap mt-10 justify-center">
        {pokemons?.map((pokemon: any, index) => (
          <div key={index}>
            <PokeCards className="flex" pokemon={pokemon.data} pokeimage={pokemon.data.sprites.front_default}></PokeCards>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home
