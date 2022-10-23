import * as React from 'react'
import './App.scss'

import { useGetFormattedPokemon } from './hooks/useGetFormattedPokemon'

import PokemonImage from './components/PokemonImage.jsx'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import SendIcon from '@mui/icons-material/Send'

const App = () => {
  const pokemons = useGetFormattedPokemon()

  const [selectedPokemon, setSelectedPokemon] = React.useState('')
  const [selectedGeneration, setSelectedGeneration] = React.useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  const handleSelectAllGenerations = (event) => {
    setSelectedGeneration(
      selectedGeneration.map((element) => event.target.checked)
    )
  }

  const handleChangeGeneration = (event, index) => {
    const selectedGenerationCopy = [...selectedGeneration]
    selectedGenerationCopy[index] = event.target.checked
    setSelectedGeneration(selectedGenerationCopy)
  }

  return (
    <div className="App">
      <Container>
        <FormGroup>
          <div>
            <p>GENERATIONS</p>
            <FormControlLabel
              control={
                <Checkbox
                  color="secondary"
                  checked={selectedGeneration.every((element) => element)}
                  onChange={(event) => handleSelectAllGenerations(event)}
                />
              }
              label="Select All"
            />
          </div>

          <div className="App__generation-selector">
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedGeneration[0]}
                  onChange={(event) => handleChangeGeneration(event, 0)}
                />
              }
              label="1"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedGeneration[1]}
                  onChange={(event) => handleChangeGeneration(event, 1)}
                />
              }
              label="2"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedGeneration[2]}
                  onChange={(event) => handleChangeGeneration(event, 2)}
                />
              }
              label="3"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedGeneration[3]}
                  onChange={(event) => handleChangeGeneration(event, 3)}
                />
              }
              label="4"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedGeneration[4]}
                  onChange={(event) => handleChangeGeneration(event, 4)}
                />
              }
              label="5"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedGeneration[5]}
                  onChange={(event) => handleChangeGeneration(event, 5)}
                />
              }
              label="6"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedGeneration[6]}
                  onChange={(event) => handleChangeGeneration(event, 6)}
                />
              }
              label="7"
            />
          </div>
        </FormGroup>
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
