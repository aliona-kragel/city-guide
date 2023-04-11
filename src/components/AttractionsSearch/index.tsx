import { Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import "./index.scss";

interface IAttractionsSearch {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AttractionsSearch: FC<PropsWithChildren<IAttractionsSearch>> = ({ onChange }) => {
  return (
    <TextField
      sx={{
        "& .MuiOutlinedInput-root.Mui-focused": {
          "& > fieldset": {
            borderColor: "#B4CD93"
          }
        }
      }}
      onChange={onChange}
      className='attractions__textfield'
      id="outlined-start-adornment"
      autoComplete='off'
      size="small"
      InputProps={{
        startAdornment: <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }}
    />
  )
}

export default AttractionsSearch;