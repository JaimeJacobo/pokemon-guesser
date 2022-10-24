// React
import React from 'react'

// Material UI components
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

// Material UI icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow'

const PlayButton = (props) => {
  const { setGameStarted, loadedPokemons } = props
  return (
    <div className="PlayButton">
      <Button
        size="large"
        variant="contained"
        color="success"
        startIcon={<PlayArrowIcon />}
        onClick={() => setGameStarted(true)}
        disabled={!loadedPokemons}
      >
        Play
      </Button>
      {!loadedPokemons && <CircularProgress />}
    </div>
  )
}

export default PlayButton
