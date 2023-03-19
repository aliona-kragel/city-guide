import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMap, Location } from "./mapTypes";

const initialState: IMap = {
  selectedLocation: null
}

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<Location>) => {
      state.selectedLocation = action.payload
    }
  }
})

export default mapSlice