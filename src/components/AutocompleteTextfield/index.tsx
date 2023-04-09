import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { getLocations } from 'services/getLocations';
import { useTypedSelector } from 'hooks/useTypedSelector';
import useMapActions from 'hooks/useMapActions';
import { LocationTypes } from 'types/locationTypes';
import { useTranslation } from 'react-i18next';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "./index.scss"

interface IAutocomplete {
  mapRef?: any
}

const AutocompleteTextfield: FC<PropsWithChildren<IAutocomplete>> = ({ mapRef }) => {
  const { selectedLocation } = useTypedSelector(state => state.map);
  const { setLocation } = useMapActions();
  const [inputValue, setInputValue] = useState<string>("");
  const [options, setOptions] = useState<LocationTypes[]>([]);
  const { t } = useTranslation()

  const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: LocationTypes | null): void => {
    if (newValue) {
      setLocation(newValue);
      mapRef.current.flyTo([newValue.y, newValue.x], 11, {
        duration: 3
      });
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
      sx={{
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "#B4CD93"
          }
        }
      }}
      className='autocomplete__container'
      id="autocomplete"
      value={selectedLocation || null}
      options={options}
      onChange={handleChange}
      onInputChange={handleInputChange}
      filterOptions={(x) => x}
      autoComplete
      includeInputInList
      filterSelectedOptions
      noOptionsText={t("noLocations")}
      isOptionEqualToValue={(option, value) => option?.raw?.osm_id === value?.raw?.osm_id}
      renderInput={(params) => (
        <TextField {...params} label={t("labelderAutocomplete")} fullWidth />
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