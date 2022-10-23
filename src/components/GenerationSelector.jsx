// Material UI components
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

const GenerationSelector = (props) => {
  const { selectedGenerations, setSelectedGenerations } = props

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
      <div className="App__generation-selector">
        {selectedGenerations.map((element, index) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={selectedGenerations[index]}
                  onChange={(event) => handleChangeGenerations(event, index)}
                />
              }
              label={index + 1}
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
            />
          }
          label="Select All"
        />

        {renderGenerationSelector()}
      </FormGroup>
    </div>
  )
}

export default GenerationSelector
