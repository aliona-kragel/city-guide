import { configureStore } from "@reduxjs/toolkit";
import placesSlice from "./slices/places/placesSlice";
import mapSlice from "./slices/map/mapSlice";


const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
    places: placesSlice.reducer
  }
})

export default store;

export type TypeRootState = ReturnType<typeof store.getState>