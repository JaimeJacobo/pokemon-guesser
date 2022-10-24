import { useState, useEffect } from 'react'
import { Pokemon } from '../typescript/globals'

export const useGetPokemonsFromGenerations = (
  pokemons: Pokemon[],
  selectedGenerations: boolean[],
  gameStarted: boolean
) => {
  const [filteredPokemons, setFilteredPokemons] = useState<Pokemon[]>([])

  const getPokemonsFromSelectedGenerations = (
    includedGenerations: (number | false)[]
  ) => {
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
  }, [gameStarted])

  return filteredPokemons
}
