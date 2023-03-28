import { Search } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ButtonWrapper from 'components/base/ButtonWrapper';
import { FlexContainer } from 'components/styled/FlexContainer';
import useCitiesActions from 'hooks/useCitiesActions';
import { useState } from 'react';
import { getLocations } from 'services/getLocations';
import "./index.scss";


const SearchControl = () => {
  const { setLocationsList } = useCitiesActions();
  const [inputValue, setValue] = useState<string>('');
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
      <ButtonWrapper onClick={handleClick}>Search</ButtonWrapper>
    </FlexContainer>
  );
}

export default SearchControl;