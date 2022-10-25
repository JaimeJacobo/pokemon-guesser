import * as React from 'react'

// Components
import PokemonCard from './PokemonCard'

// Material UI components
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ListItemText from '@mui/material/ListItemText'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Checkbox from '@mui/material/Checkbox'

// Hooks
import { useGetPokemonsFromGenerations } from '../hooks/useGetPokemonsFromGenerations'

// Global interfaces and variables
import { Pokemon } from '../typescript/globals'
import { generations } from '../utils/global-variables'
import { flexbox } from '@mui/system'

// Props
interface Props {
  pokemons: Pokemon[]
}

const MoreInfoGenerationsButton = (props: Props): JSX.Element => {
  const { pokemons } = props
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [selectedGenerations, setSelectedGenerations] = React.useState<
    string[]
  >([])

  const ITEM_HEIGHT = 48
  const ITEM_PADDING_TOP = 8
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (
    event: SelectChangeEvent<typeof selectedGenerations>
  ) => {
    const {
      target: { value },
    } = event
    setSelectedGenerations(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }
  return (
    <div className="MoreInfoGenerationsButton">
      <Button variant="contained" onClick={handleClickOpen}>
        More Info on Generations
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth={'lg'}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        scroll="paper"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <InputLabel id="demo-multiple-checkbox-label">
            Filter Generations
          </InputLabel>
          <FormControl sx={{ m: 1, width: 300 }}>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={selectedGenerations}
              onChange={handleChange}
              input={<OutlinedInput label="Filter Generations" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {generations.map((generation) => (
                <MenuItem key={generation} value={generation}>
                  <Checkbox
                    checked={selectedGenerations.indexOf(generation) > -1}
                  />
                  <ListItemText primary={generation} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogActions>
        <DialogContent
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            border: '1px solid gray',
          }}
        >
          {pokemons.map((pokemon) => {
            return <PokemonCard pokemon={pokemon} />
          })}
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default MoreInfoGenerationsButton
