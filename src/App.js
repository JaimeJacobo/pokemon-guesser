// React
import React, { useState, useEffect } from 'react'

// CSS
import './App.scss'

// Hooks
import { useGetFormattedPokemon } from './hooks/useGetFormattedPokemon'

// Components
import GenerationsSelector from './components/GenerationsSelector'
import PokemonSelector from './components/PokemonSelector.jsx'
import PlayButton from './components/PlayButton.jsx'

// Material UI components
import Container from '@mui/material/Container'

const App = () => {
  const pokemons = useGetFormattedPokemon()

  const [filteredPokemons, setFilteredPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState('')
  const [selectedGenerations, setSelectedGenerations] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  const [gameStarted, setGameStarted] = useState(false)

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

  return (
    <div className="App">
      <Container>
        <GenerationsSelector
          selectedGenerations={selectedGenerations}
          setSelectedGenerations={setSelectedGenerations}
          gameStarted={gameStarted}
        />
        {gameStarted ? (
          <PokemonSelector
            pokemons={filteredPokemons}
            setSelectedPokemon={setSelectedPokemon}
          />
        ) : (
          <PlayButton
            setGameStarted={setGameStarted}
            loadedPokemons={pokemons.length}
          />
        )}

        <p>{filteredPokemons.length} pokemons selected</p>
      </Container>
    </div>
  )
}

export default App
