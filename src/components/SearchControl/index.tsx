import { Search } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ButtonWrapper from 'components/base/ButtonWrapper';
import { FlexContainer } from 'components/styled/FlexContainer';
import useCitiesActions from 'hooks/useCitiesActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { KeyboardEvent, useState } from 'react';
import { getLocations } from 'services/getLocations';
import "./index.scss";


const SearchControl = () => {
  const { setLocationsList, setInputValue } = useCitiesActions();
  const { inputValue } = useTypedSelector(state => state.cities);

  const getLocationsList = () => {
    getLocations(inputValue)
      .then((res: any) => setLocationsList(res));
  }
  const handleEnterDown = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === "Enter") {
      getLocationsList()
    }
  }

  return (
    <FlexContainer className='search-control__container' gap='10px'>
      <TextField
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        className='search-control__textfield'
        placeholder='Search city, state or area'
        id="outlined-start-adornment"
        onKeyDown={handleEnterDown}
        InputProps={{
          startAdornment: <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }}
      />
      <ButtonWrapper onClick={getLocationsList} >Search</ButtonWrapper>
    </FlexContainer>
  );
}

export default SearchControl;