import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationTypes } from "types/locationTypes";
import { ICities } from "./citiesTypes";

const initialState: ICities = {
  locationsList: []
}

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setLocationsList: (state, action: PayloadAction<LocationTypes[]>) => {
      state.locationsList = action.payload;
    }
  }
})

export default citiesSlice;