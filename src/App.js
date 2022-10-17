import * as React from 'react'
import './App.css'

import { useGetFormattedPokemon } from './hooks/useGetFormattedPokemon'

import Countries from './components/Countries.tsx'
import PokemonImage from './components/PokemonImage.jsx'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

function App() {

  const pokemons = useGetFormattedPokemon()



  return (
    <div className="App">
      <Countries />
      <Autocomplete
        id="country-select-demo"
        sx={{ width: 300 }}
        options={pokemons}
        autoHighlight
        getOptionLabel={(pokemon) => pokemon.name}
        renderOption={(props, pokemon) => (
          <Box
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <PokemonImage pokemon={pokemon}/>
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
    </div>
  )
}

export default App

// url para imágenes: https://raw.githubusercontent.com/anchetaWern/pokeapi-json/master/data/v1/media/img/1.png

// url de loading pokemon: https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif
