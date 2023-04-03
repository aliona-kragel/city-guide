import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useEffect, useState } from 'react';
import { getLocations } from 'services/getLocations';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./index.scss"
import { useTypedSelector } from 'hooks/useTypedSelector';
import useMapActions from 'hooks/useMapActions';
import { LocationTypes } from 'types/locationTypes';

const AutocompleteTextfield = () => {
  const { selectedLocation } = useTypedSelector(state => state.map);
  const { setLocation } = useMapActions();

  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<LocationTypes[]>([]);

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: LocationTypes | null): void => {
    if (newValue) {
      setLocation(newValue);
    }
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
        .then((res: any) => {
          let options: LocationTypes[] = res;
          setOptions((options?.length) ? (options.filter((options) => options?.raw.osm_type === "relation")) : [])
        })
    }, [inputValue, options?.length])

  return (
    <Autocomplete<LocationTypes>
      className='autocomplete__container'
      id="autocomplete"
      value={selectedLocation || null}
      options={options}
      onChange={handleChange}
      onInputChange={handleInputChange}
      // sx={{
      //   '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      //     border: '2px solid gray',
      //   },
      // }}
      // loading
      // loadingText="Loading..."
      filterOptions={(x) => x}
      autoComplete
      includeInputInList
      filterSelectedOptions
      noOptionsText="No locations"
      isOptionEqualToValue={(option, value) => option?.raw?.osm_id === value?.raw?.osm_id}
      renderInput={(params) => (
        <TextField {...params} label="Search cities" fullWidth />
      )}
      renderOption={(props, option: LocationTypes) => (
        <li {...props} key={option?.raw.place_id} >
          <LocationOnIcon sx={{ color: 'text.secondary' }} />
          {option?.raw.display_name}</li>
      )}
    />
  )
}

export default AutocompleteTextfield;