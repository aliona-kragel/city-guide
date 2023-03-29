import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationTypes } from "types/locationTypes";
import { ICities, IAttractionsListTypes, IAttractionDetailsTypes } from "./citiesTypes";

const initialState: ICities = {
  locationsList: [],
  attractionsList: [],
  attractionDetails: null
}

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setLocationsList: (state, action: PayloadAction<LocationTypes[]>) => {
      state.locationsList = action.payload.filter((location) => location?.raw.osm_type === "relation");
    },
    setAttractionsList: (state, action: PayloadAction<IAttractionsListTypes[]>) => {
      state.attractionsList = action.payload.filter((attraction) => attraction?.properties.wikidata && attraction?.properties.name);
    },
    setAttractionDetails: (state, action: PayloadAction<IAttractionDetailsTypes>) => {
      state.attractionDetails = action.payload;
    },
    clearCitieState: (state) => {
      state.attractionsList = [];
      state.attractionDetails = null
    }
  }
})

export default citiesSlice;