import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux"
import citiesSlice from "store/slices/cities/citiesSlice";

const useCitiesActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(citiesSlice.actions, dispatch),
    [dispatch]
  )
}

export default useCitiesActions;