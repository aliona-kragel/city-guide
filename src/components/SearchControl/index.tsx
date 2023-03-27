import { Search } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ButttonSearch from 'components/base/Button';
import { FlexContainer } from 'components/styled/FlexContainer';
import useCitiesActions from 'hooks/useCitiesActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useState } from 'react';
import { getLocations } from 'services/getLocations';
import "./index.scss";


const SearchControl = () => {
  const { locationsList } = useTypedSelector(state => state.cities);
  const { setLocationsList } = useCitiesActions();
  const [inputValue, setValue] = useState<string>('');

  console.log("locationsList", locationsList);

  const handleClick = () => {
    getLocations(inputValue)
      .then((res: any) => setLocationsList(res));
  }

  return (
    <FlexContainer className='search-control__container' gap='10px'>
      <TextField
        onChange={(event) => setValue(event.target.value)}
        value={inputValue}
        className='search-control__textfield'
        placeholder='Search city, state or area'
        id="outlined-start-adornment"
        InputProps={{
          startAdornment: <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }}
      />
      <ButttonSearch onClick={handleClick}>Search</ButttonSearch>
    </FlexContainer>
  );
}

export default SearchControl;