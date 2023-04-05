import { Search } from '@mui/icons-material';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import ButtonWrapper from 'components/base/ButtonWrapper';
import { FlexContainer } from 'components/styled/FlexContainer';
import useCitiesActions from 'hooks/useCitiesActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { KeyboardEvent } from 'react';
import { getLocations } from 'services/getLocations';
import "./index.scss";


const SearchControl = () => {
  const { setLocationsList, setInputValue, setResponseReceived } = useCitiesActions();
  const { inputValue } = useTypedSelector(state => state.cities);

  const getLocationsList = () => {
    getLocations(inputValue)
      .then((res: any) => {
        setLocationsList(res)
        setResponseReceived(true);
      });
  }

  const handleEnterDown = (e: KeyboardEvent<HTMLImageElement>) => {
    if (e.key === "Enter") {
      getLocationsList()
    }
  }

  return (
    <FlexContainer className='search-control__container' gap='10px'>
      <TextField
        sx={{
          "& .MuiOutlinedInput-root.Mui-focused": {
            "& > fieldset": {
              borderColor: "#B4CD93"
            }
          }
        }}
        onChange={(event) => setInputValue(event.target.value)}
        value={inputValue}
        className='search-control__textfield'
        placeholder='Search city, state or area'
        id="outlined-start-adornment"
        onKeyDown={handleEnterDown}
        autoComplete='off'
        InputProps={{
          startAdornment: <InputAdornment position="start">
            <FmdGoodIcon />
          </InputAdornment>
        }}
      />
      <ButtonWrapper onClick={getLocationsList} > <Search fontSize='large' /></ButtonWrapper>
    </FlexContainer>
  );
}

export default SearchControl;