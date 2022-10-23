// React
import * as React from 'react'

// CSS
import './App.scss'

// Hooks
import { useGetFormattedPokemon } from './hooks/useGetFormattedPokemon'

// Components
import GenerationSelector from './components/GenerationSelector.jsx'
import PokemonSelector from './components/PokemonSelector.jsx'

// Material UI components
import Container from '@mui/material/Container'

const App = () => {
  const pokemons = useGetFormattedPokemon()

  const [selectedPokemon, setSelectedPokemon] = React.useState('')
  const [selectedGenerations, setSelectedGenerations] = React.useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  return (
    <div className="App">
      <Container>
        <GenerationSelector
          selectedGenerations={selectedGenerations}
          setSelectedGenerations={setSelectedGenerations}
        />
        <PokemonSelector
          pokemons={pokemons}
          setSelectedPokemon={setSelectedPokemon}
        />
        <p>{pokemons.length} pokemons loaded</p>
      </Container>
    </div>
  )
}

export default App
