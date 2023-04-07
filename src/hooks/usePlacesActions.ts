import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux"
import placesSlice from "store/slices/places/placesSlice";

const usePlacesActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(placesSlice.actions, dispatch),
    [dispatch]
  )
}

export default usePlacesActions;