import axios from "axios";
import { useEffect, useState } from "react";

//descobrir porque não está funcionando e alterar o img para Image do next, fazer commit no meu git
const PokeCards = (pokemon:any, pokeimage:any) => {
    return (
        <div className="p-5">
            <div className="w-52 pt-10 pr-10 pl-10 rounded-lg bg-[#E02D30]">
                <div className="justify-center flex bg-[#F3F9FF] rounded-lg">
                    <img src={pokemon.pokemon.sprites.front_default} alt="" />
                </div>
                <div className="pb-5">
                    <h1>{pokemon.pokemon.name}</h1>
                </div>
            </div>
        </div>
    )
}

export default PokeCards;