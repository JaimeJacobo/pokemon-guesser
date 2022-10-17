import React, { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
import { useGetFormattedPokemon } from './hooks/useGetFormattedPokemon'
// import { useGetFormatedPokemon } from './hooks/useGetFormatedPokemon'

function App() {
  const pokemons = useGetFormattedPokemon()
  console.log(pokemons)
  return (
    <div className="App">
      {pokemons.slice(0, 10).map((pokemon) => {
        return <img alt="x" src={pokemon.imageUrl}></img>
      })}
    </div>
  )
}

export default App

// url para imágenes: https://raw.githubusercontent.com/anchetaWern/pokeapi-json/master/data/v1/media/img/1.png

// url de loading pokemon: https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif
