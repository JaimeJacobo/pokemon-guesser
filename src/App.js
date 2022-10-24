// React
import React, { useState, useEffect } from 'react'

// CSS
import './App.scss'

// Hooks
import { useGetFormattedPokemon } from './hooks/useGetFormattedPokemon'
import { useGetPokemonsFromGenerations } from './hooks/useGetPokemonsFromGenerations'

// Components
import GenerationsSelector from './components/GenerationsSelector'
import PokemonSelector from './components/PokemonSelector.jsx'
import PlayButton from './components/PlayButton.jsx'

// Material UI components
import Container from '@mui/material/Container'

const App = () => {
  const pokemons = useGetFormattedPokemon()

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

  const filteredPokemons = useGetPokemonsFromGenerations(
    pokemons,
    selectedGenerations,
    gameStarted
  )

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
      </Container>
    </div>
  )
}

export default App
