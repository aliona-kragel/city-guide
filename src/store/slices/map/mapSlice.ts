import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LatLngTuple } from "leaflet";
import { LocationTypes } from "types/locationTypes";
import { IMap } from "./mapTypes";

const initialState: IMap = {
  selectedLocation: null,
  markerPosition: [53.904541, 27.561523]
}

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<LocationTypes>) => {
      state.selectedLocation = action.payload;
      state.markerPosition = [action.payload.y, action.payload.x];
    },
    setMarker: (state, action: PayloadAction<LatLngTuple>) => {
      state.markerPosition = action.payload
    }
  }
})

export default mapSlice