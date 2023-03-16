import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { getLocations } from 'services';
import { Locations } from 'types';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./index.scss"

const AutocompleteTextfield = () => {
  const [value, setValue] = useState<Locations | null>();
  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<Locations[]>([]);

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: Locations | null): void => {
    setValue(newValue);
  }
  const handleInputChange = (event: React.SyntheticEvent<EventTarget>, newInputValue: string): void => {
    setInputValue(newInputValue);
  }

  useEffect(
    () => {
      if (!inputValue) {
        options?.length && setOptions([]);
        return;
      }
      getLocations(inputValue)
        .then((res: any) => setOptions(res?.length ? res : []))
    }, [inputValue])

  return (
    <Autocomplete<Locations | null >
      className='search__container'
      id="autocomplete"
      value={value || null}
      options={options}
      onChange={handleChange}
      onInputChange={handleInputChange}
      sx={{
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: '2px solid gray',
        },
      }}
      filterOptions={(x) => x}
      autoComplete
      includeInputInList
      filterSelectedOptions
      noOptionsText="No locations"
      isOptionEqualToValue={(option, value) => option?.raw?.place_id === value?.raw?.place_id}
      renderInput={(params) => (
        <TextField {...params} label="Search cities" fullWidth />
      )}
      renderOption={(props, option: Locations | null) => (
        <li {...props} key={option?.raw.place_id} >
          <LocationOnIcon sx={{ color: 'text.secondary' }} />
          {option?.raw.display_name}</li>
      )}
    />
  )
}

export default AutocompleteTextfield;