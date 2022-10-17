import React, { useState } from 'react'

const PokemonImage = (props) => {
  const { pokemon } = props

  const [imageLoaded, setImageLoaded] = useState(false)

  const getImage = (url) => {
    return imageLoaded
      ? url
      : 'https://i.gifer.com/origin/28/2860d2d8c3a1e402e0fc8913cd92cd7a_w200.gif'
  }

  return (
    <img
      // loading="lazy"
      onLoad={() => setImageLoaded(true)}
      width="50"
      src={getImage(pokemon.imageUrl)}
      // srcSet={`https://flagcdn.com/w40/${pokemon.code.toLowerCase()}.png 2x`}
      alt={pokemon.name}
    />
  )
}

export default PokemonImage
