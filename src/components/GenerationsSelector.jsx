// React
import React from 'react'

// Material UI components
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

// Global variables
import { generations } from '../utils/global-variables'

const GenerationsSelector = (props) => {
  const { selectedGenerations, setSelectedGenerations, gameStarted } = props

  const handleSelectAllGenerations = (event) => {
    setSelectedGenerations(
      selectedGenerations.map((element) => event.target.checked)
    )
  }

  const handleChangeGenerations = (event, index) => {
    const selectedGenerationsCopy = [...selectedGenerations]
    selectedGenerationsCopy[index] = event.target.checked
    setSelectedGenerations(selectedGenerationsCopy)
  }

  const renderGenerationSelector = () => {
    return (
      <div className="GenerationSelector">
        {generations.map((generation, index) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedGenerations[index]}
                  onChange={(event) => handleChangeGenerations(event, index)}
                  disabled={gameStarted}
                />
              }
              label={generation}
              labelPlacement="start"
              key={index}
            />
          )
        })}
      </div>
    )
  }

  return (
    <div className="GenerationSelector">
      <FormGroup>
        <p>GENERATIONS</p>
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              checked={selectedGenerations.every((element) => element)}
              onChange={(event) => handleSelectAllGenerations(event)}
              disabled={gameStarted}
            />
          }
          label="Select All"
        />

        {renderGenerationSelector()}
      </FormGroup>
    </div>
  )
}

export default GenerationsSelector
