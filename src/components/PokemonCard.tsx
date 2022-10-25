// Material UI components
import Paper from '@mui/material/Paper'

// Components
import PokemonImage from './PokemonImage'

// CSS
import './PokemonCard.scss'

// Global variables and interfaces
import { Pokemon } from '../typescript/globals'

// Props
interface Props {
  pokemon: Pokemon
}

const PokemonCard = (props: Props): JSX.Element => {
  const { pokemon } = props
  return (
    <div className="PokemonCard">
      <Paper
        elevation={5}
        sx={{
          height: '100px',
          width: '190px',
          border: '1px solid gray',
          margin: '5px',
          padding: '10px',
        }}
      >
        <div className="PokemonCard__section">
          <div className="PokemonCard__info">
            <PokemonImage pokemon={pokemon} height={'60px'} width={'60px'} />
            <div className="PokemonCard__details">
              <p>{pokemon.name}</p>
              <p>height: {pokemon.height}</p>
              <p>weight: {pokemon.weight}</p>
            </div>
          </div>
          <div className="PokemonCard__types">
            {pokemon.types.map((name) => name.type.name)}
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default PokemonCard
