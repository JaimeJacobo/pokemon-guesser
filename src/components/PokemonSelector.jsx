// React
import React from 'react'

// Components
import PokemonImage from './PokemonImage.jsx'

// Material UI components
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'

// Material UI icons
import SendIcon from '@mui/icons-material/Send'

const PokemonSelector = (props) => {
  const { pokemons, setSelectedPokemon } = props
  return (
    <div className="PokemonSelector">
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
  )
}

export default PokemonSelector
