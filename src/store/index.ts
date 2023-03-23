import { configureStore } from "@reduxjs/toolkit";
import mapSlice from "./slices/map/mapSlice";


const store = configureStore({
  reducer: {
    map: mapSlice.reducer
  }
})

export default store;

export type TypeRootState = ReturnType<typeof store.getState>