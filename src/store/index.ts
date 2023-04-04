import { configureStore } from "@reduxjs/toolkit";
import citiesSlice from "./slices/cities/citiesSlice";
import mapSlice from "./slices/map/mapSlice";


const store = configureStore({
  reducer: {
    map: mapSlice.reducer,
    cities: citiesSlice.reducer
  }
})

export default store;

export type TypeRootState = ReturnType<typeof store.getState>