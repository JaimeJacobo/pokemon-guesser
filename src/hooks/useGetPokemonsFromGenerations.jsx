import { useState, useEffect } from 'react'

export const useGetPokemonsFromGenerations = (pokemons, selectedGenerations) => {
  const [filteredPokemons, setFilteredPokemons] = useState([])

  const getPokemonsFromSelectedGenerations = (includedGenerations) => {
    const filteredPokemons = pokemons.filter((pokemon) => {
      return includedGenerations.includes(pokemon.generation)
    })

    setFilteredPokemons(filteredPokemons)
  }

  useEffect(() => {
    const includedGenerations = selectedGenerations
      .map((selectedGeneration, index) => selectedGeneration && index + 1)
      .filter((generation) => generation)

    getPokemonsFromSelectedGenerations(includedGenerations)
  }, [selectedGenerations, pokemons])

  return filteredPokemons
}
