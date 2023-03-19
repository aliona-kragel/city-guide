import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LatLngTuple } from "leaflet";
import { IMap, Location } from "./mapTypes";

const initialState: IMap = {
  selectedLocation: null,
  markerPosition: [53.904541, 27.561523]
}

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<Location>) => {
      state.selectedLocation = action.payload
    },
    setMarker: (state, action: PayloadAction<LatLngTuple>) => {
      state.markerPosition = action.payload
    }
  }
})

export default mapSlice