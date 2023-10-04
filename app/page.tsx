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
    <div className="bg-[#1694E0]">
        <h1 className="text-4xl text-center pt-10 font-sans font-semibold text-[#FFFC75]">Pokedex</h1>
      <div className="mx-auto container">
        <div className="flex flex-wrap mt-10 justify-center">
          {pokemons?.map((pokemon: any, index) => (
            <div key={index}>
              <PokeCards className="flex" pokemon={pokemon.data} pokeimage={pokemon.data.sprites.front_default}></PokeCards>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home
