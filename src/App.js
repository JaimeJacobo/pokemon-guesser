// React
import * as React from 'react'

// CSS
import './App.scss'

// Hooks
import { useGetFormattedPokemon } from './hooks/useGetFormattedPokemon'

// Components
import PokemonImage from './components/PokemonImage.jsx'
import GenerationSelector from './components/GenerationSelector.jsx'

// Material UI components
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

// Material UI icons
import SendIcon from '@mui/icons-material/Send'

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
        <div className="App__pokemon-selector">
          <Autocomplete
            sx={{ width: 300 }}
            options={pokemons}
            autoHighlight
            getOptionLabel={(pokemon) => pokemon.name}
            onChange={(event) => setSelectedPokemon(event.target.innerText)}
            renderOption={(props, pokemon) => (
              <Box
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <PokemonImage pokemon={pokemon} />
                {pokemon.name}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a pokemon"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
          <Button variant="contained" endIcon={<SendIcon />}>
            Send
          </Button>
        </div>
        <p>{pokemons.length} pokemons loaded</p>
      </Container>
    </div>
  )
}

export default App
